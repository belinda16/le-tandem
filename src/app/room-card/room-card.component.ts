import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule,SlickCarouselModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss'
})
export class RoomCardComponent implements OnInit {


  constructor(private router: Router){

  }


  slides!: any;
  @Input() data!: any

  // slideConfig = {
  //   "slidesToShow": 3, "slidesToScroll": 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   variableWidth: true,
  // };

  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };


  // images = ["assets/images/hotel-gallery-one.png", "assets/images/hotel-gallery-two.png", "assets/images/hotel-gallery-three.png"];

  ngOnInit(): void {
    this.slides = this.data.images.map((path: any) => ({ img: path }));;
    console.log(this.slides)

  }

  amenities = [
    {
      icon: 'assets/images/bar.svg',
      title: 'Minibar and Coffee / Tea Facilities'
    },
    {
      icon: 'assets/images/air-conditioner.svg',
      title: 'Air Conditioning'
    },
    {
      icon: 'assets/images/bed.svg',
      title: 'Bedding'
    },
    {
      icon: 'assets/images/flatscreen-tv.svg',
      title: 'TV with International TV Channels'
    },
    {
      icon: 'assets/images/bathrobe.svg',
      title: 'Bathrobe and Slippers'
    },
    {
      icon: 'assets/images/luxury.svg',
      title: 'Swimming Pool'
    }
  ]



  makeBooking(id: any){
    this.router.navigate(['/hotel-booking', id]);
  }




}
