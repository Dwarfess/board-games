import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


import {GamesListComponent} from './games-list/games-list.component';
import {UserComponent} from './user/user.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [GamesListComponent, UserComponent]
})
export class GamesModule {
}
