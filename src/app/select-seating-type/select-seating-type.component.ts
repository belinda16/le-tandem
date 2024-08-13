import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-select-seating-type',
  standalone: true,
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './select-seating-type.component.html',
  styleUrl: './select-seating-type.component.scss'
})
export class SelectSeatingTypeComponent {


  @Output() backClick = new EventEmitter<any>()


  back(){
    this.backClick.emit(0)
  }

  next(){
    this.backClick.emit(2)
  }

}
