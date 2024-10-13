import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {
  title = 'ngcomerce';
}
