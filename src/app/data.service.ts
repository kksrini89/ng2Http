import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    private _url: string = 'https://ng2-course-http.firebaseio.com/data.json';
    private _users: any[] = [];
    constructor(private http: Http) { }
    // constructor() { }
    get() {
        return this.http.get(this._url)
            .map((response: Response) => response.json());
    }
    post(user: any) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this._url, JSON.stringify(user), {
            headers: headers
        }).map((response: Response) => response.json());
    }

    getSampleContent() {
        return this.http.get('https://ng2-course-http.firebaseio.com/title.json')
            .map((response: Response) => response.json());
    }

    handleError() {

    }
}