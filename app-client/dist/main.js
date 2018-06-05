(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _games_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games/games-list/games-list.component */ "./src/app/games/games-list/games-list.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "", redirectTo: "news", pathMatch: "full" },
    { path: "news", component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"] },
    { path: "games", component: _games_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_2__["GamesListComponent"] },
    { path: "contacts", component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\n    <div class=\"top\">\n        <nav class=\"container navbar navbar-expand-lg navbar-light bg-light\">\n            <a class=\"logo navbar-brand\" href=\"#\"></a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"menu collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/news\" routerLinkActive=\"active\">News</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/games\" routerLinkActive=\"active\">Buy pro</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/contacts\" routerLinkActive=\"active\">Contact</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n</div>\n\n<article>\n    <router-outlet></router-outlet>\n</article>\n\n<footer>\n    <div class=\"container\">\n        <p>Copyright © 2018 heroku-board-games.herokuapp.com</p>\n    </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer p {\n  margin-top: calc(100vh + 10px);\n  padding: 10px;\n  margin: 20px 0 0 0;\n  font-size: 80%;\n}\nbutton {\n  box-shadow: none !important;\n}\n.header {\n  margin: 0;\n  padding: 0;\n  background-color: #17a2b8;\n  border-top: 1px solid #17a2b8;\n}\n.header .top {\n  width: 100%;\n  margin-top: 10px;\n  background-color: #ffffff;\n}\n.header .top:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.header .top .navbar {\n  padding-top: 0;\n  padding-bottom: 0;\n  background-color: white !important;\n  position: relative;\n}\n.header .top .navbar .logo {\n  width: 250px;\n  height: 84px;\n  margin: 0;\n  padding: 0;\n  background: url(\"logo.png\") no-repeat top center scroll;\n  background-size: cover;\n}\n.header .top .navbar .menu {\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n}\n.header .top .navbar .menu ul li {\n  padding-left: 20px;\n}\n.header .top .navbar .menu ul li a {\n  text-transform: uppercase;\n  color: #666666;\n}\n.header .top .navbar .menu ul li a:hover {\n  color: #17a2b8;\n}\n.header .top .navbar .menu ul li a:active {\n  color: #17a2b8 !important;\n}\n/*rules*/\n@media screen and (max-width: 992px) {\n  .menu {\n    position: static !important;\n  }\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_http_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http.user.service */ "./src/app/services/http.user.service.ts");
/* harmony import */ var _games_games_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.module */ "./src/app/games/games.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/broadcast.service */ "./src/app/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_8__["ContactsComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _games_games_module__WEBPACK_IMPORTED_MODULE_5__["GamesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_http_user_service__WEBPACK_IMPORTED_MODULE_4__["HttpUserService"], _services_broadcast_service__WEBPACK_IMPORTED_MODULE_10__["BroadcastService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <div class=\"contacts\">\n  <div class=\"map col-md-8\">\n\n  </div>\n\n  <div class=\"contact col-md-4\">\n    <h2>Contact us</h2>\n\n    <div class=\"tel\">\n      <p>093 172 24 01</p>\n      <p>097 019 56 73</p>\n    </div>\n\n    <div>\n      <p><i class=\"material-icons\">email</i> board_game@gmail.com</p>\n    </div>\n\n    <div>\n      <h5>Our address</h5>\n      <p>Dnepr, str. Rabochaya, 14</p>\n      <p>(entrance from the yard)</p>\n    </div>\n\n    <div>\n      <h5>Schedule of our shop</h5>\n      <p>Monday - Thursday: 10:00 - 21:00</p>\n      <p>Friday - Sunday: 10:00 - 22:00</p>\n    </div>\n\n    <div>\n      <h5>Phones</h5>\n      <p>+38 (093) 172 24 01 - Life </p>\n      <p>+38 (097) 019 56 73 - Kyivstar</p>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.less":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contacts {\n  margin-top: 30px;\n}\n.contacts:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.contacts .map {\n  width: 100%;\n  height: 600px;\n  background: url('map.jpg') no-repeat top center scroll;\n  background-size: cover;\n  float: right;\n}\n.contacts .contact {\n  padding-top: 30px;\n  float: left;\n}\n.contacts .contact h2 {\n  font-weight: bold;\n  color: #666666;\n}\n.contacts .contact div {\n  margin-top: 30px;\n}\n.contacts .contact div h5 {\n  color: #666666;\n  font-weight: bold;\n}\nhr {\n  margin: 0;\n  height: 10px;\n  background-color: #17a2b8;\n}\n/*rules*/\n@media screen and (max-width: 992px) {\n  .menu {\n    position: static !important;\n  }\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.less */ "./src/app/contacts/contacts.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/games/games-list/games-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/games/games-list/games-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"search\">\n    <div class=\"container\">\n        <form>\n            <input type=\"text\" placeholder=\"search game\" [(ngModel)]=\"search\" name = \"name\" #name = \"ngModel\" (keyup) = \"getGames()\">\n            <button (click) = \"getGames()\">\n                <i class=\"material-icons\">\n                    search\n                </i>\n            </button>\n        </form>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row  position-relative\">\n        <app-user (userEvent)=\"receiveUser($event)\"></app-user>\n        <div class=\"games col-8 col-lg-9\">\n            <div class=\"row\">\n                <div class=\"item col-lg-6\" *ngFor=\"let item of games\">\n                    <!--this part of code not for edit-->\n                    <div *ngIf=\"!item.edit\">\n                        <div class=\"img\">\n                            <img src=\"./assets/img/{{item.img}}\" alt=\"\" class=\"rounded mx-auto d-block\">\n                        </div>\n                        <div class=\"info\">\n                            <h4 class=\"title\">{{item.title}}</h4>\n                            <p class=\"description\">This interesting game will help you have fun in any party...\n                                <a class=\"btn btn-link\"data-toggle=\"collapse\" href=\"#collapse{{item.index}}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                                    more\n                                </a>\n                            </p>\n                            <div class=\"collapse\" id=\"collapse{{item.index}}\">\n                                <div class=\"card card-body\">{{item.description}}</div>\n                            </div>\n                            <div class=\"price\">Price:\n                                <span>${{item.price}}</span>\n                                <button class=\"add btn btn-info btn-sm\" *ngIf=\"correntUser.role\" (click)=\"addToCart(item)\">\n                                    <i class=\"material-icons\">add_shopping_cart</i>\n                                </button>\n                            </div>\n\n                            <div class=\"admin-panel\" *ngIf=\"correntUser.role=='Administrator'\">\n                                <span>Admin options:</span>\n                                <button class=\"delete btn btn-info btn-sm\" (click)=\"deleteGame(item._id)\">\n                                    <i class=\"material-icons\">delete</i>\n                                </button>\n                                <button class=\"edit btn btn-info btn-sm\" (click)=\"editGame(item)\">\n                                    <i class=\"material-icons\">edit</i>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <!--this part of code for edit-->\n                    <div *ngIf=\"item.edit\">\n                        <form #editGameForm=\"ngForm\">\n                            <div class=\"img\">\n                            <img src=\"./assets/img/{{tmpGame.img}}\" alt=\"\" class=\"rounded mx-auto d-block\">\n                        </div>\n                            <div class=\"info\">\n                                * <input type=\"text\" [(ngModel)]=\"tmpGame.title\" name = \"title\" maxlength=\"20\" minlength=\"3\" required >\n                                <p class=\"description\">This interesting game will help you have fun in any party...\n                                </p>\n                                <textarea [(ngModel)]=\"tmpGame.description\" name = \"description\"></textarea>\n\n\n                                <div class=\"price\">Price:\n                                    <span>\n                                        * <input type=\"text\" [(ngModel)]=\"tmpGame.price\" name = \"price\" pattern=\"^\\d*\\.?\\d{2}$\" required>\n                                    </span>\n                                </div>\n\n                                <div class=\"admin-panel\">\n                                    <button class=\"delete btn btn-info btn-sm\" (click)=\"cancelEditGame(item.index)\">\n                                        <i class=\"material-icons\">close</i>\n                                    </button>\n                                    <button class=\"edit btn btn-info btn-sm\" (click)=\"acceptEditGame()\" [disabled]=\"!editGameForm.form.valid\">\n                                        <i class=\"material-icons\">check</i>\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n                <!--this part of code for create-->\n                <div *ngIf=\"correntUser.role=='Administrator'\" class=\"item col-lg-6\">\n                    <form #createGameForm=\"ngForm\">\n                        <div class=\"img\">\n                            <img src=\"./assets/img/{{addGame.img}}\" alt=\"\" class=\"rounded mx-auto d-block\">\n                        </div>\n                        <div class=\"info\">\n                            * <input type=\"text\" [(ngModel)]=\"addGame.title\" name = \"title\" placeholder=\"Add title...\" maxlength=\"20\" minlength=\"3\" required >\n                            <p class=\"description\">This interesting game will help you have fun in any party...\n                            </p>\n\n                            <textarea [(ngModel)]=\"addGame.description\" name = \"description\" placeholder=\"Add description...\"></textarea>\n\n                            <div class=\"price\">\n                                <span>\n                                    * <input type=\"text\" [(ngModel)]=\"addGame.price\" name = \"price\" placeholder=\"Add price...\" pattern=\"^\\d*\\.?\\d{2}$\" required>\n                                </span>\n                            </div>\n\n                            <div class=\"admin-panel\">\n                                <button class=\"delete btn btn-info btn-sm\" (click)=\"cancelAddGame()\">\n                                    <i class=\"material-icons\">close</i>\n                                </button>\n                                <button class=\"edit btn btn-info btn-sm\" (click)=\"acceptAddGame(addGame)\" [disabled]=\"!createGameForm.form.valid\">\n                                    <i class=\"material-icons\">check</i>\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/games/games-list/games-list.component.less":
/*!************************************************************!*\
  !*** ./src/app/games/games-list/games-list.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  background-color: #17a2b8;\n}\n.search form {\n  width: 100%;\n  display: inline-block;\n  margin: 10px auto;\n  border-radius: 5px;\n  background: white;\n  padding: 0 10px 0 15px;\n  line-height: 0;\n}\n.search form input,\n.search form select,\n.search form button {\n  border: none;\n  outline: inherit;\n  background: none;\n  font-size: 120%;\n  padding: 5px;\n}\n.search form input {\n  width: 90%;\n  display: inline-table;\n}\n.search form select {\n  border-right: 1px solid grey;\n  border-left: 1px solid grey;\n  color: grey;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search form button {\n  float: right;\n  padding: 0;\n  cursor: pointer;\n  color: #666666;\n}\n.search form button:active {\n  color: #333333;\n}\n.search form button i {\n  margin-top: 5px;\n}\n.games {\n  margin: 10px 0;\n  padding: 5px 2px 5px 15px;\n}\n.games .item {\n  margin-right: 0px;\n  border-radius: 5px;\n  padding: 2px;\n  border: 1px solid #17a2b8 !important;\n}\n.games .item:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.games .item .img {\n  padding: 5px;\n  float: left;\n}\n.games .item .info {\n  width: 65%;\n  float: left;\n  padding: 5px;\n}\n.games .item .info input,\n.games .item .info textarea {\n  border: 1px solid #17a2b8 !important;\n}\n.games .item .info .price {\n  margin-top: 15px;\n}\n.games .item .info .price:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.games .item .info .price span {\n  font-weight: bold;\n}\n.games .item .info .price button {\n  margin-top: -10px;\n  padding-bottom: 0;\n  float: right;\n}\n.games .item .info .admin-panel {\n  margin-top: 10px;\n  padding-top: 8px;\n  border-radius: 5px;\n}\n.games .item .info .admin-panel:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.games .item .info .admin-panel button {\n  margin: -8px 0 2px 5px;\n  padding-bottom: 0;\n  float: right;\n}\n.games .add-game {\n  margin-top: 2px;\n  padding: 15px 25px 5px 25px;\n  border-radius: 5px;\n  font-weight: bold;\n  border: 1px solid #17a2b8 !important;\n}\n.games .add-game:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.games .add-game button {\n  margin: -8px 0 2px 5px;\n  padding-bottom: 0;\n  float: right;\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/games/games-list/games-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/games/games-list/games-list.component.ts ***!
  \**********************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/broadcast.service */ "./src/app/services/broadcast.service.ts");
/* harmony import */ var _services_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game */ "./src/app/services/game.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesListComponent = /** @class */ (function () {
    function GamesListComponent(service, broadcastService) {
        this.service = service;
        this.broadcastService = broadcastService;
        this.tmpGame = new _services_game__WEBPACK_IMPORTED_MODULE_3__["Game"]("", "", "", "", "", "", "");
        this.search = "";
        this.addGame = new _services_game__WEBPACK_IMPORTED_MODULE_3__["Game"]("", "", "", "", "default.jpg", "", "");
    }
    GamesListComponent.prototype.receiveUser = function ($event) {
        this.correntUser = $event;
    };
    GamesListComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    //add chosen game to cart
    GamesListComponent.prototype.addToCart = function (item) {
        this.broadcastService.setResult(item);
    };
    //HTTP REQUESTS (get, post, update, delete)
    //http get any game
    GamesListComponent.prototype.getGames = function () {
        var _this = this;
        this.service.getGames(this.search).then(function (games) {
            _this.games = games;
        }, function (error) { return _this.errorMessage = error; });
    };
    //http create new game
    GamesListComponent.prototype.createGame = function () {
        var _this = this;
        this.service.createGame(this.addGame, this.correntUser.token).then(function (games) {
            _this.games = games;
            _this.addGame = new _services_game__WEBPACK_IMPORTED_MODULE_3__["Game"]("", "", "", "", "default.jpg", "", "");
        }, function (error) { return _this.errorMessage = error; });
    };
    //http update game
    GamesListComponent.prototype.updateGame = function () {
        var _this = this;
        this.service.updateGame(this.tmpGame, this.correntUser.token).then(function (games) {
            _this.games = games;
            _this.games[_this.tmpGame.index].edit = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    //http delete game
    GamesListComponent.prototype.deleteGame = function (id) {
        var _this = this;
        this.service.deleteGame(id, this.correntUser.token).then(function (games) {
            _this.games = games;
        }, function (error) { return _this.errorMessage = error; });
    };
    //edit game into form
    GamesListComponent.prototype.editGame = function (item) {
        if (this.tmpGame.title) {
            this.games[this.tmpGame.index].edit = false;
        }
        for (var key in item) {
            this.tmpGame[key] = item[key];
        }
        this.games[item.index].edit = true;
    };
    //ADMIN OPTIONS
    GamesListComponent.prototype.acceptEditGame = function () {
        this.updateGame();
    };
    GamesListComponent.prototype.cancelEditGame = function (index) {
        this.games[index].edit = false;
    };
    GamesListComponent.prototype.acceptAddGame = function (item) {
        this.createGame();
    };
    GamesListComponent.prototype.cancelAddGame = function () {
        this.addGame = new _services_game__WEBPACK_IMPORTED_MODULE_3__["Game"]("", "", "", "", "default.jpg", "", "");
    };
    GamesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games-list',
            template: __webpack_require__(/*! ./games-list.component.html */ "./src/app/games/games-list/games-list.component.html"),
            styles: [__webpack_require__(/*! ./games-list.component.less */ "./src/app/games/games-list/games-list.component.less")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"]])
    ], GamesListComponent);
    return GamesListComponent;
}());



/***/ }),

/***/ "./src/app/games/games.module.ts":
/*!***************************************!*\
  !*** ./src/app/games/games.module.ts ***!
  \***************************************/
/*! exports provided: GamesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesModule", function() { return GamesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games/games-list/games-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/games/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GamesModule = /** @class */ (function () {
    function GamesModule() {
    }
    GamesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_games_list_games_list_component__WEBPACK_IMPORTED_MODULE_3__["GamesListComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]]
        })
    ], GamesModule);
    return GamesModule;
}());



