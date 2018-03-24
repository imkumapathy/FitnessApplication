import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutRoutableComponents, WorkoutRoutingModule } from './workouts-routing.module'
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkoutService } from './workouts.service';
import {ExcerciseService} from './excercise.service';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';


@NgModule({
    imports: [
        CommonModule, FormsModule, WorkoutRoutingModule, SharedModule,AngularMultiSelectModule
    ],
    declarations: [WorkoutRoutableComponents],
    providers: [WorkoutService,ExcerciseService]
})
export class WorkoutsModule { }
