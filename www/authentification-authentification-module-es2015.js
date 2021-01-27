(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentification-authentification-module"],{

/***/ "09hJ":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthentificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPageModule", function() { return AuthentificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _authentification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentification.page */ "2noS");
/* harmony import */ var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentification-routing.module */ "Mnrm");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "fECr");








let AuthentificationPageModule = class AuthentificationPageModule {
};
AuthentificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _authentification_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthentificationPageRoutingModule"]
        ],
        declarations: [_authentification_page__WEBPACK_IMPORTED_MODULE_5__["AuthentificationPage"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
    })
], AuthentificationPageModule);



/***/ }),

/***/ "2noS":
/*!***********************************************************!*\
  !*** ./src/app/authentification/authentification.page.ts ***!
  \***********************************************************/
/*! exports provided: AuthentificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPage", function() { return AuthentificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_authentification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./authentification.page.html */ "NNOy");
/* harmony import */ var _authentification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentification.page.scss */ "FYUw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cantiniere-api.service */ "2gzs");
/* harmony import */ var _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ToastUtils */ "zTUt");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");










let AuthentificationPage = class AuthentificationPage {
    constructor(formBuilder, service, toastController, route, activatedRoute) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastController = toastController;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.isValid = false;
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"]();
        // Cette variable, par défaut à false, passe à vrai si un token est présent en sessionStorage
        // Cela permet à la page de ne pas être affiché si l'utilisateur est déjà connecté
        this.isConnected = false;
    }
    ngOnInit() {
        // recuperation du nom de la page précédente
        this.originPage = this.activatedRoute.snapshot.paramMap.get("originPage");
        // Si un utilisateur est connecté, le template sera différent et on redirigera automatiquement vers l'accueil
        if (sessionStorage.getItem("JWT")) {
            this.isConnected = true;
            setTimeout(() => {
                this.route.navigate(['home']);
            }, 3000);
        }
        // On crée ce FormGroup pour réunir les données entrées par l'utilisateur
        this.userForm = this.formBuilder.group({
            email: "",
            password: ""
        });
        // Cet observable n'activera le bouton de validation que si les champs sont remplis 
        this.userForm.valueChanges.subscribe(values => {
            let value = this.userForm.value;
            if ((value.email !== "") && (value.password !== "")) {
                this.isValid = true;
            }
            else {
                this.isValid = false;
            }
        });
    }
    authentificationKey(event) {
        // Cette fonction lance la fonction d'identification quand l'utilisateur a le focus sur le champ de mot de passe et appuie sur Entrée
        if (event.key == "Enter") {
            if (this.isValid) {
                this.authentification();
            }
        }
    }
    authentification() {
        // On désactive toutes les actions le temps que la réponse du serveur arrive (et on montre avec le curseur de la souris que le traitement est en cours)
        let body = document.querySelector('body');
        let elements = document.querySelectorAll('ion-input , ion-button');
        elements.forEach(element => {
            element.disabled = true;
        });
        body.style.cursor = "wait";
        // On fait la requête d'authentification
        this.service.authentification(this.userForm.value.email, this.userForm.value.password).subscribe(res => {
            // Une fois reçue, on stocke le JWT ainsi que sa version décodée, et on fait une seconde requête pour chercher l'avatar de l'utilisateur
            this.rawToken = res.headers.get("Authorization");
            sessionStorage.setItem("JWT", this.rawToken);
            this.decodedToken = this.helper.decodeToken(this.rawToken);
            this.service.findImg(this.decodedToken.user.id, this.rawToken).subscribe((img) => {
                // Maintenant on va créer un objet contenant les données de l'utilisateur, le stringifier et le stocker en sessionStorage
                let storedUser = {
                    "id": this.decodedToken.user.id,
                    "name": this.decodedToken.user.name,
                    "firstname": this.decodedToken.user.firstname,
                    "email": this.decodedToken.user.email,
                    "address": this.decodedToken.user.address,
                    "postalCode": this.decodedToken.user.postalCode,
                    "town": this.decodedToken.user.town,
                    "phone": this.decodedToken.user.phone,
                    "sex": this.decodedToken.user.sex,
                    "wallet": this.decodedToken.user.wallet,
                    "image": img,
                    "isLunchLady": this.decodedToken.user.isLunchLady
                };
                sessionStorage.setItem("User", JSON.stringify(storedUser));
                // On laisse de nouveau l'utilisateur agir une fois la réponse reçue
                body.style.cursor = "initial";
                elements.forEach(element => {
                    element.disabled = false;
                });
                if (this.originPage == "panier") {
                    this.route.navigate(["panier"]);
                }
                else
                    this.route.navigate(["home"]);
            });
        }, (error) => {
            // Si les identifiants sont incorrects, on l'affiche
            if (error.status === 401)
                _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_8__["ToastUtils"].presentToast("Mot de passe ou e-mail incorrect", "danger", this.toastController);
            // On laisse de nouveau l'utilisateur agir une fois la réponse reçue
            body.style.cursor = "initial";
            elements.forEach(element => {
                element.disabled = false;
            });
        });
    }
};
AuthentificationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_7__["CantiniereAPIService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AuthentificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-authentification',
        template: _raw_loader_authentification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_authentification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthentificationPage);



