import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workouts',
  template: `<router-outlet></router-outlet>`,
  providers:[]
  
})
export class WorkoutsComponent implements OnInit {
  myWorkouts: any;
  searchText: any;
 
  constructor() { }

  ngOnInit() {

  }

}
