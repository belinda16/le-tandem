import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isMenuOpen = false;

  constructor(private router: Router){

  }

  navigate(route: string){
    this.router.navigate([route])
    this.toggleMenu()
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
