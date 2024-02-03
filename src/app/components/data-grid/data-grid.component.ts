import { Component, OnInit } from '@angular/core';
import { PagerDisplayMode } from 'devextreme/common/grids';
import { SocialMedia } from 'src/app/models/socialMedia';
import { SocialMediaService } from 'src/app/services/business/social-media.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  allowedPageSizes = [5, 10, 20];
  readonly displayModes: PagerDisplayMode = 'compact';
  socailMedias: SocialMedia[] = [];
  displayMode = 'full';
  showPageSizeSelector = true;
  showInfo = true;
  showNavButtons = true;

  constructor(public socialMediaService: SocialMediaService) { }

  ngOnInit(): void {
    this.socialMediaService.generateSocialMediaData();
    this.socailMedias = this.socialMediaService.getSocialMedia();
  }


  customizeColumns(columns: any) {
    columns[0].width = 70;
  }

}