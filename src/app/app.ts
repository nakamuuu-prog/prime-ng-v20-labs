import { Component } from '@angular/core';
import { DefaultLayout } from './common/default-layout/default-layout';

@Component({
  selector: 'app-root',
  imports: [DefaultLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
