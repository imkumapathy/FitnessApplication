import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout, Excercise } from '../../shared/objectDefinitions';
import { Subscription } from 'rxjs/Subscription';
import { WorkoutService } from '../workouts.service'
import { ExcerciseService } from '../../shared-services/excercise.service';
import _ from "lodash";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html'
})
export class WorkoutComponent implements OnInit {


  @Input() workout: Workout = new Workout();

  private id: any;
  private allExcercies: Array<Excercise> = new Array<Excercise>();
  private dropdownSettings = {};
  private selectedItems: Array<Excercise> = new Array<Excercise>();

  constructor(private router: Router, private route: ActivatedRoute,
    private workoutService: WorkoutService, private excersiceService: ExcerciseService) { }

  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Excerices",
      enableSearchFilter: true,
      groupBy: "type",
      classes: "myclass custom-class"
    };

    this.id = +this.route.snapshot.params['id'];
    this.getWorkout();
    //will apply redux here
    //this.getAllExcercises();
  }

  private getWorkout() {
    this.workoutService.getWorkout(this.id).subscribe(
      (workout => {
        this.workout = workout;
        this.getAllExcercises();
      }),
      (error => console.log(error)))
  }

  private getAllExcercises() {
    this.excersiceService.getAllExcercises().subscribe(
      (response => {
        this.allExcercies = response;
        this.selectedItems = this.allExcercies.filter(e => this.workout.excercises.map(m => m.id).includes(e.id));
        console.log(response);
      }),
      (error => console.log(error)));
  }

  onItemSelect(item: any) {
  }

  

}
