(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-pipes-module"],{

/***/ "D4jl":
/*!***************************************************************************!*\
  !*** ./src/app/pipes/credit-card-formatter/credit-card-formatter.pipe.ts ***!
  \***************************************************************************/
/*! exports provided: CreditCardFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardFormatterPipe", function() { return CreditCardFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CreditCardFormatterPipe {
    transform(cardNumber) {
        if (!this.hasCorrectLength(cardNumber)) {
            return 'Invalid Card Length';
        }
        if (!this.isAllNumbers(cardNumber)) {
            return 'Invalid Characters';
        }
        return this.formatCardNumber(cardNumber);
    }
    isAllNumbers(cardNumber) {
        const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const totalValidCharacters = cardNumber.split('').filter((char) => stringNumbers.includes(char)).length;
        return totalValidCharacters === cardNumber.length;
    }
    hasCorrectLength(cardNumber) {
        const cardNumberLength = cardNumber.length;
        const isMasterDiscoveryVisaCardLength = 16;
        const isAmericanExpressCardLength = 15;
        if (cardNumberLength === isAmericanExpressCardLength ||
            cardNumberLength === isMasterDiscoveryVisaCardLength) {
            return true;
        }
        return false;
    }
    formatCardNumber(cardNumber) {
        const parts = cardNumber.match(/[\s\S]{1,4}/g);
        return parts.join('-');
    }
}
CreditCardFormatterPipe.ɵfac = function CreditCardFormatterPipe_Factory(t) { return new (t || CreditCardFormatterPipe)(); };
CreditCardFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "creditCardFormatter", type: CreditCardFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'creditCardFormatter'
            }]
    }], null, null); })();


/***/ }),

/***/ "N/B8":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.routes.ts ***!
  \***************************************/
/*! exports provided: PIPES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPES_ROUTES", function() { return PIPES_ROUTES; });
/* harmony import */ var _pipe_documentation_pipe_documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipe-documentation/pipe-documentation.component */ "e6De");

const PIPES_ROUTES = [
    { path: '', component: _pipe_documentation_pipe_documentation_component__WEBPACK_IMPORTED_MODULE_0__["PipeDocumentationComponent"] }
];


/***/ }),

/***/ "e6De":
/*!**************************************************************************!*\
  !*** ./src/app/pipes/pipe-documentation/pipe-documentation.component.ts ***!
  \**************************************************************************/
/*! exports provided: PipeDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeDocumentationComponent", function() { return PipeDocumentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_banner_cut_out_banner_cut_out_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/banner-cut-out/banner-cut-out.component */ "nmYC");
/* harmony import */ var _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/card/card.component */ "L21D");
/* harmony import */ var _flatten_flatten_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flatten/flatten.pipe */ "zqGv");
/* harmony import */ var _credit_card_formatter_credit_card_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../credit-card-formatter/credit-card-formatter.pipe */ "D4jl");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../truncate/truncate.pipe */ "qo4k");







class PipeDocumentationComponent {
    constructor() {
        this.flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
    }
    modifyFlatten() {
        this.flattenData.push(3, 5);
    }
    reassignFlatten() {
        this.flattenData = [...this.flattenData];
    }
}
PipeDocumentationComponent.ɵfac = function PipeDocumentationComponent_Factory(t) { return new (t || PipeDocumentationComponent)(); };
PipeDocumentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipeDocumentationComponent, selectors: [["app-pipe-documentation"]], decls: 25, vars: 25, consts: [[3, "iconClasses", "title", "subTitle"], ["body", ""], ["footer", ""], [3, "click"]], template: function PipeDocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner-cut-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "appFlatten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipeDocumentationComponent_Template_button_click_6_listener() { return ctx.modifyFlatten(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipeDocumentationComponent_Template_button_click_8_listener() { return ctx.reassignFlatten(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reassign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "creditCardFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "creditCardFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "creditCardFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconClasses", "fas fa-info-circle")("title", "Flatten")("subTitle", "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx.flattenData), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconClasses", "fas fa-info-circle")("title", "Credit Card Formater")("subTitle", "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "1111222233334444"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "11111111111111111111111111"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 20, "a111222233334444"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconClasses", "fas fa-info-circle")("title", "Truncate")("subTitle", "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 22, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatum dolor saepe eius fugit natus error, fugiat unde dolorum? Vitae optio molestias quae pariatur natus quaerat fuga sit delectus eveniet?", 75));
    } }, directives: [_components_banner_cut_out_banner_cut_out_component__WEBPACK_IMPORTED_MODULE_1__["BannerCutOutComponent"], _shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], pipes: [_flatten_flatten_pipe__WEBPACK_IMPORTED_MODULE_3__["FlattenPipe"], _credit_card_formatter_credit_card_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["CreditCardFormatterPipe"], _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaXBlLWRvY3VtZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipeDocumentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pipe-documentation',
                templateUrl: './pipe-documentation.component.html',
                styleUrls: ['./pipe-documentation.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipe_documentation_pipe_documentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe-documentation/pipe-documentation.component */ "e6De");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes.routes */ "N/B8");
/* harmony import */ var _components_banner_cut_out_banner_cut_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/banner-cut-out/banner-cut-out.component */ "nmYC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "qo4k");
/* harmony import */ var _credit_card_formatter_credit_card_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credit-card-formatter/credit-card-formatter.pipe */ "D4jl");
/* harmony import */ var _flatten_flatten_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flatten/flatten.pipe */ "zqGv");












