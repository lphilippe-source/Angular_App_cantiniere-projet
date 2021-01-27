(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "1B46":
/*!*******************************************************!*\
  !*** ./src/app/edit-user/edit-user-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageRoutingModule", function() { return EditUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user.page */ "gj+Q");




const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_3__["EditUserPage"]
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ "FPPG":
/*!***********************************************!*\
  !*** ./src/app/edit-user/edit-user.module.ts ***!
  \***********************************************/
/*! exports provided: EditUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user-routing.module */ "1B46");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user.page */ "gj+Q");
/* harmony import */ var _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-modules/shared-modules.module */ "OS5G");








let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditUserPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_modules_shared_modules_module__WEBPACK_IMPORTED_MODULE_7__["SharedModulesModule"]
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]]
    })
], EditUserPageModule);



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

/***/ "gj+Q":
/*!*********************************************!*\
  !*** ./src/app/edit-user/edit-user.page.ts ***!
  \*********************************************/
/*! exports provided: EditUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPage", function() { return EditUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-user.page.html */ "t9hs");
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user.page.scss */ "nWQB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cantiniere-api.service */ "2gzs");
/* harmony import */ var _utils_EmailUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/EmailUtils */ "v5IG");
/* harmony import */ var _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ToastUtils */ "zTUt");










let EditUserPage = class EditUserPage {
    constructor(formBuilder, service, toastController, route, navController) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastController = toastController;
        this.route = route;
        this.navController = navController;
        this.isValidateEnabled = false;
        this.isImageImported = false;
    }
    ngOnInit() {
        // User et Token recupéré depuis la sessionStorage
        // ils existent forcement car on ne peut acceder à cette page que si on est connecté
        this.user = JSON.parse(sessionStorage.getItem("User"));
        this.token = sessionStorage.getItem("JWT");
        //let userId = this.route.snapshot.paramMap.get("id")
        this.userForm = this.formBuilder.group({
            email: this.user.email,
            verifyEmail: this.user.email,
            address: this.user.address,
            phone: this.user.phone
        });
        this.userForm.valueChanges.subscribe(values => {
            if (values.email != "" && values.verifyEmail != "" && values.adress != "" && values.phone != null) {
                this.isValidateEnabled = true;
            }
            else
                this.isValidateEnabled = false;
        });
    }
    // executée quand l'image est importée par l'utilisateur
    onImageUploaded(event) {
        const image = event.target.files[0];
        let sizeMB = image.size / 1000000;
        if (sizeMB < 5) {
            this.getImage64(image);
            this.isImageImported = true;
        }
        else
            _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Veuillez importer une image inférieure à 5MB", "danger", this.toastController);
    }
    getImage64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (result) => {
            this.image64 = String(result.target.result);
        };
        reader.onerror = (error) => {
            _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Une erreur s'est produite lors de l'import de l'image", "danger", this.toastController);
        };
    }
    // executée quand l'utilisateur clique sur modifier avatar
    uploadImage() {
        // desactivation du bouton au click 
        this.isImageImported = false;
        this.service.updateUserImg(this.user.id, this.image64, this.token).subscribe((response) => {
            console.log(response);
            this.service.findImg(this.user.id, this.token).subscribe((response) => {
                console.log(response);
                //this.user.image.imagePath = response.body.imagePath
            });
            //this.navController.pop()
        }, (error) => {
            console.log(error);
            _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Une erreur s'est produire lors de la modification de l'avatar", "danger", this.toastController);
        });
    }
    onValidate() {
        let values = this.userForm.value;
        if (values.email.toLowerCase() == values.verifyEmail.toLowerCase()) {
            if (_utils_EmailUtils__WEBPACK_IMPORTED_MODULE_8__["EmailUtils"].verifyEmail(values.email)) {
                this.user.email = values.email.toLowerCase();
                this.user.address = values.address;
                this.user.phone = values.phone;
                // this.user.password = null
                this.service.updateUser(this.user, this.token).subscribe((response) => {
                    console.log(response);
                    _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Informations modifées avec succès", "success", this.toastController);
                    // mise à jour de l'utilisateur en sessionStorage
                    sessionStorage.setItem("User", JSON.stringify(this.user));
                    // retour en arrière
                    this.navController.pop();
                }, (error) => {
                    console.log(error);
                    _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Une erreur s'est produite", "danger", this.toastController);
                });
            }
            else {
                _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Veuillez saisir un email valide", "danger", this.toastController);
            }
        }
        else {
            _utils_ToastUtils__WEBPACK_IMPORTED_MODULE_9__["ToastUtils"].presentToast("Les emails ne sont pas identiques", "danger", this.toastController);
        }
    }
};
EditUserPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _cantiniere_api_service__WEBPACK_IMPORTED_MODULE_7__["CantiniereAPIService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
EditUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-user',
        template: _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditUserPage);



/***/ }),

/***/ "nWQB":
/*!***********************************************!*\
  !*** ./src/app/edit-user/edit-user.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: white;\n  text-align: center;\n}\n\nion-label {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VkaXQtdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEoiLCJmaWxlIjoiZWRpdC11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy93YWxscGFwZXJcXCBjYWZldGVyaWEuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4vLyB9XG5cbmgxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */");

/***/ }),

/***/ "t9hs":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-user/edit-user.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-header></app-header>\n</ion-header>\n\n<ion-content>\n\n  <h1>Modifier les infos du compte</h1>\n\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onValidate()\" class=\"ion-margin-horizontal\" *ngIf=\"user\">\n\n    <ion-input type=\"file\" (change)=\"onImageUploaded($event)\" accept=\".png, .jpg, .jpeg\"></ion-input>\n    <div class=\"ion-text-center\">\n      <ion-button (click)=\"uploadImage()\" [disabled]=\"!this.isImageImported\" class=\"ion-margin-bottom\" color=\"primary\">Modifier avatar</ion-button>\n    </div>\n\n    <ion-label class=\"ion-margin-bottom\" color=\"light\">Nom</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input color=\"medium\" type=\"text\" name=\"name\" readonly>{{user.name}}</ion-input>\n    </ion-item>\n\n    <ion-label color=\"light\">Prénom</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input color=\"medium\" type=\"text\" name=\"firstname\" readonly>{{user.firstname}}</ion-input>\n    </ion-item>\n\n    <ion-label color=\"light\">Email</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input type=\"email\" autocomplete=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-label color=\"light\">Vérifier email</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input type=\"email\" autocomplete=\"off\" formControlName=\"verifyEmail\"></ion-input>\n    </ion-item>\n\n    <ion-label color=\"light\">Adresse</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n    </ion-item>\n\n    <ion-label color=\"light\">Tél.</ion-label>\n    <ion-item class=\"ion-margin-bottom\">\n      <ion-input type=\"phone\" formControlName=\"phone\"></ion-input>\n    </ion-item>\n    \n    <div class=\"ion-text-center\">\n      <ion-button [disabled]=\"!this.isValidateEnabled\" type=\"submit\" class=\"ion-margin-bottom\" color=\"primary\">Valider</ion-button>\n    </div>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module-es2015.js.map