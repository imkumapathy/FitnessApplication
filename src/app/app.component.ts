import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Fitness Application';

  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      }, {
        label: 'Workouts',
        routerLink: ['/workout']
      }, {
        label: 'My Dairy',
        routerLink: ['/dairy']
      },
      {
        label: 'History',
        routerLink: ['/history']
      },
      {
        label: 'About Us',
        routerLink: ['/aboutus']
      }
    ];
  }
}


