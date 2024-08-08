import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexLayoutModule, FormsModule, NgbDatepickerModule, SlickCarouselModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  date!: any


  checkinDate!: any
  checkoutDate!: any
  private _model!: NgbDateStruct;

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


  images = ["assets/images/hotel-gallery-one.png", "assets/images/hotel-gallery-two.png", "assets/images/hotel-gallery-three.png"];

  currentIndex = 0;

  get prevIndex() {
    return (this.currentIndex + this.images.length - 1) % this.images.length;
  }

  get nextIndex() {
    return (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = this.prevIndex;
    this.scrollImages();
  }

  nextImage() {
    this.currentIndex = this.nextIndex;
    this.scrollImages();
  }

  scrollImages() {
    // Logic to smoothly transition images
  }






}
