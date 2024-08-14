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

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, FormsModule, NgbDatepickerModule, RoomCardComponent, GalleryModule, FooterComponent, MenuComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent implements OnInit {

  checkinDate!: any
  checkoutDate!: any

  images!: GalleryItem[];


  constructor(private router: Router){

  }

  navigate(route: string){
    this.router.navigate([route])
  }

  ngOnInit() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Set items array
    this.images = [
      new ImageItem({ src: 'assets/images/hotel-gallery-one.png', thumb: 'assets/images/hotel-gallery-one.png'}),
      new ImageItem({ src: 'assets/images/hotel-gallery-two.png', thumb: 'assets/images/hotel-gallery-two.png' }),
      new ImageItem({ src: 'assets/images/hotel-gallery-three.png', thumb: 'assets/images/hotel-gallery-three.png' }),

      // ... more items
    ];
  }



}

