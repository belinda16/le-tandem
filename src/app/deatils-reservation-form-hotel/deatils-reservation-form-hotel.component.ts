import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule, DatePipe } from '@angular/common';
import { ApiServiceService } from '../api-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deatils-reservation-form-hotel',
  standalone: true,
  imports: [FlexLayoutModule, MenuComponent, DatePipe, FormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './deatils-reservation-form-hotel.component.html',
  styleUrl: './deatils-reservation-form-hotel.component.scss'
})
export class DeatilsReservationFormHotelComponent implements OnInit {

  data!: any
  loading = false
  id: any


  formData = {
    room_id: 0,
    check_in: null,
    check_out: null,
    customer_name: null,
    first_name:  null,
    last_name:  null,
    customer_email: null,
    phone: null,
    requests: null
  }

  constructor(private router: Router, private apiService: ApiServiceService, private route: ActivatedRoute,private datePipe: DatePipe){



  }

  ngOnInit(): void {


    this.id = this.route.snapshot.paramMap.get('id');
    if(sessionStorage.getItem('hkey')){
      this.data = JSON.parse(sessionStorage.getItem('hkey') as string)
      console.log(this.data)
    }else{
      this.router.navigate(['/book-room'])
    }
  }

  navigate(route: string){
    this.router.navigate([route])
  }


  getDate(data: any): Date{
   return new Date(data.year, data.month - 1, data.day)
  }

  getCustomerInfo() {


    this.loading = true
    const body = {
      "room_id": this.id,
      "check_in": this.datePipe.transform(this.getDate(this.data.checkIn), 'yyyy-MM-dd'),
      "check_out":this.datePipe.transform(this.getDate( this.data.checkOut), 'yyyy-MM-dd'),
      "numberOfPeople": this.data.numberOfPeople,
      "customer_name": this.formData.first_name + " " +  this.formData.last_name,
      "customer_email": this.formData.customer_email,
      "phone": this.formData.phone,
      "requests": this.formData.requests
    }

    this.apiService.bookingRoom(body).subscribe((data: any) => {
      this.loading = false
      sessionStorage.removeItem('hkey')
      this.router.navigate(['/home'])
    })
  }

}