/***/ }),

/***/ "./src/app/games/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/games/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aside col-4 col-lg-3\">\n    <form class=\"logForm panel\" *ngIf=\"showLogForm\" [formGroup] = \"logForm\" novalidate>\n        <div class=\"well\">\n\n            <div class=\"form-group\">\n                <label for=\"email\">Email *</label>\n                <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"name@address.com\" required />\n\n                <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                    {{ formErrors.email }}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"password\">Password *</label>\n                <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" required/>\n\n                <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                    {{ formErrors.password }}\n                </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-info btn-sm\" [disabled]=\"!logForm.valid\" (click)=\"show(false,true,false,'log')\">\n                Log in\n            </button>\n\n        </div>\n    </form>\n\n    <form class=\"updateForm panel\" *ngIf=\"showUpdateForm\" [formGroup] = \"updateForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n        <div class=\"well\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name *</label>\n                <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\" required />\n\n                <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\n                    {{ formErrors.name }}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"email\">Email *</label>\n                <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"name@address.com\" required />\n\n                <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\n                    {{ formErrors.email }}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"password\">Password *</label>\n                <input id=\"password\" type=\"password\" class=\"form-control\" formControlName=\"password\" required/>\n\n                <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\n                    {{ formErrors.password }}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"phone\">Phone</label>\n                <input id=\"phone\" type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"+38 (099) 999 99 99\"/>\n\n                <div *ngIf=\"formErrors.phone\" class=\"alert alert-danger\">\n                    {{ formErrors.phone }}\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"role\">Role *</label>\n                <select id=\"role\" class=\"form-control\" formControlName=\"role\" (change)=\"checkAdmin()\" required >\n                    <option *ngFor=\"let r of roles\" [value]=\"r\">{{r}}</option>\n                </select>\n\n                <div *ngIf=\"formErrors.role\" class=\"alert alert-danger\">\n                    {{ formErrors.role }}\n                </div>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"checkAdminCode\">\n                <label for=\"code\">Code *</label>\n                <input id=\"code\" type=\"text\" class=\"form-control\" formControlName=\"code\" required />\n\n                <div *ngIf=\"formErrors.code\" class=\"alert alert-danger\">\n                    {{ formErrors.code }}\n                </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-info btn-sm\" [disabled]=\"!updateForm.valid\" (click)=\"show(false,true,false,'update')\">\n                Accept\n            </button>\n\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"show(false,true,false,'cancel')\">\n                Cancel\n            </button>\n        </div>\n    </form>\n\n\n    <div class=\"cart\" *ngIf=\"showCart\">\n        <div class=\"login\">\n            <h6 class=\"userName\">Hello, <span (click)=\"show(false,false,true,'updateForm')\">{{user.name}}</span></h6>\n            <button class=\"btn btn-outline-info btn-sm\" (click)=\"show(true,false,false, 'logout')\">Log out</button>\n        </div>\n        <p>You can change your current account, click to your name</p>\n\n        <div class=\"list-group\">\n            <li href=\"#\" class=\"list-group-item list-group-item-info\">\n                Shopping cart\n                <i class=\"material-icons\">shopping_cart</i>\n            </li>\n            <li class=\"list-group-item\" *ngFor=\"let item of itemList\">\n                {{item.title}}\n                <input type=\"button\" value=\"✖\" (click)=\"deleteItem(item)\">\n            </li>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/games/user/user.component.less":
/*!************************************************!*\
  !*** ./src/app/games/user/user.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aside {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 15px;\n  padding: 0 0 0 15px;\n}\n.aside .logForm,\n.aside .updateForm,\n.aside .cart {\n  border-radius: 5px;\n  padding: 5px;\n  border: 1px solid #17a2b8 !important;\n}\n.aside .logForm input,\n.aside .updateForm input,\n.aside .cart input,\n.aside .logForm select,\n.aside .updateForm select,\n.aside .cart select {\n  box-shadow: none !important;\n  border: 1px solid #17a2b8 !important;\n}\n.aside .logForm button,\n.aside .updateForm button,\n.aside .cart button {\n  box-shadow: none !important;\n  margin: 5px;\n}\n.aside .cart .login {\n  margin-top: 10px;\n}\n.aside .cart .login:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.aside .cart .login .userName {\n  margin-left: 5px;\n  display: inline-table;\n  float: left;\n}\n.aside .cart .login .userName span {\n  font-weight: bold;\n  cursor: pointer;\n}\n.aside .cart .login .userName span:hover {\n  text-decoration: underline;\n}\n.aside .cart .login button {\n  float: right;\n  margin-top: -10px;\n}\n.aside .cart p {\n  padding: 0 20px;\n  text-align: center;\n}\n.aside .cart li i {\n  font-size: 180%;\n  float: right;\n  margin-top: -5px;\n}\n.aside .cart li input {\n  margin: 0;\n  padding: 0;\n  border: none !important;\n  font-size: 20px;\n  background: none;\n  cursor: pointer;\n  float: right;\n  color: #666666;\n  border: 1px solid #666666;\n}\n/*for error*/\n.ng-valid[required],\n.ng-valid.required {\n  border-bottom: 3px solid mediumseagreen;\n}\n.ng-untouched[required] {\n  border: 1px solid gainsboro;\n  box-shadow: none !important;\n}\n.ng-invalid:not(form) {\n  border-bottom: 3px solid red;\n}\ninput:focus {\n  border: 1px solid grey;\n}\n.alert-danger {\n  text-align: center;\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/games/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/games/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user */ "./src/app/services/user.ts");
