import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-select-seating-type',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './select-seating-type.component.html',
  styleUrl: './select-seating-type.component.scss'
})
export class SelectSeatingTypeComponent {


  seating = ''
  constructor(private router: Router){

  }


  @Output() backClick = new EventEmitter<any>()
  @Output() seatingSelect = new EventEmitter<any>()


  back(){
    this.router.navigate(['/home'])
  }

  next(seating: any){
    this.seatingSelect.emit(seating)
    this.backClick.emit(1)
  }

  setSeating(seating: any){
    this.seating = seating
  }

}
