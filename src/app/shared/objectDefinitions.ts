export class Workout {
    id: number;
    name: string;
    created: string;
    excercises: Array<Excercise>
}

export class Excercise {
    id: number;
    name: string;
    type: string;
    sets: Array<Set>;
}

export class Set {
    id: number;
    excerciseId: number;
    date: Date;
    excerciseName: string;
    weight: number;
    reps: number;

}
