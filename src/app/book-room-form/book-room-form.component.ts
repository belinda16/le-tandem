import { Component } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-book-room-form',
  standalone: true,
  imports: [FlexLayoutModule, MenuComponent],
  templateUrl: './book-room-form.component.html',
  styleUrl: './book-room-form.component.scss'
})
export class BookRoomFormComponent {

}
