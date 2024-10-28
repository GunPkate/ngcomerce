import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  title = 'ngcomerce';

constructor( private route: Router ){}
  navigateTo(e: MouseEvent,link: any){
    this.route.navigate([link])
    e.preventDefault()
  }
}
