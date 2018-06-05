import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { Observable } from "rxjs";
import {User} from "./user";


@Injectable()
export class HttpUserService{

    constructor(private http: Http){}

    //LOGIN OR CREATE NEW USER
    public addUser(user: User) {
        return this.http.post("users", user)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    }

    //GET CURRENT USER DATA
    public getUser(token: number) {
        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });
        console.log(token)
        // создание опций для запроса
        let options = new RequestOptions({ headers: myHeaders });
        return this.http.get("user", options)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    }

    //EDIT CURRENT USER
    public updateUser(user: User, token: number) {
        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });
        // создание опций для запроса
        let options = new RequestOptions({ headers: myHeaders });
        return this.http.patch("users", user, options)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    }

    //COMMON FOR ALL OF REQUESTS
    private extractUser(response: Response) {
        return response.json();
    }

    private handleError(reason: any): any {
        console.log("*****error****");
        console.log(reason);
        let message;
        if (reason instanceof Response) {
            let errorData = reason.json().error || JSON.stringify(reason.json());
            message = `${reason.status} - ${reason.statusText || ''} ${errorData}`
        } else {
            message = reason.message ? reason.message : reason.toString();
        }

        console.error(message);

        return reason;
    }
}
