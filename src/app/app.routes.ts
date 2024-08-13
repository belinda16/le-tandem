import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookRoomFormComponent } from './book-room-form/book-room-form.component';
import { SelectSeatingTypeComponent } from './select-seating-type/select-seating-type.component';
import { DetailsReservationFormComponent } from './details-reservation-form/details-reservation-form.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book-table', component: BookTableComponent},
  {path: 'book-room-form', component: BookRoomFormComponent},
  {path: 'select-seating-type', component: SelectSeatingTypeComponent},
  {path: 'details-reservation-form', component: DetailsReservationFormComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
