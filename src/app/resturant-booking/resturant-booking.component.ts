import { Component, OnInit } from '@angular/core';
import { FindTableComponent } from '../find-table/find-table.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SelectSeatingTypeComponent } from '../select-seating-type/select-seating-type.component';
import { DetailsReservationFormComponent } from '../details-reservation-form/details-reservation-form.component';

@Component({
  selector: 'app-resturant-booking',
  standalone: true,
  imports: [FindTableComponent, CommonModule,FlexLayoutModule, SelectSeatingTypeComponent, DetailsReservationFormComponent],
  templateUrl: './resturant-booking.component.html',
  styleUrl: './resturant-booking.component.scss'
})
export class ResturantBookingComponent implements OnInit {


  active = 0;

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }


  setNewIndex(event: any){
    this.active = event
  }


}
