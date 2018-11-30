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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detailed_detailed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailed/detailed.component */ "./src/app/detailed/detailed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'detailed/:id', component: _detailed_detailed_component__WEBPACK_IMPORTED_MODULE_3__["DetailedComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n</main>"

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
        this.title = 'rubicon-assignment';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _toggle_buttons_toggle_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-buttons/toggle-buttons.component */ "./src/app/toggle-buttons/toggle-buttons.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detailed_detailed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detailed/detailed.component */ "./src/app/detailed/detailed.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _toggle_buttons_toggle_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ToggleButtonsComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"],
                _detailed_detailed_component__WEBPACK_IMPORTED_MODULE_9__["DetailedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detailed/detailed.component.css":
/*!*************************************************!*\
  !*** ./src/app/detailed/detailed.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-back{\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 2rem;\r\n    z-index: 20;\r\n}\r\n\r\n.detailed-header{\r\n    width: 100%;\r\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);\r\n    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 90%);\r\n    position: relative;\r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n    margin-top: -5%;\r\n}\r\n\r\n.title{\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    z-index: 19;\r\n    padding: .5rem 1rem .5rem 1rem;\r\n    background-color: rgba(0,0,0, .6);\r\n    border-radius: 5px;\r\n}\r\n\r\n.detailed-header h2{\r\n    color: whitesmoke;\r\n}\r\n\r\n.overview{\r\n    width: 80%;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/detailed/detailed.component.html":
/*!**************************************************!*\
  !*** ./src/app/detailed/detailed.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary btn-back\" (click)=\"backClicked()\">Back</button>\r\n\r\n<div class=\"detailed-header\">\r\n    <img src=\"{{title?.image}}\" alt=\"\">\r\n    <div class=\"title\">\r\n        <h2>{{title?.name}}</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"overview\">\r\n    <h3>Overview</h3>\r\n    <p>\r\n        {{title.overview}}\r\n    </p>\r\n</div>"

/***/ }),

/***/ "./src/app/detailed/detailed.component.ts":
/*!************************************************!*\
  !*** ./src/app/detailed/detailed.component.ts ***!
  \************************************************/
