import { GetSetsAction, CreateSetAction, CreatedSetAction, UpdatedSetAction, UpdateSetAction } from '../actions/set.action';
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
    get$: Observable<Action> = this.actions$
        .ofType(setAction.UPDATE_SETS)
        .switchMap(() =>
            this.workoutSetsService
                .getMySets()
                .map(data => new GetSetsAction(data))
        );

    @Effect()
    create$: Observable<Action> = this.actions$
        .ofType(setAction.CREATE_SET)
        .switchMap((action: CreateSetAction) =>
            this.workoutSetsService
                .createNewSet(action.payload)
                .map(data => new CreatedSetAction(data))
        );

    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(setAction.UPDATE_SET)
        .switchMap((action: UpdateSetAction) =>
            this.workoutSetsService
                .updateSet(action.payload)
                .map(data => new UpdatedSetAction(data))
        );

        @Effect()
        delete$: Observable<Action> = this.actions$
            .ofType(setAction.DELETE_SET)
            .switchMap((action: setAction.DeleteSetAction) =>
                this.workoutSetsService
                    .deleteSet(action.payload)
                    .map(data => new setAction.DeletedSetAction(data))
            );

    constructor(
        private workoutSetsService: WorkoutSetsService,
        private actions$: Actions
    ) { }
}