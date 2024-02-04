import { Injectable } from '@angular/core';
import { SocialMedia } from 'src/app/models/socialMedia';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() {
    if (!localStorage.getItem('socialMedia')) {
      localStorage.setItem('socialMedia', JSON.stringify([]));
    }
  }

  getSocialMedia() {
    return JSON.parse(localStorage.getItem('socialMedia') || '{}');
  }

  postSocialMedia(data: SocialMedia) {
    let socialMedia = this.getSocialMedia();
    data.id = socialMedia.length
    socialMedia.push(data);
    localStorage.setItem('socialMedia', JSON.stringify(socialMedia));
  }

  deleteSocialMedia(id: number) {
    let socialMedia = this.getSocialMedia();
    socialMedia = socialMedia.filter((item: SocialMedia) => item.id !== id);
    localStorage.setItem('socialMedia', JSON.stringify(socialMedia));
  }

  updateSocialMedia(data: SocialMedia) {
    let socialMedia = this.getSocialMedia();
    socialMedia = socialMedia.map((item: SocialMedia) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });
    localStorage.setItem('socialMedia', JSON.stringify(socialMedia));
  }

  getSocialMediaById(id: number) {
    let socialMedia = this.getSocialMedia();
    return socialMedia.find((item: SocialMedia) => item.id === id);
  }

  generateSocialMediaData() {
    let socialMedia = this.getSocialMedia();
    if (socialMedia.length === 0) {
      for (let i = 0; i < 100; i++) {
        let data = {
          id: i + 1,
          socialMediaLink: `https://www.test${i}.com`,
          socialMediaName: `test${i}`,
          socialMediaDescription: `test${i} is a social media platform`
        }
        socialMedia.push(data);
      }
      localStorage.setItem('socialMedia', JSON.stringify(socialMedia));
    }

  }
}
