import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { RoomCardComponent } from '../room-card/room-card.component';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { ApiServiceService } from '../api-service.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, FormsModule, NgbDatepickerModule, RoomCardComponent, GalleryModule, FooterComponent, MenuComponent, SlickCarouselModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent implements OnInit {

  checkinDate!: any
  checkoutDate!: any
  loading = false

  images!: GalleryItem[];

  formData = {
    checkIn: '',
    checkOut: '',
    numberOfPeople: null
  }

  isData = false
  rooms!: any
  message = 'Enter your check-in and check-out dates to view available rooms.'


  constructor(private router: Router, private apiService: ApiServiceService) {

  }

  navigate(route: string) {
    this.router.navigate([route])
  }

  ngOnInit() {


    if (sessionStorage.getItem('hkey')) {
      const data = JSON.parse(sessionStorage.getItem('hkey') as string);

      this.formData.checkIn = data.checkIn
      this.formData.checkOut = data.checkOut
      this.formData.numberOfPeople = data.numberOfPeople
      this.getHotelAvail();
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Set items array
    this.images = [
      new ImageItem({ src: 'assets/images/hotel-gallery-one.png', thumb: 'assets/images/hotel-gallery-one.png' }),
      new ImageItem({ src: 'assets/images/hotel-gallery-two.png', thumb: 'assets/images/hotel-gallery-two.png' }),
      new ImageItem({ src: 'assets/images/hotel-gallery-three.png', thumb: 'assets/images/hotel-gallery-three.png' }),

      // ... more items
    ];
  }


  getHotelAvail() {
    sessionStorage.setItem('hkey', JSON.stringify(this.formData))
    this.loading = true
    this.apiService.getAvailableRoom(this.formData.checkIn, this.formData.checkOut).subscribe((data: any) => {
      this.loading = false
      if (data.length > 0) {
        this.isData = true
        this.rooms = data
      } else {
        this.message = 'No rooms are available for the selected dates. Please try again with different dates.'
      }
    })

  }


  checkAvail() {

    this.getHotelAvail();

  }



}

