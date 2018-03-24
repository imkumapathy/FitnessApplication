import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../shared/config';
import { Workout, Excercise, Set } from '../shared/objectDefinitions'

@Injectable()
export class ExcerciseService {

    constructor(private http: Http) {

    }
    getAllExcercises(): Observable<Excercise[]> {
        return this.http.get(config.baseUrls.serviceUrl + "excercises")
            .map((response: Response) => {
                console.log(response.json());
                return <Excercise[]>response.json();
            })
    }

}