import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent {

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
