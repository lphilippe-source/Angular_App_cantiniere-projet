(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gestion-commandes-gestion-commandes-module"], {
    /***/
    "4wz6":
    /*!***************************************************************!*\
      !*** ./src/app/gestion-commandes/gestion-commandes.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function wz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXN0aW9uLWNvbW1hbmRlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "EnE/":
    /*!***********************************************************************!*\
      !*** ./src/app/gestion-commandes/gestion-commandes-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: GestionCommandesPageRoutingModule */

    /***/
    function EnE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionCommandesPageRoutingModule", function () {
        return GestionCommandesPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./gestion-commandes.page */
      "XE/N");

      var routes = [{
        path: '',
        component: _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_3__["GestionCommandesPage"]
      }];

      var GestionCommandesPageRoutingModule = function GestionCommandesPageRoutingModule() {
        _classCallCheck(this, GestionCommandesPageRoutingModule);
      };

      GestionCommandesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GestionCommandesPageRoutingModule);
      /***/
    },

    /***/
    "OIA7":
    /*!***************************************************************!*\
      !*** ./src/app/gestion-commandes/gestion-commandes.module.ts ***!
      \***************************************************************/

    /*! exports provided: GestionCommandesPageModule */

    /***/
    function OIA7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionCommandesPageModule", function () {
        return GestionCommandesPageModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _gestion_commandes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./gestion-commandes-routing.module */
      "EnE/");
      /* harmony import */


      var _gestion_commandes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gestion-commandes.page */
      "XE/N");
      /* harmony import */


      var _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared-modules/shared-modules.module */
      "OS5G");

      var GestionCommandesPageModule = function GestionCommandesPageModule() {
        _classCallCheck(this, GestionCommandesPageModule);
      };

      GestionCommandesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gestion_commandes_routing_module__WEBPACK_IMPORTED_MODULE_5__["GestionCommandesPageRoutingModule"], _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__["SharedModulesModule"]],
        declarations: [_gestion_commandes_page__WEBPACK_IMPORTED_MODULE_6__["GestionCommandesPage"]]
      })], GestionCommandesPageModule);
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
    "XE/N":
    /*!*************************************************************!*\
      !*** ./src/app/gestion-commandes/gestion-commandes.page.ts ***!
      \*************************************************************/

    /*! exports provided: GestionCommandesPage */

    /***/
    function XEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GestionCommandesPage", function () {
        return GestionCommandesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_gestion_commandes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./gestion-commandes.page.html */
      "ZdLO");
      /* harmony import */


      var _gestion_commandes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./gestion-commandes.page.scss */
      "4wz6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GestionCommandesPage = /*#__PURE__*/function () {
        function GestionCommandesPage() {
          _classCallCheck(this, GestionCommandesPage);
        }

        _createClass(GestionCommandesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GestionCommandesPage;
      }();

      GestionCommandesPage.ctorParameters = function () {
        return [];
      };

      GestionCommandesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-gestion-commandes',
        template: _raw_loader_gestion_commandes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_gestion_commandes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GestionCommandesPage);
      /***/
    },

    /***/
    "ZdLO":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gestion-commandes/gestion-commandes.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZdLO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n<app-header></app-header>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=gestion-commandes-gestion-commandes-module-es5.js.map