/* harmony import */ var _services_http_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.user.service */ "./src/app/services/http.user.service.ts");
/* harmony import */ var _services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/broadcast.service */ "./src/app/services/broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    /*---------CART---------*/
    function UserComponent(fb, service, broadcast) {
        var _this = this;
        this.fb = fb;
        this.service = service;
        this.broadcast = broadcast;
        this.showLogForm = true;
        this.showCart = false;
        this.showUpdateForm = false;
        this.user = new _services_user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "", "", "", "");
        this.token = 0;
        this.roles = ["Guest", "Client", "Administrator"];
        this.userEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemList = [];
        // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
        this.formErrors = {
            "name": "",
            "email": "",
            "password": "",
            "phone": "",
            "role": "",
            "code": ""
        };
        // Объект с сообщениями ошибок
        this.validationMessages = {
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
            "phone": {
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
        /*---------check admin---------*/
        this.checkAdminCode = false;
        this.broadcast.subscriber()
            .subscribe(function (res) {
            var item = { _id: res._id, title: res.title };
            var toString = JSON.stringify(_this.itemList);
            if (toString.indexOf(res._id) == -1)
                _this.itemList.push(item);
        });
    }
    UserComponent.prototype.show = function (log, cart, update, form) {
        switch (form) {
            case "logout"://user log out and create user form
                this.user = new _services_user__WEBPACK_IMPORTED_MODULE_2__["User"]("", "", "", "", "", "");
                this.createUserForm();
                this.sentUser();
                this.showLogForm = log;
                this.showCart = cart;
                this.showUpdateForm = update;
                this.itemList = [];
                break;
            case "log"://log in
                this.addUser(this.logForm.value, log, cart, update); //add new user to base
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
    };
    UserComponent.prototype.sentUser = function () {
        this.user.token = this.token;
        this.userEvent.emit(this.user);
    };
    UserComponent.prototype.deleteItem = function (item) {
        console.log(this.itemList.indexOf(item));
        this.itemList.splice(this.itemList.indexOf(item), 1);
    };
    UserComponent.prototype.ngOnInit = function () {
        this.createUserForm();
        this.sentUser();
    };
    /*---------log form---------*/
    UserComponent.prototype.createUserForm = function () {
        var _this = this;
        this.logForm = this.fb.group({
            "email": [this.user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
                ]],
            "password": [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
        this.logForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange(data); });
        this.onValueChange();
    };
    UserComponent.prototype.onValueChange = function (data) {
        if (!this.logForm)
            return;
        var form = this.logForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    /*---------update form---------*/
    UserComponent.prototype.updateUserForm = function () {
        var _this = this;
        this.updateForm = this.fb.group({
            "name": [this.user.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[A-Za-z0-9\_]+$")
                ]],
            "email": [this.user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
                ]],
            "password": [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            "phone": [this.user.phone, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^$|[+](\\d{2} )[(](\\d{3})[)]( \\d{3})( \\d{2}){2}")
                ]],
            "role": [this.user.role, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            "code": [this.code, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^123$")]]
        });
        this.updateForm.valueChanges
            .subscribe(function (data) { return _this.onValueChange2(data); });
        this.onValueChange2();
    };
    UserComponent.prototype.onValueChange2 = function (data) {
        if (!this.updateForm)
            return;
        var form = this.updateForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            // form.get - получение элемента управления
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + " ";
                }
            }
        }
    };
    UserComponent.prototype.checkAdmin = function () {
        console.log(this.updateForm.valid);
        console.log(this.updateForm.value.role);
        if (this.updateForm.value.role == "Administrator") {
            this.code = "";
            this.updateCode();
            this.checkAdminCode = true;
        }
        else {
            this.code = "123";
            this.updateCode();
            this.checkAdminCode = false;
        }
    };
    UserComponent.prototype.updateCode = function () {
        this.updateForm.patchValue({ "code": this.code });
    };
    /*--------HTTP--------*/
    //LOGIN OR CREATE NEW USER
    UserComponent.prototype.addUser = function (user, log, cart, update) {
        var _this = this;
        console.log(this.token);
        this.service.addUser(user)
            .then(function (response) {
            if (response.status == 422)
                _this.formErrors.password = "wrong password";
            else {
                _this.user = response;
                _this.token = _this.user.token;
                _this.showLogForm = log;
                _this.showCart = cart;
                _this.showUpdateForm = update;
                _this.sentUser();
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    //GET CURRENT USER DATA
    UserComponent.prototype.getUser = function (log, cart, update) {
        var _this = this;
        console.log(this.token);
        this.service.getUser(this.token)
            .then(function (response) {
            if (response.status == 401)
                _this.formErrors.name = "authorization expired";
            else {
                _this.user = response;
                _this.updateUserForm();
                _this.showLogForm = log;
                _this.showCart = cart;
                _this.showUpdateForm = update;
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    //EDIT CURRENT USER
    UserComponent.prototype.updateUser = function (user, log, cart, update) {
        var _this = this;
        console.log(this.token);
        this.service.updateUser(user, this.token)
            .then(function (response) {
            if (response.status == 401)
                _this.formErrors.name = "authorization expired";
            else {
                _this.user = response;
                _this.showLogForm = log;
                _this.showCart = cart;
                _this.showUpdateForm = update;
                _this.sentUser();
            }
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "userEvent", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/games/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.less */ "./src/app/games/user/user.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_http_user_service__WEBPACK_IMPORTED_MODULE_3__["HttpUserService"], _services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <hr>\n    <div class=\"news\">\n        <div class=\"new\" *ngFor=\"let item of news\">\n            <img src=\"../../assets/img/{{item.img}}\" alt=\"...\">\n\n            <div class=\"current_new\">\n                <h5>{{item.title}}</h5>\n                <span class=\"description\">{{item.description}}</span>\n                <span class=\"date\"> - {{item.date}}</span>\n                <p class=\"content\">{{item.content}}</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/news/news.component.less":
/*!******************************************!*\
  !*** ./src/app/news/news.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news {\n  margin-top: 20px;\n}\n.news .new {\n  margin: 10px 0;\n  padding: 15px 0;\n  border-bottom: 2px solid #17a2b8;\n}\n.news .new:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n.news .new img {\n  float: left;\n  width: 25%;\n}\n.news .new .current_new {\n  padding-left: 1%;\n  width: 70%;\n  float: left;\n}\n.news .new .current_new h5,\n.news .new .current_new .description {\n  font-weight: bold;\n  color: #666666;\n}\nhr {\n  margin: 0;\n  height: 10px;\n  background-color: #17a2b8;\n}\n/*my mixings*/\n.after {\n  content: \".\";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n}\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(service) {
        this.service = service;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.service.getNews().then(function (news) { _this.news = news; }, function (error) { return _this.errorMessage = error; });
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.less */ "./src/app/news/news.component.less")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/services/broadcast.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/broadcast.service.ts ***!
  \***********************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this.result = {};
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BroadcastService.prototype.setResult = function (item) {
        this.searchEvent.emit(item);
    };
    BroadcastService.prototype.subscriber = function () {
        return this.searchEvent;
    };
    BroadcastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BroadcastService);
    return BroadcastService;
}());



/***/ }),

/***/ "./src/app/services/game.ts":
/*!**********************************!*\
  !*** ./src/app/services/game.ts ***!
  \**********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
var Game = /** @class */ (function () {
    function Game(id, title, description, price, img, edit, index) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.edit = edit;
        this.index = index;
    }
    return Game;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news */ "./src/app/services/news.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/app/services/game.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    //HTTP REQUESTS (get, post, update, delete)
    //get all the news
    HttpService.prototype.getNews = function () {
        return this.http.get("news/all")
            .toPromise()
            .then(this.extractNews);
        // .catch(this.handleError);
    };
    HttpService.prototype.extractNews = function (response) {
        var res = response.json();
        var news = [];
        for (var i = res.length - 1; i > -1; i--) {
            news.push(new _news__WEBPACK_IMPORTED_MODULE_2__["News"](res[i].id, res[i].title, res[i].description, res[i].date, res[i].content, res[i].img));
        }
        return news;
    };
    //http get any game
    HttpService.prototype.getGames = function (search) {
        return this.http.get("/games/search?title=" + search)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    };
    //http create new game
    HttpService.prototype.createGame = function (item, token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": token
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.post("/games/create", item, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    };
    //http update game
    HttpService.prototype.updateGame = function (item, token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": token
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.put("/games/update", item, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    };
    //http delete game
    HttpService.prototype.deleteGame = function (id, token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": token
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.delete("/games/delete/" + id, options)
            .toPromise()
            .then(this.extractGame)
            .catch(this.handleError);
    };
    HttpService.prototype.extractGame = function (response) {
        // console.log(response);
        var res = response.json();
        var games = [];
        for (var i = 0; i < res.length; i++) {
            games.push(new _game__WEBPACK_IMPORTED_MODULE_3__["Game"](res[i]._id, res[i].title, res[i].description, res[i].price, res[i].img, false, i));
        }
        return games;
    };
    HttpService.prototype.handleError = function (reason) {
        console.log(reason);
        var message;
        if (reason instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var errorData = reason.json().error || JSON.stringify(reason.json());
            message = reason.status + " - " + (reason.statusText || '') + " " + errorData;
        }
        else {
            message = reason.message ? reason.message : reason.toString();
        }
        console.error(message);
        return reason;
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/http.user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http.user.service.ts ***!
  \***********************************************/
/*! exports provided: HttpUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUserService", function() { return HttpUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpUserService = /** @class */ (function () {
    function HttpUserService(http) {
        this.http = http;
    }
    //LOGIN OR CREATE NEW USER
    HttpUserService.prototype.addUser = function (user) {
        return this.http.post("users", user)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    };
    //GET CURRENT USER DATA
    HttpUserService.prototype.getUser = function (token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": token
        });
        console.log(token);
        // создание опций для запроса
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get("user", options)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    };
    //EDIT CURRENT USER
    HttpUserService.prototype.updateUser = function (user, token) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Content-Type": "application/json",
            "Authorization": token
        });
        // создание опций для запроса
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.patch("users", user, options)
            .toPromise()
            .then(this.extractUser)
            .catch(this.handleError);
    };
    //COMMON FOR ALL OF REQUESTS
    HttpUserService.prototype.extractUser = function (response) {
        return response.json();
    };
    HttpUserService.prototype.handleError = function (reason) {
        console.log("*****error****");
        console.log(reason);
        var message;
        if (reason instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var errorData = reason.json().error || JSON.stringify(reason.json());
            message = reason.status + " - " + (reason.statusText || '') + " " + errorData;
        }
        else {
            message = reason.message ? reason.message : reason.toString();
        }
        console.error(message);
        return reason;
    };
    HttpUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpUserService);
    return HttpUserService;
}());



/***/ }),

/***/ "./src/app/services/news.ts":
/*!**********************************!*\
  !*** ./src/app/services/news.ts ***!
  \**********************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
var News = /** @class */ (function () {
    function News(id, title, description, date, content, img) {
        this._id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.content = content;
        this.img = img;
    }
    return News;
}());



/***/ }),

/***/ "./src/app/services/user.ts":
/*!**********************************!*\
  !*** ./src/app/services/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password, phone, role, token) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
        this.token = token;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web\Заказы\шаблоны\RedSkyline\game-shop\app-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map