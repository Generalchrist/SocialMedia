import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Variables
  headerLogo = '/assets/images/logo.svg';
  isMobileMenuOpen: boolean = false;

  headerElements = [
    { name: 'Hakkımızda', link: '/about' },
    { name: 'Jüri - Yarışma Yazılımı', link: '/jury' },
    { name: 'Word Ninja', link: '/word-ninja' },
    { name: 'Word Pyramids', link: '/word-pyramids' },
  ];

  headerIcons = [
    { name: 'youtube', link: '#youtube', src: '/assets/images/youtube.svg' },
    { name: 'instagram', link: '#instagram', src: '/assets/images/instagram.svg' },
    { name: 'benhance', link: '#benhance', src: '/assets/images/benhance.svg' },
    { name: 'linkedin', link: '#linkedin', src: '/assets/images/linkedin.svg' },
  ];

  // Menu Methods
  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
