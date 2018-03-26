import { Set, Excercise } from '../model/objectDefinitions';

export interface AppState {
    sets: Set[];
}

export interface ExcerciseAppState {
    excercises: Excercise[];
}
export const initialState: AppState = {
    sets: []
}

export const initialExcerciseState: ExcerciseAppState = {
    excercises: []
}

