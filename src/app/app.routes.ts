import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookRoomFormComponent } from './book-room-form/book-room-form.component';
import { SelectSeatingTypeComponent } from './select-seating-type/select-seating-type.component';
import { DetailsReservationFormComponent } from './details-reservation-form/details-reservation-form.component';
import { ResturantBookingComponent } from './resturant-booking/resturant-booking.component';
import { DeatilsReservationFormHotelComponent } from './deatils-reservation-form-hotel/deatils-reservation-form-hotel.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book-room', component: BookTableComponent},
  {path: 'hotel-booking', component: DeatilsReservationFormHotelComponent},
  {path: 'resturant-booking', component: ResturantBookingComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
