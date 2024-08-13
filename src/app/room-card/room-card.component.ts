import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.scss'
})
export class RoomCardComponent {

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
      title: '15 TV with International TV Channels'
    },
    {
      icon: 'assets/images/bathrobe.svg',
      title: 'Bathrobe and Slippers'
    },
    {
      icon: 'assets/images/luxury.svg',
      title: 'Luxury Ameneties'
    }
  ]

}
