import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../shared/config';
import { Workout, Excercise, Set } from '../shared/objectDefinitions'


let urls = config.baseUrls;
@Injectable()
export class WorkoutService {
    constructor(private http: Http) {

    }

    addWorkout(newWorkout): Observable<any> {
        return this.http.post("", newWorkout).map((response: Response) => {
            console.log(response);
            return response.json();
        })
    }

    editWorkout(workout): Observable<any> {
        return this.http.put("", workout).map((response: Response) => {
            console.log(response);
            return <Workout>response.json();

        })
    }

    getMyWorkouts(): Observable<any> {
        return this.http
            .get(urls.serviceUrl + "myworkouts")
            .map((response: Response) => {
                console.log(response.json());
                return <Workout[]>response.json();
            });
    }

    getWorkout(workoutId: number) {
        return this.http.get(urls.serviceUrl + "workout/" + workoutId)
            .map((response: Response) => {
                console.log(response.json());
                return <Workout>response.json();
            })
    }

}