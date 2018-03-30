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
            .get(urls.serviceUrl + "set/getAllSets")
            .map((response: Response) => {
                let something = response.json();
                return <Set[]>response.json();
            });
    }

    createNewSet(set: Set): Observable<Set> {
        return this.http
            .post(urls.serviceUrl + "set/create",set)
            .map((response: Response) => {
                let something = <Set>response.json();

                console.log(something);
                return <Set>response.json();
            });
    }

    updateSet(set:Set):Observable<Set>{
        return this.http
        .put(urls.serviceUrl + "set/update",set)
        .map((response: Response) => {
            let something = <Set>response.json();
            console.log(something);
            return <Set>response.json();
        });
    }

    deleteSet(setId:number): Observable<any>{
        return this.http
        .delete(urls.serviceUrl + 'set/delete/'+setId)
        .map((response: Response) => { 
            let something = response.json();
            console.log(something);
            return response.json().setId;
        });
    }
}