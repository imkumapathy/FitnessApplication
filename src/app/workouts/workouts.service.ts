import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { config } from '../config';
let urls = config.baseUrls;

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class WorkoutService {
    constructor(private http: Http) {

    }

    getWorkouts():Observable<any> {
        return this.http
            .get(urls.workouts)
            .map((response: Response) => {
              return response.json();
                        });
            // .do(data => console.log(data));
    }

}