class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_pipes_routes__WEBPACK_IMPORTED_MODULE_4__["PIPES_ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_pipe_documentation_pipe_documentation_component__WEBPACK_IMPORTED_MODULE_2__["PipeDocumentationComponent"],
        _components_banner_cut_out_banner_cut_out_component__WEBPACK_IMPORTED_MODULE_5__["BannerCutOutComponent"],
        _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"],
        _credit_card_formatter_credit_card_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__["CreditCardFormatterPipe"],
        _flatten_flatten_pipe__WEBPACK_IMPORTED_MODULE_9__["FlattenPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipe_documentation_pipe_documentation_component__WEBPACK_IMPORTED_MODULE_2__["PipeDocumentationComponent"],
                    _components_banner_cut_out_banner_cut_out_component__WEBPACK_IMPORTED_MODULE_5__["BannerCutOutComponent"],
                    _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_7__["TruncatePipe"],
                    _credit_card_formatter_credit_card_formatter_pipe__WEBPACK_IMPORTED_MODULE_8__["CreditCardFormatterPipe"],
                    _flatten_flatten_pipe__WEBPACK_IMPORTED_MODULE_9__["FlattenPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_pipes_routes__WEBPACK_IMPORTED_MODULE_4__["PIPES_ROUTES"])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nmYC":
/*!***********************************************************************!*\
  !*** ./src/app/components/banner-cut-out/banner-cut-out.component.ts ***!
  \***********************************************************************/
/*! exports provided: BannerCutOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerCutOutComponent", function() { return BannerCutOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerCutOutComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerCutOutComponent.ɵfac = function BannerCutOutComponent_Factory(t) { return new (t || BannerCutOutComponent)(); };
BannerCutOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerCutOutComponent, selectors: [["app-banner-cut-out"]], decls: 7, vars: 0, consts: [[1, "banner-cut-out__picture"], ["type", "image/avif", "srcset", "../../../assets/back-4.avif"], ["type", "image/webp", "srcset", "../../../assets/back-4.webp"], ["type", "image/jpg", "srcset", "../../../assets/back-4.jpg"], ["src", "../../../assets/back-4.jpg", "alt", "background-image", 1, "picture__image"], [1, "banner-cut-out__title"]], template: function BannerCutOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "picture", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "PIPES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.picture__image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.banner-cut-out__title[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  background-color: #FFF;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  font-size: 2rem;\n  font-weight: 900;\n  letter-spacing: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYW5uZXItY3V0LW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImJhbm5lci1jdXQtb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waWN0dXJlX19pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYW5uZXItY3V0LW91dF9fdGl0bGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerCutOutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-cut-out',
                templateUrl: './banner-cut-out.component.html',
                styleUrls: ['./banner-cut-out.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qo4k":
/*!*************************************************!*\
  !*** ./src/app/pipes/truncate/truncate.pipe.ts ***!
  \*************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncatePipe {
    transform(value = '', length = 100) {
        let availableCharacters = value.slice(0, length);
        if (value.length > length) {
            availableCharacters += '...';
        }
        return availableCharacters;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncate'
            }]
    }], null, null); })();


/***/ }),

/***/ "zqGv":
/*!***********************************************!*\
  !*** ./src/app/pipes/flatten/flatten.pipe.ts ***!
  \***********************************************/
/*! exports provided: FlattenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FlattenPipe {
    transform(values) {
        return this.flattenArray(values);
    }
    flattenArray(arr) {
        const result = [];
        arr.forEach((value) => {
            if (Array.isArray(value)) {
                result.push(...this.flattenArray(value));
            }
            else {
                result.push(value);
            }
        });
        return result;
    }
}
FlattenPipe.ɵfac = function FlattenPipe_Factory(t) { return new (t || FlattenPipe)(); };
FlattenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appFlatten", type: FlattenPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlattenPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'appFlatten',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-pipes-module.js.map