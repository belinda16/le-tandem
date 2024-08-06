import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookTableComponent } from './book-table/book-table.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book-table', component: BookTableComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
