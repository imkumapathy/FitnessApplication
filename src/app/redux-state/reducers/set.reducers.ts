import { ActionReducer, Action } from '@ngrx/store';
import * as setAction from '../actions/set.action';

import { AppState, initialState } from '../appState';


export const stateReducer: ActionReducer<AppState> =
    (state = initialState, action: setAction.GetSetsAction) => {
        switch (action.type) {
            case setAction.GET_MY_SETS:
                return Object.assign({}, state, { sets: action.payload });
            default:
                return state;
        }
    }