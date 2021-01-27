(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~menu-semaine-menu-semaine-module~modal-modal-module"],{

/***/ "Af+r":
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal.page.html */ "wwHD");
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.scss */ "qdCT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cantiniere-api.service */ "2gzs");






let ModalPage = class ModalPage {
    // @Input()image
    // @Input()src:string
    // image:string
    constructor(modalCtrl, apiService) {
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
    }
    ngOnInit() {
        console.log(this.meal);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    changeTab(e) {
        console.log(e.detail.value);
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_5__["CantiniereAPIService"] }
];
ModalPage.propDecorators = {
    meal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalPage);



/***/ }),

/***/ "qdCT":
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --background:#fdfdfd;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\nion-card-header {\n  display: flex;\n  justify-content: flex-end;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 10px;\n  z-index: 200;\n}\n\nion-img {\n  width: 100%;\n}\n\nion-card-content {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n}\n\nion-input {\n  width: 30px;\n}\n\nion-item {\n  max-width: 50%;\n}\n\nion-text {\n  padding-left: 10px;\n}\n\nion-card-subtitle {\n  padding-bottom: 20px;\n}\n\nh1, p {\n  text-decoration: underline;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n}\n\nsection {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\narticle {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 5px;\n  align-content: space-around;\n  /* position:absolute;\n  top:0px; */\n}\n\narticle:hover {\n  background-color: #32455357;\n}\n\nul {\n  list-style-type: disclosure-closed;\n  padding-left: 10px;\n}\n\n.plat {\n  color: white;\n  background-color: #324553;\n  font-size: 1rem;\n  /* width:33%; */\n  border-radius: 2px;\n  margin: 5px;\n  padding-left: 10px;\n  min-height: 100px;\n}\n\n.flex {\n  display: flex;\n}\n\n.content {\n  width: 100%;\n  margin: auto;\n  margin-top: 0px !important;\n  /* justify-content: space-between; */\n}\n\n.bouton {\n  margin: auto;\n  margin-top: 0px;\n  width: 100px;\n  display: flex;\n  /* max-height: 50px; */\n}\n\n.btn {\n  text-align: center;\n  margin: auto;\n  display: block;\n  background-color: #324553;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  text-decoration: none;\n  padding-bottom: 20px;\n}\n\n#logo_img {\n  height: 50px;\n}\n\n#panier_img {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNJLG9CQUFBO0FBQVA7O0FBRUc7RUFDSSxlQUFBO0FBQ1A7O0FBQ0c7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVA7O0FBQUc7RUFDSSxXQUFBO0FBR1A7O0FBREc7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQUZHO0VBQ0ksV0FBQTtBQUtQOztBQUhHO0VBQ0ksY0FBQTtBQU1QOztBQUpHO0VBQ0ksa0JBQUE7QUFPUDs7QUFMRztFQUNJLG9CQUFBO0FBUVA7O0FBRUc7RUFDQywwQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0E7WUFBQTtBQUdKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFBQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6Im1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgaW9uLWNhcmR7XG4gICAgICAgLS1iYWNrZ3JvdW5kOiNmZGZkZmQ7XG4gICB9XG4gICBpb24taWNvbntcbiAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICB9XG4gICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICB0b3A6MDtcbiAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgei1pbmRleDogMjAwO1xuICAgfVxuICAgaW9uLWltZ3tcbiAgICAgICB3aWR0aDoxMDAlO1xuICAgfVxuICAgaW9uLWNhcmQtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIH1cbiAgIGlvbi1pbnB1dHtcbiAgICAgICB3aWR0aDogMzBweDtcbiAgIH1cbiAgIGlvbi1pdGVte1xuICAgICAgIG1heC13aWR0aDo1MCU7XG4gICB9XG4gICBpb24tdGV4dHtcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICB9XG4gICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgIH1cbiAgIFxuICAgXG4vLyAgIC5tb2RhbC13cmFwcGVye1xuLy8gICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICAuc2MtaW9uLW1vZGFsLW1ke1xuLy8gICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuICAgaDEscHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb257XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG59XG5hcnRpY2xle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvKiBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MHB4OyAqL1xufVxuYXJ0aWNsZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzMjQ1NTM1NztcbiAgICBcbn1cbnVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGlzY2xvc3VyZS1jbG9zZWQ7XG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XG5cbiBcbn1cbi5wbGF0e1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjQ1NTM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8qIHdpZHRoOjMzJTsgKi9cbiAgICBib3JkZXItcmFkaXVzOjJweDtcbiAgICBtYXJnaW46NXB4O1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIG1pbi1oZWlnaHQ6MTAwcHg7XG59XG4uZmxleHtcbiAgICBkaXNwbGF5OmZsZXg7XG59XG4uY29udGVudHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIFxuICAgIG1hcmdpbjphdXRvO1xuICAgIG1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIFxufVxuLmJvdXRvbntcbiAgICBtYXJnaW46YXV0bztcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICB3aWR0aDoxMDBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgLyogbWF4LWhlaWdodDogNTBweDsgKi9cbn1cbi5idG57XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NTUzO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYnRuOmhvdmVye1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNiNjAwM2E7XG59XG4jbG9nb19pbWcge1xuICAgIGhlaWdodDo1MHB4O1xufVxuXG4jcGFuaWVyX2ltZyB7XG4gICAgaGVpZ2h0OjQwcHg7XG59Il19 */");

