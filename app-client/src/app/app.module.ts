import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";

import {HttpService} from "./services/http.service";
import {HttpUserService} from "./services/http.user.service";

import {GamesModule} from "./games/games.module";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NewsComponent} from './news/news.component';
import {BroadcastService} from "./services/broadcast.service";

@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        NewsComponent
    ],
    imports: [
        BrowserModule,
        GamesModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [HttpService, HttpUserService, BroadcastService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
