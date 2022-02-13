"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let HomePage = class HomePage {
    constructor(router, ngFireAuth) {
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.loginObj = {
            username: '',
            password: ''
        };
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.ngFireAuth.signInWithEmailAndPassword(this.loginObj.username, this.loginObj.password);
                console.log(user);
                if (user.user.email) {
                    this.router.navigate(['/app-home']);
                }
                else {
                    alert('Login Failed');
                }
            }
            catch (error) {
                alert('Login Failed');
            }
        });
    }
    singup() {
        this.router.navigate(['/login']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-card class=\"bg_image\">\n    <ion-card-header >\n      <img src=\"assets/translate.png\" alt=\"true\" width=\"40\" height=\"40\" class=\"position\">\n      <table class=\"card_header\">\n        <tr><ion-card-title class=\"two\">Login to</ion-card-title></tr>\n        <tr><ion-card-title class=\"two\">your account</ion-card-title></tr>\n      </table>\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n      <ion-text class=\"seip1\">Enter your username and password to login</ion-text>\n\n\n      <ion-card-content class=\"rcorners\">\n\n        <ion-item>\n          <ion-input [(ngModel)]=\"loginObj.username\"  placeholder=\"Enter Your Username\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input [(ngModel)]=\"loginObj.password\"  placeholder=\"Enter Password\" type=\"password\"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n\n      <ion-button style=\"text-transform:none\" class=\"register\" (click)=\"login()\">Login</ion-button>\n\n      <div class=\"ion-text-center center card_header\">\n        <img src=\"assets/fingerprint.png\" alt=\"true\" width=\"40\" height=\"40\">\n      </div>\n\n      <div class=\"ion-text-center center\">\n        One touch login\n      </div>\n\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\">\n          By Login your agree to our T&C and Privacy Policy.\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center black-text\">\n          Havent got a UPay account ?\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\" (click)=\"singup()\">\n          Sing Up.\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\">\n          Explore App\n        </div>\n      </ion-col>\n     \n    </ion-row>\n    \n\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".bg_image {\n  background-image: url('bg.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n}\n\n.two {\n  color: white;\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ion-card {\n  flex-direction: column;\n}\n\n.seip1 {\n  color: white;\n  display: inline-block;\n  font-size: 11px;\n}\n\n.center {\n  color: white;\n  font-size: 11px;\n}\n\n.black-text {\n  color: black;\n  font-size: 12px;\n}\n\n.position {\n  float: right;\n}\n\n.card_header {\n  margin-top: 10%;\n}\n\n.rcorners {\n  border-radius: 25px;\n  background: white;\n  width: auto;\n  height: auto;\n  margin-top: 10%;\n}\n\n.register {\n  --background: black;\n  background-color: black;\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n  margin-top: 10%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNHLHNCQUFBO0FBQ0g7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ19pbWFnZXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmcucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udHdvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pb24tY2FyZHtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWlwMXtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmNlbnRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5ibGFjay10ZXh0e1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBvc2l0aW9ue1xuICBmbG9hdDpyaWdodDtcbn1cblxuLmNhcmRfaGVhZGVye1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5yY29ybmVycyB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5yZWdpc3RlcntcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map