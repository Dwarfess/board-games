import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {User} from "../../services/user";
import {Game} from "../../services/game";
import {HttpUserService} from "../../services/http.user.service";
import {BroadcastService} from "../../services/broadcast.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
    logForm: FormGroup;
    updateForm: FormGroup;
    errorMessage: string;

    showLogForm:boolean = true;
    showCart:boolean = false;
    showUpdateForm:boolean = false;

    show(log,cart,update, form){

        switch (form) {
            case "logout"://user log out and create user form
                this.user = new User("", "", "", "", "", "");
                this.createUserForm();
                this.sentUser();

                this.showLogForm = log;
                this.showCart = cart;
                this.showUpdateForm = update;

                this.itemList = [];
                break;
            case "log"://log in
                this.addUser(this.logForm.value, log, cart, update);//add new user to base
                break;
            case "updateForm"://create update form
                this.getUser(log, cart, update);
                break;
            case "update"://update current user
                this.updateUser(this.updateForm.value, log, cart, update);
            case "cancel"://cancel update
                this.showLogForm = log;
                this.showCart = cart;
                this.showUpdateForm = update;
                break;
        }
    }


    user: User = new User("","","","","","");
    token: number = 0;
    code: string;

    roles: string[] = ["Guest", "Client", "Administrator"];

    @Output() userEvent = new EventEmitter();
    sentUser(){
        this.user.token = this.token;
        this.userEvent.emit(this.user);
    }

    /*---------CART---------*/
    constructor(private fb: FormBuilder, private service: HttpUserService, private broadcast:BroadcastService) {
        this.broadcast.subscriber()
            .subscribe(
                res => {

                    let item = {_id: res._id, title: res.title};
                    let toString = JSON.stringify(this.itemList);
                    if(toString.indexOf(res._id)==-1) this.itemList.push(item);
                }
            )
    }

    itemList: object[] = [];

    private deleteItem(item){
        console.log(this.itemList.indexOf(item));
        this.itemList.splice(this.itemList.indexOf(item),1);
    }



    ngOnInit() {
        this.createUserForm();
        this.sentUser();
    }


    // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
    formErrors = {
        "name": "",
        "email": "",
        "password": "",
        "phone": "",
        "role": "",
        "code":""
    };

    // Объект с сообщениями ошибок
    validationMessages = {
        "name": {
            "required": "required field",
            "minlength": "min length 3 symbols",
            "maxlength": "max length 10 symbols",
            "pattern": "unacceptable symbols"
        },
        "email": {
            "required": "required field",
            "pattern": "wrong format"
        },
        "password": {
            "required": "required field"
        },
        "phone":{
            "pattern": "wrong format"
        },
        "role": {
            "required": "required field"
        },
        "code": {
            "required": "required field",
            "pattern": "wrong code"
        }
    };


    /*---------log form---------*/
    createUserForm() {
        this.logForm = this.fb.group({
            "email": [this.user.email, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
            ]],
            "password": [this.user.password, [
                Validators.required
            ]]
        });

        this.logForm.valueChanges
            .subscribe(data => this.onValueChange(data));

        this.onValueChange();
    }

    onValueChange(data ?: any) {
        if (!this.logForm) return;
        let form = this.logForm;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }


    /*---------update form---------*/
    updateUserForm() {
        this.updateForm = this.fb.group({
            "name": [this.user.name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10),
                Validators.pattern("^[A-Za-z0-9\_]+$")
            ]],
            "email": [this.user.email, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
            ]],
            "password": [this.user.password, [
                Validators.required
            ]],
            "phone": [this.user.phone, [
                Validators.pattern("^$|[+](\\d{2} )[(](\\d{3})[)]( \\d{3})( \\d{2}){2}")
            ]],
            "role": [this.user.role, [
                Validators.required
            ]],
            "code": [this.code, [Validators.pattern("^123$")]]
        });

        this.updateForm.valueChanges
            .subscribe(data => this.onValueChange2(data));

        this.onValueChange2();
    }


    onValueChange2(data ?: any) {
        if (!this.updateForm) return;
        let form = this.updateForm;

        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[field];
                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    }


    /*---------check admin---------*/
    checkAdminCode: boolean = false;
    checkAdmin(){
        console.log(this.updateForm.valid);
        console.log(this.updateForm.value.role);
        if(this.updateForm.value.role == "Administrator"){
            this.code = "";
            this.updateCode();
            this.checkAdminCode = true;
        } else{
            this.code = "123";
            this.updateCode();
            this.checkAdminCode = false;

        }
    }

    updateCode() {
        this.updateForm.patchValue({"code": this.code});
    }


    /*--------HTTP--------*/
    //LOGIN OR CREATE NEW USER
    public addUser(user, log,cart,update) {
        console.log(this.token);
        this.service.addUser(user)
            .then(
                response => {
                    if(response.status == 422)this.formErrors.password = "wrong password"
                    else {
                        this.user = response;
                        this.token = this.user.token;
                        this.showLogForm = log;
                        this.showCart = cart;
                        this.showUpdateForm = update;
                        this.sentUser();
                    }

                },
                error => {
                    this.errorMessage = error
                }
            );
    }

    //GET CURRENT USER DATA
    public getUser(log,cart,update) {
        console.log(this.token);
        this.service.getUser(this.token)
            .then(
                response => {
                    if(response.status == 401)this.formErrors.name = "authorization expired"
                    else {
                        this.user = response;
                        this.updateUserForm();
                        this.showLogForm = log;
                        this.showCart = cart;
                        this.showUpdateForm = update;
                    }

                },
                error => {
                    this.errorMessage = error
                }
            );
    }

    //EDIT CURRENT USER
    public updateUser(user, log,cart,update) {
        console.log(this.token);
        this.service.updateUser(user, this.token)
            .then(
                response => {
                    if(response.status == 401)this.formErrors.name = "authorization expired"
                    else {
                        this.user = response;
                        this.showLogForm = log;
                        this.showCart = cart;
                        this.showUpdateForm = update;
                        this.sentUser();
                    }

                },
                error => {
                    this.errorMessage = error
                }
            );
    }

}
