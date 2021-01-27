(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~gestion-cagnotte-gestion-cagnotte-module~home-home-module"], {
    /***/
    "/qIb":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-user/gestion-user.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function qIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <app-header></app-header>\n  </ion-header>\n    \n<ion-content class=\"ion-text-center\">\n\n  <p>Trouver un utilisateur</p>\n\n  <ion-item id=\"input\" class=\"ion-margin-vertical\">\n    <ion-input placeholder=\"Nom\" type=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-button color=\"primary\"><b></b>Rechercher</ion-button><br><br>\n\n\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col><b>Nom</b></ion-col>\n        <ion-col><b>Prenom</b></ion-col>\n        <ion-col><b>Cagnotte</b></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row  *ngFor=\"let user of ListUsers; let i=index\">\n        <ion-col>{{ user.name }}</ion-col>\n        <ion-col>{{ user.firstname }}</ion-col>\n        <ion-col>{{ user.wallet }}€</ion-col>\n        <ion-col><ion-button [routerLink]=\"'/gestion-cagnotte/' + i\" color=\"secondary\" size=\"small\"><img id=\"loupe\" src=\"../../assets/images/loupe.png\"></ion-button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "0LHs":
    /*!*************************************************************!*\
      !*** ./src/app/gestion-cagnotte/gestion-cagnotte.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function LHs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#btnRetour {\n  width: 50px;\n  position: relative;\n  right: 43%;\n}\n\np {\n  color: white;\n  font-weight: bold;\n}\n\nion-row {\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black;\n  background-color: whitesmoke;\n  text-align: center;\n  align-items: center;\n}\n\nion-item#input {\n  padding-left: 20%;\n  padding-right: 20%;\n}\n\nion-col {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dlc3Rpb24tY2Fnbm90dGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBS0U7RUFDRSxzQkFBQTtFQUNGLGlCQUFBO0VBQ0QsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZEOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUZKIiwiZmlsZSI6Imdlc3Rpb24tY2Fnbm90dGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvd2FsbHBhcGVyXFwgY2FmZXRlcmlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuLy8gICB9XG4gIFxuI2J0blJldG91cntcbiAgd2lkdGg6IDUwcHg7IFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA0MyU7XG59XG5cbiAgcHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaW9uLXJvd3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gIGJvcmRlci13aWR0aDoxcHg7XG4gYm9yZGVyLXN0eWxlOnNvbGlkOyBcbiBib3JkZXItY29sb3I6YmxhY2s7XG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1pdGVtI2lucHV0e1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "HCjz":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-cagnotte/gestion-cagnotte.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HCjz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n<app-header></app-header>\n</ion-header>\n  \n  <ion-content class=\"ion-text-center\">\n  <br><br><br><br>\n\n  \n    <ion-button routerLink=\"/gestion-user\" size=\"medium\" color=\"secondary\" id=\"btnRetour\"> <ion-label ><img id=\"loupe\" src=\"../../assets/images/back.png\"></ion-label></ion-button>\n     \n    <p>Nom :</p>\n    <ion-item id=\"input\">\n      <ion-input type=\"nom\" readonly=\"readonly\" >{{ unNomUser }}</ion-input>\n    </ion-item>\n    <p>Prenom :</p>\n    <ion-item id=\"input\">\n      <ion-input type=\"prenom\" readonly=\"readonly\">{{ unPrenomUser }}</ion-input>\n    </ion-item>\n    <p>Mail :</p>\n    <ion-item id=\"input\">\n      <ion-input type=\"mail\" readonly=\"readonly\">{{ unEmailUser }}</ion-input>\n    </ion-item>\n    <p>Tel :</p>\n    <ion-item id=\"input\">\n      <ion-input type=\"tel\" readonly=\"readonly\">{{ unTelUser }}</ion-input>\n    </ion-item>\n\n    <p>Cagnotte :</p>\n    <ion-item id=\"input\">\n      <ion-input type=\"cagnotte\" readonly=\"readonly\">{{ uneCagnotteUser }}</ion-input>\n    </ion-item>\n    <ion-button (click)=\"crediter()\">Créditer</ion-button><ion-button (click)=\"solder()\">Solder</ion-button>\n\n    <br><br>\n\n    <p><u>Commandes :</u></p>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4 >\n        <ion-label ><b>Date</b></ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label ><b>Prix</b></ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label ><b>Plat</b></ion-label>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row><ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"border-bottom: groove;\">\n        <ion-col col-4>\n        <ion-label >10/12/2020</ion-label>\n      </ion-col>\n      <ion-col col-4>\n        <ion-label >12€</ion-label>\n      </ion-col>\n        <ion-col col-4>\n        <ion-label >Pizza</ion-label>\n      </ion-col>\n    </ion-row>\n\n  </ion-content>";
      /***/
    },

    /***/
    "OS5G":
    /*!*********************************************************!*\
      !*** ./src/app/shared-modules/shared-modules.module.ts ***!
      \*********************************************************/

    /*! exports provided: SharedModulesModule */

    /***/
    function OS5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModulesModule", function () {
        return SharedModulesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SharedModulesModule = function SharedModulesModule() {
        _classCallCheck(this, SharedModulesModule);
      };

      SharedModulesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
      })], SharedModulesModule);
      /***/
    },

    /***/
    "SMy5":
    /*!*****************************************************!*\
      !*** ./src/app/gestion-user/gestion-user.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function SMy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-row {\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  border-color: black;\n  text-align: center;\n  align-items: center;\n}\n\nion-item#input {\n  padding-left: 20%;\n  padding-right: 20%;\n}\n\nion-col {\n  padding: 10px;\n}\n\np {\n  color: white;\n}\n\n#loupe {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dlc3Rpb24tdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxzQkFBQTtFQUNGLGlCQUFBO0VBQ0QsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRDs7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPRTtFQUNFLGFBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7QUFKSjs7QUFPRTtFQUNFLFdBQUE7QUFKSiIsImZpbGUiOiJnZXN0aW9uLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOnVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvd2FsbHBhcGVyXFwgY2FmZXRlcmlhLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuLy8gICB9XG4gIFxuICBpb24tcm93e1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgYm9yZGVyLXdpZHRoOjFweDtcbiBib3JkZXItc3R5bGU6c29saWQ7IFxuIGJvcmRlci1jb2xvcjpibGFjaztcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGlvbi1pdGVtI2lucHV0e1xuICAgIHBhZGRpbmctbGVmdDogMjAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcbiAgfVxuICBcblxuICBpb24tY29se1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gICNsb3VwZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header \n    [isConnected]=\"isConnected\" \n    [avatar]=\"avatar\"\n    [user]=\"user\">\n</app-header>\n<ion-content>\n        <div *ngIf=\"!isLunchLady\" class=\"contenu\">\n            <h1 *ngIf=\"!isConnected\">\n                Bienvenue à la cafétéria\n            </h1>\n            <h1 *ngIf=\"isConnected\">\n                Bienvenue <br class=\"ion-hide-sm-up\">{{user.firstname}} {{user.name}}\n            </h1>\n            <div class=\"boutons\">\n                <ion-button [routerLink]=\"['/menu-semaine']\" size=\"large\" class=\"ion-text-wrap\">\n                    Consulter le menu de la semaine\n                </ion-button>\n                <ion-button [routerLink]=\"['/carte']\" *ngIf=\"isConnected\" size=\"large\" class=\"ion-text-wrap\">\n                    Consulter la carte\n                </ion-button>\n            </div>\n           \n        </div>\n        <div *ngIf=\"isLunchLady\" class=\"contenu\">\n            <h1>\n                Bienvenue cantinière\n            </h1>\n            <div class=\"boutons\">\n                <ion-button [routerLink]=\"['/gestion-commandes']\" size=\"large\" class=\"ion-text-wrap\">\n                    Gestion des commandes\n                </ion-button>\n                <ion-button [routerLink]=\"['/menu-semaine']\" size=\"large\" class=\"ion-text-wrap\">\n                    Liste des menus\n                </ion-button>\n                <ion-button [routerLink]=\"['/carte']\" size=\"large\" class=\"ion-text-wrap\">\n                    Gestion de la carte\n                </ion-button>\n                <ion-button [routerLink]=\"['/gestion-user']\" size=\"large\" class=\"ion-text-wrap\">\n                    Gestion des utilisateurs\n                </ion-button>\n                <ion-button [routerLink]=\"['/configuration']\" size=\"large\" class=\"ion-text-wrap\">\n                    Configuration\n                </ion-button>\n            </div> \n        </div>\n</ion-content>";
      /***/
    },

    /***/
    "aSwm":
    /*!***************************************************!*\
      !*** ./src/app/gestion-user/gestion-user.page.ts ***!
      \***************************************************/

    /*! exports provided: GestionUSerPage */

    /***/
    function aSwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionUSerPage", function () {
        return GestionUSerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gestion_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gestion-user.page.html */
      "/qIb");
      /* harmony import */


      var _gestion_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gestion-user.page.scss */
      "SMy5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GestionUSerPage = /*#__PURE__*/function () {
        function GestionUSerPage() {
          _classCallCheck(this, GestionUSerPage);

          this.ListUsers = [{
            id: 0,
            name: "Jean",
            firstname: "Transcène",
            password: "pwd",
            email: "Jean.Transcène@gmail.com",
            phone: "0650231845",
            wallet: 45
          }, {
            id: 0,
            name: "Sarah",
            firstname: "Croche",
            password: "pwd",
            email: "Sarah.Croche@gmail.com",
            phone: "0650231845",
            wallet: 2
          }, {
            id: 0,
            name: "Alex",
            firstname: "Tèrieure",
            password: "pwd",
            email: "Alex.Tèrieure@gmail.com",
            phone: "0650231845",
            wallet: 780
          }];
        }

        _createClass(GestionUSerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GestionUSerPage;
      }();

      GestionUSerPage.ctorParameters = function () {
        return [];
      };

      GestionUSerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gestion-user',
        template: _raw_loader_gestion_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestion_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GestionUSerPage);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contenu {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n  font-weight: normal;\n}\n\nion-button {\n  margin: auto;\n  display: block;\n  text-transform: none;\n}\n\n@media (max-width: 576px) {\n  h1 {\n    font-size: 30px;\n    margin-bottom: 35px;\n  }\n\n  ion-button {\n    width: 50%;\n    height: 55px;\n    font-size: 15px;\n    margin-bottom: 15px;\n  }\n}\n\n@media (min-width: 576px) {\n  h1 {\n    font-size: 60px;\n    margin-bottom: 50px;\n  }\n\n  .boutons {\n    max-width: 500px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin: auto;\n  }\n\n  ion-button {\n    width: 180px;\n    height: 65px;\n    font-size: 15px;\n    margin-bottom: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFJQTtFQUVFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBRkY7O0VBS0E7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUZGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQUpGOztFQU9BO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBSkY7O0VBT0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOjEwMCU7XG59XG5cblxuaDEge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW46YXV0bztcbiAgZGlzcGxheTpibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpe1xuXG4gIGgxIHtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDo1MCU7XG4gICAgaGVpZ2h0OjU1cHg7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICB9XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpe1xuICBoMXtcbiAgICBmb250LXNpemU6NjBweDtcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG4gIH1cblxuICAuYm91dG9ucyB7XG4gICAgbWF4LXdpZHRoOjUwMHB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOmF1dG87XG4gIH1cblxuICBpb24tYnV0dG9ue1xuICAgIHdpZHRoOjE4MHB4O1xuICAgIGhlaWdodDo2NXB4O1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206MzBweDtcbiAgfVxufVxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "rjVg":
    /*!***********************************************************!*\
      !*** ./src/app/gestion-cagnotte/gestion-cagnotte.page.ts ***!
      \***********************************************************/

    /*! exports provided: GestionCagnottePage */

    /***/
    function rjVg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionCagnottePage", function () {
        return GestionCagnottePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gestion_cagnotte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gestion-cagnotte.page.html */
      "HCjz");
      /* harmony import */


      var _gestion_cagnotte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gestion-cagnotte.page.scss */
      "0LHs");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var GestionCagnottePage = /*#__PURE__*/function () {
        function GestionCagnottePage(route) {
          _classCallCheck(this, GestionCagnottePage);

          this.route = route;
          this.unNomUser = "";
          this.unPrenomUser = "";
          this.unEmailUser = "";
          this.unTelUser = "";
          this.uneCagnotteUser = "";
          this.ListUsers = [{
            id: 0,
            name: "Jean",
            firstname: "Transcène",
            password: "pwd",
            email: "Jean.Transcène@gmail.com",
            phone: "0650231845",
            wallet: 45
          }, {
            id: 0,
            name: "Sarah",
            firstname: "Croche",
            password: "pwd",
            email: "Sarah.Croche@gmail.com",
            phone: "0650231845",
            wallet: 2
          }, {
            id: 0,
            name: "Alex",
            firstname: "Tèrieure",
            password: "pwd",
            email: "Alex.Tèrieure@gmail.com",
            phone: "0650231845",
            wallet: 780
          }];
        }

        _createClass(GestionCagnottePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var UserId = this.route.snapshot.paramMap.get("id");
            this.unNomUser = this.ListUsers[UserId].name;
            this.unPrenomUser = this.ListUsers[UserId].firstname;
            this.unEmailUser = this.ListUsers[UserId].email;
            this.unTelUser = this.ListUsers[UserId].phone;
            this.uneCagnotteUser = this.ListUsers[UserId].wallet;
          }
        }]);

        return GestionCagnottePage;
      }();

      GestionCagnottePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      GestionCagnottePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gestion-cagnotte',
        template: _raw_loader_gestion_cagnotte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestion_cagnotte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GestionCagnottePage);
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../cantiniere-api.service */
      "2gzs");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(service) {
          _classCallCheck(this, HomePage);

          this.service = service;
          this.isConnected = false;
          this.isLunchLady = false;
        }

        _createClass(HomePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // Ces variables vont être utilisées par le header et vont être passées dans les cas où le onInit ne se déclenche pas
            // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
            var token = sessionStorage.getItem("JWT");

            if (token) {
              this.isConnected = true; // Le sessionStorage ne pouvant contenir que des string, les infos de l'user sont au format JSON stringifié, qu'il faut donc parser pour les récupérer

              this.user = JSON.parse(sessionStorage.getItem("User"));
              this.isLunchLady = this.user.isLunchLady; // L'avatar est soit directement présent dans la DB, soit en string par 64bits

              this.avatar = this.service.BASE_URL;
              var image = this.user.image.imagePath ? this.user.image.imagePath : this.user.image.image64;
              this.avatar += image;
            } else {
              this.isConnected = false;
              this.avatar = "assets/images/guest.png";
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_4__["CantiniereAPIService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~gestion-cagnotte-gestion-cagnotte-module~home-home-module-es5.js.map