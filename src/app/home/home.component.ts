import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FlexLayoutModule, FormsModule, NgbDatepickerModule, SlickCarouselModule, FooterComponent, CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  date!: any

  private hasPlayed = false;
  checkinDate!: any
  checkoutDate!: any
  private _model!: NgbDateStruct;
  numberOfPeople!: any;

  slides = [
    { img: "assets/images/gallery-two.png" },
    { img: "assets/site/IMG_1406.jpg" },
    { img: "assets/images/gallery-four.png" },
    { img: "assets/site/IMG_7765.jpg" },
    { img: "assets/images/gallery-one.png" },
    { img: "assets/site/IMG_8920.jpg" },
  ];
  currentIndexs = 0;
  private interval: any;
  times = [
    {
        "id": "1",
        "slot_time": "18:00:00"
    },
    {
        "id": "2",
        "slot_time": "18:30:00"
    },
    {
        "id": "4",
        "slot_time": "19:30:00"
    },
    {
        "id": "5",
        "slot_time": "20:00:00"
    },
    {
        "id": "6",
        "slot_time": "20:30:00"
    },
    {
        "id": "7",
        "slot_time": "21:00:00"
    }
];

  @ViewChild('audio', { static: true }) audio!: ElementRef<HTMLAudioElement>;

  playAudio(): void {
    this.audio.nativeElement.play();
  }



  constructor(private router: Router){

  }

  openPdf(): void {
    const pdfUrl = 'assets/menu.pdf';
    window.open(pdfUrl, '_blank');
  }

  navigate(route: string){
    this.router.navigate([route])
  }

  ngOnInit(): void {

    window.addEventListener('scroll', this.onScroll);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.playAudio()
    this.startSlideshow();

  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.interval = setInterval(() => {
      this.currentIndexs = (this.currentIndexs + 1) % this.slides.length;
    }, 3000);
  }

  stopSlideshow() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private onScroll = (): void => {
    if (this.hasPlayed) {
      return; // Avoid replaying the audio
    }

    const audioEl = this.audio.nativeElement;
    audioEl.play()
      .then(() => {
        console.log('Audio playing on scroll');
        this.hasPlayed = true; // Mark as played
        window.removeEventListener('scroll', this.onScroll); // Remove listener to prevent further plays
      })
      .catch(error => console.error('Error playing audio:', error));
  };



  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
  };


  images = ["assets/images/hotel-gallery-one.png", "assets/images/hotel-gallery-two.png", "assets/site/IMG_1609.jpg"];

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


  saveAvail(){
    const body = {
      checkIn: this.checkinDate,
      checkOut: this.checkoutDate,
      numberOfPeople: this.numberOfPeople
    }

    sessionStorage.setItem('hkey', JSON.stringify(body))
    this.router.navigate(['/book-room'])
  }





}
