import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

import { User } from "./user.model";
import { BackendService } from "./backend.service";

require( "nativescript-localstorage" );

@Injectable()
export class UserService {
    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = this.getCommonHeaders();

    }

    login(user: User) {

        console.log(user);

        return this.http.post(
            BackendService.baseUrl,
            JSON.stringify(
                {
                    'session': {
                        'email': user.email,
                        'password': user.password
                    }
                }),
            { headers: this.headers }
        ).map(data => {
               if (data !== null) {
                var dados = JSON.stringify(data);   
                localStorage.setItem('token_session', dados);
               }
          });

    }

    logoff() {
        BackendService.token = "";
    }

    private getCommonHeaders(): HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });

        // let headers = new HttpHeaders();
        // headers = headers.append("Content-Type", "application/json");
        // headers = headers.append("Authorization", BackendService.appUserHeader);
        // return headers;
    }


    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}

