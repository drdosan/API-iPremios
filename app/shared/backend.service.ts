import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";



export class BackendService {
    static baseUrl = "https://ipremios-app-test.herokuapp.com/api/v1/sessions";
   

    static isLoggedIn(): boolean {
        return !!getString("token");
    }

    static get token(): string {
        return getString("token");
    }

    static set token(theToken: string) {
        setString("token", theToken);
    }
}
