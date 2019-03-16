(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _order_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/all-orders/all-orders.component */ "./src/app/order/all-orders/all-orders.component.ts");
/* harmony import */ var _order_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/new-order/new-order.component */ "./src/app/order/new-order/new-order.component.ts");
/* harmony import */ var _customer_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/all-customers/all-customers.component */ "./src/app/customer/all-customers/all-customers.component.ts");
/* harmony import */ var _order_single_order_single_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/single-order/single-order.component */ "./src/app/order/single-order/single-order.component.ts");
/* harmony import */ var _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer/new-customer/new-customer.component */ "./src/app/customer/new-customer/new-customer.component.ts");
/* harmony import */ var _customer_single_customer_single_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/single-customer/single-customer.component */ "./src/app/customer/single-customer/single-customer.component.ts");
/* harmony import */ var _order_delete_order_delete_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/delete-order/delete-order.component */ "./src/app/order/delete-order/delete-order.component.ts");
/* harmony import */ var _order_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/update-order/update-order.component */ "./src/app/order/update-order/update-order.component.ts");
/* harmony import */ var _customer_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/update-customer/update-customer.component */ "./src/app/customer/update-customer/update-customer.component.ts");
/* harmony import */ var _customer_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/delete-customer/delete-customer.component */ "./src/app/customer/delete-customer/delete-customer.component.ts");













