import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemlistComponent {
  title = 'ngcomerce';
}
