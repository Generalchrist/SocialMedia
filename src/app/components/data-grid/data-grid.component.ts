import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SocialMedia } from 'src/app/models/socialMedia';
import { SocialMediaService } from 'src/app/services/business/social-media.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  allowedPageSizes = [4, 10, 50];
  socailMedias: SocialMedia[] = [];
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;
  filterData: any;
  searchData: any;
  filterPopupVisible = false;
  addNewPopupVisible = false;
  searchText: string = "Search objects..."
  screenWidth: any;
  addText: string = "Yeni Hesap Ekle"

  socialMediaForm = this.formBuilder.group({
    socialMediaLink: [''],
    socialMediaName: [''],
    socialMediaDescription: ['']
  });

  constructor(
    private socialMediaService: SocialMediaService,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.showPageSizeSelector = false;
      this.searchText = ""
      this.addText = ""
    }
    this.socailMedias = this.socialMediaService.getSocialMedia();
    this.socialMediaService.generateSocialMediaData();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  customizeColumns(columns: any) {
    columns[0].visible = false;
  }

  onSubmit() {
    this.socialMediaService.postSocialMedia(this.socialMediaForm.value as SocialMedia);
    this.socailMedias = this.socialMediaService.getSocialMedia();
  }


  // dialog methods

  openFilterDialog() {
    this.filterPopupVisible = true;
  }

  openAddNewDialog() {
    this.addNewPopupVisible = true;
  }

  closeAddNewDialog() {
    this.addNewPopupVisible = false;
  }

}