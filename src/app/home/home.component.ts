import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexLayoutModule, FormsModule, NgbDatepickerModule, SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  date!: any

  slides = [
    { img: "assets/images/gallery-two.png" },
    { img: "assets/images/gallery-one.png" },
    { img: "assets/images/gallery-four.png" },
    { img: "assets/images/gallery-three.png" },
    { img: "assets/images/gallery-one.png" },
  ];
  slideConfig = {
    "slidesToShow": 4, "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

}
