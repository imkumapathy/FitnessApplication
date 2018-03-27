import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config } from '../model/config';
import { Workout, Excercise, Set } from '../model/objectDefinitions';
let urls = config.baseUrls;

@Injectable()
export class WorkoutSetsService {

    constructor(private http: Http) {

    }

    getMySets(): Observable<Set[]> {
        return this.http
            .get("../assets/data/api/sets.json")
            .map((response: Response) => {
                let something = response.json();
                return <Set[]>response.json();
            });
    }
}