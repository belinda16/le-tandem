import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { RoomCardComponent } from '../room-card/room-card.component';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [CommonModule,FlexLayoutModule,FormsModule, NgbDatepickerModule,RoomCardComponent],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss'
})
export class BookTableComponent {

  checkinDate!: any
  checkoutDate!: any
}