/*! exports provided: DetailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedComponent", function() { return DetailedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shows_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shows.service */ "./src/app/services/shows.service.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailedComponent = /** @class */ (function () {
    function DetailedComponent(location, route, showsService, moviesService, stateService) {
        this.location = location;
        this.route = route;
        this.showsService = showsService;
        this.moviesService = moviesService;
        this.stateService = stateService;
    }
    DetailedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mode = this.stateService.getState().mode;
        console.log(this.mode);
        this.route.paramMap.subscribe(function (paramMap) {
            _this.titleId = paramMap.get("id");
            _this.getTitle();
        });
    };
    DetailedComponent.prototype.backClicked = function () {
        this.location.back();
    };
    DetailedComponent.prototype.getTitle = function () {
        if (this.mode == 2) {
            this.title = this.showsService.getShow(this.titleId);
        }
        else {
            this.title = this.moviesService.getMovie(this.titleId);
        }
    };
    DetailedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-detailed",
            template: __webpack_require__(/*! ./detailed.component.html */ "./src/app/detailed/detailed.component.html"),
            styles: [__webpack_require__(/*! ./detailed.component.css */ "./src/app/detailed/detailed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_shows_service__WEBPACK_IMPORTED_MODULE_3__["ShowsService"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            _services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]])
    ], DetailedComponent);
    return DetailedComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class^=\"header\"] {\r\n    width: 100%;\r\n    height: 45vh;\r\n    background-size: cover;\r\n    background-position: center;\r\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 40vh, 0 100%);\r\n    clip-path: polygon(0 0, 100% 0, 100% 40vh, 0 100%);\r\n    transition: all .8s ease-in;\r\n    position: relative;\r\n}\r\n\r\n.header-1{\r\n    background-image: url('movie-bg.jpg');\r\n}\r\n\r\n.header-2{\r\n    background-image: url('tv-bg-3.jpg');\r\n}\r\n\r\n.controls{\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n.search{\r\n    margin-top: 1rem;\r\n}\r\n\r\n.title-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 30px;\r\n        -ms-grid-columns: 1fr 20px 1fr;\r\n        grid-template-columns: repeat(2, 1fr);\r\n        grid-template-areas: \"no-results no-results\";\r\n\r\n    width:80%;\r\n    margin: 3rem auto 0 auto;\r\n}\r\n\r\napp-title{\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.no-results{\r\n    text-align: center;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 3;\r\n    grid-area: no-results;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-{{mode}}\">\n  <div class=\"controls\">\n    <app-toggle-buttons [mode]=\"mode\" (modeSelected)=\"setMode($event)\"></app-toggle-buttons>\n    <input (keyup)=\"onSearchInput()\" [(ngModel)]=\"searchText\" class=\"form-control mr-sm-2 search\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n  </div>\n</div>\n\n<div *ngIf=\"mode == 2\" class=\"title-container\">\n  <app-title (visited)=\"saveState()\" *ngFor=\"let show of shows | slice:0:10\" [title]=\"show\"></app-title>\n  <div class=\"no-results\" *ngIf=\"searchText\">\n    <p *ngIf=\"shows.length == 0\">\n      No results\n    </p>\n  </div>\n</div>\n\n<div *ngIf=\"mode == 1\" class=\"title-container\">\n  <app-title (visited)=\"saveState()\" *ngFor=\"let movie of movies | slice:0:10\" [title]=\"movie\"></app-title>\n  <div class=\"no-results\" *ngIf=\"searchText\">\n    <p *ngIf=\"movies.length == 0\">\n      No results\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/shows.service */ "./src/app/services/shows.service.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(showService, movieService, stateService) {
        this.showService = showService;
        this.movieService = movieService;
        this.stateService = stateService;
        this.mode = 2;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.prevState = this.stateService.getState();
        if (this.prevState.mode !== 0) {
            this.mode = this.prevState.mode;
        }
        if (this.prevState.searchText !== "" && this.prevState.searchText !== undefined) {
            if (this.prevState.searchText.length > 2) {
                this.searchText = this.prevState.searchText;
                this.getSearched();
            }
        }
        else {
            this.getTop();
        }
    };
    HomeComponent.prototype.getSearched = function () {
        var _this = this;
        this.showService.searchShows(this.searchText);
        this.showSub = this.showService
            .getShowsUpdateListener()
            .subscribe(function (showData) {
            _this.shows = showData;
        });
        this.movieService.searchMovies(this.searchText);
        this.movieSub = this.movieService
            .getMoviesUpdateListener()
            .subscribe(function (movieData) {
            _this.movies = movieData;
        });
    };
    HomeComponent.prototype.getTop = function () {
        var _this = this;
        this.showService.getTopShows();
        this.showSub = this.showService
            .getShowsUpdateListener()
            .subscribe(function (showData) {
            _this.shows = showData;
        });
        this.movieService.getTopMovies();
        this.movieSub = this.movieService
            .getMoviesUpdateListener()
            .subscribe(function (movieData) {
            _this.movies = movieData;
        });
    };
    HomeComponent.prototype.setMode = function (newMode) {
        this.mode = newMode;
    };
    HomeComponent.prototype.onSearchInput = function () {
        if (this.searchText.length > 2) {
            this.showService.searchShows(this.searchText);
            this.movieService.searchMovies(this.searchText);
        }
        else if (this.searchText.length === 2) {
            this.showService.getTopShows();
            this.movieService.getTopMovies();
        }
    };
    HomeComponent.prototype.saveState = function () {
        this.stateService.saveState(this.mode, this.searchText);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"], _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.movieData = new Array();
        this.moviesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MoviesService.prototype.getTopMovies = function () {
        var _this = this;
        this.http
            .get("https://api.themoviedb.org/3/movie/top_rated?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&page=1")
            .subscribe(function (data) {
            _this.movieData = new Array;
            _this.movies = data.results;
            _this.movies.forEach(function (movie) {
                var image;
                if (!movie.backdrop_path) {
                    image = "https://via.placeholder.com/300x170";
                }
                else {
                    image = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
                }
                _this.movieData.push({
                    name: movie.title,
                    image: image,
                    id: movie.id,
                    overview: movie.overview
                });
            });
            _this.moviesUpdated.next(_this.movieData);
        });
    };
    MoviesService.prototype.getMoviesUpdateListener = function () {
        return this.moviesUpdated.asObservable();
    };
    MoviesService.prototype.searchMovies = function (key) {
        var _this = this;
        this.http
            .get("https://api.themoviedb.org/3/search/movie?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&query=" + key + "&page=1")
            .subscribe(function (data) {
            _this.movieData = new Array;
            _this.movies = data.results;
            _this.movies.forEach(function (movie) {
                var image;
                if (!movie.backdrop_path) {
                    image = "https://via.placeholder.com/300x170";
                }
                else {
                    image = "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path;
                }
                _this.movieData.push({
                    name: movie.title,
                    image: image,
                    id: movie.id,
                    overview: movie.overview
                });
            });
            _this.moviesUpdated.next(_this.movieData);
        });
    };
    MoviesService.prototype.getMovie = function (id) {
        var movie = this.movieData.find(function (movie) { return movie.id == id; });
        console.log(movie);
        if (movie) {
            localStorage.setItem("name", movie.name);
            localStorage.setItem("image", movie.image);
            localStorage.setItem("id", movie.id);
            localStorage.setItem("overview", movie.overview);
        }
        else {
            movie = {
                name: localStorage.getItem("name"),
                image: localStorage.getItem("image"),
                id: localStorage.getItem("id"),
                overview: localStorage.getItem("overview")
            };
        }
        return movie;
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/services/shows.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/shows.service.ts ***!
  \*******************************************/
/*! exports provided: ShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsService", function() { return ShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowsService = /** @class */ (function () {
    function ShowsService(http) {
        this.http = http;
        this.showData = new Array();
        this.showsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ShowsService.prototype.getTopShows = function () {
        var _this = this;
        this.http
            .get("https://api.themoviedb.org/3/tv/top_rated?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&page=1")
            .subscribe(function (data) {
            _this.showData = new Array();
            _this.shows = data.results;
            _this.shows.forEach(function (show) {
                var image;
                if (!show.backdrop_path) {
                    image = "https://via.placeholder.com/500";
                }
                else {
                    image = "https://image.tmdb.org/t/p/w1280/" + show.backdrop_path;
                }
                _this.showData.push({
                    name: show.name,
                    image: image,
                    id: show.id,
                    overview: show.overview
                });
            });
            _this.showsUpdated.next(_this.showData);
        });
    };
    ShowsService.prototype.getShowsUpdateListener = function () {
        return this.showsUpdated.asObservable();
    };
    ShowsService.prototype.searchShows = function (key) {
        var _this = this;
        this.http
            .get("https://api.themoviedb.org/3/search/tv?api_key=a717575ad580b55684a6ab1b55b0b84a&language=en-US&query=" +
            key +
            "&page=1")
            .subscribe(function (data) {
            _this.showData = new Array();
            _this.shows = data.results;
            _this.shows.forEach(function (show) {
                var image;
                if (!show.backdrop_path) {
                    image = "https://via.placeholder.com/300x170";
                }
                else {
                    image = "https://image.tmdb.org/t/p/w1280/" + show.backdrop_path;
                }
                _this.showData.push({
                    name: show.name,
                    image: image,
                    id: show.id,
                    overview: show.overview
                });
            });
            _this.showsUpdated.next(_this.showData);
        });
    };
    ShowsService.prototype.getShow = function (id) {
        var show = this.showData.find(function (show) { return show.id == id; });
        if (show) {
            localStorage.setItem("name", show.name);
            localStorage.setItem("image", show.image);
            localStorage.setItem("id", show.id);
            localStorage.setItem("overview", show.overview);
        }
        else {
            show = {
                name: localStorage.getItem("name"),
                image: localStorage.getItem("image"),
                id: localStorage.getItem("id"),
                overview: localStorage.getItem("overview")
            };
        }
        return show;
    };
    ShowsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShowsService);
    return ShowsService;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
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

var StateService = /** @class */ (function () {
    function StateService() {
        this.state = { mode: 0, searchText: "" };
    }
    StateService.prototype.saveState = function (mode, searchText) {
        this.state.mode = mode;
        this.state.searchText = searchText;
    };
    StateService.prototype.getState = function () {
        return this.state;
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/title/title.component.css":
/*!*******************************************!*\
  !*** ./src/app/title/title.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title{\r\n    text-align: center;\r\n}\r\n\r\n.mb-3{\r\n    margin: 0 !important;\r\n}\r\n\r\n.card{\r\n    -webkit-animation: appear .7s ease-in;\r\n            animation: appear .7s ease-in;\r\n}\r\n\r\n.card:hover{\r\n    cursor: pointer;\r\n}\r\n\r\nimg{\r\n    transition: all .2s ease-in;\r\n}\r\n\r\nimg:hover{\r\n    -webkit-filter: brightness(1.2);\r\n            filter: brightness(1.2);\r\n}\r\n\r\na:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n@-webkit-keyframes appear {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes appear {\r\n    0% {\r\n        opacity: 0;\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a (click) = \"saveState()\" routerLink=\"/detailed/{{title.id}}\">\n  <div class=\"card text-white bg-secondary mb-3\">\n    <img class=\"card-img-top\" src=\"{{title.image}}\" alt=\"Image\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{title.name}}</h5>\n    </div>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.visited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent.prototype.saveState = function () {
        this.visited.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TitleComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TitleComponent.prototype, "visited", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/toggle-buttons/toggle-buttons.component.css":
/*!*************************************************************!*\
  !*** ./src/app/toggle-buttons/toggle-buttons.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.col-sm-12{\r\n    width: 100%;\r\n}\r\n\r\n.btn-group{\r\n    width: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/toggle-buttons/toggle-buttons.component.html":
/*!**************************************************************!*\
  !*** ./src/app/toggle-buttons/toggle-buttons.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n  <label (click)=\"setMode(1)\" class=\"btn btn-secondary {{buttonMovies}}\">\n    <input type=\"radio\" checked> Movies\n  </label>\n  <label (click)=\"setMode(2)\" class=\"btn btn-secondary {{buttonShows}}\">\n    <input type=\"radio\"> TV Shows\n  </label>\n</div>"

/***/ }),

/***/ "./src/app/toggle-buttons/toggle-buttons.component.ts":
/*!************************************************************!*\
  !*** ./src/app/toggle-buttons/toggle-buttons.component.ts ***!
  \************************************************************/
/*! exports provided: ToggleButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsComponent", function() { return ToggleButtonsComponent; });
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

var ToggleButtonsComponent = /** @class */ (function () {
    function ToggleButtonsComponent() {
        this.modeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonShows = "";
        this.buttonMovies = "";
    }
    ToggleButtonsComponent.prototype.ngOnInit = function () {
        if (this.mode === 1) {
            this.buttonMovies = "active";
            this.buttonShows = "";
        }
        else {
            this.buttonMovies = "";
            this.buttonShows = "active";
        }
    };
    ToggleButtonsComponent.prototype.setMode = function (mode) {
        this.modeSelected.emit(mode);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToggleButtonsComponent.prototype, "modeSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToggleButtonsComponent.prototype, "mode", void 0);
    ToggleButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle-buttons',
            template: __webpack_require__(/*! ./toggle-buttons.component.html */ "./src/app/toggle-buttons/toggle-buttons.component.html"),
            styles: [__webpack_require__(/*! ./toggle-buttons.component.css */ "./src/app/toggle-buttons/toggle-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleButtonsComponent);
    return ToggleButtonsComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! C:\Users\Faris\WebstormProjects\rubicon-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map