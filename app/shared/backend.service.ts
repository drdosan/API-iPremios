import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";



export class BackendService {
    static baseUrl = "https://ipremios-app-test.herokuapp.com/api/v1/sessions";
}
