import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlexLayoutModule } from 'ngx-flexible-layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FlexLayoutModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router){

  }

  navigate(route: string){
    this.router.navigate([route])
  }

  scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
