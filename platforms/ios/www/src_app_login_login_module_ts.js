"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ 9041);







let LoginPage = class LoginPage {
    constructor(router, ngFireAuth, data) {
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.data = data;
        this.userObj = {
            id: '',
            name: '',
            nic: '',
            phone: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const user = yield this.ngFireAuth.createUserWithEmailAndPassword(this.userObj.email, this.userObj.password);
                console.log(user);
                if (user.user.email) {
                    this.userObj.id = this.userObj.phone;
                    const r = yield this.data.createUser(this.userObj);
                    console.log(r);
                    this.router.navigate(['/home']);
                }
                else {
                    alert('Registration Failed');
                }
            }
            catch (error) {
                alert('Registration Failed');
            }
        });
    }
    login() {
        this.router.navigate(['/home']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9041:
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);



let DataService = class DataService {
    constructor(afs) {
        this.afs = afs;
    }
    createUser(user) {
        return this.afs.collection('/User').add(user);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-card class=\"bg_image\">\n    <ion-card-header >\n      <img src=\"assets/translate.png\" alt=\"true\" width=\"40\" height=\"40\" class=\"position\">\n      <table class=\"card_header\">\n        <tr><ion-card-title class=\"two\">Complete Your</ion-card-title></tr>\n        <tr><ion-card-title class=\"two\">2 steps registration</ion-card-title></tr>\n      </table>\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n      <ion-text class=\"seip1\">Step 1</ion-text>\n\n\n      <ion-card-content class=\"rcorners\">\n\n        <ion-item>\n          <ion-input [(ngModel)]=\"userObj.email\" placeholder=\"Enter Your Email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input [(ngModel)]=\"userObj.name\" placeholder=\"Enter Your Name\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input [(ngModel)]=\"userObj.nic\" placeholder=\"Enter Your NIC\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input [(ngModel)]=\"userObj.phone\" placeholder=\"Enter Your Mobile\"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input [(ngModel)]=\"userObj.password\" placeholder=\"Enter Password\" type=\"password\"></ion-input>\n        </ion-item>\n\n      </ion-card-content>\n\n      <ion-button style=\"text-transform:none\" class=\"register\" (click)=\"register()\">Continue</ion-button>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\">\n          By Signing uo your agree to our T&C and Privacy Policy.\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center black-text\">\n          Already got a UPay account ?\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\" (click)=\"login()\">\n          Login.\n        </div>\n      </ion-col>\n     \n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center center\">\n          Explore App\n        </div>\n      </ion-col>\n     \n    </ion-row>\n    \n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".bg_image {\n  background-image: url('bg.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n}\n\n.two {\n  color: white;\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ion-card {\n  flex-direction: column;\n}\n\n.seip1 {\n  color: white;\n  display: inline-block;\n  font-size: 11px;\n}\n\n.center {\n  color: white;\n  font-size: 11px;\n}\n\n.black-text {\n  color: black;\n  font-size: 12px;\n}\n\n.position {\n  float: right;\n}\n\n.card_header {\n  margin-top: 10%;\n}\n\n.rcorners {\n  border-radius: 25px;\n  background: white;\n  width: auto;\n  height: auto;\n  margin-top: 10%;\n}\n\n.register {\n  --background: black;\n  background-color: black;\n  border-radius: 10px;\n  width: 100%;\n  height: auto;\n  margin-top: 10%;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSyxzQkFBQTtBQUNMOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnX2ltYWdle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udHdvIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlvbi1jYXJke1xuICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VpcDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jZW50ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmJsYWNrLXRleHR7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBvc2l0aW9ue1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuXG4uY2FyZF9oZWFkZXJ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ucmNvcm5lcnMge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLnJlZ2lzdGVye1xuICAgIC0tYmFja2dyb3VuZDogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map