import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import 'rxjs/add/operator/catch';

import { ModelTechnology } from './models';
@Injectable()
export class ServicePortfolioApi {

    constructor(private http: Http) { }

    getTechnologies(): Observable<ModelTechnology[]> {

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions(
            {
                headers: headers,
                method: "get"
            });

        return this.http.request('data/technologies.json', options)
            .map((response: Response) => {
                let data = response.json();

                if (data) {
                    return data;
                }
                return Observable.throw(response || 'Server error')
            });
    }
}