/***/ }),

/***/ "FYUw":
/*!*************************************************************!*\
  !*** ./src/app/authentification/authentification.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contenu {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\nh1 {\n  color: white;\n  text-align: center;\n  margin: auto;\n}\n\nion-button {\n  margin: auto;\n  margin-top: 15px;\n  display: block;\n  width: 130px;\n  height: 55px;\n  font-size: 15px;\n  text-transform: none;\n}\n\nion-input {\n  background-color: white;\n  --padding-start:16px;\n}\n\n@media (max-width: 576px) {\n  h1 {\n    font-size: 30px;\n    margin-top: 10px;\n  }\n\n  form {\n    width: 90%;\n    margin: auto;\n  }\n\n  ion-input {\n    border-radius: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n@media (min-width: 576px) {\n  h1 {\n    font-size: 60px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n  }\n\n  form {\n    max-width: 800px;\n    margin: auto;\n  }\n\n  ion-input {\n    margin-bottom: 40px;\n  }\n\n  #buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    max-width: 50%;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBUUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQUxGOztFQVFBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUFMRjs7RUFRQTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7RUFMRjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQVBGOztFQVVBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VBUEY7O0VBVUE7SUFDRSxtQkFBQTtFQVBGOztFQVVBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoiYXV0aGVudGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudCB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlcl90ZXJuZS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbi8vIH1cblxuLmNvbnRlbnUge1xuICB3aWR0aDoxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5oMXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuaW9uLWJ1dHRvbntcbiAgbWFyZ2luOmF1dG87XG4gIG1hcmdpbi10b3A6MTVweDtcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6MTMwcHg7XG4gIGhlaWdodDo1NXB4O1xuICBmb250LXNpemU6MTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLXBhZGRpbmctc3RhcnQ6MTZweDtcbiAgXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xuICBoMSB7XG4gICAgZm9udC1zaXplOjMwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICB9XG5cbiAgZm9ybSB7XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbjphdXRvO1xuICB9XG5cbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpe1xuICBoMSB7XG4gICAgZm9udC1zaXplOjYwcHg7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIG1hcmdpbi1ib3R0b206MzBweDtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIG1heC13aWR0aDo4MDBweDtcbiAgICBtYXJnaW46YXV0bztcbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xuICB9XG5cbiAgI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBtYXgtd2lkdGg6NTAlO1xuICAgIG1hcmdpbjphdXRvO1xuICB9XG59XG5cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "Mnrm":
/*!*********************************************************************!*\
  !*** ./src/app/authentification/authentification-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AuthentificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationPageRoutingModule", function() { return AuthentificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentification.page */ "2noS");




const routes = [
    {
        path: '',
        component: _authentification_page__WEBPACK_IMPORTED_MODULE_3__["AuthentificationPage"]
    }
];
let AuthentificationPageRoutingModule = class AuthentificationPageRoutingModule {
};
AuthentificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthentificationPageRoutingModule);



/***/ }),

/***/ "NNOy":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n    <!-- Voici le contenu normal de la page, qui s'affiche si l'utilisateur n'est pas connecté -->\n    <div *ngIf=\"!isConnected\" class=\"contenu\">\n        <h1>\n            Se connecter\n        </h1>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"authentification()\">\n            <ion-label class=\"ion-margin-bottom\" color=\"light\">\n                Email\n            </ion-label>\n            <ion-input (keyup)=\"authentificationKey($event)\" type=\"email\" formControlName=\"email\"></ion-input>\n            <ion-label class=\"ion-margin-bottom\" color=\"light\">\n                Mot de passe\n            </ion-label>\n            <ion-input (keyup)=\"authentificationKey($event)\" type=\"password\" formControlName=\"password\"></ion-input>\n            <div id=\"buttons\">\n                <ion-button [disabled]=\"!this.isValid\" type=\"submit\" size=\"large\">Valider</ion-button>\n                <ion-button size=\"large\" [routerLink]=\"['/reinitialisation-mdp']\" class=\"ion-text-wrap\">Mot de passe oublié</ion-button>\n            </div>\n        </form>\n    </div>\n    <!-- S'il est connecté, on ne donne pas accès à cette page (et donc à la requête) -->\n    <div *ngIf=\"isConnected\" class=\"contenu\">\n        <h1>Vous êtes déjà connectés</h1>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "Nm8O":
/*!************************************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js ***!
  \************************************************************************************/
