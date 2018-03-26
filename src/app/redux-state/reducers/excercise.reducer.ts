import { ActionReducer, Action } from '@ngrx/store';
import * as excerciseAction from '../actions/excercise.action';

import { ExcerciseAppState, initialExcerciseState } from '../appState';


export const excerciseReducer: ActionReducer<ExcerciseAppState> =
    (state = initialExcerciseState, action: excerciseAction.GetExcercisesAction) => {
        switch (action.type) {
            case excerciseAction.GET_ALL_EXCERCISES:
                return Object.assign({}, state, { excercises: action.payload });
            default:
                return state;
        }
    }