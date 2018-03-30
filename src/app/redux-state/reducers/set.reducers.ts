import { ActionReducer, Action } from '@ngrx/store';
import * as setAction from '../actions/set.action';

import { AppState, initialState } from '../appState';


export const stateReducer: ActionReducer<AppState> =
    (state = initialState, action: any) => {
        switch (action.type) {
            case setAction.GET_MY_SETS:
                return Object.assign({}, state, { sets: action.payload });
            case setAction.CREATED_SET:
                let currentSets = state.sets;
                let set = action.payload;
                let updatedSets = [...currentSets, ...set];
                let newState = Object.assign({}, state, { sets: updatedSets });
                return newState;
            case setAction.UPDATED_SET:
                let updatedSet = action.payload;
                let currentUnUpdatedSets = JSON.parse(JSON.stringify(state.sets));
                let filteredState = currentUnUpdatedSets.find(filteredSet => filteredSet.id == updatedSet.id);
                filteredState.reps = updatedSet.reps;
                filteredState.weight = updatedSet.weight;

                let updatedState = Object.assign({}, state, { sets: currentUnUpdatedSets });
                return updatedState;
            case setAction.DELETED_SET:
                let deletedSetId = action.payload;
                let currentDeletedSets = JSON.parse(JSON.stringify(state.sets));
                let deletedSetState = currentDeletedSets.find(filteredSet => filteredSet.id == deletedSetId);

                var index = currentDeletedSets.indexOf(deletedSetState);
                if (index > -1) {
                    currentDeletedSets.splice(index, 1);
                }
                let deletedState = Object.assign({}, state, { sets: currentDeletedSets });
                return deletedState;
            default:
                return state;
        }
    }