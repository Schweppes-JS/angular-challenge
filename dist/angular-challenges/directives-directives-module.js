(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-directives-module"],{

/***/ "FUS3":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives.routes */ "HgCa");
/* harmony import */ var _directive_documentation_directive_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive-documentation/directive-documentation.component */ "OEd4");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








class DirectivesModule {
}
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_directives_routes__WEBPACK_IMPORTED_MODULE_3__["DIRECTIVES_ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_directive_documentation_directive_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DirectiveDocumentationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_directive_documentation_directive_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DirectiveDocumentationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_directives_routes__WEBPACK_IMPORTED_MODULE_3__["DIRECTIVES_ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HgCa":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.routes.ts ***!
  \*************************************************/
/*! exports provided: DIRECTIVES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTIVES_ROUTES", function() { return DIRECTIVES_ROUTES; });
/* harmony import */ var _directive_documentation_directive_documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-documentation/directive-documentation.component */ "OEd4");

const DIRECTIVES_ROUTES = [
    { path: '', component: _directive_documentation_directive_documentation_component__WEBPACK_IMPORTED_MODULE_0__["DirectiveDocumentationComponent"] }
];


/***/ }),

/***/ "OEd4":
/*!*****************************************************************************************!*\
  !*** ./src/app/directives/directive-documentation/directive-documentation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DirectiveDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveDocumentationComponent", function() { return DirectiveDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DirectiveDocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
DirectiveDocumentationComponent.ɵfac = function DirectiveDocumentationComponent_Factory(t) { return new (t || DirectiveDocumentationComponent)(); };
DirectiveDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DirectiveDocumentationComponent, selectors: [["app-directive-documentation"]], decls: 0, vars: 0, template: function DirectiveDocumentationComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXJlY3RpdmUtZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectiveDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-directive-documentation',
                templateUrl: './directive-documentation.component.html',
                styleUrls: ['./directive-documentation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-directives-module.js.map