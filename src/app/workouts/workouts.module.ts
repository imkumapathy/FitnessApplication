import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WorkoutRoutableComponents, WorkoutRoutingModule } from './workouts-routing.module'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
@NgModule({
    imports: [
        CommonModule, FormsModule, WorkoutRoutingModule, SharedModule
    ],
    declarations: [WorkoutRoutableComponents]
})
export class WorkoutsModule { }
