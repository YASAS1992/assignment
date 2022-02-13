"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_app-home_app-home_module_ts"],{

/***/ 6255:
/*!*****************************************************!*\
  !*** ./src/app/app-home/app-home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHomePageRoutingModule": () => (/* binding */ AppHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _app_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-home.page */ 7245);




const routes = [
    {
        path: '',
        component: _app_home_page__WEBPACK_IMPORTED_MODULE_0__.AppHomePage
    }
];
let AppHomePageRoutingModule = class AppHomePageRoutingModule {
};
AppHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppHomePageRoutingModule);



/***/ }),

/***/ 8795:
/*!*********************************************!*\
  !*** ./src/app/app-home/app-home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHomePageModule": () => (/* binding */ AppHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-home-routing.module */ 6255);
/* harmony import */ var _app_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-home.page */ 7245);







let AppHomePageModule = class AppHomePageModule {
};
AppHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _app_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppHomePageRoutingModule
        ],
        declarations: [_app_home_page__WEBPACK_IMPORTED_MODULE_1__.AppHomePage]
    })
], AppHomePageModule);



/***/ }),

/***/ 7245:
/*!*******************************************!*\
  !*** ./src/app/app-home/app-home.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHomePage": () => (/* binding */ AppHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app-home.page.html */ 8509);
/* harmony import */ var _app_home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-home.page.scss */ 92);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppHomePage = class AppHomePage {
    constructor() { }
    ngOnInit() {
    }
};
AppHomePage.ctorParameters = () => [];
AppHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-app-home',
        template: _Users_yasasweerasekara_my_first_app_ionic_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppHomePage);



/***/ }),

/***/ 8509:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app-home/app-home.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-card class=\"bg_image\">\n    \n  \n   \n\n  \n \n\n\n  \n    \n\n  </ion-card>\n</ion-content>\n\n");

/***/ }),

/***/ 92:
/*!*********************************************!*\
  !*** ./src/app/app-home/app-home.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".bg_image {\n  background-image: url('bg.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFwcC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ19pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_app-home_app-home_module_ts.js.map