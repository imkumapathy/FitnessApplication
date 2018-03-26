import { GetExcercisesAction } from '../actions/excercise.action';
import { ExcerciseService } from '../../shared-services/excercise.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

import * as excerciseAction from '../actions/excercise.action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ExcercisesEffects {
    @Effect()
    update$: Observable<Action> = this.actions$
        .ofType(excerciseAction.UPDATE_EXCERCISES)
        .switchMap(() =>
        this.excerciseService.getAllExcercises().map(data => new GetExcercisesAction(data)));

    constructor(
        private excerciseService: ExcerciseService,
        private actions$: Actions
    ) {}
}