/*! exports provided: JWT_OPTIONS, JwtHelperService, JwtInterceptor, JwtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_OPTIONS", function() { return JWT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelperService", function() { return JwtHelperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtModule", function() { return JwtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







const JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('JWT_OPTIONS');

// tslint:disable:no-bitwise
class JwtHelperService {
    constructor(config = null) {
        this.tokenGetter = (config && config.tokenGetter) || function () { };
    }
    urlBase64Decode(str) {
        let output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += "==";
                break;
            }
            case 3: {
                output += "=";
                break;
            }
            default: {
                throw new Error("Illegal base64url string!");
            }
        }
        return this.b64DecodeUnicode(output);
    }
    // credits for decoder goes to https://github.com/atk
    b64decode(str) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        str = String(str).replace(/=+$/, "");
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        let bc = 0, bs, buffer, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), (c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(""));
    }
    decodeToken(token = this.tokenGetter()) {
        if (!token || token === "") {
            return null;
        }
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error("Cannot decode the token.");
        }
        return JSON.parse(decoded);
    }
    getTokenExpirationDate(token = this.tokenGetter()) {
        let decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty("exp")) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    isTokenExpired(token = this.tokenGetter(), offsetSeconds) {
        if (!token || token === "") {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
    getAuthScheme(authScheme, request) {
        if (typeof authScheme === "function") {
            return authScheme(request);
        }
        return authScheme;
    }
}
JwtHelperService.ɵfac = function JwtHelperService_Factory(t) { return new (t || JwtHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS)); };
JwtHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtHelperService, factory: JwtHelperService.ɵfac });
JwtHelperService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [JWT_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [JWT_OPTIONS]
            }] }]; }, null); })();

class JwtInterceptor {
    constructor(config, jwtHelper, document) {
        this.jwtHelper = jwtHelper;
        this.document = document;
        this.standardPorts = ["80", "443"];
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || "Authorization";
        this.authScheme =
            config.authScheme || config.authScheme === ""
                ? config.authScheme
                : "Bearer ";
        this.allowedDomains = config.allowedDomains || [];
        this.disallowedRoutes = config.disallowedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    isAllowedDomain(request) {
        const requestUrl = new URL(request.url, this.document.location.origin);
        // If the host equals the current window origin,
        // the domain is allowed by default
        if (requestUrl.host === this.document.location.host) {
            return true;
        }
        // If not the current domain, check the allowed list
        const hostName = `${requestUrl.hostname}${requestUrl.port && !this.standardPorts.includes(requestUrl.port)
            ? ":" + requestUrl.port
            : ""}`;
        return (this.allowedDomains.findIndex((domain) => typeof domain === "string"
            ? domain === hostName
            : domain instanceof RegExp
                ? domain.test(hostName)
                : false) > -1);
    }
    isDisallowedRoute(request) {
        const requestedUrl = new URL(request.url, this.document.location.origin);
        return (this.disallowedRoutes.findIndex((route) => {
            if (typeof route === "string") {
                const parsedRoute = new URL(route, this.document.location.origin);
                return (parsedRoute.hostname === requestedUrl.hostname &&
                    parsedRoute.pathname === requestedUrl.pathname);
            }
            if (route instanceof RegExp) {
                return route.test(request.url);
            }
            return false;
        }) > -1);
    }
    handleInterception(token, request, next) {
        const authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
        let tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error("Could not get token from tokenGetter function.");
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: {
                    [this.headerName]: `${authScheme}${token}`,
                },
            });
        }
        return next.handle(request);
    }
    intercept(request, next) {
        if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
            return next.handle(request);
        }
        const token = this.tokenGetter(request);
        if (token instanceof Promise) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((asyncToken) => {
                return this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
JwtInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [JWT_OPTIONS,] }] },
    { type: JwtHelperService },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [JWT_OPTIONS]
            }] }, { type: JwtHelperService }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();

class JwtModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.");
        }
    }
    static forRoot(options) {
        return {
            ngModule: JwtModule,
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: JwtInterceptor,
                    multi: true,
                },
                options.jwtOptionsProvider || {
                    provide: JWT_OPTIONS,
                    useValue: options.config,
                },
                JwtHelperService,
            ],
        };
    }
}
JwtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JwtModule });
JwtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JwtModule_Factory(t) { return new (t || JwtModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtModule, 12)); } });
JwtModule.ctorParameters = () => [
    { type: JwtModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: JwtModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

/*
 * Public API Surface of angular-jwt
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=auth0-angular-jwt.js.map

/***/ })

}]);
//# sourceMappingURL=authentification-authentification-module-es2015.js.map