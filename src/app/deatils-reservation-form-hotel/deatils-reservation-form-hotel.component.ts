import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-deatils-reservation-form-hotel',
  standalone: true,
  imports: [FlexLayoutModule, MenuComponent],
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
