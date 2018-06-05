import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { Observable } from "rxjs";
import {News} from "./news";
import {Game} from "./game";


@Injectable()
export class HttpService{

    constructor(private http: Http){}

    //HTTP REQUESTS (get, post, update, delete)
    //get all the news
    public getNews(): Promise<News[]>{
        return this.http.get("news/all")
            .toPromise()
            .then(this.extractNews)
            // .catch(this.handleError);
    }

    private extractNews(response: Response){

        let res = response.json();
        let news: News[] = [];
        for (let i = res.length-1; i > -1; i--) {
            news.push(new News(res[i].id, res[i].title, res[i].description, res[i].date, res[i].content, res[i].img));
        }
        return news;
    }

    //http get any game
    public getGames(search): Promise<Game[]>{
        return this.http.get(`/games/search?title=${search}`)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    }

    //http create new game
    public createGame(item, token): Promise<Game[]>{
        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });

        let options = new RequestOptions({ headers: myHeaders });
        return this.http.post(`/games/create`, item, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    }

    //http update game
    public updateGame(item, token): Promise<Game[]>{
        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });

        let options = new RequestOptions({ headers: myHeaders });
        return this.http.put(`/games/update`, item, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    }

    //http delete game
    public deleteGame(id, token): Promise<Game[]>{
        let myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": token
        });

        let options = new RequestOptions({ headers: myHeaders });
        return this.http.delete(`/games/delete/${id}`, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    }

    private extractGame(response: Response){
        // console.log(response);
        let res = response.json();
        let games: Game[] = [];
        for (let i = 0; i < res.length; i++) {
            games.push(new Game(res[i]._id, res[i].title, res[i].description, res[i].price, res[i].img, false, i));

        }
        return games;
    }

    private handleError(reason: any): any {
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
