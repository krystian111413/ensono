(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issues/components/issues-searcher/issues-list/issues-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issues/components/issues-searcher/issues-list/issues-list.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"showLoadingBar\" mode=\"indeterminate\"></mat-progress-bar>\n<p *ngIf=\"!issues\">your search results will appear here</p>\n<p *ngIf=\"issues && issues.length === 0\">try a different query</p>\n<div *ngIf=\"issues && issues.length > 0\">\n  <div *ngFor=\"let issue of issues\" class=\"issue\">\n    <div fxLayout=\"row\">\n      <button class=\"star\" mat-icon-button fxFlex=\"5\">\n        <mat-icon (click)=\"onLikeOrUnlikeEvent(issue.id)\" [ngClass]=\"{'liked': isLiked(issue.id)}\">star</mat-icon>\n      </button>\n      <h3 fxFlex=\"80\"><a [href]=\"issue.html_url\">Title: {{issue.title}}</a></h3>\n      <p class=\"date\" fxFlex=\"15\">\n        <mat-icon>today</mat-icon>\n        {{formatDate(issue.created_at)}}\n      </p>\n    </div>\n    <div class=\"content\">\n      <div fxLayout=\"row\">\n        <img src=\"{{issue.user.avatar_url}}\" alt=\"avatar\" class=\"avatar\">\n        <a [href]=\"issue.user.html_url\" class=\"nick\"> {{issue.user.login}} </a>\n      </div>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" readonly=\"true\" [value]=\"issue.body\"></textarea>\n      </mat-form-field>\n      <mat-chip-list aria-label=\"Labels\">\n        <mat-chip *ngFor=\"let label of issue.labels\"\n                  [ngStyle]=\"{'background-color': '#'+label.color}\"\n                  (click)=\"onLabelClick(label.name)\"\n                  matTooltip=\"Click to change query\"\n                  matTooltipPosition=\"above\">{{label.name}}</mat-chip>\n      </mat-chip-list>\n    </div>\n    <mat-divider></mat-divider>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issues/components/issues-searcher/issues-searcher.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issues/components/issues-searcher/issues-searcher.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form [formGroup]=\"searchForm\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Search</mat-label>\n      <input matInput placeholder=\"find by label: e.g.: 'comp: core'\" formControlName=\"searchText\">\n    </mat-form-field>\n  </form>\n</mat-card>\n<mat-card>\n  <h2>\n    <mat-icon>list</mat-icon>\n    Issues\n  </h2>\n  <app-issues-list\n    [issues]=\"issues\"\n    [showLoadingBar]=\"isFetchingIssues\"\n    (labelClick)=\"setSearchBox($event)\"></app-issues-list>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issues_issues_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issues/issues.module */ "./src/app/issues/issues.module.ts");




var routes = [
    {
        path: 'issues',
        loadChildren: function () { return _issues_issues_module__WEBPACK_IMPORTED_MODULE_3__["IssuesModule"]; }
    },
    {
        path: '**',
        redirectTo: 'issues'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 12px;\n  background-color: rgba(246, 248, 251, 0.39);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnlzdGlhbmtvd2Fsc2tpL3dvcmtzcGFjZS9lbnNvbm8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0OCwgMjUxLCAwLjM5KTtcbn1cbiIsImRpdiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDgsIDI1MSwgMC4zOSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/issues/components/issues-searcher/issues-list/issues-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/issues/components/issues-searcher/issues-list/issues-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n  margin: 12px;\n}\nmat-form-field ::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\nmat-divider {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.star {\n  align-self: center;\n}\n.liked {\n  color: mediumslateblue;\n}\n.issue {\n  margin-bottom: 8px;\n}\n.date {\n  text-align: end;\n}\n.nick {\n  margin-top: auto;\n}\n.avatar {\n  width: 24px;\n  height: 24px;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin: 2px;\n}\n.content {\n  padding-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnlzdGlhbmtvd2Fsc2tpL3dvcmtzcGFjZS9lbnNvbm8vc3JjL2FwcC9pc3N1ZXMvY29tcG9uZW50cy9pc3N1ZXMtc2VhcmNoZXIvaXNzdWVzLWxpc3QvaXNzdWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2lzc3Vlcy9jb21wb25lbnRzL2lzc3Vlcy1zZWFyY2hlci9pc3N1ZXMtbGlzdC9pc3N1ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGlCQUFBO0FDRUo7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxzQkFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9jb21wb25lbnRzL2lzc3Vlcy1zZWFyY2hlci9pc3N1ZXMtbGlzdC9pc3N1ZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTJweDtcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxufVxuXG5tYXQtZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc3RhciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcbn1cblxuLmlzc3VlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZGF0ZSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLm5pY2sge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uYXZhdGFyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMnB4O1xufVxubWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5zdGFyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogbWVkaXVtc2xhdGVibHVlO1xufVxuXG4uaXNzdWUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kYXRlIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubmljayB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDJweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/issues/components/issues-searcher/issues-list/issues-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/issues/components/issues-searcher/issues-list/issues-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: IssuesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesListComponent", function() { return IssuesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/issues.service */ "./src/app/issues/services/issues.service.ts");



var IssuesListComponent = /** @class */ (function () {
    function IssuesListComponent(issuesService) {
        this.issuesService = issuesService;
        this.showLoadingBar = false;
        this.labelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.likedIssueIds = [];
    }
    IssuesListComponent.prototype.ngOnInit = function () {
        this.loadLikedIssues();
    };
    IssuesListComponent.prototype.onLikeOrUnlikeEvent = function (id) {
        if (this.isLiked(id)) {
            this.likedIssueIds = this.likedIssueIds.filter(function (value) { return value !== id; });
        }
        else {
            this.likedIssueIds.push(id);
        }
        this.issuesService.setLikedIssues(this.likedIssueIds);
    };
    IssuesListComponent.prototype.isLiked = function (id) {
        return this.likedIssueIds.includes(id);
    };
    IssuesListComponent.prototype.onLabelClick = function (labelName) {
        this.labelClick.emit(labelName);
    };
    IssuesListComponent.prototype.formatDate = function (dateAsString) {
        return new Date(dateAsString).toLocaleDateString();
    };
    IssuesListComponent.prototype.loadLikedIssues = function () {
        this.likedIssueIds = this.issuesService.getLikedIssues();
    };
    IssuesListComponent.ctorParameters = function () { return [
        { type: _services_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IssuesListComponent.prototype, "issues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IssuesListComponent.prototype, "showLoadingBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], IssuesListComponent.prototype, "labelClick", void 0);
    IssuesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issues-list',
            template: __webpack_require__(/*! raw-loader!./issues-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/issues/components/issues-searcher/issues-list/issues-list.component.html"),
            styles: [__webpack_require__(/*! ./issues-list.component.scss */ "./src/app/issues/components/issues-searcher/issues-list/issues-list.component.scss")]
        })
    ], IssuesListComponent);
    return IssuesListComponent;
}());



