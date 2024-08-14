import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-details-reservation-form',
  standalone: true,
  imports: [FlexLayoutModule,CommonModule],
  templateUrl: './details-reservation-form.component.html',
  styleUrl: './details-reservation-form.component.scss'
})
export class DetailsReservationFormComponent {


  @Output() backClick = new EventEmitter<any>()

  back(){
    this.backClick.emit(1)
  }
}
