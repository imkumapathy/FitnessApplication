import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component'
import { WorkoutsComponent } from './workouts.component';
export const workoutRoute: Routes = [
    {
        path: '', component: WorkoutsComponent,
        children: [{
            path: '', component: WorkoutListComponent
        },
        { path: ':id', component: WorkoutComponent }],
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(workoutRoute)]
})

export class WorkoutRoutingModule { };

export const WorkoutRoutableComponents = [
    WorkoutsComponent,
    WorkoutComponent,
    WorkoutListComponent
    
];