/***/ }),

/***/ "./src/app/issues/components/issues-searcher/issues-searcher.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/issues/components/issues-searcher/issues-searcher.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\nmat-card {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnlzdGlhbmtvd2Fsc2tpL3dvcmtzcGFjZS9lbnNvbm8vc3JjL2FwcC9pc3N1ZXMvY29tcG9uZW50cy9pc3N1ZXMtc2VhcmNoZXIvaXNzdWVzLXNlYXJjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pc3N1ZXMvY29tcG9uZW50cy9pc3N1ZXMtc2VhcmNoZXIvaXNzdWVzLXNlYXJjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy9jb21wb25lbnRzL2lzc3Vlcy1zZWFyY2hlci9pc3N1ZXMtc2VhcmNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/issues/components/issues-searcher/issues-searcher.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/issues/components/issues-searcher/issues-searcher.component.ts ***!
  \********************************************************************************/
/*! exports provided: IssuesSearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesSearcherComponent", function() { return IssuesSearcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_issues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/issues.service */ "./src/app/issues/services/issues.service.ts");





var IssuesSearcherComponent = /** @class */ (function () {
    function IssuesSearcherComponent(formBuilder, issuesSearcherService) {
        this.formBuilder = formBuilder;
        this.issuesSearcherService = issuesSearcherService;
        this.isFetchingIssues = false;
        this.defineSearchForm();
    }
    IssuesSearcherComponent.prototype.ngOnInit = function () {
        this.subscribeSearchForm();
    };
    IssuesSearcherComponent.prototype.setSearchBox = function (labelName) {
        this.searchForm.controls.searchText.setValue(labelName);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    IssuesSearcherComponent.prototype.subscribeSearchForm = function () {
        var _this = this;
        this.searchForm
            .controls
            .searchText
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return value.trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (value) { return value.length > 2; })).subscribe(function (value) {
            _this.isFetchingIssues = true;
            _this.issuesSearcherService.getOpenIssues(value).subscribe(function (issues) {
                _this.isFetchingIssues = false;
                _this.issues = issues;
            });
        });
    };
    IssuesSearcherComponent.prototype.defineSearchForm = function () {
        this.searchForm = this.formBuilder.group({
            searchText: ['']
        });
    };
    IssuesSearcherComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_issues_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"] }
    ]; };
    IssuesSearcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issues-searcher',
            template: __webpack_require__(/*! raw-loader!./issues-searcher.component.html */ "./node_modules/raw-loader/index.js!./src/app/issues/components/issues-searcher/issues-searcher.component.html"),
            styles: [__webpack_require__(/*! ./issues-searcher.component.scss */ "./src/app/issues/components/issues-searcher/issues-searcher.component.scss")]
        })
    ], IssuesSearcherComponent);
    return IssuesSearcherComponent;
}());



