import { Component } from '@angular/core';
import { SocialMediaService } from './services/business/social-media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rastMobileTask';
  initPopupVisible = false;


  constructor(private socialMediaService: SocialMediaService) {
    if (localStorage.getItem('socialMedia') === "[]") {
      this.initPopupVisible = true;
    }
  }

  closePopup() {
    this.socialMediaService.generateSocialMediaData();
    this.initPopupVisible = false;
    window.location.reload();
  }
}
