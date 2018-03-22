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
    weight: number;
    reps: number;
}
