import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { Select } from 'primeng/select';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface Lang {
  name: string;
  code: string;
}

@Component({
  selector: 'app-default-layout',
  imports: [
    ButtonModule,
    FormsModule,
    Menubar,
    Menu,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    Select,
  ],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout implements OnInit {
  menubarItems: MenuItem[] | undefined;
  menuItems: MenuItem[] | undefined;

  languages: Lang[] | undefined;
  selectedLanguage: Lang | undefined;

  ngOnInit(): void {
    this.createMenubarItems();
    this.createMenuItems();
    this.createLanguages();
  }
  createLanguages() {
    this.languages = [
      { name: '日本語', code: 'jp' },
      { name: '英語', code: 'en' },
    ];

    this.selectedLanguage = this.languages[0];
  }

  private createMenubarItems() {
    this.menubarItems = [
      {
        label: 'Sample1',
        routerLink: '/sample1',
      },
      {
        label: 'Sample2',
        routerLink: '/sample2',
      },
      {
        label: 'Projects',
      },
    ];
  }

  private createMenuItems() {
    this.menuItems = [
      {
        label: 'サンプル太郎',
      },
      {
        label: 'sample@sample.com',
      },
    ];
  }
}
