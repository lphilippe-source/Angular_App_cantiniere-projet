(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-modal-module"],{

/***/ "+OVq":
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function() { return ModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.page */ "Af+r");




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ "2gzs":
/*!*******************************************!*\
  !*** ./src/app/cantiniere-api.service.ts ***!
  \*******************************************/
/*! exports provided: CantiniereAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CantiniereAPIService", function() { return CantiniereAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



const BASE_URL = "http://212.227.203.194:8080/lunchtime/";
let CantiniereAPIService = class CantiniereAPIService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = BASE_URL;
    }
    forgotPassword(email) {
        return this.http.post(BASE_URL + "forgotpassword?email=" + email, { observe: "response" });
    }
    findUser(id, token) {
        let options = {
            headers: { "Authorization": token }
        };
        return this.http.get(BASE_URL + "user/find/" + id, options);
    }
    findAllUser(token) {
        let options = {
            headers: { "Authorization": token }
        };
        return this.http.get(BASE_URL + "user/findall", options);
    }
    findImg(id, token) {
        let options = {
            headers: { "Authorization": token }
        };
        return this.http.get(BASE_URL + "user/findimg/" + id, options);
    }
    getMenu() {
        return this.http.get(BASE_URL + "menu/findallavailablefortoday");
    }
    getMeal(week) {
        return this.http.get(BASE_URL + "meal/findallavailableforweek/" + week);
    }
    getMenuImg(id) {
        return this.http.get(BASE_URL + "menu/findimg/" + id);
    }
    getMealImg(id) {
        return this.http.get(BASE_URL + "meal/findimg/" + id);
    }
    updateMenuImage(id, body) {
        // let options = {
        //   headers: {"Authorization": token}
        // }
        // , {headers: options.headers}
        return this.http.patch(BASE_URL + "menu/updateimg/" + id, body);
    }
    updateUser(user, token) {
        let options = {
            headers: { "Authorization": token }
        };
        return this.http.patch(BASE_URL + "user/update/" + user.id, user, { headers: options.headers, observe: "response" });
    }
    updateUserImg(userId, imageBase64, token) {
        let options = {
            headers: { "Authorization": token }
        };
        let image = { imagePath: "img/0default.png", image64: imageBase64 };
        return this.http.patch(BASE_URL + "user/updateimg/" + userId, image, { headers: options.headers });
    }
    register(user) {
        return this.http.put(BASE_URL + "user/register", user);
    }
    authentification(emailP, passwordP) {
        let credentials = {
            email: emailP,
            password: passwordP
        };
        return this.http.post(BASE_URL + "login", credentials, { observe: "response" });
    }
};
CantiniereAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CantiniereAPIService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CantiniereAPIService);



/***/ }),

/***/ "hVeP":
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-routing.module */ "+OVq");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "Af+r");







let ModalPageModule = class ModalPageModule {
};
ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"]
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })
], ModalPageModule);



/***/ })

}]);
//# sourceMappingURL=modal-modal-module-es2015.js.map