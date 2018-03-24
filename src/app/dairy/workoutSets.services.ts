import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../shared/config';
import { Workout, Excercise, Set } from '../shared/objectDefinitions'


let urls = config.baseUrls;

@Injectable()
export class WorkoutSetsService {
    constructor(private http: Http) {

    }
   

    getMySets(): Observable<any> {
        return this.http
            .get(urls.serviceUrl + "sets")
            .map((response: Response) => {
                console.log(response.json());
                return <Workout[]>response.json();
            });
    }

   

}