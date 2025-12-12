import { Routes } from '@angular/router';
import { Sample1 } from './sample/sample1/sample1';
import { Sample2 } from './sample/sample2/sample2';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sample1' },
  { path: 'sample1', component: Sample1 },
  { path: 'sample2', component: Sample2 },
  { path: '**', redirectTo: 'sample1' },
];
