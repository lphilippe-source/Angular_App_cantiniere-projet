(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authentification-authentification-module~carte-carte-module~configuration-configuration-modu~aab45f9e"],{

/***/ "/68N":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/mypop/mypop.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list color=\"primary\">\n  <ion-item [routerLink]=\"['/panier']\" (click)=\"close()\" color=\"primary\">Panier</ion-item>\n  <ion-item *ngIf=\"!isConnected\" [routerLink]=\"['/inscription']\" (click)=\"close()\" color=\"primary\">S'inscrire</ion-item>\n  <ion-item *ngIf=\"!isConnected\" [routerLink]=\"['/authentification']\" (click)=\"close()\" color=\"primary\">Se connecter</ion-item>\n  <ion-item *ngIf=\"isConnected\" [routerLink]=\"['/infos-user']\" (click)=\"close()\" color=\"primary\">{{user.firstname}}</ion-item>\n  <ion-item *ngIf=\"isConnected\" (click)=\"disconnect()\" color=\"primary\">Déconnexion</ion-item>\n</ion-list>");

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

/***/ "8PEf":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background-color: #324553;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\nion-img, img {\n  max-width: 40px;\n  max-height: 40px;\n  margin-right: 0px;\n}\n\nion-icon {\n  font-size: 40px;\n}\n\nion-icon, div.ion-hide-sm-down {\n  position: absolute;\n  right: 0px;\n  margin-right: 0px;\n}\n\ndiv {\n  display: flex;\n  flex-direction: row;\n}\n\ndiv > * {\n  margin: auto 7px auto 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUM7RUFDSSxlQUFBO0FBQ0w7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMjQ1NTM7XG4gfVxuXG4gLmNsaWNrYWJsZSB7XG4gICAgIGN1cnNvcjpwb2ludGVyO1xuIH1cblxuaW9uLWltZyAsIGltZ3tcbiAgICBtYXgtd2lkdGg6NDBweDtcbiAgICBtYXgtaGVpZ2h0OjQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xufVxuXG5pb24taWNvbiAsIGRpdi5pb24taGlkZS1zbS1kb3duIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICByaWdodDowcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcbn1cblxuZGl2IHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xufVxuXG5kaXYgPiAqIHtcbiAgICBtYXJnaW46YXV0byA3cHggYXV0byA3cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "8PEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cantiniere-api.service */ "2gzs");
/* harmony import */ var _mypop_mypop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mypop/mypop.component */ "nhsg");








let HeaderComponent = class HeaderComponent {
    constructor(popoverController, service, route, nav) {
        this.popoverController = popoverController;
        this.service = service;
        this.route = route;
        this.nav = nav;
        this.avatar = "assets/images/guest.png";
    }
    ngOnInit() {
        let token = sessionStorage.getItem("JWT");
        // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
        if (token) {
            this.isConnected = true;
            // Le sessionStorage ne pouvant contenir que des string, les infos de l'user sont au format JSON stringifié, qu'il faut donc parser pour les récupérer
            this.user = JSON.parse(sessionStorage.getItem("User"));
            this.avatar = this.service.BASE_URL;
            let image = (this.user.image.imagePath) ? this.user.image.imagePath : this.user.image.image64;
            this.avatar += image;
        }
        else {
            this.isConnected = false;
        }
    }
    menuPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Le PopOver permet d'ouvrir un menu sur le clique de l'icône burger sur portable
            const popover = yield this.popoverController.create({
                component: _mypop_mypop_component__WEBPACK_IMPORTED_MODULE_7__["MypopComponent"],
                cssClass: 'headerPopover',
                event: ev,
                translucent: true,
                componentProps: {
                    // On doit passer ces deux valeurs pour que le PopOver les affiche
                    "isConnected": this.isConnected,
                    "user": this.user
                }
            });
            this.currentPopover = popover;
            return yield popover.present();
        });
    }
    disconnect() {
        sessionStorage.removeItem("JWT");
        sessionStorage.removeItem("User");
        this.avatar = "assets/images/guest.png";
        this.isConnected = false;
        if (this.route.url === "/home") {
            location.reload();
        }
        else {
            this.route.navigate(["home"]);
        }
        // this.nav
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
    { type: _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_6__["CantiniereAPIService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
HeaderComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isConnected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-grid>\n        <ion-row class=\"ion-justify-content-between\">\n            <ion-col>\n                <div>\n                    <ion-img *ngIf=\"isConnected\" (click)=\"disconnect()\" src=\"/assets/images/logoDeco.png\" alt=\"Déconnexion\" class=\"ion-hide-sm-down clickable\"></ion-img>\n                    <ion-img [routerLink]=\"['/home']\" src=\"/assets/images/logo.png\" alt=\"Retour à l'accueil\" id=\"logo\" class=\"clickable\"></ion-img>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div class=\"ion-hide-sm-down\" width-sm=\"0\">\n                    <ion-button *ngIf=\"!isConnected\" [routerLink]=\"['/inscription']\">S'inscrire</ion-button>\n                    <ion-button *ngIf=\"!isConnected\" [routerLink]=\"['/authentification']\">Se connecter</ion-button>\n                    <ion-button *ngIf=\"isConnected\" [routerLink]=\"['/infos-user']\">{{user.firstname}}</ion-button>\n                    <ion-img [routerLink]=\"['/panier']\" src=\"/assets/images/panier.png\" alt=\"Panier\" class=\"clickable\"></ion-img>\n                    <ion-img [src]=\"avatar\" alt=\"Avatar\"></ion-img>\n                </div>\n                <img [src]=\"avatar\" alt=\"Avatar\" class=\"ion-hide-sm-up\">\n                <ion-icon (click)=\"menuPopover($event)\" name=\"menu-outline\" class=\"ion-hide-sm-up\" size-sm=\"1\"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n");

/***/ }),

/***/ "nhsg":
/*!*************************************************!*\
  !*** ./src/app/header/mypop/mypop.component.ts ***!
  \*************************************************/
/*! exports provided: MypopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypopComponent", function() { return MypopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mypop_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mypop.component.html */ "/68N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let MypopComponent = class MypopComponent {
    constructor(popover, route) {
        this.popover = popover;
        this.route = route;
    }
    ngOnInit() { }
    close() {
        this.popover.dismiss();
    }
    disconnect() {
        sessionStorage.removeItem("JWT");
        sessionStorage.removeItem("User");
        this.isConnected = false;
        if (this.route.url === "/home") {
            location.reload();
        }
        else {
            this.route.navigate(["home"]);
        }
        this.close();
    }
};
MypopComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MypopComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["user",] }],
    isConnected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ["isConnected",] }]
};
MypopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mypop',
        template: _raw_loader_mypop_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], MypopComponent);



/***/ })

}]);
//# sourceMappingURL=default~authentification-authentification-module~carte-carte-module~configuration-configuration-modu~aab45f9e-es2015.js.map