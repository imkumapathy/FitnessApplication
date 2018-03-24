import { Component, OnInit,ViewChild } from '@angular/core';
import { WorkoutService } from '../workouts.service'
import { Workout } from '../../shared/objectDefinitions';
import {FilterPipe} from '../../shared/filter.pipe'
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html'
})
export class WorkoutListComponent implements OnInit {
  myWorkouts: Array<Workout>;
  constructor(private workoutService: WorkoutService,
    private router: Router) { }

  @ViewChild(FilterPipe) filterComponent: FilterPipe;
  ngOnInit() {

    this.workoutService.getMyWorkouts().subscribe(
      workouts => this.myWorkouts = workouts,
      error => console.log(error)
    );

  }

}
