import { Action } from '@ngrx/store';
import { Excercise } from '../../model/objectDefinitions';

export const GET_ALL_EXCERCISES = "GET_ALL_EXCERCISES";
export const UPDATE_EXCERCISES = 'UPDATE_EXCERCISES';

export class UpdateExcercisesAction implements Action {
    type = UPDATE_EXCERCISES;
}

export class GetExcercisesAction implements Action {
    type = GET_ALL_EXCERCISES;

    constructor(public payload: Excercise[]) {}
}