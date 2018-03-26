import { GetSetsAction } from '../actions/set.action';
import { WorkoutSetsService } from '../../shared-services/workoutSets.services';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as setAction from '../actions/set.action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SetEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(setAction.UPDATE_SETS)
        .switchMap(() =>
            this.workoutSetsService
                .getMySets()
                .map(data => new GetSetsAction(data))
        );

    constructor(
        private workoutSetsService: WorkoutSetsService,
        private actions$: Actions
    ) {}
}