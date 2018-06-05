import { Component, OnInit } from '@angular/core';

import {HttpService} from "../services/http.service";
import {News} from "../services/news";

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.less']
})
export class NewsComponent implements OnInit {

    news: News[];
    errorMessage: string;

    constructor(private service: HttpService) {
    }

    ngOnInit() {
        this.getNews();
    }

    private getNews() {
        this.service.getNews().then(
            news => {this.news = news},
            error => this.errorMessage = error
        )
    }

}
