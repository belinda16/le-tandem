import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-details-reservation-form',
  standalone: true,
  imports: [FlexLayoutModule,CommonModule,FormsModule],
  templateUrl: './details-reservation-form.component.html',
  styleUrl: './details-reservation-form.component.scss'
})
export class DetailsReservationFormComponent implements OnInit {


  form = {
    customerName: '',           // Customer's name
    customerEmail: '',          // Customer's email address
    customerPhone: ''           // Customer's phone number
  };

  @Input() data!: any

  @Output() backClick = new EventEmitter<any>()
  @Output() formInfo = new EventEmitter<any>()

  back(){
    this.backClick.emit(1)
  }

  submit(){
    this.formInfo.emit(this.form)
  }

  ngOnInit(): void {
    console.log(this.data)
  }
}
