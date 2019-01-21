webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__ = __webpack_require__("./src/app/resume/resume.component.ts");



// import { ResumeComponent } from './resume/resume.component';
var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    // { 
    //   path: 'contact',
    //    component: PortfolioComponent 
    //   },
    {
        path: 'resume',
        component: __WEBPACK_IMPORTED_MODULE_2__resume_resume_component__["a" /* ResumeComponent */]
    }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, {
    useHash: true
});


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n    overflow: hidden;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n  <div class=\"\">\n <router-outlet></router-outlet>\n    </div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__ = __webpack_require__("./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resume_resume_component__ = __webpack_require__("./src/app/resume/resume.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_10__resume_resume_component__["a" /* ResumeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"wrapper\"> -->\n<div class=\"banner1\">\n  <div class=\"banner-box\">\n    <div class=\"border\">\n      <!-- <span class=\"banner-text\" fxLayout=\"row\" fxLayoutGap=\"10px\" flex-basis flex-wrap> Home </span> -->\n      \n    </div>\n  </div>\n</div>\n\n<div class=\"text\" fxLayout=\"row\" fxLayoutGap=\"10px\" flex-basis flex-wrap>\n  <h3> I'm a front-end developer </h3>\n  <!-- <p>\n    Paragraph\n  </p> -->\n</div>\n\n<div class=\"banner2\">\n  <div class=\"banner-box\">\n    <div class=\"border\">\n      <!-- <span class=\"banner-text\" fxLayout=\"row\" fxLayoutGap=\"10px\" flex-basis flex-wrap> Part 2 </span> -->\n    </div>\n  </div>\n</div>\n\n<div class=\"text-box\" fxLayout=\"column\" fxLayoutGap=\"10px\" flex-basis flex-wrap>\n<div class=\"text\" >\n  <h3> About </h3>\n  <p>\n    I enjoy messing around in Photoshop and eating spicy food.\n  </p>\n</div>\n</div>\n\n<div class=\"banner3\">\n  <div class=\"banner-box\">\n    <div class=\"border\">\n      <!-- <span class=\"banner-text\" fxLayout=\"row\" fxLayoutGap=\"10px\" flex-basis flex-wrap> Part 3 </span> -->\n    </div>\n  </div>\n</div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lato\");\n@import url(\"https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding\");\nbody, html {\n  height: 100%;\n  font-family: 'Lato', sans-serif;\n  color: #777; }\n.banner1,\n.banner2,\n.banner3 {\n  position: relative;\n  opacity: 0.65;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.banner1 {\n  min-height: 600px;\n  background-image: url('background-1.b5eb572054c0a2c10a04.jpg'); }\n.banner2 {\n  min-height: 400px;\n  background-image: url(\"https://i.pinimg.com/originals/88/8b/33/888b339fe0b0f8cb49203ad77f48ebd5.jpg\"); }\n.banner3 {\n  min-height: 400px;\n  background-image: url(\"https://wallpapersite.com/images/wallpapers/memory-1920x1200-forest-minimal-hd-9101.jpg\"); }\n.caption {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  color: #000; }\n.caption span.border {\n  background-color: #111;\n  color: #fff;\n  padding: 18px;\n  font-size: 25px;\n  letter-spacing: 10px; }\nh3 {\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  font: 20px \"Lato\", sans-serif;\n  color: #111;\n  text-align: center; }\n.banner-text {\n  background-color: #222;\n  padding: 30px;\n  font-size: 25px;\n  color: #fff;\n  text-transform: uppercase;\n  font: 20px \"Lato\", sans-serif;\n  text-align: center; }\n.text-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: 100%;\n  position: relative; }\n.text {\n  position: relative;\n  color: #777;\n  background-color: #fff;\n  margin: 20px; }\n.card {\n  font-family: 'Nanum Gothic Coding', monospace;\n  color: #7cacf9;\n  background-color: #2b2f35;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.tab {\n  background-color: #444;\n  padding-left: 10px; }\n.view {\n  padding: 0px 10px 10px 10px; }\nh1 {\n  color: #fff;\n  font-weight: bold;\n  font-size: 15px; }\n.location {\n  color: #ad894a;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\nli {\n  padding: 5px;\n  list-style-type: circle; }\n.brackets {\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"header\">\n\t\t<h1 class=\"title\">Kao Smith</h1>\n      <ul class=\"main-nav\">\n          <li *ngFor=\"let tab of tabs\">\n            <a href=\"#\" routerLinkActive=\"active\" routerLink=\"/{{tab[0].route}}\">{{tab[0].name}}</a>\n          </li>\n      </ul>\n\t</div> \n    "

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Quicksand\");\n@import url(\"https://fonts.googleapis.com/css?family=Muli\");\nbody {\n  line-height: 1.6;\n  margin: 0;\n  min-height: 100vh; }\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.title {\n  font-family: 'Muli', sans-serif;\n  margin-left: 10px;\n  color: #fff;\n  font-weight: 100; }\nh2,\nh3,\na {\n  font-family: 'Quicksand', sans-serif;\n  color: #fff; }\na {\n  text-decoration: none; }\n.logo {\n  margin: 0;\n  font-size: 1.45em; }\n.logo a,\n.main-nav a {\n  padding: 10px 15px;\n  text-transform: uppercase;\n  text-align: center;\n  display: block; }\n.main-nav a {\n  color: #fff;\n  font-size: .99em; }\n.main-nav a:hover {\n  color: #718daa; }\n.header {\n  padding-top: .5em;\n  padding-bottom: .5em;\n  background-color: #222; }\n@media (min-width: 769px) {\n  .header,\n  .main-nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .header .header {\n      width: 100%;\n      max-width: 1150px; } }\n@media (min-width: 1025px) {\n  .header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'app';
        this.home = [
            {
                name: 'Home',
                route: 'home'
            }
        ];
        this.portfolio = [
            {
                name: 'Contact',
                route: 'contact'
            }
        ];
        this.resume = [
            {
                name: 'Resume',
                route: 'resume'
            }
        ];
        this.tabs = [
            this.home,
            this.resume,
            this.portfolio
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<div class=\"parallax\">\n    <div class=\"parallax__layer parallax__layer__0\">\n        <img src=\"../../assets/images/home/layer-1.png\" />\n    </div>\n    <div class=\"parallax__layer parallax__layer__1\">\n        <img src=\"../../assets/images/home/layer-2.png\" />\n    </div>\n    <div class=\"parallax__layer parallax__layer__2\">\n        <img src=\"../../assets/images/home/layer-3.png\" />\n    </div>\n    <div class=\"parallax__layer parallax__layer__3\">\n        <img src=\"../../assets/images/home/layer-4.png\" />\n    </div>\n    <div class=\"parallax__layer parallax__layer__4\">\n        <img src=\"../../assets/images/home/layer-5.png\" />\n    </div>\n    <!-- <div class=\"parallax__layer parallax__layer__5\">\n        <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_5.png\" />\n    </div>\n    <div class=\"parallax__layer parallax__layer__6\">\n        <img src=\"https://sam.beckham.io/images/articles/firewatch/layer_6.png\" />\n    </div> -->\n    <div class=\"parallax__cover\">\n            <div class=\"contact\">\n                    <a href=\"https://www.linkedin.com/in/kaosmith/\" target=\"_blank\">LinkedIn</a>\n                </div>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Quicksand\");\n.wrapper {\n  display: block;\n  margin: auto;\n  background-color: #000; }\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\na {\n  font-family: 'Quicksand', sans-serif;\n  margin: .5em;\n  font-size: 3em;\n  text-transform: uppercase;\n  color: #fff; }\n.parallax {\n  -webkit-perspective: 120px;\n          perspective: 120px;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  top: 0;\n  left: 50%;\n  right: 0;\n  bottom: 0; }\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n.parallax__layer img {\n    display: block;\n    position: absolute;\n    bottom: 0; }\n.parallax__cover {\n  background-color: #000;\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  height: 2000px;\n  z-index: 2; }\n.parallax__layer__0 {\n  -webkit-transform: translateZ(-300px) scale(4);\n          transform: translateZ(-300px) scale(4); }\n.parallax__layer__1 {\n  -webkit-transform: translateZ(-250px) scale(3.5);\n          transform: translateZ(-250px) scale(3.5); }\n.parallax__layer__2 {\n  -webkit-transform: translateZ(-200px) scale(3);\n          transform: translateZ(-200px) scale(3); }\n.parallax__layer__3 {\n  -webkit-transform: translateZ(-150px) scale(2.5);\n          transform: translateZ(-150px) scale(2.5); }\n.parallax__layer__4 {\n  -webkit-transform: translateZ(-100px) scale(2);\n          transform: translateZ(-100px) scale(2); }\n.parallax__layer__5 {\n  -webkit-transform: translateZ(-50px) scale(1.5);\n          transform: translateZ(-50px) scale(1.5); }\n.parallax__layer__6 {\n  -webkit-transform: translateZ(0px) scale(1);\n          transform: translateZ(0px) scale(1); }\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div class=\"columns\">\n<div class=\"left\">\n  <h3>Experience</h3>\n  <div class=\"card\">\n    <div class=\"tab\">\n      <h1>Angular 6 Front-end Developer</h1>\n    </div>\n    <div class=\"view\">\n      <h4>General Motors <span class=\"location\">Chandler, AZ</span></h4>\n      <ul>\n        <li>\n          Designed and developed proof of concept applications and cloning insourced web applications with a small team using Angular\n          5, Sass, FlexBox, Material Design, PrimeNg to quickly scaffold and create a modernized, responsive, fully-functional\n          application in the course of one-week sprints.\n        </li>\n        <li>\n          Integrated API endpoints with Swagger to be able to get, post and update information on Angular components.\n        </li>\n        <li>\n          Created API services to use as endpoints in integration in .NET\n        </li>\n        <li>\n          Debug and tested application cross-functionally to ensure scalability was not compromised through branch merging reviews\n          in TFS in both local dev and server prod environments.\n        </li>\n        <li>\n          Demo'd application progress and features, created user stories, tasks and assigned points accordingly in sprint reviews.\n        </li>\n        <li>\n          Measured proficiency in new language, tools and packages through weekly sprint burndown reviews and bug counts.\n        </li>\n        <li>\n          Created and tested unit tests with Jasmine and Karma and ensured all tests passed before delivery.\n        </li>\n      </ul>\n      <!-- <span class=\"brackets\">{{ '}' }} </span> -->\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"tab\">\n      <h1>.NET Developer</h1>\n    </div>\n    <div class=\"view\">\n        <h4>General Motors <span class=\"location\">Chandler, AZ</span></h4>\n    <ul>\n      <li>\n        Designed and developed proof of concept web applications with a small team using Angular2, Sass, FlexBox, Material Design,\n        PrimeNg to quickly scaffold and create a modernized, responsive, fully-functional application in the course of one-week\n        sprints.\n      </li>\n      <li>\n        Designed, developed and automated an internal developer application to dynamically track customer leads information through\n        a customized API which connects to a user-friendly and efficient graphical user interface.\n      </li>\n      <li>\n        Design, architected, developed, integrated and deployed an external-facing on-boarding application for new dealers looking\n        to participate in our Shop Click Drive program by following Agile SDLC best practices, adhering to coding patterns\n        and structures used on our team and fulfilling all business requirements using MVC and .NET.\n      </li>\n      <li>\n        Demo'd user story projects to requirements analysts, quality assurance, developers, IT managers and project managers to acquire\n        feedback on additional features and improvements before pushing to the release environment for business demo.\n      </li>\n      <li>\n        Tested pre-production code for quality to ensure the product met the critical requirements and acceptance criteria stated\n        from marketing teams and requirements analysts by documenting bugs, creating and running test cases.\n      </li>\n      <li>\n        Created, updated and closed tasks frequently in (TFS) Team Foundation Server to keep project visibility up to date and team\n        capacity transparent.\n      </li>\n    </ul>\n  </div>\n</div>\n</div>\n<div class=\"right\">\n  <div class=\"section\">\n  <h3>Skills</h3>\n  <ul class=\"tag\">\n    <li>Angular</li>\n    <li>HTML5</li>\n    <li>CSS3</li>\n    <li>Less</li>\n    <li>SASS</li>\n    <li>Flex</li>\n    <li>Node.js</li>\n    <li>Git</li>\n    <li>API</li>\n    <li>.NET C#</li>\n    <li>Photoshop</li>\n    <li>Material Design</li>\n    <li>Vanilla JavaScript</li>\n  </ul>\n</div>\n<div class=\"section\">\n  <h3>Tools</h3>\n  <ul class=\"tag\">\n    <li>BitBucket</li>\n    <li>MSDN</li>\n    <li>Swagger</li>\n    <li>GitHub</li>\n  </ul>\n</div>\n</div>\n</div>\n\n</div>\n\n<!-- Visual Studio style cards -->\n<!-- <div class=\"card\">\n    <div class=\"tab\">\n      <h1>Angular 6 Front-end Developer</h1>\n    </div>\n    <div class=\"view\">\n      <div class=\"location\" fxLayout=\"row\">\n        <p>General Motors</p>\n        <p>Chandler, AZ</p>\n        <span class=\"brackets\">{{ '{' }} </span>\n      </div>\n      <ul>\n        <li>\n          Designed and developed proof of concept applications and cloning insourced web applications with a small team using Angular\n          5, Sass, FlexBox, Material Design, PrimeNg to quickly scaffold and create a modernized, responsive, fully-functional\n          application in the course of one-week sprints.\n        </li>\n        <li>\n          Integrated API endpoints with Swagger to be able to get, post and update information on Angular components.\n        </li>\n        <li>\n          Created API services to use as endpoints in integration in .NET\n        </li>\n        <li>\n          Debug and tested application cross-functionally to ensure scalability was not compromised through branch merging reviews\n          in TFS in both local dev and server prod environments.\n        </li>\n        <li>\n          Demo'd application progress and features, created user stories, tasks and assigned points accordingly in sprint reviews.\n        </li>\n        <li>\n          Measured proficiency in new language, tools and packages through weekly sprint burndown reviews and bug counts.\n        </li>\n        <li>\n          Created and tested unit tests with Jasmine and Karma and ensured all tests passed before delivery.\n        </li>\n      </ul>\n      <span class=\"brackets\">{{ '}' }} </span>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/resume/resume.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding\");\n@import url(\"https://fonts.googleapis.com/css?family=Quicksand\");\n@import url(\"https://fonts.googleapis.com/css?family=Muli\");\nbody,\nhtml {\n  height: 100%; }\nh3 {\n  font-family: 'Quicksand', sans-serif;\n  margin: .5em;\n  font-size: 3em;\n  text-transform: uppercase; }\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh; }\n.columns {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n.left {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n.right {\n  width: 25%; }\n.section {\n  text-align: center; }\nul {\n  list-style-type: none; }\n.tag {\n  margin-bottom: 15px; }\n.tag > li {\n  font-family: 'Quicksand', sans-serif;\n  background-color: #14bb1c;\n  color: #dbdbdb;\n  padding: 10px;\n  list-style-type: none;\n  margin: 10px;\n  float: left;\n  font-size: 1.5em;\n  text-transform: uppercase; }\n.card {\n  padding: 0px 10px 10px 10px;\n  font-family: 'Quicksand', sans-serif; }\nh1 {\n  font-family: 'Quicksand', sans-serif;\n  color: #14bb1c;\n  font-weight: bold;\n  font-size: 1.5em; }\nh4 {\n  text-transform: uppercase;\n  color: #888;\n  margin: 0; }\n.location {\n  padding-left: 4px; }\nli {\n  padding: 5px;\n  list-style-type: circle; }\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map