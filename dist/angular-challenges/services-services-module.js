(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "334H":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _service_documentation_service_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-documentation/service-documentation.component */ "QvdF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.routes */ "sX6a");







class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_services_routes__WEBPACK_IMPORTED_MODULE_4__["SERVICES_ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_service_documentation_service_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ServiceDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_service_documentation_service_documentation_component__WEBPACK_IMPORTED_MODULE_2__["ServiceDocumentationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_services_routes__WEBPACK_IMPORTED_MODULE_4__["SERVICES_ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QvdF":
/*!***********************************************************************************!*\
  !*** ./src/app/services/service-documentation/service-documentation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDocumentationComponent", function() { return ServiceDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServiceDocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceDocumentationComponent.ɵfac = function ServiceDocumentationComponent_Factory(t) { return new (t || ServiceDocumentationComponent)(); };
ServiceDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceDocumentationComponent, selectors: [["app-service-documentation"]], decls: 2, vars: 0, template: function ServiceDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "service-documentation works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-documentation',
                templateUrl: './service-documentation.component.html',
                styleUrls: ['./service-documentation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sX6a":
/*!*********************************************!*\
  !*** ./src/app/services/services.routes.ts ***!
  \*********************************************/
/*! exports provided: SERVICES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES_ROUTES", function() { return SERVICES_ROUTES; });
/* harmony import */ var _service_documentation_service_documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-documentation/service-documentation.component */ "QvdF");

const SERVICES_ROUTES = [
    { path: '', component: _service_documentation_service_documentation_component__WEBPACK_IMPORTED_MODULE_0__["ServiceDocumentationComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=services-services-module.js.map