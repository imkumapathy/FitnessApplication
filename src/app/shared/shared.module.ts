import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Pipes
import { FilterPipe } from './filter.pipe';
import { GroupByPipe } from './groupBy.pipe';

//redux state
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { WorkoutService } from '../workouts/workouts.service';
import { ExcerciseService } from '../shared-services/excercise.service';
import { WorkoutSetsService } from '../shared-services/workoutSets.services';
// import { reducers } from '../redux-state/appState';
import { SetEffects } from '../redux-state/effects/sets.effects';
import { ExcercisesEffects } from '../redux-state/effects/excercises.effects';
import { stateReducer } from '../redux-state/reducers/set.reducers';
import { excerciseReducer } from '../redux-state/reducers/excercise.reducer';
// imports: imports the module's exports. which are usually
// declarables(components / directives / pipes) and providers.
// in our case the FilterTextModule has a provider.
//
// exports: exports modules AND declarables (components/directives/pipes) that other modules may want to use
// SharedModule does not use CommonModule, but does use FormsModule.
// Even so, we import/export both of these because most other modules will import SharedModule and will need them.
@NgModule({
    imports: [CommonModule, FormsModule,
        EffectsModule.forRoot([SetEffects, ExcercisesEffects]),
        StoreModule.forRoot({ stateReducer, excerciseReducer }), StoreDevtoolsModule.instrument()
    ],
    exports: [CommonModule, FormsModule, FilterPipe, GroupByPipe],
    declarations: [FilterPipe, GroupByPipe],
    providers: [ExcerciseService, WorkoutService, WorkoutSetsService]
})
export class SharedModule { }