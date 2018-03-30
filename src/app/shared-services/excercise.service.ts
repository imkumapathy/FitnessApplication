import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { config } from '../model/config';
import { Workout, Excercise, Set } from '../model/objectDefinitions'
let urls = config.baseUrls;
@Injectable()
export class ExcerciseService {

    constructor(private http: Http) {

    }
    getAllExcercises(): Observable<Excercise[]> {
        return this.http
        .get(urls.serviceUrl+"excercise/getAllExcercises")
            .map((response: Response) => {
                console.log(response.json());
                return this.formatExcerciseArray(response.json());
            })
    }

    private  formatExcerciseArray(excerices: Excercise[]): Array<Excercise> {
        let updatedExcercies = excerices.forEach(excerice => {
          excerice['itemName'] = excerice.name;
        });
        return excerices;
      }

}