/***/ }),

/***/ "wwHD":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n</ion-toolbar>\n</ion-header> -->\n\n<ion-content >\n  <ion-card-header>\n  <ion-icon (click)=\"dismiss()\" name=\"close-circle-outline\"></ion-icon>\n</ion-card-header>\n  <article >\n    <ion-card>\n      <!-- <ion-card-header> -->\n        \n        <ion-card-title>\n          <a class='btn style_button'>\n          {{meal.label}}\n          </a>\n        </ion-card-title>\n        <ion-card-subtitle>\n          <p >Choix du jour</p>\n          \n        </ion-card-subtitle>\n      <!-- </ion-card-header> -->\n      <ion-segment (ionChange)=\"changeTab($event)\"  mode=\"ios\" scrollable value=\"Semaine\">\n        <ion-segment-button value=\"Lundi\">\n          Lundi\n        </ion-segment-button>\n        <ion-segment-button value=\"Mardi\">\n          Mardi\n        </ion-segment-button>\n        <ion-segment-button value=\"Mercredi\">\n          Mercredi\n        </ion-segment-button>\n        <ion-segment-button value=\"Jeudi\">\n          Jeudi\n        </ion-segment-button>\n        <ion-segment-button value=\"vendredi\">\n          Vendredi\n        </ion-segment-button>\n      </ion-segment>\n      <ion-card-content>\n        <div class=\"flex\">\n          <!-- <ion-item> -->\n          <ion-img [src]=\"meal.src\"></ion-img>\n        <!-- </ion-item> -->\n          <!-- <ion-item> -->\n            <ion-text>\n            <ion-label position=\"inline\">description:</ion-label>\n            <br/>\n            {{ meal.description }}\n            What is Lorem Ipsum?\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n            </ion-text>\n          <!-- </ion-item> -->\n          \n        </div>\n        <div>\n          <ion-item>\n            <ion-label position=\"inline\">Quantité:</ion-label>\n            <ion-input mode=\"ios\" type=\"number\" min=\"0\" max=\"15\" value=\"1\"></ion-input>\n            <ion-button>ajouter au panier</ion-button>\n\n          </ion-item>\n          \n      </div>\n      </ion-card-content>\n    \n      <ion-card-subtitle ><p>Repas</p></ion-card-subtitle>\n      <div class='plat'>\n        <!-- <ul> -->\n          <div >\n            <p *ngIf=\"meal.isAvailable\">{{ meal.label }}</p>\n            \n            </div>\n          <!-- <li>Melon<br/></li>\n          <li>Sauce bolognaise végétale aux fèves et courgettesBIO<br/></li>\n          <li>Pommes de terre grenaille<br/></li>\n          <li>Yaourt nature<br/></li> -->\n        <!-- </ul> -->\n      </div>\n        <!-- <ion-card-subtitle><p>Plat \"deux\"</p></ion-card-subtitle> -->\n      <!-- <div class='plat'>\n        <ul>\n          <li>Bruchetta mozzarella<br/></li>\n          <li>Escalope de poulet Yassa<br/></li>\n          <li>Semoule BIO<br/></li>\n          <li>Fruit de saison<br/></li>\n        </ul>\n      </div> -->\n        \n    </ion-card>\n  </article>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~menu-semaine-menu-semaine-module~modal-modal-module-es2015.js.map