var routes = [
    { path: '', redirectTo: '/orders', pathMatch: 'full' },
    { path: 'orders', component: _order_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_3__["AllOrdersComponent"] },
    { path: 'orders/new', component: _order_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__["NewOrderComponent"] },
    { path: 'orders/view/:id', component: _order_single_order_single_order_component__WEBPACK_IMPORTED_MODULE_6__["SingleOrderComponent"] },
    { path: 'orders/update/:id', component: _order_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_10__["UpdateOrderComponent"] },
    { path: 'orders/delete/:id', component: _order_delete_order_delete_order_component__WEBPACK_IMPORTED_MODULE_9__["DeleteOrderComponent"] },
    { path: 'customers', component: _customer_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_5__["AllCustomersComponent"] },
    { path: 'customers/new', component: _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_7__["NewCustomerComponent"] },
    { path: 'customers/view/:id', component: _customer_single_customer_single_customer_component__WEBPACK_IMPORTED_MODULE_8__["SingleCustomerComponent"] },
    { path: 'customers/update/:id', component: _customer_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCustomerComponent"] },
    { path: 'customers/delete/:id', component: _customer_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__["DeleteCustomerComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-3\">\n\t<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark mb-3\">\n\t\t<a class=\"navbar-brand\" [routerLink]=\"[ '/' ]\">The Moving Company</a>\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t</button>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbar\">\n\t\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"[ '/orders' ]\" routerLinkActive=\"active\">Orders</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"[ '/customers' ]\" routerLinkActive=\"active\">Customers</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _order_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order/enum-to-array.pipe */ "./src/app/order/enum-to-array.pipe.ts");
/* harmony import */ var _customer_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/all-customers/all-customers.component */ "./src/app/customer/all-customers/all-customers.component.ts");
/* harmony import */ var _order_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/all-orders/all-orders.component */ "./src/app/order/all-orders/all-orders.component.ts");
/* harmony import */ var _order_single_order_single_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/single-order/single-order.component */ "./src/app/order/single-order/single-order.component.ts");
/* harmony import */ var _order_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/new-order/new-order.component */ "./src/app/order/new-order/new-order.component.ts");
/* harmony import */ var _order_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/update-order/update-order.component */ "./src/app/order/update-order/update-order.component.ts");
/* harmony import */ var _customer_single_customer_single_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/single-customer/single-customer.component */ "./src/app/customer/single-customer/single-customer.component.ts");
/* harmony import */ var _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer/new-customer/new-customer.component */ "./src/app/customer/new-customer/new-customer.component.ts");
/* harmony import */ var _customer_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer/update-customer/update-customer.component */ "./src/app/customer/update-customer/update-customer.component.ts");
/* harmony import */ var _customer_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/delete-customer/delete-customer.component */ "./src/app/customer/delete-customer/delete-customer.component.ts");
/* harmony import */ var _order_delete_order_delete_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order/delete-order/delete-order.component */ "./src/app/order/delete-order/delete-order.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _order_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_7__["EnumToArrayPipe"],
                _customer_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_8__["AllCustomersComponent"],
                _order_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_9__["AllOrdersComponent"],
                _order_single_order_single_order_component__WEBPACK_IMPORTED_MODULE_10__["SingleOrderComponent"],
                _order_new_order_new_order_component__WEBPACK_IMPORTED_MODULE_11__["NewOrderComponent"],
                _order_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_12__["UpdateOrderComponent"],
                _customer_single_customer_single_customer_component__WEBPACK_IMPORTED_MODULE_13__["SingleCustomerComponent"],
                _customer_new_customer_new_customer_component__WEBPACK_IMPORTED_MODULE_14__["NewCustomerComponent"],
                _customer_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_15__["UpdateCustomerComponent"],
                _customer_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_16__["DeleteCustomerComponent"],
                _order_delete_order_delete_order_component__WEBPACK_IMPORTED_MODULE_17__["DeleteOrderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/all-customers/all-customers.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/all-customers/all-customers.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-success mb-3\" [routerLink]=\"[ '/customers/new' ]\">Create new Customer</a>\n\n<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th>Orders</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let customer of customers\">\n        <td>{{customer.id}}</td>\n        <td>{{customer.name}}</td>\n        <td><a href=\"mailto:{{customer.email}}\">{{customer.email}}</a></td>\n        <td><a href=\"tel:{{customer.phone}}\">{{customer.phone}}</a></td>\n        <td><code>UNDER DEVELOPMENT</code></td>\n        <td>\n          <div class=\"btn-group btn-group-sm\">\n              <a class=\"btn btn-info\" [routerLink]=\"[ '/customers/view/', customer.id ]\">Details</a>\n              <a class=\"btn btn-warning\" [routerLink]=\"[ '/customers/update/', customer.id ]\">Update</a>\n              <a class=\"btn btn-danger\" [routerLink]=\"[ '/customers/delete/', customer.id ]\">Delete</a>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/customer/all-customers/all-customers.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/customer/all-customers/all-customers.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2FsbC1jdXN0b21lcnMvYWxsLWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/all-customers/all-customers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/all-customers/all-customers.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCustomersComponent", function() { return AllCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer/customer.service.ts");



var AllCustomersComponent = /** @class */ (function () {
    function AllCustomersComponent(customerService) {
        this.customerService = customerService;
        this.customers = [];
    }
    AllCustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    AllCustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) { return _this.customers = customers; });
    };
    AllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-customers',
            template: __webpack_require__(/*! ./all-customers.component.html */ "./src/app/customer/all-customers/all-customers.component.html"),
            styles: [__webpack_require__(/*! ./all-customers.component.scss */ "./src/app/customer/all-customers/all-customers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], AllCustomersComponent);
    return AllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        // TODO (Svein): Edit this to /api/customers before production
        this.url = 'https://localhost:5001/api/customers';
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.url);
    };
    CustomerService.prototype.getCustomer = function (id) {
        return this.http.get(this.url + ("/" + id));
    };
    CustomerService.prototype.postCustomer = function (customer) {
        return this.http.post(this.url, customer);
    };
    CustomerService.prototype.putCustomer = function (id, customer) {
        return this.http.put(this.url + ("/" + id), customer);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.url + ("/" + id));
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer/delete-customer/delete-customer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/delete-customer/delete-customer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/delete-customer/delete-customer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer/delete-customer/delete-customer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2RlbGV0ZS1jdXN0b21lci9kZWxldGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/delete-customer/delete-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/delete-customer/delete-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function() { return DeleteCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteCustomerComponent = /** @class */ (function () {
    function DeleteCustomerComponent() {
    }
    DeleteCustomerComponent.prototype.ngOnInit = function () {
    };
    DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-customer',
            template: __webpack_require__(/*! ./delete-customer.component.html */ "./src/app/customer/delete-customer/delete-customer.component.html"),
            styles: [__webpack_require__(/*! ./delete-customer.component.scss */ "./src/app/customer/delete-customer/delete-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeleteCustomerComponent);
    return DeleteCustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  new-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL25ldy1jdXN0b21lci9uZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/new-customer/new-customer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/new-customer/new-customer.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCustomerComponent", function() { return NewCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewCustomerComponent = /** @class */ (function () {
    function NewCustomerComponent() {
    }
    NewCustomerComponent.prototype.ngOnInit = function () {
    };
    NewCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-customer',
            template: __webpack_require__(/*! ./new-customer.component.html */ "./src/app/customer/new-customer/new-customer.component.html"),
            styles: [__webpack_require__(/*! ./new-customer.component.scss */ "./src/app/customer/new-customer/new-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewCustomerComponent);
    return NewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/single-customer/single-customer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/single-customer/single-customer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  single-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/single-customer/single-customer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer/single-customer/single-customer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3NpbmdsZS1jdXN0b21lci9zaW5nbGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/single-customer/single-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/single-customer/single-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: SingleCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCustomerComponent", function() { return SingleCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleCustomerComponent = /** @class */ (function () {
    function SingleCustomerComponent() {
    }
    SingleCustomerComponent.prototype.ngOnInit = function () {
    };
    SingleCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-customer',
            template: __webpack_require__(/*! ./single-customer.component.html */ "./src/app/customer/single-customer/single-customer.component.html"),
            styles: [__webpack_require__(/*! ./single-customer.component.scss */ "./src/app/customer/single-customer/single-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SingleCustomerComponent);
    return SingleCustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/update-customer/update-customer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/update-customer/update-customer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/customer/update-customer/update-customer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer/update-customer/update-customer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/update-customer/update-customer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/update-customer/update-customer.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function() { return UpdateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateCustomerComponent = /** @class */ (function () {
    function UpdateCustomerComponent() {
    }
    UpdateCustomerComponent.prototype.ngOnInit = function () {
    };
    UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-customer',
            template: __webpack_require__(/*! ./update-customer.component.html */ "./src/app/customer/update-customer/update-customer.component.html"),
            styles: [__webpack_require__(/*! ./update-customer.component.scss */ "./src/app/customer/update-customer/update-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateCustomerComponent);
    return UpdateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/order/all-orders/all-orders.component.html":
/*!************************************************************!*\
  !*** ./src/app/order/all-orders/all-orders.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-success mb-3\" [routerLink]=\"[ '/orders/new' ]\">Create new Order</a>\n\n<table class=\"table table-striped table-responsive-md\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Service</th>\n        <th>Due Date</th>\n        <th>Customer</th>\n        <th>Note</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <td>{{order.id}}</td>\n        <td>{{order.service}}</td>\n        <td>{{order.dueDate}}</td>\n        <td>\n          <a [routerLink]=\"[ '/customers/view/', order.customer.id ]\">{{order.customer.name}}</a>\n        </td>\n        <td>{{order.note}}</td>\n        <td>\n          <div class=\"btn-group btn-group-sm\">\n              <a class=\"btn btn-info\" [routerLink]=\"[ '/orders/view/', order.id ]\">Details</a>\n              <a class=\"btn btn-warning\" [routerLink]=\"[ '/orders/update/', order.id ]\">Update</a>\n              <a class=\"btn btn-danger\" [routerLink]=\"[ '/orders/delete/', order.id ]\">Delete</a>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/order/all-orders/all-orders.component.scss":
/*!************************************************************!*\
  !*** ./src/app/order/all-orders/all-orders.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL2FsbC1vcmRlcnMvYWxsLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/order/all-orders/all-orders.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order/all-orders/all-orders.component.ts ***!
  \**********************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/customer/customer.service */ "./src/app/customer/customer.service.ts");




var AllOrdersComponent = /** @class */ (function () {
    function AllOrdersComponent(orderService, customerService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.orders = [];
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    AllOrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders;
        }, function (err) { return console.error(err); }, function () {
            _this.orders.forEach(function (order) {
                _this.customerService.getCustomer(order.customerId).subscribe(function (customer) {
                    order.customer = customer;
                }, function (err) { return console.error(err); }, function () { });
            });
        });
    };
    AllOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-orders',
            template: __webpack_require__(/*! ./all-orders.component.html */ "./src/app/order/all-orders/all-orders.component.html"),
            styles: [__webpack_require__(/*! ./all-orders.component.scss */ "./src/app/order/all-orders/all-orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], AllOrdersComponent);
    return AllOrdersComponent;
}());



/***/ }),

/***/ "./src/app/order/delete-order/delete-order.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order/delete-order/delete-order.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/delete-order/delete-order.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/order/delete-order/delete-order.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL2RlbGV0ZS1vcmRlci9kZWxldGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/order/delete-order/delete-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/delete-order/delete-order.component.ts ***!
  \**************************************************************/
/*! exports provided: DeleteOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteOrderComponent", function() { return DeleteOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DeleteOrderComponent = /** @class */ (function () {
    function DeleteOrderComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    DeleteOrderComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.deleteOrder(parseInt(id));
    };
    DeleteOrderComponent.prototype.deleteOrder = function (id) {
        var _this = this;
        this.service.deleteOrder(id).subscribe(function () {
        }, function (err) { return console.error(err); }, function () {
            _this.router.navigate(['/']);
        });
    };
    DeleteOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-order',
            template: __webpack_require__(/*! ./delete-order.component.html */ "./src/app/order/delete-order/delete-order.component.html"),
            styles: [__webpack_require__(/*! ./delete-order.component.scss */ "./src/app/order/delete-order/delete-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DeleteOrderComponent);
    return DeleteOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/enum-to-array.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/order/enum-to-array.pipe.ts ***!
  \*********************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (data) {
        var keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    };
    EnumToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'enumToArray'
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "./src/app/order/eservice.enum.ts":
/*!****************************************!*\
  !*** ./src/app/order/eservice.enum.ts ***!
  \****************************************/
/*! exports provided: Eservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eservice", function() { return Eservice; });
var Eservice;
(function (Eservice) {
    Eservice[Eservice["MOVING"] = 1] = "MOVING";
    Eservice[Eservice["PACKING"] = 2] = "PACKING";
    Eservice[Eservice["CLEANING"] = 3] = "CLEANING";
})(Eservice || (Eservice = {}));


/***/ }),

/***/ "./src/app/order/new-order/new-order.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order/new-order/new-order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-outline-dark mb-3\" [routerLink]=\"[ '/orders' ]\">See all Orders</a>\n\n<form id=\"postForm\" name=\"postForm\" #heroForm=\"ngForm\" (ngSubmit)=\"postOrder()\">\n    <div class=\"form-group\">\n      <label for=\"addressFrom\">Address From</label>\n      <input type=\"text\" [(ngModel)]=\"order.addressFrom\" name=\"addressFrom\" id=\"addressFrom\" class=\"form-control\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"addressTo\">Address To</label>\n      <input type=\"text\" [(ngModel)]=\"order.addressTo\" name=\"addressTo\" id=\"addressTo\" class=\"form-control\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"dueDate\">Due Date</label>\n      <input type=\"date\" [(ngModel)]=\"order.dueDate\" name=\"dueDate\" id=\"dueDate\" class=\"form-control\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"note\">Note</label>\n      <textarea [(ngModel)]=\"order.note\" name=\"note\" id=\"note\" class=\"form-control\"></textarea>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"service\">Service</label>\n      <select [(ngModel)]=\"order.service\" name=\"service\" id=\"service\" class=\"form-control\" required>\n        <option *ngFor=\"let item of services | enumToArray\" [value]=\"item\">{{item}}</option>\n      </select>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"customer\">Customer</label>\n      <select [(ngModel)]=\"order.customerId\" name=\"customerId\" id=\"customerId\" class=\"form-control\" required>\n        <option *ngFor=\"let customer of customers\" [value]=\"customer.id\">{{customer.name}}</option>\n      </select>\n    </div>\n    \n    <input type=\"submit\" class=\"btn btn-success btn-block btn-lg\">\n  </form>"

/***/ }),

/***/ "./src/app/order/new-order/new-order.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/order/new-order/new-order.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL25ldy1vcmRlci9uZXctb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/order/new-order/new-order.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order/new-order/new-order.component.ts ***!
  \********************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order */ "./src/app/order/order.ts");
/* harmony import */ var _eservice_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../eservice.enum */ "./src/app/order/eservice.enum.ts");
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/customer/customer.service */ "./src/app/customer/customer.service.ts");







var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(orderService, customerService, router) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.router = router;
        this.customers = [];
        this.services = _eservice_enum__WEBPACK_IMPORTED_MODULE_5__["Eservice"];
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order = new _order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.customerService.getCustomers().subscribe(function (customers) { return _this.customers = customers; });
    };
    NewOrderComponent.prototype.postOrder = function () {
        var _this = this;
        this.orderService.postOrder(this.order).subscribe(function () {
        }, function (err) { return console.error(err); }, function () {
            _this.router.navigate(['/orders']);
        });
    };
    NewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-order',
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/order/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.scss */ "./src/app/order/new-order/new-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order.service.ts":
/*!****************************************!*\
  !*** ./src/app/order/order.service.ts ***!
  \****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        // TODO (Svein): Edit this to /api/orders before production
        this.url = 'https://localhost:5001/api/orders';
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.url);
    };
    OrderService.prototype.getOrder = function (id) {
        return this.http.get(this.url + ("/" + id));
    };
    OrderService.prototype.postOrder = function (order) {
        return this.http.post(this.url, order);
    };
    OrderService.prototype.putOrder = function (id, order) {
        return this.http.put(this.url + ("/" + id), order);
    };
    OrderService.prototype.deleteOrder = function (id) {
        return this.http.delete(this.url + ("/" + id));
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/order/order.ts":
/*!********************************!*\
  !*** ./src/app/order/order.ts ***!
  \********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/order/single-order/single-order.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order/single-order/single-order.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-outline-dark mb-3\" [routerLink]=\"[ '/orders' ]\">See all Orders</a>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Key</th>\n      <th>Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>ID</td>\n      <td>{{order.id}}</td>\n    </tr>\n    <tr>\n      <td>Service</td>\n      <td>{{order.service}}</td>\n    </tr>\n    <tr>\n      <td>Created</td>\n      <td>{{order.created}}</td>\n    </tr>\n    <tr>\n      <td>Due Date</td>\n      <td>{{order.dueDate}}</td>\n    </tr>\n    <tr>\n      <td>Address (From)</td>\n      <td>{{order.addressFrom}}</td>\n    </tr>\n    <tr>\n      <td>Address (To)</td>\n      <td>{{order.addressTo}}</td>\n    </tr>\n    <tr>\n      <td>Customer</td>\n      <td><a [routerLink]=\"[ '/customers/view/', order.customer.id ]\">{{order.customer.name}}</a></td>\n    </tr>\n    <tr>\n      <td>Notes</td>\n      <td>{{order.note}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<a class=\"btn btn-warning btn-block\" [routerLink]=\"[ '/orders/update/', order.id ]\">Update Order</a>"

/***/ }),

/***/ "./src/app/order/single-order/single-order.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/order/single-order/single-order.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL3NpbmdsZS1vcmRlci9zaW5nbGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/order/single-order/single-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/single-order/single-order.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleOrderComponent", function() { return SingleOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/customer/customer.service */ "./src/app/customer/customer.service.ts");





var SingleOrderComponent = /** @class */ (function () {
    function SingleOrderComponent(orderService, customerService, route) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.route = route;
    }
    SingleOrderComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        this.getOrder(id);
    };
    SingleOrderComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.orderService.getOrder(id).subscribe(function (order) {
            _this.order = order;
        }, function (err) { console.error(err); }, function () {
            _this.getCustomer(_this.order.customerId);
        });
    };
    SingleOrderComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.customerService.getCustomer(id).subscribe(function (customer) {
            _this.order.customer = customer;
        }, function (err) { console.error(err); }, function () { });
    };
    SingleOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-order',
            template: __webpack_require__(/*! ./single-order.component.html */ "./src/app/order/single-order/single-order.component.html"),
            styles: [__webpack_require__(/*! ./single-order.component.scss */ "./src/app/order/single-order/single-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SingleOrderComponent);
    return SingleOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/update-order/update-order.component.html":
/*!****************************************************************!*\
  !*** ./src/app/order/update-order/update-order.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-outline-dark mb-3\" [routerLink]=\"[ '/orders' ]\">See all Orders</a>\n\n<form id=\"putForm\" name=\"putForm\" #heroForm=\"ngForm\" (ngSubmit)=\"putOrder()\">\n    <div class=\"form-group\">\n      <label for=\"addressFrom\">Address From</label>\n      <input type=\"text\" [(ngModel)]=\"order.addressFrom\" name=\"addressFrom\" id=\"addressFrom\" class=\"form-control\" [value]=\"order.addressFrom\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"addressTo\">Address To</label>\n      <input type=\"text\" [(ngModel)]=\"order.addressTo\" name=\"addressTo\" id=\"addressTo\" class=\"form-control\" [value]=\"order.addressTo\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"dueDate\">Due Date</label>\n      <input type=\"date\" [(ngModel)]=\"order.dueDate\" name=\"dueDate\" id=\"dueDate\" class=\"form-control\" [value]=\"order.dueDate\" required>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"note\">Note</label>\n      <textarea [(ngModel)]=\"order.note\" name=\"note\" id=\"note\" class=\"form-control\">{{order.note}}</textarea>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"service\">Service</label>\n      <select [(ngModel)]=\"order.service\" name=\"service\" id=\"service\" class=\"form-control\" required>\n        <option *ngFor=\"let item of services | enumToArray\" [value]=\"item\" ng-selected=\"order.service\">{{item}}</option>\n      </select>\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"customer\">Customer</label>\n      <select [(ngModel)]=\"order.customerId\" name=\"customerId\" id=\"customerId\" class=\"form-control\" required>\n        <option *ngFor=\"let customer of customers\" [value]=\"customer.id\" ng-selected=\"order.customerId\">{{customer.name}}</option>\n      </select>\n    </div>\n    \n    <input type=\"submit\" class=\"btn btn-success btn-block btn-lg\" value=\"Update\">\n  </form>"

/***/ }),

/***/ "./src/app/order/update-order/update-order.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/order/update-order/update-order.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL3VwZGF0ZS1vcmRlci91cGRhdGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/order/update-order/update-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/update-order/update-order.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrderComponent", function() { return UpdateOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/customer/customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eservice_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../eservice.enum */ "./src/app/order/eservice.enum.ts");






var UpdateOrderComponent = /** @class */ (function () {
    function UpdateOrderComponent(orderService, customerService, route, router) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.route = route;
        this.router = router;
        this.services = _eservice_enum__WEBPACK_IMPORTED_MODULE_5__["Eservice"];
    }
    UpdateOrderComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getOrder(this.id);
        this.getCustomers();
    };
    UpdateOrderComponent.prototype.getOrder = function (id) {
        var _this = this;
        this.orderService.getOrder(id).subscribe(function (order) {
            _this.order = order;
        }, function (err) { return console.error(err); }, function () {
            _this.getCustomer(_this.order.customerId);
        });
    };
    UpdateOrderComponent.prototype.putOrder = function () {
        var _this = this;
        this.orderService.putOrder(this.id, this.order).subscribe(function () {
        }, function (err) { return console.error(err); }, function () {
            _this.router.navigate(['/orders']);
        });
    };
    UpdateOrderComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.customerService.getCustomer(id).subscribe(function (customer) {
            _this.order.customer = customer;
        });
    };
    UpdateOrderComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    UpdateOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-order',
            template: __webpack_require__(/*! ./update-order.component.html */ "./src/app/order/update-order/update-order.component.html"),
            styles: [__webpack_require__(/*! ./update-order.component.scss */ "./src/app/order/update-order/update-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdateOrderComponent);
    return UpdateOrderComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\svein\inmeta\TheMovingCompany\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map