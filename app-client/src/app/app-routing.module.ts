import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GamesListComponent} from "./games/games-list/games-list.component";
import {UserComponent} from "./games/user/user.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NewsComponent} from "./news/news.component";

const routes: Routes = [
    {path:"", redirectTo:"news", pathMatch:"full"},
    {path:"news", component:NewsComponent},
    {path:"games", component:GamesListComponent},
    {path:"contacts", component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
