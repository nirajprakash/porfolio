import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import 'rxjs/add/operator/catch';

import { ConfigAPI } from '../app.config';

import { ModelTechnology, ModelProject, ModelPortfolio } from './models';
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

    requestProject(pName: string,pEmail: string,  pMessage: string): Observable<boolean> {
        /*let params = new URLSearchParams();

        params.set('email', email);
        params.set('name', name);
        params.set('message', message);*/
        let params = {
            name: pName,
            email: pEmail,
            message: pMessage
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(
            {
                headers: headers,
                method: "post",
                url:ConfigAPI.API_ENDPOINT + 'v1/projects',
                body: JSON.stringify(params)
            });

        return this.http.request(new Request(options))
            .map((response: Response) => {

                let data = response.json();
               
                if (data!==null && data.isMessageSaved ) {
                    //console.log("http response: restaurant data: ");
                    //console.log(data);
                    return true;
                } else {
                    // console.log("http response: data error: ");
                    //console.log(data);
                    return false;
                }
            })
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Network error');

            });


    }

    getProjects(): Observable<ModelProject[]> {

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions(
            {
                headers: headers,
                method: "get"
            });

        return this.http.request('data/projects.json', options)
            .map((response: Response) => {
                let data = response.json();

                if (data) {
                    return data;
                }
                return Observable.throw(response || 'Server error')
            });
    }


    getPorfolios(): Observable<ModelPortfolio[]> {

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions(
            {
                headers: headers,
                method: "get"
            });

        return this.http.request('data/portfolio.json', options)
            .map((response: Response) => {
                let data = response.json();

                if (data) {
                    return data;
                }
                return Observable.throw(response || 'Server error')
            });
    }
}