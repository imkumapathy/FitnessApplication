import { Action } from '@ngrx/store';
import { Set } from '../../model/objectDefinitions';

export const GET_MY_SETS = "GET_MY_SETS";
export const UPDATE_SETS = 'UPDATE_SETS';

export class MySetUpdateAction implements Action {
    type = UPDATE_SETS;
}

export class GetSetsAction implements Action {
    type = GET_MY_SETS;

    constructor(public payload: Set[]) {}
}