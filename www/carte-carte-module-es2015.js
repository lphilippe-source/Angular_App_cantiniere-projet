(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carte-carte-module"],{

/***/ "156P":
/*!***************************************!*\
  !*** ./src/app/carte/carte.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carte-cat {\n  display: flex;\n  justify-content: space-between;\n}\n\n.plat.cat {\n  min-height: 30px !important;\n  min-width: 60px;\n}\n\n.fond-carte {\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  padding-right: 50px;\n  padding-left: 50px;\n}\n\n#btnRetour {\n  width: 50px;\n  right: 43%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUVBLFVBQUE7QUFHSiIsImZpbGUiOiJjYXJ0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydGUtY2F0e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucGxhdC5jYXR7XG4gICAgbWluLWhlaWdodDozMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xufVxuLmZvbmQtY2FydGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHg7XG59XG4jYnRuUmV0b3Vye1xuICAgIHdpZHRoOiA1MHB4OyBcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDQzJTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "1qZP":
/*!***************************************!*\
  !*** ./src/app/carte/carte.module.ts ***!
  \***************************************/
/*! exports provided: CartePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartePageModule", function() { return CartePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _carte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carte-routing.module */ "3B6I");
/* harmony import */ var _carte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carte.page */ "HqdH");
/* harmony import */ var _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-modules/shared-modules.module */ "OS5G");








let CartePageModule = class CartePageModule {
};
CartePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carte_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartePageRoutingModule"],
            _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__["SharedModulesModule"]
        ],
        declarations: [_carte_page__WEBPACK_IMPORTED_MODULE_6__["CartePage"]]
    })
], CartePageModule);



/***/ }),

/***/ "3B6I":
/*!***********************************************!*\
  !*** ./src/app/carte/carte-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CartePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartePageRoutingModule", function() { return CartePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _carte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carte.page */ "HqdH");




const routes = [
    {
        path: '',
        component: _carte_page__WEBPACK_IMPORTED_MODULE_3__["CartePage"]
    }
];
let CartePageRoutingModule = class CartePageRoutingModule {
};
CartePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartePageRoutingModule);



/***/ }),

/***/ "HqdH":
/*!*************************************!*\
  !*** ./src/app/carte/carte.page.ts ***!
  \*************************************/
/*! exports provided: CartePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartePage", function() { return CartePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carte.page.html */ "o3Cw");
/* harmony import */ var _carte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carte.page.scss */ "156P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CartePage = class CartePage {
    constructor() { }
    ngOnInit() {
    }
};
CartePage.ctorParameters = () => [];
CartePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carte',
        template: _raw_loader_carte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartePage);



/***/ }),

/***/ "OS5G":
/*!*********************************************************!*\
  !*** ./src/app/shared-modules/shared-modules.module.ts ***!
  \*********************************************************/
/*! exports provided: SharedModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModulesModule", function() { return SharedModulesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let SharedModulesModule = class SharedModulesModule {
};
SharedModulesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })
], SharedModulesModule);



/***/ }),

/***/ "o3Cw":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carte/carte.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <app-header></app-header>\n  </ion-toolbar>\n</ion-header>\n<ion-button routerLink=\"/menu-semaine\" size=\"medium\" color=\"secondary\" id=\"btnRetour\"> <ion-label ><img id=\"loupe\" src=\"../../assets/images/back.png\"></ion-label></ion-button>\n\n<ion-content>\n  <section id=\"bg\">\n    <div class='flex'>\n        <h1>Carte</h1>\n    </div>\n    <div class='flex content fond-carte'>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Boissons Chaudes\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Thé\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Café\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            \n        </article>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Boissons Froides\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Coca\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Redbull\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            \n        </article>\n    </div>\n    <div class='flex content fond-carte'>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Viennoiseries\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Croissant\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Pain au raisins\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            \n        </article>\n        \n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Dessert\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Coca\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Redbull\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1€\n                </div>\n            </div>\n            \n        </article>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Plat du jour\n                </a>\n            </div>\n            <div class='plat cat'>-Laitue et radis vinaigrette<br/>\n                -Filet de lieu sauce chicorée et rouy<br/>\n                -Blé safrané & duo de courgettes<br/>\n                -Petit suisse nature\n            </div>\n            <div class='plat cat'>-Poireaux vinaigrette<br/>\n                -Omelette et sa garniture d’oignons &\n                -champignons<br/>\n                -Purée de pommes de terre & brocolis<br/>\n                -Fruit de saison\n            </div>\n        </article>\n    </div>\n    <div class='flex content fond-carte'>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Sandwichs\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Poulet Curry\n                </div>\n                <div class='plat cat'>\n                        PRIX: 3€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -Thon Mayonnaise\n                </div>\n                <div class='plat cat'>\n                        PRIX: 3€\n                </div>\n            </div>\n            \n        </article>\n        <article>\n            <div class='bouton'>\n                <a class='btn style_button' href=\"#\">\n                Les petites Faims\n                </a>\n            </div >\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -part de pizza\n                </div>\n                <div class='plat cat'>\n                        PRIX: 1.5€\n                </div>\n            </div>\n            <div class='carte-cat'>\n                <div class='plat cat'>\n                    -croque-Monsieur \n                </div>\n                <div class='plat cat'>\n                        PRIX: 2€\n                </div>\n            </div>\n            \n        </article>\n    </div>\n            \n</section>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=carte-carte-module-es2015.js.map