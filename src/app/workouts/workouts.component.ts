import { Component, OnInit } from '@angular/core';
import {WorkoutService} from './workouts.service'
@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers:[WorkoutService]
})
export class WorkoutsComponent implements OnInit {
  workouts: any;
  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(
      workouts => this.workouts = workouts,
      error =>  console.log(error)
    );
  }

}