/***/ }),

/***/ "./src/app/issues/issues-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/issues/issues-routing.module.ts ***!
  \*************************************************/
/*! exports provided: IssuesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesRoutingModule", function() { return IssuesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_issues_searcher_issues_searcher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/issues-searcher/issues-searcher.component */ "./src/app/issues/components/issues-searcher/issues-searcher.component.ts");




var routes = [
    {
        path: '',
        component: _components_issues_searcher_issues_searcher_component__WEBPACK_IMPORTED_MODULE_3__["IssuesSearcherComponent"]
    }
];
var IssuesRoutingModule = /** @class */ (function () {
    function IssuesRoutingModule() {
    }
    IssuesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IssuesRoutingModule);
    return IssuesRoutingModule;
}());



/***/ }),

/***/ "./src/app/issues/issues.module.ts":
/*!*****************************************!*\
  !*** ./src/app/issues/issues.module.ts ***!
  \*****************************************/
/*! exports provided: IssuesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesModule", function() { return IssuesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _issues_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./issues-routing.module */ "./src/app/issues/issues-routing.module.ts");
/* harmony import */ var _components_issues_searcher_issues_searcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/issues-searcher/issues-searcher.component */ "./src/app/issues/components/issues-searcher/issues-searcher.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_issues_searcher_issues_list_issues_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/issues-searcher/issues-list/issues-list.component */ "./src/app/issues/components/issues-searcher/issues-list/issues-list.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_issues_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/issues.service */ "./src/app/issues/services/issues.service.ts");










var IssuesModule = /** @class */ (function () {
    function IssuesModule() {
    }
    IssuesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_issues_searcher_issues_searcher_component__WEBPACK_IMPORTED_MODULE_4__["IssuesSearcherComponent"], _components_issues_searcher_issues_list_issues_list_component__WEBPACK_IMPORTED_MODULE_7__["IssuesListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _issues_routing_module__WEBPACK_IMPORTED_MODULE_3__["IssuesRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"]
            ],
            providers: [_services_issues_service__WEBPACK_IMPORTED_MODULE_9__["IssuesService"]]
        })
    ], IssuesModule);
    return IssuesModule;
}());



/***/ }),

/***/ "./src/app/issues/services/issues.service.ts":
/*!***************************************************!*\
  !*** ./src/app/issues/services/issues.service.ts ***!
  \***************************************************/
/*! exports provided: IssuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function() { return IssuesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var IssuesService = /** @class */ (function () {
    function IssuesService(httpClient) {
        this.httpClient = httpClient;
        this.issuesLiked = 'issuesLiked';
    }
    IssuesService.prototype.getOpenIssues = function (filterValue) {
        var query = {
            state: 'open',
            labels: filterValue
        };
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApi + "/issues", { params: query });
    };
    IssuesService.prototype.getLikedIssues = function () {
        var likedIssuesFromLocalStorage = JSON.parse(localStorage.getItem(this.issuesLiked));
        return likedIssuesFromLocalStorage ? likedIssuesFromLocalStorage : [];
    };
    IssuesService.prototype.setLikedIssues = function (issueIds) {
        localStorage.setItem(this.issuesLiked, JSON.stringify(issueIds));
    };
    IssuesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IssuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], IssuesService);
    return IssuesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    urlApi: 'https://api.github.com/repos/angular/angular'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krystiankowalski/workspace/ensono/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map