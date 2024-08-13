import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-deatils-reservation-form-hotel',
  standalone: true,
  imports: [FlexLayoutModule],
  templateUrl: './deatils-reservation-form-hotel.component.html',
  styleUrl: './deatils-reservation-form-hotel.component.scss'
})
export class DeatilsReservationFormHotelComponent {


  constructor(private router: Router){

  }

  navigate(route: string){
    this.router.navigate([route])
  }

}
