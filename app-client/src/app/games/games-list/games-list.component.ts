import { Component, OnInit,  } from '@angular/core';

import {HttpService} from "../../services/http.service";
import {BroadcastService} from "../../services/broadcast.service";
import {Game} from "../../services/game";
import {User} from "../../services/user";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.less']
})
export class GamesListComponent implements OnInit {

    games: Game[];
    tmpGame: Game = new Game("", "", "", "", "", "", "");
    errorMessage: string;
    search: string = "";

    constructor(private service: HttpService, private broadcastService: BroadcastService) {}

    //for check current user and show more options
    public correntUser:User;
    receiveUser($event){
        this.correntUser = $event;
    }

    ngOnInit() {
        this.getGames();
    }

    //add chosen game to cart
    private addToCart(item){
        this.broadcastService.setResult(item);
    }

    //HTTP REQUESTS (get, post, update, delete)
    //http get any game
    private getGames() {
        this.service.getGames(this.search).then(
            games => {
                this.games = games;
            },
            error => this.errorMessage = error
        )
    }

    //http create new game
    private createGame() {
        this.service.createGame(this.addGame, this.correntUser.token).then(
            games => {
                this.games = games;
                this.addGame = new Game("", "", "", "", "default.jpg", "", "");
            },
            error => this.errorMessage = error
        )
    }

    //http update game
    private updateGame() {
        this.service.updateGame(this.tmpGame, this.correntUser.token).then(
            games => {
                this.games = games;
                this.games[this.tmpGame.index].edit=false;
            },
            error => this.errorMessage = error
        )
    }

    //http delete game
    private deleteGame(id) {
        this.service.deleteGame(id, this.correntUser.token).then(
            games => {
                this.games = games;
            },
            error => this.errorMessage = error
        )
    }

    //edit game into form
    private editGame(item){
        if(this.tmpGame.title) {
            this.games[this.tmpGame.index].edit=false;
        }

        for (var key in item) {
            this.tmpGame[key] = item[key];
        }

        this.games[item.index].edit=true;
    }

    //ADMIN OPTIONS
    private acceptEditGame(){
        this.updateGame();
    }

    private cancelEditGame(index){
        this.games[index].edit=false;
    }

    addGame:Game = new Game("", "", "", "", "default.jpg", "", "");
    private acceptAddGame(item){
        this.createGame();
    }
    private cancelAddGame(){
        this.addGame = new Game("", "", "", "", "default.jpg", "", "");
    }


}
