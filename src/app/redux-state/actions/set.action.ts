import { Action } from '@ngrx/store';
import { Set } from '../../model/objectDefinitions';

export const GET_MY_SETS = "GET_MY_SETS";
export const UPDATE_SETS = 'UPDATE_SETS';
export const CREATE_SET = "CREATE_SET";
export const CREATED_SET = "CREATED_SET";
export const UPDATE_SET = "UPDATE_SET";
export const UPDATED_SET = "UPDATED_SET";
export const DELETE_SET = "DELETE_SET";
export const DELETED_SET = "DELETED_SET";

export class MySetUpdateAction implements Action {
    type = UPDATE_SETS;
}

export class GetSetsAction implements Action {
    type = GET_MY_SETS;

    constructor(public payload: Set[]) { }
}

export class CreateSetAction implements Action {
    type = CREATE_SET;
    constructor(public payload: Set) { }
}

export class CreatedSetAction implements Action {
    type = CREATED_SET;
    constructor(public payload: Set) { }
}


export class UpdateSetAction implements Action {
    type = UPDATE_SET;
    constructor(public payload: Set) { }
}

export class UpdatedSetAction implements Action {
    type = UPDATED_SET;
    constructor(public payload: Set) { }
}

export class DeleteSetAction implements Action {
    type = DELETE_SET;
    constructor(public payload: number) { }
}

export class DeletedSetAction implements Action {
    type = DELETED_SET;
    constructor(public payload: number) { }
}
