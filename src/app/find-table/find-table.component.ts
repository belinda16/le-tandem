import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-find-table',
  standalone: true,
  imports: [CommonModule,FlexLayoutModule, FormsModule, NgbDatepickerModule, FormsModule],
  templateUrl: './find-table.component.html',
  styleUrl: './find-table.component.scss'
})
export class FindTableComponent {

  @Output() backClick = new EventEmitter<any>()

  @Output() getTableInfo = new EventEmitter<any>()


  form = {
    numberOfPeople: '',
    date: '',
    slotId: ''
  }


  constructor(private router: Router){

  }


  date!: any
  @Input() times!: any
  @Input() unAvail = false
  numbers: number[] = Array.from({ length: 10 }, (_, index) => index + 1);





  back(){
    this.backClick.emit(0)
  }

  nextClick(){
    this.backClick.emit(2)
  }

  submit(){

    this.getTableInfo.emit(this.form)
  }

}
