import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SocialMedia } from 'src/app/models/socialMedia';
import { SocialMediaService } from 'src/app/services/business/social-media.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  allowedPageSizes = [5, 10, 50];
  socailMedias: SocialMedia[];
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;
  filterData: any;
  searchData: any;
  filterPopupVisible = false;
  addNewPopupVisible = false;

  constructor(
    private socialMediaService: SocialMediaService,
    private formBuilder: FormBuilder
  ) {
    this.socailMedias = this.socialMediaService.getSocialMedia();
  }

  socialMediaForm = this.formBuilder.group({
    socialMediaLink: [''],
    socialMediaName: [''],
    socialMediaDescription: ['']
  });

  ngOnInit(): void {
    this.socialMediaService.generateSocialMediaData();
  }

  customizeColumns(columns: any) {
    columns[0].visible = false;
  }

  onSubmit() {
    console.log(this.socialMediaForm.value);
    this.socialMediaService.postSocialMedia(this.socialMediaForm.value as SocialMedia);
  }


  // dialog methods

  openFilterDialog() {
    this.filterPopupVisible = true;
  }

  openAddNewDialog() {
    this.addNewPopupVisible = true;
  }

}