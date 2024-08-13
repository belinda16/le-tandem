import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-find-table',
  standalone: true,
  imports: [CommonModule,FlexLayoutModule, FormsModule, NgbDatepickerModule],
  templateUrl: './find-table.component.html',
  styleUrl: './find-table.component.scss'
})
export class FindTableComponent {

  @Output() backClick = new EventEmitter<any>()

  constructor(private router: Router){

  }


  date!: any

  times = ['6:00pm','6:30pm','7:00pm','7:30pm','8:00pm','8:30pm','9:00pm']


  back(){
    this.router.navigate(['/home'])
  }

  nextClick(){
    this.backClick.emit(1)
  }

}
