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

module.exports = "<mat-drawer-container hasBackdrop=\"true\" >\n\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"over\" style=\" overflow: hidden;\">\n        <!-- <ul *ngFor=\"let item of sideNavMenu\">\n            <li><a [routerLink]=\"[item.link]\" (click)=\"toggelNavbar()\" routerLinkActive=\"active\">{{item.title}}</a></li>\n        </ul> -->\n        <app-sidenav (sidenav)=\"toggelNavbar($event)\"></app-sidenav>\n    </mat-drawer>\n    <app-header (sidenav)=\"toggelNavbar($event)\"></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</mat-drawer-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"container\">\n        <div class=\"first\">\n            \n    \n            <h4>Help!!!!! Contact us</h4>\n            <p>7888356358</p>\n            <ul class=\"list\">\n                <li>\n                    Shipping Information</li>\n                <li> Returns & Exchange</li>\n                <li> Terms & Conditions</li>\n                <li> Privacy Policy\n                </li>\n            </ul>\n        </div>\n        <div class=\"third\">\n            <h4>HAVE A QUESTION</h4>\n            <p>\n                chitkara university rajpura,punjab</p>\n            <p>8628828281,9646476928</p>\n            <p>mahajans624@gmail.com,contact.ritik@gmail.com\n            </p>\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-box\">\n    <div class=\"first\">8628828281,9646476928</div>\n    <div class=\"second\">mahajans624@gmail.com,contact.ritik@gmail.com</div>\n    <div class=\"third\">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</div>\n</div>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loadingEnable\"></mat-progress-bar>\n<div class=\"header-box\">\n    <div class=\"container\">\n        <div class=\"mobile-view\">\n            <mat-icon (click)=\"toggelSidenav()\">menu</mat-icon>\n        </div>\n        <div class=\"logo\">\n            <a [routerLink]=\"['/home']\"> <img\n                    src=\"https://www.nicepng.com/png/full/247-2475175_ecommerce-e-commerce-website-logo.png\"\n                    width=\"80px\" height=\"50px\">\n            </a>\n        </div>\n\n\n        <!-- <form class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput placeholder=\"Search\">\n                    <mat-icon matSuffix>search</mat-icon>\n                </mat-form-field>\n            </form> -->\n\n        <div class=\"menu\">\n            <ul class=\"list\">\n                <li class=\"contain\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><span>HOME</span></li>\n                <li class=\"contain\" [routerLink]=\"['/products']\" routerLinkActive=\"active\"><span>PRODUCTS</span></li>\n  \n                <li class=\"contain\" [routerLink]=\"['/contact-us']\" routerLinkActive=\"active\"><span>CONTACT-US</span>\n                </li>\n\n                <li class=\"contain\" *ngIf=\"!user\">\n                    <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\n                </li>\n\n                <li class=\"contain profile dropdown\" *ngIf=\"user\">\n                    <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\"\n                        width=\"25px\">\n\n                    <div class=\"dropdown-content\">\n                        <a [routerLink]=\"['/myprofile']\">My Profile</a>\n                        <a>Orders</a>\n                        <a>Wishlist</a>\n                        <a>Notifications</a>\n                        <a (click)=\"logout()\">Logout</a>\n                    </div>\n                </li>\n                <li class=\"contain\" *ngIf=\"user\" [routerLink]=\"['/shopping-cart']\">\n                    <mat-icon>add_shopping_cart</mat-icon>\n                </li>\n            </ul>\n        </div>\n        <div class=\"cart-icon mobile-view\" *ngIf=\"!user\">\n            <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\n        </div>\n        <div class=\"cart-icon mobile-view\" *ngIf=\"user\">\n            <a [routerLink]=\"['/myprofile/notifications']\">\n                <mat-icon>notification_important</mat-icon>\n            </a>&nbsp; &nbsp;\n            <a [routerLink]=\"['/shopping-cart']\">\n                <mat-icon>add_shopping_cart</mat-icon>\n            </a>\n        </div>\n\n\n    </div>\n</div>\n<!-- <app-sidenav class=\"sidenavEnable\"></app-sidenav> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/sidenav/sidenav.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/sidenav/sidenav.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"user\">\n        <tr (click)=\"goToMyProfile()\">\n                <td>\n                        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\" />\n\n                </td>\n                <td style=\"padding-left: 15px;\">\n                        <span>Hello,</span>\n                        <h3 style=\"margin: 0\"></h3>\n                </td>\n                <td>\n                        <mat-icon>chevron_right</mat-icon>\n                </td>\n        </tr>\n</table>\n<div class=\"login\" *ngIf=\"!user\">\n        <button mat-stroked-button color=\"primary\" class=\"button\" (click)=\"openLoginDialog()\">LOGIN</button>\n</div>\n\n<ul class=\"list\">\n        <li class=\"contain\" (click)=\"toggelSidenav()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\">\n                <table>\n                        <tr>\n                                <td>\n                                        <mat-icon>home</mat-icon>\n                                </td>\n                                <td style=\"vertical-align: baseline;\"><span style=\"margin-left: 10px;\">HOME</span></td>\n                        </tr>\n                </table>\n        </li>\n        <li class=\"contain\" (click)=\"toggelSidenav()\" [routerLink]=\"['/products']\" routerLinkActive=\"active\">\n                <table>\n                        <tr>\n                                <td>\n                                        <mat-icon>add_to_photos</mat-icon>\n                                </td>\n                                <td style=\"vertical-align: baseline;\"> <span style=\"margin-left: 10px;\">PRODUCTS</span>\n                                </td>\n                        </tr>\n                </table>\n        </li>\n</ul>\n<ul class=\"list\" *ngIf=\"user\">\n        <li *ngFor=\"let item of profileMenu\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\"\n                (click)=\"toggelSidenav()\">\n                <table>\n                        <tr>\n                                <td>\n                                        <mat-icon>{{item.icon}}</mat-icon>\n                                </td>\n                                <td style=\"vertical-align: baseline;\">\n                                        <span style=\"margin-left: 10px;\">{{item.title}}</span>\n                                </td>\n                        </tr>\n                </table>\n        </li>\n</ul>\n<ul class=\"list\" *ngIf=\"user\">\n        <li *ngFor=\"let item of myStuff\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\" (click)=\"toggelSidenav()\">\n                <table>\n                        <tr>\n                                <td>\n                                        <mat-icon>{{item.icon}}</mat-icon>\n                                </td>\n                                <td style=\"vertical-align: baseline;\">\n                                        <span style=\"margin-left: 10px;\">{{item.title}}</span>\n                                </td>\n                        </tr>\n                </table>\n        </li>\n</ul>\n<div *ngIf=\"user\">\n        <table>\n                <tr (click)=\"logout()\">\n                        <td>\n                                <mat-icon>power_settings_new</mat-icon>\n                        </td>\n                        <td style=\"vertical-align: baseline;\">\n                                <span style=\"margin-left: 10px;\">Logout</span>\n                        </td>\n                </tr>\n        </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/slider/slider.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/slider/slider.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<owl-carousel\n[options]=\"carouselOptions\"\n[items]=\"images\"\n[carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n<div class=\"item\" *ngFor=\"let image of images;let i = index\">\n     <div class=\"thumbnail-image\" >\n        <img [src]=\"image.image\" />\n    </div>\n  </div>\n</owl-carousel>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n<div class=\"products-container\">\n    <div class=\"title\">\n        New Products Arrival\n        <button mat-button mat-raised-button color=\"primary\" class=\"\">\n            \n        </button>\n    </div>\n    <div class=\"body\">\n        <mat-card class=\"example-card\" *ngFor=\"let item of images\" (click)=\"productHome()\">\n            <!-- <img class=\"productImg\" mat-card-image src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\"> -->\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\n                    <div class=\"thumbnail-image\">\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\n                    </div>\n                </div>\n            </owl-carousel>\n            <mat-card-content>\n                <h3>Rs...</h3>\n                \n                <span></span>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\n                    ADD TO CART\n                </button>\n                <button mat-button>SHARE\n                </button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n<div class=\"mobile-view\">\n    <div class=\"title\">\n        New Products Arrival\n        <button mat-button mat-raised-button color=\"primary\" class=\"viewAllBtn\">\n            View All\n        </button>\n    </div>\n    <div class=\"mobile-card\" *ngFor=\"let item of images\" (click)=\"productHome()\">\n        <div class=\"header\">\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\n                    <div class=\"thumbnail-image\">\n                        <img [src]=\"\" class=\"productImg\" mat-card-image />\n                    </div>\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"footer\">\n            product\n        </div>\n    </div>\n</div>\n\n\n<!-- <div class=\"search-box\">\n    <div class=\"icon\">\n        <mat-icon class=\"leftIcon\">star</mat-icon>\n    </div>\n    <div class=\"search-text\">\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n    </div>\n    <div class=\"close\">\n        <mat-icon style=\"padding:7px;\">close</mat-icon>\n    </div>\n</div> -->\n<!-- \n<div class=\"search-box\">\n    <div class=\"search-text\">\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n        <span>Skill tests are no longer available on Upwork. Learn more.</span>\n\n    </div>\n    <div class=\"close\">\n        <mat-icon style=\"padding:7px;\">close</mat-icon>\n    </div>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\"> \n<div class=\"example-container\">\n  <h2 style=\"font-weight: 100; text-align: center;\">Please sign in</h2>\n \n  <mat-form-field appearance=\"outline\">\n    <mat-label>Mobile Number</mat-label>\n    <input matInput formControlName=\"mobileNumber\" placeholder=\"Enter Your Mobile Number\">\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Password</mat-label>\n    <input matInput formControlName=\"password\" placeholder=\"Enter Password\">\n  </mat-form-field>\n  <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button space\" (click)=\"login()\">LOGIN\n  </button>\n\n \n  <label style=\"text-align: center; margin-top: 5px; color:gray\">Or</label>\n  <button mat-button mat-stroked-button color=\"primary\" class=\"button\">SIGNUP NOW\n  </button>\n</div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/manage-address/manage-address.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/manage-address/manage-address.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Manage Addresses</h3>\n    <!-- <div class=\"box\">\n        <mat-icon style=\"vertical-align: middle;\">add</mat-icon> &nbsp; &nbsp;\n        <span style=\"font-size: 14px; color: #3f51b5;\">Add A New Address</span>\n    </div> -->\n    <div class=\"address-form\">\n        <form [formGroup]=\"addressForm\">\n\n            <div class=\"form-box\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>First name</mat-label>\n                    <input matInput formControlName=\"firstName\" placeholder=\"Enter your first name\">\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Last name</mat-label>\n                    <input matInput formControlName=\"lastName\" placeholder=\"Enter your last name\">\n                </mat-form-field>\n            </div>\n            <div class=\"form-box\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Pincode</mat-label>\n                    <input matInput formControlName=\"pincode\" placeholder=\"Enter your pincode\">\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Locality</mat-label>\n                    <input matInput formControlName=\"locality\" placeholder=\"Enter locality\">\n                </mat-form-field>\n            </div>\n            <mat-form-field appearance=\"outline\" style=\"width: 100%\">\n                <mat-label>Address</mat-label>\n                <textarea matInput formControlName=\"address\" placeholder=\"Enter full address\"></textarea>\n            </mat-form-field>\n            <div class=\"form-box\">\n                <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\n                </button>\n            </div>\n\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/my-rewards/my-rewards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/my-rewards/my-rewards.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"no-rewards\">\n        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/myRewadsEmpty_3a7345.png\" /><br>\n       \n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/myprofile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\n    <div class=\"sidebar\">\n        <div class=\"profile\">\n            <table>\n                <tr>\n                    <td>\n                        <img src=\"https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_2fd3e8.svg\">\n\n                    </td>\n                    <td style=\"padding-left: 15px;\">\n                        <span>Hello,</span>\n                        <h3 style=\"margin: 0\">Ritik Kumar</h3>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"settings\">\n            <div class=\"list\">\n\n                <div class=\"left-icon contain\">\n                    <mat-icon>next_week</mat-icon>\n                </div>\n                <div class=\"title contain\">\n                    MY ORDERS\n                </div>\n                <div class=\"right-icon contain\">\n                    <mat-icon>chevron_right</mat-icon>\n                </div>\n            </div>\n            <div class=\"list\">\n\n                <div class=\"left-icon contain\">\n                    <mat-icon>person</mat-icon>\n                </div>\n                <div class=\"title contain\">\n                    ACCOUNT SETTINGS\n                </div>\n                <div class=\"right-icon contain\">\n                    <mat-icon>chevron_right</mat-icon>\n                </div>\n                <div class=\"child-list\">\n                    <ul>\n                        <a [routerLink]=\"['profile']\" routerLinkActive=\"active\">\n                            <li>Personal Information</li>\n                        </a>\n                        <a [routerLink]=\"['address']\" routerLinkActive=\"active\">\n                            <li>Manage Address</li>\n                        </a>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"list\">\n\n                <div class=\"left-icon contain\">\n                    <mat-icon>add_comment</mat-icon>\n                </div>\n                <div class=\"title contain\">\n                    PAYMENTS\n                </div>\n                <div class=\"right-icon contain\">\n                    <mat-icon>chevron_right</mat-icon>\n                </div>\n                <div class=\"child-list\">\n                    <ul>\n                        <a [routerLink]=\"['carddetails']\" routerLinkActive=\"active\">\n                            <li>Saved Cards</li>\n                        </a>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"list\">\n                <div class=\"left-icon contain\">\n                    <mat-icon>message</mat-icon>\n                </div>\n                <div class=\"title contain\">\n                    MY STUFF\n                </div>\n                <div class=\"right-icon contain\">\n                    <mat-icon>chevron_right</mat-icon>\n                </div>\n                <div class=\"child-list\">\n                    <ul>\n                        <a [routerLink]=\"['rewards']\" routerLinkActive=\"active\">\n                            <li>Rewards</li>\n                        </a>\n                        <a [routerLink]=\"['reviews']\" routerLinkActive=\"active\">\n                            <li>Reviews</li>\n                        </a>\n                        <a [routerLink]=\"['wishlist']\" routerLinkActive=\"active\">\n                            <li>My Wishlist</li>\n                        </a>\n\n                    </ul>\n                </div>\n\n            </div>\n            <div class=\"list\">\n                <div class=\"left-icon contain\">\n                    <mat-icon>power_settings_new</mat-icon>\n                </div>\n                <div class=\"title contain\">\n                    LOGOUT\n                </div>\n                <div class=\"right-icon contain\">\n                    <mat-icon>chevron_right</mat-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/notifications/notifications.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/notifications/notifications.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>notifications works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/profile-information/profile-information.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/profile-information/profile-information.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Personal Information</h3>\n<form [formGroup]=\"profileForm\">\n    <div class=\"form-box\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>first name</mat-label>\n            <input matInput formControlName=\"firstName\" placeholder=\"Placeholder\" value=\"Ritik\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"lastName\">\n            <mat-label>last name</mat-label>\n            <input matInput formControlName=\"lastName\" placeholder=\"Placeholder\" value=\"Kumar\">\n        </mat-form-field>\n    </div>\n\n\n    <div class=\"form-box\">\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput formControlName=\"email\" placeholder=\"Placeholder\" value=\"contact.ritik@gmail.com\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\">\n            <mat-label>Number</mat-label>\n            <input matInput formControlName=\"mobile\" placeholder=\"Placeholder\" value=\"7888356358\">\n        </mat-form-field>\n    </div>\n    <p>Your Gender:</p>\n    <div class=\"form-box\">\n\n        <mat-radio-group formControlName=\"gender\" aria-label=\"Select an option\" color=\"primary\">\n            <mat-radio-button selected value=\"1\">Male</mat-radio-button> &nbsp; &nbsp;\n            <mat-radio-button value=\"2\">Female</mat-radio-button>\n        </mat-radio-group>\n    </div>\n    <div class=\"form-box\" style=\"margin-top:20px;\">\n        <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\n        </button>\n    </div>\n</form>\n<div style=\"margin-top: 20px; border-top: 1px solid rgba(0, 0, 0, 0.05);\">\n    <h3>FAQs</h3>\n    <p><b>What happens when I update my email address (or mobile number)?</b></p>\n    <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related\n        communication on your updated email address (or mobile number).\n    </p>\n    <p><b>When will my eshop account be updated with the new email address (or mobile number)?</b></p>\n    <p> It happens as soon as you confirm the verification code sent to your email (or mobile) and save the\n        changes.</p>\n\n    <p><b> What happens to my existing eshop account when I update my email address (or mobile number)?</b>\n    </p>\n    <p> Updating your email address (or mobile number) doesn't invalidate your account. Your account remains\n        fully functional. You'll continue seeing your Order history, saved information and personal details.</p>\n\n    <p><b>Does my Seller account get affected when I update my email address?</b></p>\n    <p> eshop has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/reviews-rating/reviews-rating.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/reviews-rating/reviews-rating.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reviews-rating works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/saved-cards/saved-cards.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/saved-cards/saved-cards.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Manage Cards</h3>\n    <!-- <div class=\"box\">\n        <mat-icon style=\"vertical-align: middle;\">add</mat-icon> &nbsp; &nbsp;\n        <span style=\"font-size: 14px; color: #3f51b5;\">Add A New Card</span>\n    </div> -->\n    <div class=\"address-form\">\n        <form [formGroup]=\"cardForm\">\n\n            <div class=\"form-box\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Card Number</mat-label>\n                    <input matInput placeholder=\"Enter your card number\">\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Card validity</mat-label>\n                    <input matInput placeholder=\"Card validity\">\n                </mat-form-field>\n            </div>\n            <div class=\"form-box\">\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Name on card</mat-label>\n                    <input matInput placeholder=\"Enter name on card\">\n                </mat-form-field>\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Name This Card for future use</mat-label>\n                    <input matInput placeholder=\"Enter name of this card for future use\">\n                </mat-form-field>\n            </div>\n            <div class=\"form-box\">\n                <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button\">SAVE\n                </button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/shopping-cart/shopping-cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/shopping-cart/shopping-cart.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-cart-conatiner\">\n\n    <div class=\"title\">\n        My Cart\n    </div>\n    <div class=\"header\">\n\n\n        <div class=\"img\">\n\n        </div>\n        <div class=\"name\">\n            Product\n        </div>\n        <div class=\"price\">\n            Price\n        </div>\n        <div class=\"quantity\">\n            Quantity\n        </div>\n        <div class=\"total\">\n            Total\n        </div>\n        <div class=\"close\">\n\n        </div>\n    </div>\n\n    <div class=\"body\" *ngFor=\"let item of cart\">\n\n        <div class=\"img\">\n\n            <img class=\"productImg\" src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\n        </div>\n        <div class=\"name\">\n            <h3> NIKE FREE RN 2019 ID</h3>\n            <p> Far far away, behind the word mountains, far from the countries</p>\n        </div>\n        <div class=\"price\">\n            $4.90\n        </div>\n        <div class=\"quantity\">\n            <mat-icon class=\"close-icon\">add</mat-icon><input\n                style=\"height: 20px; margin-right: 5px; text-align: center;\" type=\"text\" size=\"1\" value=\"1\" />\n            <mat-icon class=\"close-icon\">remove</mat-icon>\n        </div>\n        <div class=\"total\">\n            $4.90\n\n        </div>\n        <div class=\"close\">\n            <mat-icon class=\"close-icon\">close</mat-icon>\n        </div>\n\n    </div>\n\n\n\n    <div class=\"cart-total\">\n        <h2>CART TOTALS</h2>\n        <hr>\n        <table style=\"width: 100%\">\n            <tr>\n                <td>Subtotal</td>\n                <td>$20.60</td>\n            </tr>\n            <tr>\n                <td>Delivery</td>\n                <td>$0.60</td>\n            </tr>\n            <tr>\n                <td>Discount</td>\n                <td>$0.60</td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <hr>\n                </td>\n            </tr>\n            <tr>\n                    \n                <td>Total</td>\n                <td><b>$10.60</b></td>\n            </tr>\n        </table>\n        <div class=\"checkout-button\">\n            <button mat-stroked-button color=\"primary\" class=\"button full-button\">PROCEED TO CHECKOUT</button>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myprofile/wishlist/wishlist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myprofile/wishlist/wishlist.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>wishlist works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-container\">\n    <div class=\"sidebar\">\n        <div class=\"title\">\n            Categories\n        </div>\n        <div class=\"list\">\n            <mat-tree class=\"list-items\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n                <!-- This is the tree node template for leaf nodes -->\n                <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n                    <!-- use a disabled button to provide padding for tree leaf -->\n                    <button mat-icon-button disabled></button>\n                    {{node.name}}\n                </mat-tree-node>\n                <!-- This is the tree node template for expandable nodes -->\n                <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n                    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n                        <mat-icon class=\"mat-icon-rtl-mirror\">\n                            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n                        </mat-icon>\n                    </button>\n                    {{node.name}}\n                </mat-tree-node>\n            </mat-tree>\n        </div>\n        <br>\n        <div class=\"filters\">\n            Price range\n            <mat-slider style=\"width: 100%\" color=\"primary\" tickInterval=\"auto\" thumbLabel min=\"0\" max=\"1000\" step=\"100\"\n                value=\"100\"></mat-slider>\n        </div>\n    </div>\n    <div class=\"body\">\n        <mat-card class=\"example-card\" *ngFor=\"let item of products\" (click)=\"productHome(item.id)\">\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\n                    <div class=\"thumbnail-image\">\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\n                    </div>\n                </div>\n            </owl-carousel>\n            <mat-card-content>\n                <p></p>\n                <p></p>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\n                    ADD TO CART\n                </button>\n                <button mat-button>SHARE\n                </button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n\n<div class=\"mobile\" *ngFor=\"let item of products\" (click)=\"productHome(item.id)\">\n    <div class=\"mobile-card-container\">\n        <div class=\"mobile-card-img\">\n            <owl-carousel [options]=\"carouselOptions\" [items]=\"item.image\"\n                [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let image of item.image; let i = index\">\n                    <div class=\"thumbnail-image\">\n                        <img [src]=\"image\" class=\"productImg\" mat-card-image />\n                    </div>\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"mobile-card-details\">\n            \n        </div>\n    </div>\n    <div class=\"mobile-card-footer\">\n        <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\n            ADD TO CART\n        </button>\n        <button mat-button>SHARE\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-product/single-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner\" *ngIf=\"product\">\n    <div class=\"product-img-container\">\n        <img class=\"productImg\" mat-card-image style=\"width: 100%; padding: 20px;\" [src]=\"product.image\"\n            alt=\"Photo of a Shiba Inu\">\n\n    </div>\n    <div class=\"product-description\">\n        <h2 style=\"font-weight: 400;\"> Nike Free RN 2019 iD</h2>\n        <div class=\"rating-container\">\n            <span>Star: 5.0</span>\n            <span class=\"rating\">100 Rating</span>\n            <span class=\"sold\">500 Sold</span>\n        </div>\n        <h2 style=\"font-weight: 400;\"> $120.00 </h2>\n        <div class=\"description\">\n            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\n            paradisematic country, in which roasted parts of sentences fly into your mouth.\n            <br>\n            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been\n            rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the\n            Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could\n            convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with\n            Longe and Parole and dragged her into their agency, where they abused her for their.\n\n        </div>\n        <div>\n\n            <mat-form-field>\n                <mat-label>Size</mat-label>\n                <mat-select>\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{food.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"button-group\">\n            <button mat-button mat-raised-button color=\"primary\" class=\"buy-now-button space\">BUY NOW\n            </button>\n\n            <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\n                ADD TO CART\n            </button>\n        </div>\n\n\n    </div>\n\n</div>\n\n<div class=\"description-tabs\">\n    <mat-tab-group>\n        <mat-tab label=\"Description\">\n            <h2 style=\"font-weight: 400;\">Nike Free RN 2019 iD</h2>\n            <div class=\"description\"> On her way she met a copy. The copy warned the Little Blind Text, that where it\n                came from it would have\n                been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and\n                the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said\n                could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her\n                drunk with Longe and Parole and dragged her into their agency, where they abused her for their.\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Manufacturer\">\n            <h2 style=\"font-weight: 400;\">Manufactured By Nike</h2>\n            <div class=\"description\"> On her way she met a copy. The copy warned the Little Blind Text, that where it\n                came from it would have been\n                rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the\n                Little Blind Text should turn around and return to its own, safe country. But nothing the copy said\n                could\n                convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk\n                with\n                Longe and Parole and dragged her into their agency, where they abused her for their.\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Reviews\">\n            <h2 style=\"font-weight: 400;\">23 Reviews</h2>\n            <div class=\"flex-box-transparent message-box\" style=\"padding: 0; margin-top: 5px;\"\n                *ngFor=\"let message of messages\">\n                <div class=\"img-box\">\n                    <img src=\"{{message.image}}\" width=\"60px\" height=\"60px\" style=\"border-radius: 50%;\" />\n                </div>\n                <div class=\"detail-box\">\n                    <div>\n                        <span style=\"font-weight: 400; font-size: 14px;\"><a>{{message.name}}</a></span>\n                    </div>\n                    <div>\n                        5 Star\n                    </div>\n                    <div class=\"message\">\n                        <span>{{message.details}}</span>\n                    </div>\n                    <div class=\"time\" style=\"margin-top: 5px;\">\n                        <span style=\"color: gray;\">{{message.time}}</span>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n\n<div class=\"products-container\">\n    <div class=\"title\">\n        Similar Products\n        <button mat-button mat-raised-button color=\"primary\" class=\"viewAllBtn\">\n            View All\n        </button>\n    </div>\n    <div class=\"body\">\n        <mat-card class=\"example-card\" *ngFor=\"let item of simillarProducts\" (click)=\"productHome()\">\n            <img class=\"productImg\" mat-card-image src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\n            <mat-card-content>\n                <p> NIKE FREE RN 2019 ID</p>\n                <p>$120.00</p>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button mat-stroked-button color=\"primary\" class=\"button\">\n                    ADD TO CART\n                </button>\n                <button mat-button>SHARE\n                </button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n<div class=\"mobile-view\">\n    <div class=\"title\">\n        Similar Products\n        <button mat-button mat-raised-button color=\"primary\" class=\"viewAllBtn\">\n            View All\n        </button>\n    </div>\n    <div class=\"mobile-card\" *ngFor=\"let item of simillarProducts\" (click)=\"productHome()\">\n        <div class=\"header\">\n            <img width=\"150px\" height=\"150px\" src=\"{{item.image}}\" alt=\"Photo of a Shiba Inu\">\n        </div>\n        <div class=\"footer\">\n            asdfasdf\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprofile/shopping-cart/shopping-cart.component */ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myprofile/profile-information/profile-information.component */ "./src/app/myprofile/profile-information/profile-information.component.ts");
/* harmony import */ var _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myprofile/manage-address/manage-address.component */ "./src/app/myprofile/manage-address/manage-address.component.ts");
/* harmony import */ var _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myprofile/reviews-rating/reviews-rating.component */ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts");
/* harmony import */ var _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./myprofile/saved-cards/saved-cards.component */ "./src/app/myprofile/saved-cards/saved-cards.component.ts");
/* harmony import */ var _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myprofile/wishlist/wishlist.component */ "./src/app/myprofile/wishlist/wishlist.component.ts");
/* harmony import */ var _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myprofile/my-rewards/my-rewards.component */ "./src/app/myprofile/my-rewards/my-rewards.component.ts");
/* harmony import */ var _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myprofile/notifications/notifications.component */ "./src/app/myprofile/notifications/notifications.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-service */ "./src/app/services/auth-service.ts");
















const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
    },
    {
        path: 'product/:id',
        component: _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_5__["SingleProductComponent"]
    },
    {
        path: 'shopping-cart',
        component: _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"]
    },
    {
        path: 'myprofile',
        component: _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_7__["MyprofileComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
        children: [
            {
                path: 'profile',
                component: _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_8__["ProfileInformationComponent"]
            },
            {
                path: 'address',
                component: _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_9__["ManageAddressComponent"]
            },
            {
                path: 'notifications',
                component: _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"]
            },
            {
                path: 'reviews',
                component: _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_10__["ReviewsRatingComponent"]
            },
            {
                path: 'carddetails',
                component: _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_11__["SavedCardsComponent"]
            },
            {
                path: 'wishlist',
                component: _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"]
            },
            {
                path: 'rewards',
                component: _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_13__["MyRewardsComponent"]
            },
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '*', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  height: 100%;\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n\nmat-drawer-container {\n  position: absolute;\n  right: 0px;\n  left: 0px;\n  bottom: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICBtYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMHB4O1xuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'e-comm';
        this.sideNavMenu = [
            {
                title: 'home',
                link: '/home'
            },
            {
                title: 'products',
                link: '/products'
            },
            {
                title: 'images',
                link: ''
            },
            {
                title: 'contact-us',
                link: ''
            }
        ];
    }
    toggelNavbar() {
        this.drawer.toggle();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { static: false })
], AppComponent.prototype, "drawer", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/sidenav/sidenav.component */ "./src/app/common/sidenav/sidenav.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/slider/slider.component */ "./src/app/common/slider/slider.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./myprofile/shopping-cart/shopping-cart.component */ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./myprofile/myprofile.component */ "./src/app/myprofile/myprofile.component.ts");
/* harmony import */ var _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myprofile/profile-information/profile-information.component */ "./src/app/myprofile/profile-information/profile-information.component.ts");
/* harmony import */ var _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./myprofile/manage-address/manage-address.component */ "./src/app/myprofile/manage-address/manage-address.component.ts");
/* harmony import */ var _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./myprofile/saved-cards/saved-cards.component */ "./src/app/myprofile/saved-cards/saved-cards.component.ts");
/* harmony import */ var _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./myprofile/my-rewards/my-rewards.component */ "./src/app/myprofile/my-rewards/my-rewards.component.ts");
/* harmony import */ var _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./myprofile/reviews-rating/reviews-rating.component */ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts");
/* harmony import */ var _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./myprofile/notifications/notifications.component */ "./src/app/myprofile/notifications/notifications.component.ts");
/* harmony import */ var _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./myprofile/wishlist/wishlist.component */ "./src/app/myprofile/wishlist/wishlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _common_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"],
            _common_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
            _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
            _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_15__["SingleProductComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _myprofile_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
            _myprofile_myprofile_component__WEBPACK_IMPORTED_MODULE_18__["MyprofileComponent"],
            _myprofile_profile_information_profile_information_component__WEBPACK_IMPORTED_MODULE_19__["ProfileInformationComponent"],
            _myprofile_manage_address_manage_address_component__WEBPACK_IMPORTED_MODULE_20__["ManageAddressComponent"],
            _myprofile_saved_cards_saved_cards_component__WEBPACK_IMPORTED_MODULE_21__["SavedCardsComponent"],
            _myprofile_my_rewards_my_rewards_component__WEBPACK_IMPORTED_MODULE_22__["MyRewardsComponent"],
            _myprofile_reviews_rating_reviews_rating_component__WEBPACK_IMPORTED_MODULE_23__["ReviewsRatingComponent"],
            _myprofile_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_24__["NotificationsComponent"],
            _myprofile_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_25__["WishlistComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_10__["OwlModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: black;\n  color: white;\n}\n\n.footer .container {\n  padding: 0px 5%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.first {\n  flex: 1;\n}\n\n.second {\n  flex: 1;\n  text-align: center;\n}\n\n.third {\n  flex: 1;\n}\n\n.footer .copyright {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.list {\n  list-style: none;\n  text-align: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9EOlxcVHlwZVNjcmlwdE5pbmphXFxlc2hvcHBlci9zcmNcXGFwcFxcY29tbW9uXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLE9BQUE7QUNHSjs7QURBQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ0dKOztBRENBO0VBQ0ksT0FBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5maXJzdCB7XG4gICAgZmxleDogMTtcbn1cblxuLnNlY29uZCB7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnRoaXJkIHtcbiAgICBmbGV4OiAxO1xufVxuLmZvb3RlciAuY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4iLCIuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3RlciAuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpcnN0IHtcbiAgZmxleDogMTtcbn1cblxuLnNlY29uZCB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRoaXJkIHtcbiAgZmxleDogMTtcbn1cblxuLmZvb3RlciAuY29weXJpZ2h0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/footer/footer.component.scss")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-box {\n  background: #262626;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  font-size: 12px;\n  padding: 0px 2%;\n}\n\n.contact-box .first {\n  flex: 1;\n  align-items: center;\n}\n\n.contact-box .second {\n  flex: 2;\n}\n\n.contact-box .third {\n  flex: 2;\n}\n\n.header-box {\n  background-color: white;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);\n}\n\n.container {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  padding: 10px 2%;\n}\n\n.menu {\n  display: flex;\n}\n\n.list {\n  list-style: none;\n}\n\n.list .contain:hover {\n  color: #3f51b5;\n}\n\n.list li {\n  display: inline-block;\n  cursor: pointer;\n  margin: 0px 20px;\n  transition: all 0.3s ease 0s;\n  vertical-align: middle;\n}\n\n.list .contain:focus {\n  outline: none;\n}\n\n.list .active {\n  color: #3f51b5;\n  outline: none;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.mobile-view {\n  display: none;\n}\n\n.sidenavEnable {\n  display: none;\n}\n\n.profile-menu {\n  display: none;\n}\n\n.dropdown {\n  position: relative;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 2;\n}\n\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 3px 8px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n  font-size: 12px;\n}\n\n.dropdown-content a:hover {\n  background-color: #3f51b5;\n  color: white;\n}\n\n@media (max-width: 1080px) {\n  .contact-box {\n    display: none;\n  }\n\n  .menu {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block !important;\n    font-size: 30px;\n  }\n\n  .sidenavEnable {\n    display: inline !important;\n    transform: translateY(-50%) scaleY(0);\n  }\n\n  .container {\n    padding: 10px 5%;\n  }\n}\n\n.example-container {\n  width: 400px;\n  height: 100%;\n  margin: 12px;\n  border: 1px solid #555;\n  z-index: 2;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9EOlxcVHlwZVNjcmlwdE5pbmphXFxlc2hvcHBlci9zcmNcXGFwcFxcY29tbW9uXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxPQUFBO0FDR0o7O0FEREE7RUFDSSxPQUFBO0FDSUo7O0FERkE7RUFDSSx1QkFBQTtFQUNBLDBDQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksY0FBQTtBQ1NKOztBRFBBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0FDV0o7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ1dKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDWEo7O0FEY0E7RUFDSSxhQUFBO0FDWEo7O0FEYUE7RUFDSSxhQUFBO0FDVko7O0FEWUE7RUFDSSxhQUFBO0FDVEo7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRFVFO0VBQ0UsY0FBQTtBQ1BKOztBRFVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUEo7O0FEVUU7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNQTjs7QURZRTtFQUNFO0lBQ00sYUFBQTtFQ1RSOztFRFdFO0lBQ0ksYUFBQTtFQ1JOOztFRFVFO0lBQ0kseUJBQUE7SUFDQSxlQUFBO0VDUE47O0VEU0U7SUFDSSwwQkFBQTtJQUNBLHFDQUFBO0VDTk47O0VEUUU7SUFDSSxnQkFBQTtFQ0xOO0FBQ0Y7O0FEU0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1ib3h7XG4gICAgYmFja2dyb3VuZDogIzI2MjYyNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwcHggMiU7XG59XG4uY29udGFjdC1ib3ggLmZpcnN0e1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0LWJveCAuc2Vjb25ke1xuICAgIGZsZXg6IDI7XG59XG4uY29udGFjdC1ib3ggLnRoaXJke1xuICAgIGZsZXg6IDI7XG59XG4uaGVhZGVyLWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIlO1xufVxuLm1lbnV7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5saXN0e1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxufVxuLmxpc3QgLmNvbnRhaW46aG92ZXIge1xuICAgIGNvbG9yOiAjM2Y1MWI1O1xufVxuLmxpc3QgbGl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDBweCAyMHB4OyBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubGlzdCAuY29udGFpbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpc3QgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi8vIC5sb2dpbi1ib3h7XG4vLyAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgIFxuLy8gfVxuLy8gLmxvZ2luLWJveCAuY29udGFpbjpob3ZlciB7XG4vLyAgICAgY29sb3I6ICMzZjUxYjU7XG4vLyB9XG4vLyAubG9naW4tYm94IGxpe1xuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgbWFyZ2luOiAwcHggMjBweDsgXG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuLy8gfVxuLy8gLmxvZ2luLWJveCAuY29udGFpbjpmb2N1cyB7XG4vLyAgICAgb3V0bGluZTogbm9uZTtcbi8vIH1cblxuLy8gLmxvZ2luLWJveCAuYWN0aXZlIHtcbi8vICAgICBjb2xvcjogIzNmNTFiNTtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gfVxuXG4ubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uc2lkZW5hdkVuYWJsZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnByb2ZpbGUtbWVudXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gICAgLmNvbnRhY3QtYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubWVudXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vYmlsZS12aWV3e1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5zaWRlbmF2RW5hYmxle1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMTBweCA1JTtcbiAgICB9XG59XG5cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgei1pbmRleDogMjtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4iLCIuY29udGFjdC1ib3gge1xuICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMHB4IDIlO1xufVxuXG4uY29udGFjdC1ib3ggLmZpcnN0IHtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtYm94IC5zZWNvbmQge1xuICBmbGV4OiAyO1xufVxuXG4uY29udGFjdC1ib3ggLnRoaXJkIHtcbiAgZmxleDogMjtcbn1cblxuLmhlYWRlci1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMiU7XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubGlzdCAuY29udGFpbjpob3ZlciB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4ubGlzdCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweCAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubGlzdCAuY29udGFpbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5saXN0IC5hY3RpdmUge1xuICBjb2xvcjogIzNmNTFiNTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9iaWxlLXZpZXcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZW5hdkVuYWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMjtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29udGFjdC1ib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICAuc2lkZW5hdkVuYWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwKTtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggNSU7XG4gIH1cbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gIHotaW5kZXg6IDI7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loading.service */ "./src/app/services/loading.service.ts");








let HeaderComponent = class HeaderComponent {
    constructor(dialog, router, loginService, loadingService) {
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
        this.loadingService = loadingService;
        this.sidenavEnable = false;
        this.sidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    toggelSidenav() {
        this.sidenav.emit('toggel');
    }
    ngOnInit() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
        this.loadingService.progressEnable.subscribe(next => {
            this.loadingEnable = next;
        });
    }
    enableSidenav() {
        this.sidenavEnable = !this.sidenavEnable;
    }
    openLoginDialog() {
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {});
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    logout() {
        this.user = null;
        this.loginService.loggedIn.next(this.user);
        this.router.navigate(['home']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  list-style: none;\n  width: 100%;\n  padding: 0;\n  border-bottom: 1px solid lightcyan;\n}\n\n.list .contain:hover {\n  color: #3f51b5;\n}\n\n.list li {\n  padding: 10px 0px;\n  color: black;\n  cursor: pointer;\n}\n\n.list .contain:focus {\n  outline: none;\n}\n\n.list .active {\n  color: #3f51b5;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NpZGVuYXYvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXGNvbW1vblxcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0QsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQ0NIOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgd2lkdGg6IDEwMCU7XG4gICBwYWRkaW5nOiAwO1xuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbn1cbi5saXN0IC5jb250YWluOmhvdmVyIHtcbiAgICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLmxpc3QgbGl7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0IC5jb250YWluOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi5saXN0IC5hY3RpdmUge1xuICAgIGNvbG9yOiAjM2Y1MWI1O1xuICAgIG91dGxpbmU6IG5vbmU7XG59IiwiLmxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Y3lhbjtcbn1cblxuLmxpc3QgLmNvbnRhaW46aG92ZXIge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxuLmxpc3QgbGkge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0IC5jb250YWluOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpc3QgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Y1MWI1O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/sidenav/sidenav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/sidenav/sidenav.component.ts ***!
  \*****************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/login.component */ "./src/app/login/login.component.ts");






let SidenavComponent = class SidenavComponent {
    constructor(dialog, router, loginService) {
        this.dialog = dialog;
        this.router = router;
        this.loginService = loginService;
        this.sidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profileMenu = [
            {
                title: 'My Profile',
                link: '/myprofile/profile',
                icon: 'person'
            },
            {
                title: 'Saved Cards',
                link: '/myprofile/carddetails',
                icon: 'account_balance'
            },
            {
                title: 'My Address',
                link: '/myprofile/address',
                icon: 'border_color'
            },
            {
                title: 'My Orders',
                link: '/myprofile/orders',
                icon: 'next_week'
            },
            {
                title: 'My Cart',
                link: '/shopping-cart',
                icon: 'add_shopping_cart'
            },
            {
                title: 'My Wishlist',
                link: '/myprofile/wishlist',
                icon: 'shopping_cart'
            },
        ];
        this.myStuff = [
            {
                title: 'My Reviews',
                link: '/myprofile/reviews',
                icon: 'rate_review'
            },
            {
                title: 'My Rewards',
                link: '/myprofile/rewards',
                icon: 'rate_review'
            },
        ];
    }
    toggelSidenav() {
        this.sidenav.emit('toggel');
    }
    ngOnInit() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
    }
    goToMyProfile() {
        this.toggelSidenav();
        this.router.navigate(['myprofile']);
    }
    logout() {
        this.toggelSidenav();
        this.user = null;
        this.loginService.loggedIn.next(this.user);
        this.router.navigate(['home']);
    }
    openLoginDialog() {
        this.toggelSidenav();
        const dialogRef = this.dialog.open(src_app_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], {});
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
};
SidenavComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidenavComponent.prototype, "sidenav", void 0);
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/sidenav/sidenav.component.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/common/sidenav/sidenav.component.scss")]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/app/common/slider/slider.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/slider/slider.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/slider/slider.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.carouselOptions = {
            items: 1,
            dots: true,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.images = [
            {
                text: "Festive Deer",
                image: "https://vinylbannersprinting.co.uk/wp-content/uploads/2016/04/sb25-RA-demo.png"
            },
            {
                text: "Festive Deer",
                image: "https://ak4.picdn.net/shutterstock/videos/16558264/thumb/10.jpg"
            },
            {
                text: "Morning Greens",
                image: "data:image/png;base64,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"
            },
        ];
    }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/common/slider/slider.component.scss")]
    })
], SliderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.3);\n  margin-top: 35px;\n  display: flex;\n}\n\n.search-text {\n  padding: 10px;\n  flex: 20;\n  font-size: 12px;\n  color: #656565;\n  line-height: 1.5;\n}\n\n.icon {\n  border-right: 1px solid lightgrey;\n  margin: 5px;\n}\n\n.icon, .close {\n  flex: 1;\n  color: #656565;\n}\n\n.leftIcon {\n  padding: 2px;\n  padding-left: 7px;\n}\n\n.products-container {\n  background: #f8f9fa !important;\n  position: relative;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: normal;\n  color: #000000;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.viewAllBtn {\n  float: right;\n  margin-top: 10px;\n  border-radius: 0;\n}\n\n.body {\n  display: flex;\n  margin-top: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.necessaryvocabulary.com%2F2016%2F08%2Fnecessary-vocabulary-with-clothes-names.html&psig=AOvVaw1eBBmU3rpr6nYy6hOJe1QG&ust=1585169192540000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiAp8f9s-gCFQAAAAAdAAAAABAb\");\n  background-size: cover;\n}\n\n.mobile-view {\n  display: none;\n}\n\n.mobile-view .mobile-card {\n  width: 48%;\n  text-align: center;\n  background: #fff;\n  margin: 2px;\n}\n\n@media (max-width: 1080px) {\n  .products-container {\n    display: none;\n  }\n\n  .mobile-view {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n  }\n\n  .title {\n    border-left: 5px solid #3f51b5;\n    padding-left: 10px;\n    position: relative;\n    font-size: 20px;\n    font-weight: 600;\n    color: #000000;\n    margin-left: 0.5%;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcVHlwZVNjcmlwdE5pbmphXFxlc2hvcHBlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREFBO0VBQ0ksOEJBQUE7RUFFQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDS0o7O0FEQUE7RUFDSSwyUkFBQTtFQUNBLHNCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURBQTtFQUNJO0lBQ0ksYUFBQTtFQ0dOOztFRERFO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNJTjs7RURGRTtJQUNJLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnNlYXJjaC10ZXh0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXg6IDIwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuLmljb257XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmljb24gLCAuY2xvc2V7XG4gICAgZmxleDogMTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmxlZnRJY29uIHtcbiAgICBwYWRkaW5nOiAycHg7IFxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG5cbi5wcm9kdWN0cy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAvLyAgcGFkZGluZzogMWVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGl0bGUge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLnZpZXdBbGxCdG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYm9keSAucHJvZHVjdEltZyB7XG4gICAgcGFkZGluZzogMThweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vdXJsP3NhPWkmdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm5lY2Vzc2FyeXZvY2FidWxhcnkuY29tJTJGMjAxNiUyRjA4JTJGbmVjZXNzYXJ5LXZvY2FidWxhcnktd2l0aC1jbG90aGVzLW5hbWVzLmh0bWwmcHNpZz1BT3ZWYXcxZUJCbVUzcnByNm5ZeTZoT0plMVFHJnVzdD0xNTg1MTY5MTkyNTQwMDAwJnNvdXJjZT1pbWFnZXMmY2Q9dmZlJnZlZD0wQ0FJUWpSeHFGd29UQ0ppQXA4ZjlzLWdDRlFBQUFBQWRBQUFBQUJBYicpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tb2JpbGUtdmlld3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLXZpZXcgLm1vYmlsZS1jYXJkIHtcbiAgICB3aWR0aDogNDglO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59IiwiLnNlYXJjaC1ib3gge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VhcmNoLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbGV4OiAyMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY1NjU2NTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmljb24ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaWNvbiwgLmNsb3NlIHtcbiAgZmxleDogMTtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5sZWZ0SWNvbiB7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuXG4udmlld0FsbEJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYm9keSAucHJvZHVjdEltZyB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRnd3dy5uZWNlc3Nhcnl2b2NhYnVsYXJ5LmNvbSUyRjIwMTYlMkYwOCUyRm5lY2Vzc2FyeS12b2NhYnVsYXJ5LXdpdGgtY2xvdGhlcy1uYW1lcy5odG1sJnBzaWc9QU92VmF3MWVCQm1VM3JwcjZuWXk2aE9KZTFRRyZ1c3Q9MTU4NTE2OTE5MjU0MDAwMCZzb3VyY2U9aW1hZ2VzJmNkPXZmZSZ2ZWQ9MENBSVFqUnhxRndvVENKaUFwOGY5cy1nQ0ZRQUFBQUFkQUFBQUFCQWJcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tb2JpbGUtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2JpbGUtdmlldyAubW9iaWxlLWNhcmQge1xuICB3aWR0aDogNDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");






let HomeComponent = class HomeComponent {
    constructor(iconRegistry, sanitizer, router, productService) {
        this.router = router;
        this.productService = productService;
        this.carouselOptions = {
            items: 1,
            dots: false,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.images = [];
        this.images = this.productService.getAllProducts();
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    ngOnInit() {
    }
    productHome() {
        this.router.navigate(['product/12']);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n}\n\n.example-container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyODBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyODBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginComponent = class LoginComponent {
    constructor(dialogRef, data, loginService, fb, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.user = {};
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            mobileNumber: [''],
            password: ['']
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.user.mobileNumber = this.loginForm.value.mobileNumber;
            this.loginService.loggedIn.next(this.user);
            this.onNoClick();
        }
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/myprofile/manage-address/manage-address.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/myprofile/manage-address/manage-address.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.box {\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n}\n\n.form-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL21hbmFnZS1hZGRyZXNzL0Q6XFxUeXBlU2NyaXB0TmluamFcXGVzaG9wcGVyL3NyY1xcYXBwXFxteXByb2ZpbGVcXG1hbmFnZS1hZGRyZXNzXFxtYW5hZ2UtYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL21hbmFnZS1hZGRyZXNzL21hbmFnZS1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvbWFuYWdlLWFkZHJlc3MvbWFuYWdlLWFkZHJlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46MTBweDtcbn1cbi5ib3h7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uZm9ybS1ib3h7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9ybS1ib3ggbWF0LWZvcm0tZmllbGR7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZvcm0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtLWJveCBtYXQtZm9ybS1maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/myprofile/manage-address/manage-address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/manage-address/manage-address.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressComponent", function() { return ManageAddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ManageAddressComponent = class ManageAddressComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.addressForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            pincode: [],
            locality: [],
            address: []
        });
    }
};
ManageAddressComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ManageAddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-address',
        template: __webpack_require__(/*! raw-loader!./manage-address.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/manage-address/manage-address.component.html"),
        styles: [__webpack_require__(/*! ./manage-address.component.scss */ "./src/app/myprofile/manage-address/manage-address.component.scss")]
    })
], ManageAddressComponent);



/***/ }),

/***/ "./src/app/myprofile/my-rewards/my-rewards.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/myprofile/my-rewards/my-rewards.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.no-rewards {\n  display: flex;\n  justify-content: center;\n  transform: translateY(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL215LXJld2FyZHMvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXG15cHJvZmlsZVxcbXktcmV3YXJkc1xcbXktcmV3YXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL215LXJld2FyZHMvbXktcmV3YXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvbXktcmV3YXJkcy9teS1yZXdhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOjEwcHg7XG59XG4ubm8tcmV3YXJkc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn0iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubm8tcmV3YXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/myprofile/my-rewards/my-rewards.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/myprofile/my-rewards/my-rewards.component.ts ***!
  \**************************************************************/
/*! exports provided: MyRewardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRewardsComponent", function() { return MyRewardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyRewardsComponent = class MyRewardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyRewardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-rewards',
        template: __webpack_require__(/*! raw-loader!./my-rewards.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/my-rewards/my-rewards.component.html"),
        styles: [__webpack_require__(/*! ./my-rewards.component.scss */ "./src/app/myprofile/my-rewards/my-rewards.component.scss")]
    })
], MyRewardsComponent);



/***/ }),

/***/ "./src/app/myprofile/myprofile.component.scss":
/*!****************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\n  background: #f8f9fa !important;\n  min-height: 800px;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px 10%;\n  color: black;\n}\n\n.profile-container .sidebar {\n  min-height: 400px;\n  flex: 2;\n  margin-right: 20px;\n}\n\n.profile-container .sidebar .profile {\n  min-height: 50px;\n  background: #fff;\n  padding: 10px;\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n}\n\n.profile-container .sidebar .settings {\n  margin-top: 20px;\n  min-height: 650px;\n  background: #fff;\n}\n\n.profile-container .main {\n  min-height: 400px;\n  background: #fff;\n  flex: 4;\n  padding: 20px;\n  font-size: 12px;\n}\n\n.lastName {\n  margin-left: 5px;\n}\n\n.settings {\n  position: relative;\n}\n\n.settings .list {\n  padding: 0px 5%;\n  display: flex;\n  min-height: 50px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.left-icon {\n  flex: 1;\n}\n\n.title {\n  flex: 3;\n}\n\n.right-icon {\n  flex: 1;\n}\n\n.settings .list .contain {\n  margin-top: 6%;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.settings .list .contain:hover {\n  color: #3f51b5;\n}\n\n.settings .list .child-list {\n  flex: 0 0 100%;\n}\n\n.settings .list .child-list ul {\n  list-style: none;\n  padding: 0;\n}\n\n.settings .list .child-list li {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  padding-left: 20px;\n  cursor: pointer;\n}\n\n.settings .list .child-list li:hover {\n  color: #3f51b5;\n  background: #f5faff;\n}\n\n.active {\n  background: #f5faff;\n}\n\n@media (max-width: 1080px) {\n  .sidebar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL0Q6XFxUeXBlU2NyaXB0TmluamFcXGVzaG9wcGVyL3NyY1xcYXBwXFxteXByb2ZpbGVcXG15cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7QUNFSjs7QURBQTtFQUNJLE9BQUE7QUNHSjs7QUREQTtFQUNJLE9BQUE7QUNJSjs7QURGQTtFQUNJLE9BQUE7QUNLSjs7QURIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ01KOztBREhBO0VBQ0ksY0FBQTtBQ01KOztBREhBO0VBQ0ksY0FBQTtBQ01KOztBREhBO0VBRUksZ0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FESEE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUo7O0FESEE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUNJLG1CQUFBO0FDT0o7O0FESkE7RUFDSTtJQUNJLGFBQUE7RUNPTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogODAwcHg7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHggMTAlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIC5zaWRlYmFye1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGZsZXg6IDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG59XG4ucHJvZmlsZS1jb250YWluZXIgLnNpZGViYXIgLnByb2ZpbGV7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnByb2ZpbGUtY29udGFpbmVyIC5zaWRlYmFyIC5zZXR0aW5nc3tcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAubWFpbntcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGZsZXg6IDQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYXN0TmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNldHRpbmdze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNldHRpbmdzIC5saXN0e1xuICAgIHBhZGRpbmc6IDBweCA1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5sZWZ0LWljb257XG4gICAgZmxleDogMTtcbn1cbi50aXRsZSB7XG4gICAgZmxleDogMztcbn1cbi5yaWdodC1pY29ue1xuICAgIGZsZXg6IDE7XG59XG4uc2V0dGluZ3MgLmxpc3QgLmNvbnRhaW4ge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG4uc2V0dGluZ3MgLmxpc3QgLmNvbnRhaW46aG92ZXIge1xuICAgIGNvbG9yOiAjM2Y1MWI1O1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3Qge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgdWx7XG5cbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGk6aG92ZXJ7XG4gICAgY29sb3I6ICMzZjUxYjU7XG4gICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcbn1cbi5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAgIC5zaWRlYmFye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCIucHJvZmlsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHggMTAlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAuc2lkZWJhciB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBmbGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAuc2lkZWJhciAucHJvZmlsZSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvZmlsZS1jb250YWluZXIgLnNpZGViYXIgLnNldHRpbmdzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWluLWhlaWdodDogNjUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciAubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmbGV4OiA0O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYXN0TmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNldHRpbmdzIC5saXN0IHtcbiAgcGFkZGluZzogMHB4IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5sZWZ0LWljb24ge1xuICBmbGV4OiAxO1xufVxuXG4udGl0bGUge1xuICBmbGV4OiAzO1xufVxuXG4ucmlnaHQtaWNvbiB7XG4gIGZsZXg6IDE7XG59XG5cbi5zZXR0aW5ncyAubGlzdCAuY29udGFpbiB7XG4gIG1hcmdpbi10b3A6IDYlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNldHRpbmdzIC5saXN0IC5jb250YWluOmhvdmVyIHtcbiAgY29sb3I6ICMzZjUxYjU7XG59XG5cbi5zZXR0aW5ncyAubGlzdCAuY2hpbGQtbGlzdCB7XG4gIGZsZXg6IDAgMCAxMDAlO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2V0dGluZ3MgLmxpc3QgLmNoaWxkLWxpc3QgbGk6aG92ZXIge1xuICBjb2xvcjogIzNmNTFiNTtcbiAgYmFja2dyb3VuZDogI2Y1ZmFmZjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmNWZhZmY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/myprofile/myprofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myprofile/myprofile.component.ts ***!
  \**************************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyprofileComponent = class MyprofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myprofile',
        template: __webpack_require__(/*! raw-loader!./myprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/myprofile.component.html"),
        styles: [__webpack_require__(/*! ./myprofile.component.scss */ "./src/app/myprofile/myprofile.component.scss")]
    })
], MyprofileComponent);



/***/ }),

/***/ "./src/app/myprofile/notifications/notifications.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/notifications/notifications.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/myprofile/notifications/notifications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/myprofile/notifications/notifications.component.ts ***!
  \********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationsComponent = class NotificationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/notifications/notifications.component.html"),
        styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/myprofile/notifications/notifications.component.scss")]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/myprofile/profile-information/profile-information.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/myprofile/profile-information/profile-information.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXG15cHJvZmlsZVxccHJvZmlsZS1pbmZvcm1hdGlvblxccHJvZmlsZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL3Byb2ZpbGUtaW5mb3JtYXRpb24vcHJvZmlsZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvcHJvZmlsZS1pbmZvcm1hdGlvbi9wcm9maWxlLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvcm0tYm94IG1hdC1mb3JtLWZpZWxke1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iLCIuZm9ybS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZvcm0tYm94IG1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/myprofile/profile-information/profile-information.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/myprofile/profile-information/profile-information.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationComponent", function() { return ProfileInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ProfileInformationComponent = class ProfileInformationComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            gender: [],
            mobile: [],
            email: []
        });
    }
};
ProfileInformationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProfileInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-information',
        template: __webpack_require__(/*! raw-loader!./profile-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/profile-information/profile-information.component.html"),
        styles: [__webpack_require__(/*! ./profile-information.component.scss */ "./src/app/myprofile/profile-information/profile-information.component.scss")]
    })
], ProfileInformationComponent);



/***/ }),

/***/ "./src/app/myprofile/reviews-rating/reviews-rating.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/myprofile/reviews-rating/reviews-rating.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS9yZXZpZXdzLXJhdGluZy9yZXZpZXdzLXJhdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myprofile/reviews-rating/reviews-rating.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/reviews-rating/reviews-rating.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewsRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsRatingComponent", function() { return ReviewsRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReviewsRatingComponent = class ReviewsRatingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReviewsRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews-rating',
        template: __webpack_require__(/*! raw-loader!./reviews-rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/reviews-rating/reviews-rating.component.html"),
        styles: [__webpack_require__(/*! ./reviews-rating.component.scss */ "./src/app/myprofile/reviews-rating/reviews-rating.component.scss")]
    })
], ReviewsRatingComponent);



/***/ }),

/***/ "./src/app/myprofile/saved-cards/saved-cards.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/myprofile/saved-cards/saved-cards.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 10px;\n}\n\n.box {\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);\n}\n\n.form-box {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.form-box mat-form-field {\n  flex: 1;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3NhdmVkLWNhcmRzL0Q6XFxUeXBlU2NyaXB0TmluamFcXGVzaG9wcGVyL3NyY1xcYXBwXFxteXByb2ZpbGVcXHNhdmVkLWNhcmRzXFxzYXZlZC1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL3NhdmVkLWNhcmRzL3NhdmVkLWNhcmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9teXByb2ZpbGUvc2F2ZWQtY2FyZHMvc2F2ZWQtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW46MTBweDtcbn1cbi5ib3h7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uZm9ybS1ib3h7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9ybS1ib3ggbWF0LWZvcm0tZmllbGR7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZvcm0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb3JtLWJveCBtYXQtZm9ybS1maWVsZCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/myprofile/saved-cards/saved-cards.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/myprofile/saved-cards/saved-cards.component.ts ***!
  \****************************************************************/
/*! exports provided: SavedCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedCardsComponent", function() { return SavedCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SavedCardsComponent = class SavedCardsComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.cardForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            pincode: [],
            locality: [],
            address: []
        });
    }
};
SavedCardsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SavedCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saved-cards',
        template: __webpack_require__(/*! raw-loader!./saved-cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/saved-cards/saved-cards.component.html"),
        styles: [__webpack_require__(/*! ./saved-cards.component.scss */ "./src/app/myprofile/saved-cards/saved-cards.component.scss")]
    })
], SavedCardsComponent);



/***/ }),

/***/ "./src/app/myprofile/shopping-cart/shopping-cart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/myprofile/shopping-cart/shopping-cart.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shopping-cart-conatiner {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n}\n\n.header {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 10%;\n  min-height: 50px;\n  color: black;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n.body {\n  background: #fff;\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 10%;\n  color: black;\n  text-align: center;\n  flex-wrap: wrap;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: 600;\n  color: #000000;\n  margin-left: 10%;\n}\n\n.img {\n  flex: 2;\n  margin-right: 5px;\n}\n\n.productImg {\n  width: 120px;\n  height: 100px;\n}\n\n.name {\n  flex: 2;\n  margin-right: 5px;\n}\n\n.total {\n  flex: 1;\n}\n\n.quantity {\n  flex: 1;\n  margin-right: 5px;\n  min-width: 140px;\n}\n\n.price {\n  flex: 1;\n  margin-right: 5px;\n}\n\n.close-icon {\n  color: gray;\n  font-size: 20px;\n  overflow: hidden;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.cart-total {\n  padding: 20px;\n  min-height: 300px;\n  background: #fff;\n  width: 500px;\n  margin: 20px 28%;\n  letter-spacing: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.checkout-button {\n  text-align: center;\n  margin: 20px;\n}\n\n.full-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL3Nob3BwaW5nLWNhcnQvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXG15cHJvZmlsZVxcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbXlwcm9maWxlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLE9BQUE7QUNJSjs7QURGQTtFQUNJLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDT0o7O0FESkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG9wcGluZy1jYXJ0LWNvbmF0aW5lciB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMTAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm9keSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxufVxuXG4udGl0bGUge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5pbWd7XG4gICAgZmxleDogMjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0SW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5uYW1lIHtcbiAgICBmbGV4OiAyO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnRvdGFse1xuICAgIGZsZXg6IDE7XG59XG4ucXVhbnRpdHl7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtaW4td2lkdGg6IDE0MHB4O1xufVxuLnByaWNle1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY2xvc2UtaWNvbntcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYXJ0LXRvdGFsIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMjBweCAyOCU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmNoZWNrb3V0LWJ1dHRvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweDtcbn1cbi5mdWxsLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLnNob3BwaW5nLWNhcnQtY29uYXRpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMTAlO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDEwJTtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmltZyB7XG4gIGZsZXg6IDI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucHJvZHVjdEltZyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm5hbWUge1xuICBmbGV4OiAyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZmxleDogMTtcbn1cblxuLnF1YW50aXR5IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5wcmljZSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYXJ0LXRvdGFsIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAyMHB4IDI4JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmNoZWNrb3V0LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZnVsbC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/myprofile/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/myprofile/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingCartComponent = class ShoppingCartComponent {
    constructor() {
        this.cart = [
            {
                text: "Everfresh Flowers",
                image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"
            },
            {
                text: "Festive Deer",
                image: "https://cdn140.picsart.com/268948212025211.png?r1024x1024"
            },
            {
                text: "Morning Greens",
                image: "http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"
            },
            {
                text: "Everfresh Flowers",
                image: "https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"
            },
        ];
    }
    ngOnInit() {
    }
};
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/myprofile/shopping-cart/shopping-cart.component.scss")]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/myprofile/wishlist/wishlist.component.scss":
/*!************************************************************!*\
  !*** ./src/app/myprofile/wishlist/wishlist.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvZmlsZS93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/myprofile/wishlist/wishlist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/myprofile/wishlist/wishlist.component.ts ***!
  \**********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WishlistComponent = class WishlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/myprofile/wishlist/wishlist.component.html"),
        styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/myprofile/wishlist/wishlist.component.scss")]
    })
], WishlistComponent);



/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-container {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n  display: flex;\n  padding: 0px 2%;\n}\n\n.sidebar {\n  flex: 1;\n  margin-top: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: black;\n}\n\n.sidebar .list {\n  list-style: none;\n  text-align: left;\n  padding: 0;\n}\n\n.sidebar .list .list-items {\n  font-size: 12px;\n  background: transparent;\n}\n\n.body {\n  flex: 6;\n  display: flex;\n  margin-top: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.mobile {\n  display: none;\n}\n\n.mobile-card-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin: 10px;\n}\n\n.mobile-card-img {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mobile-card-details {\n  flex: 3;\n  margin-left: 20px;\n}\n\n@media (max-width: 1080px) {\n  .products-container {\n    display: none;\n  }\n\n  .mobile {\n    display: block;\n    background: #fff;\n    margin: 10px 0px;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNHSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLE9BQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBZ0JJO0lBQ0ksYUFBQTtFQ2ROOztFRGdCRTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQ2JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnByb2R1Y3RzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMWVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDIlO1xufVxuLnNpZGViYXJ7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnNpZGViYXIgIC5saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXIgLmxpc3QgLmxpc3QtaXRlbXN7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmJvZHl7XG4gICAgZmxleDogNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJvZHkgLnByb2R1Y3RJbWcge1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuXG5cbi5tb2JpbGV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBcbn1cblxuLm1vYmlsZS1jYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHg7XG5cbn1cbi5tb2JpbGUtY2FyZC1pbWd7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9iaWxlLWNhcmQtZGV0YWlscyB7XG4gICAgZmxleDogMztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAgIC8vIC5zaWRlYmFyIHtcbiAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcbiAgICAvLyB9XG4gICAgLy8gLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gfVxuICAgIC8vIC5leGFtcGxlLWNhcmQge1xuICAgIC8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIC8vIH1cbiAgICAvLyAuYm9keSAucHJvZHVjdEltZyB7XG4gICAgLy8gICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIH1cbiAgICAucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICBcbn1cblxuXG4iLCIucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMiU7XG59XG5cbi5zaWRlYmFyIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zaWRlYmFyIC5saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNpZGViYXIgLmxpc3QgLmxpc3QtaXRlbXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYm9keSB7XG4gIGZsZXg6IDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ib2R5IC5wcm9kdWN0SW1nIHtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9iaWxlLWNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1vYmlsZS1jYXJkLWltZyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9iaWxlLWNhcmQtZGV0YWlscyB7XG4gIGZsZXg6IDM7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");






let ProductsComponent = class ProductsComponent {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
        this.carouselOptions = {
            items: 1,
            dots: false,
            navigation: false,
            loop: true,
            margin: 10,
            autoplay: true,
            animateOut: 'fadeOut',
            autoHeight: true,
            autoHeightClass: 'owl-height',
        };
        this.products = [];
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
        this.products = this.productService.getAllProducts();
    }
    ngOnInit() {
    }
    productHome(id) {
        this.router.navigate(['product/' + id]);
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
    })
], ProductsComponent);

const TREE_DATA = [
    {
        name: 'Mens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Womens',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    }, {
        name: 'Child',
        children: [
            { name: 'Shirt' },
            { name: 'Shoes' },
            { name: 'Jeans' },
        ]
    },
];


/***/ }),

/***/ "./src/app/services/auth-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth-service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");




let AuthService = class AuthService {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate() {
        this.loginService.loggedIn.subscribe(next => {
            this.user = next;
        });
        if (this.user) {
            return true;
        }
        this.router.navigate(['home']);
        return false;
    }
};
AuthService.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/loading.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.loading = false;
        this.progressEnable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loading);
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoginService = class LoginService {
    constructor() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user);
    }
    isLoggedIn() {
        console.log(this.loggedIn);
        return true;
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");




let ProductService = class ProductService {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.products = [
            {
                id: 1,
                text: "watch",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["https://images-na.ssl-images-amazon.com/images/I/511j%2B4idT8L.jpg"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://www.getsygnal.com/uploads/products/3147701531479054.gif"]
            },
            {
                id: 4,
                text: "cute-dress",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 5,
                text: "girl-jean",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 6,
                text: "mens-jean",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJLOjpWcTcCxr2rCArpxrCUx1Z5cvfwBbTbcyPsGIbYx_CtKWj&usqp=CAU"]
            },
            {
                id: 7,
                text: "Festive Deer",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 8,
                text: "Morning Greens",
                image: ["http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"]
            },
            {
                id: 9,
                text: "Everfresh Flowers",
                image: ["http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8109.png"]
            },
            {
                id: 10,
                text: "Festive Deer",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 11,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 12,
                text: "Everfresh Flowers",
                image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
            },
            {
                id: 13,
                text: "top",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYHbbvOk1V2roZr_mV26FQqSmg1O8ACIRho6aHp_ug86WbZhXK&usqp=CAU"]
            },
            {
                id: 14,
                text: "top-2",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0tX8w5gtCZt5zXBxWyphThwWFPc7I5-7lgPKpc8BF4h1K-Cr2&usqp=CAU"]
            },
            {
                id: 14,
                text: "Everfresh Flowers",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 15,
                text: "Everfresh Flowers",
                image: ["https://ae01.alicdn.com/kf/HTB15mqLLVXXXXc1XpXXq6xXFXXXD/Striped-Men-Shirt-5XL-Summer-Short-Sleeve-Shirts-Mens-Clothes-100-Cotton-Brand-Clothing-Business-Mens.jpg_640x640.jpg"]
            },
            {
                id: 16,
                text: "Everfresh Flowers",
                image: ["https://images.pexels.com/photos/19090/pexels-photo.jpg"]
            },
            {
                id: 17,
                text: "shoe",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7-XWgFC5DaUxYvVRWuKhkJ0reT8IiFD05H70buHXEj6CT7xzG&usqp=CAU"]
            },
            {
                id: 18,
                text: "Everfresh Flowers",
                image: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371570/05/sv01/fnd/IND/fmt/png/RS-X3-Puzzle-Shoes"]
            },
            {
                id: 19,
                text: "Everfresh Flowers",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 19,
                text: "Everfresh Flowers",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRWg7jfeYbmftAMoEt-lyqFNAAOTmCVCZ6Yu5r8eT0XaFnKukg"]
            },
            {
                id: 20,
                text: "Everfresh Flowers",
                image: ["data:image/jpeg;base64,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"]
            },
            {
                id: 23,
                text: "protein",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3_QAfdu0pONDs0lK5zfMZxHXLeTRRLWkPAtJ1jtjLuYe3JzsF&usqp=CAU"]
            },
            {
                id: 24,
                text: "men-shirt",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqV4BwxHR_TTVrmCQeSa1-kagRkZavRntqn636ERHeqe01krk_&usqp=CAU"]
            },
            {
                id: 25,
                text: "men-shirtß",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFPGIAKzw04T1GLoE5KUvkvTu_yK4vsvlWWWc5VLKEwMyP7UWl&usqp=CAU"]
            },
            {
                id: 26,
                text: "female-dress",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzlT8jhHJ-iOxRV3tbm5Z1UADZVY4kK-CvD9wc1zJ7EIn_0gsr&usqp=CAU"]
            },
            {
                id: 27,
                text: "Everfresh Flowers",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNAkhYTtF_MvNwoPGLsNXyIUPsfsoKspaNFPF0ZJlaWzNQfmqq&usqp=CAU"]
            },
            {
                id: 28,
                text: "heels",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLSVyzTeku9NH82tKDF08ZQBqudCd_fOygijb8L6CmiX0jgMVQ&usqp=CAU"]
            },
            {
                id: 29,
                text: "heels",
                image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJPuFAcmNy1IfcQD7BKLU5JyFsVYssLMqGbvlAMwslkULN_uMt&usqp=CAU"]
            },
        ];
        this.simillarProducts = [
            {
                id: 1,
                text: "Everfresh Flowers",
                image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
            },
            {
                id: 2,
                text: "Festive Deer",
                image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
            },
            {
                id: 3,
                text: "Morning Greens",
                image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
            },
            {
                id: 4,
                text: "Everfresh Flowers",
                image: ["https://ae01.alicdn.com/kf/HTB15mqLLVXXXXc1XpXXq6xXFXXXD/Striped-Men-Shirt-5XL-Summer-Short-Sleeve-Shirts-Mens-Clothes-100-Cotton-Brand-Clothing-Business-Mens.jpg_640x640.jpg"]
            },
        ];
    }
    getAllProducts() {
        return this.products;
    }
    getSimillarProducts() {
        return this.simillarProducts;
    }
    getSingleProduct(id) {
        let temp;
        this.products.forEach(element => {
            if (element.id == id) {
                temp = element;
            }
        });
        const loading = false;
        this.loadingService.progressEnable.next(loading);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => observer.next(temp));
    }
};
ProductService.ctorParameters = () => [
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/single-product/single-product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/single-product/single-product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conatiner {\n  background: blueviolet !important;\n  display: flex;\n  justify-content: center;\n  padding: 20px 2%;\n  font-weight: 400;\n  color: black;\n}\n\n.product-img-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 20px;\n  background: #fff;\n}\n\n.product-description {\n  flex: 1;\n}\n\n.buy-now-button {\n  border-radius: 0;\n}\n\n.buy-now-button.space {\n  margin-right: 10px;\n}\n\n.rating {\n  margin-left: 10px;\n}\n\n.sold {\n  margin-left: 10px;\n}\n\n.description {\n  font-size: 14px;\n  color: gray;\n  animation: animate 1s linear forwards;\n}\n\n@keyframes animate {\n  0% {\n    filter: blur(1px);\n  }\n  100% {\n    filter: blur(0);\n  }\n}\n\n.description-tabs {\n  margin: 0px 2%;\n  min-height: 300px;\n  color: black;\n}\n\n.img-box {\n  flex: 1;\n  text-align: center;\n}\n\n.detail-box {\n  flex: 12;\n}\n\n.products-container {\n  background: #f8f9fa !important;\n  padding: 1em 0;\n  position: relative;\n}\n\n.title {\n  border-left: 5px solid #3f51b5;\n  padding-left: 10px;\n  position: relative;\n  font-size: 30px;\n  font-weight: 600;\n  color: #000000;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.viewAllBtn {\n  float: right;\n  margin-top: 10px;\n  border-radius: 0;\n}\n\n.body {\n  display: flex;\n  margin-top: 10px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.body .productImg {\n  padding: 18px;\n  width: 100%;\n  height: 200px;\n}\n\n.example-header-image {\n  background-image: url(\"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.incimages.com%2Fuploaded_files%2Fimage%2F970x450%2Fproducts_364475.jpg&imgrefurl=https%3A%2F%2Fwww.inc.com%2Fjeff-haden%2Fhow-to-write-a-great-business-plan-products-and-services.html&tbnid=hSqJh36Rd9oE5M&vet=12ahUKEwjqm-65-7LoAhUULSsKHQM_AfQQMygDegUIARCUAg..i&docid=HV1Hefk_jcIv2M&w=970&h=450&q=product%20image&client=safari&ved=2ahUKEwjqm-65-7LoAhUULSsKHQM_AfQQMygDegUIARCUAg\");\n  background-size: cover;\n}\n\n.mobile-view {\n  display: \"\";\n}\n\n.mobile-view .mobile-card {\n  width: 48%;\n  text-align: center;\n  background: #fff;\n  margin: 2px;\n}\n\n@media (max-width: 1080px) {\n  .conatiner {\n    display: block;\n    padding: 20px 5%;\n  }\n\n  .products-container {\n    display: none;\n  }\n\n  .description-tabs {\n    margin: 0px 2%;\n    margin-bottom: 10px;\n  }\n\n  .mobile-view {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    margin-bottom: 20px;\n  }\n\n  .title {\n    border-left: 5px solid #3f51b5;\n    padding-left: 10px;\n    position: relative;\n    font-size: 20px;\n    font-weight: 600;\n    color: #000000;\n    margin-left: 0.5%;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3QvRDpcXFR5cGVTY3JpcHROaW5qYVxcZXNob3BwZXIvc3JjXFxhcHBcXHNpbmdsZS1wcm9kdWN0XFxzaW5nbGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFDSSxPQUFBO0FDRUo7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ0dKOztBRERBO0VBQ0k7SUFHSSxpQkFBQTtFQ0VOO0VEQUU7SUFHSSxlQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNESjs7QURHQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0MsUUFBQTtBQ0NEOztBRElBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRElBO0VBQ0kseWNBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDREo7O0FETUE7RUFDSTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFQ0hOOztFREtFO0lBQ0ksYUFBQTtFQ0ZOOztFRElFO0lBQ0ksY0FBQTtJQUNBLG1CQUFBO0VDRE47O0VER0U7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ0FOOztFREVFO0lBQ0ksOEJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wcm9kdWN0L3NpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmF0aW5lciB7XG4gICAgYmFja2dyb3VuZDpibHVldmlvbGV0ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDIlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLnByb2R1Y3QtaW1nLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxO1xufVxuXG5cbi5idXktbm93LWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idXktbm93LWJ1dHRvbi5zcGFjZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucmF0aW5nIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zb2xke1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMXMgbGluZWFyIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgICAwJSB7XG4gICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAgICAgICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC8vb3BhY2l0eTogMTtcbiAgICAgICAgLy90cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICB9XG59XG5cbi5kZXNjcmlwdGlvbi10YWJze1xuICAgIG1hcmdpbjogMHB4IDIlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5pbWctYm94e1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRldGFpbC1ib3h7XG4gZmxleDogMTI7XG59XG5cblxuXG4ucHJvZHVjdHMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjM2Y1MWI1O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG4udmlld0FsbEJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ib2R5IC5wcm9kdWN0SW1nIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cblxuICBcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZ3d3cuaW5jaW1hZ2VzLmNvbSUyRnVwbG9hZGVkX2ZpbGVzJTJGaW1hZ2UlMkY5NzB4NDUwJTJGcHJvZHVjdHNfMzY0NDc1LmpwZyZpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZ3d3cuaW5jLmNvbSUyRmplZmYtaGFkZW4lMkZob3ctdG8td3JpdGUtYS1ncmVhdC1idXNpbmVzcy1wbGFuLXByb2R1Y3RzLWFuZC1zZXJ2aWNlcy5odG1sJnRibmlkPWhTcUpoMzZSZDlvRTVNJnZldD0xMmFoVUtFd2pxbS02NS03TG9BaFVVTFNzS0hRTV9BZlFRTXlnRGVnVUlBUkNVQWcuLmkmZG9jaWQ9SFYxSGVma19qY0l2Mk0mdz05NzAmaD00NTAmcT1wcm9kdWN0JTIwaW1hZ2UmY2xpZW50PXNhZmFyaSZ2ZWQ9MmFoVUtFd2pxbS02NS03TG9BaFVVTFNzS0hRTV9BZlFRTXlnRGVnVUlBUkNVQWcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubW9iaWxlLXZpZXd7XG4gICAgZGlzcGxheTogJydcbn1cblxuLm1vYmlsZS12aWV3IC5tb2JpbGUtY2FyZCB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgICAuY29uYXRpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNSU7XG4gICAgfVxuICAgIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24tdGFic3tcbiAgICAgICAgbWFyZ2luOiAwcHggMiU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG4iLCIuY29uYXRpbmVyIHtcbiAgYmFja2dyb3VuZDogYmx1ZXZpb2xldCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAyJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJvZHVjdC1pbWctY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxO1xufVxuXG4uYnV5LW5vdy1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uYnV5LW5vdy1idXR0b24uc3BhY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yYXRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnNvbGQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDFzIGxpbmVhciBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIGZpbHRlcjogYmx1cigxcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufVxuLmRlc2NyaXB0aW9uLXRhYnMge1xuICBtYXJnaW46IDBweCAyJTtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmltZy1ib3gge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWwtYm94IHtcbiAgZmxleDogMTI7XG59XG5cbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cblxuLnZpZXdBbGxCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJvZHkgLnByb2R1Y3RJbWcge1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdyZXM/aW1ndXJsPWh0dHBzJTNBJTJGJTJGd3d3LmluY2ltYWdlcy5jb20lMkZ1cGxvYWRlZF9maWxlcyUyRmltYWdlJTJGOTcweDQ1MCUyRnByb2R1Y3RzXzM2NDQ3NS5qcGcmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGd3d3LmluYy5jb20lMkZqZWZmLWhhZGVuJTJGaG93LXRvLXdyaXRlLWEtZ3JlYXQtYnVzaW5lc3MtcGxhbi1wcm9kdWN0cy1hbmQtc2VydmljZXMuaHRtbCZ0Ym5pZD1oU3FKaDM2UmQ5b0U1TSZ2ZXQ9MTJhaFVLRXdqcW0tNjUtN0xvQWhVVUxTc0tIUU1fQWZRUU15Z0RlZ1VJQVJDVUFnLi5pJmRvY2lkPUhWMUhlZmtfamNJdjJNJnc9OTcwJmg9NDUwJnE9cHJvZHVjdCUyMGltYWdlJmNsaWVudD1zYWZhcmkmdmVkPTJhaFVLRXdqcW0tNjUtN0xvQWhVVUxTc0tIUU1fQWZRUU15Z0RlZ1VJQVJDVUFnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubW9iaWxlLXZpZXcge1xuICBkaXNwbGF5OiBcIlwiO1xufVxuXG4ubW9iaWxlLXZpZXcgLm1vYmlsZS1jYXJkIHtcbiAgd2lkdGg6IDQ4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29uYXRpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4IDUlO1xuICB9XG5cbiAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi10YWJzIHtcbiAgICBtYXJnaW46IDBweCAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLm1vYmlsZS12aWV3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzNmNTFiNTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/single-product/single-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-product/single-product.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SingleProductComponent = class SingleProductComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.simillarProducts = [];
        this.messages = [
            {
                image: 'data:image/jpeg;base64,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',
                name: 'Salaman Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            },
            {
                image: 'data:image/jpeg;base64,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',
                name: 'Shahrukh Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            },
            {
                image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRUVFRUVFRYVFRUVFRUXFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGi4mHSUvLS0tKy0tLS0tLS0tLS0tLS8rLi0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS03Lf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBgIDBwj/xAA/EAABAwEFBQUGBAUDBQEAAAABAAIRAwQFEiExBkFRYXETIoGRsQcjMqHB8DNS0eEUQmJz8RVDsmNygpLyJP/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAAwEQACAgEDAgIIBgMAAAAAAAAAAQIRAwQhMRJBMoETIlFhcZGh8AUzNLHB0SOCwv/aAAwDAQACEQMRAD8A6jZR3G9At7U2shljegThgTSpmskgCyhSBilhKGpSFKKsxhCyhEIA1VRktBCc1Rkm5S58l48GDlBX9tHRsre84F25o1/ZRW2214s80aJBrbzqKc8eLuX+Fym2WmSX1HFziZJOZKolZfguVq24dUM9+ODTgb56laae2+DSm4Z73OeD55jqCqWHF2um4LOs8AftPzV+lUV6i/u9pLXNA7Mg7zI8PqmLtu34paHeOHPqI+qonYw3E7QnI6Ss2VBy8lVJE2dl2X23pWgilVOCodMWjuh4q4Becxn+y6DsNtoQW2e0unQU6h15Nf8AqoaolbnTUQka5ZKoCQiEqEAJCWEIQAkIhKhAGKSFmkUgYwkhZQhAGEJIWZCSEAYQhZQhSAl2D3TeidhN7r/Cb0CcpgtmYCEoSqSACIShBUkMRCEIIMKmiqe2m0YslLuwar5DBw4uPRWS8bS2mwucYABJPAASSuCbS3ubTXfUPw6NHBo0/VLnyNhwRtstRkvcSXEkknUk70wBJMuzJ0HBFQ4jO4aD6pChEs2GtCy7SRn5lM3Hgk7Tx9Fayo+zfRc3UsMjodfomFKpyUtdNI9lVd/T55qJY0b58FREscMPCQeRlb2VXD4hPP8AdR9RuHNrp5HVbbLbdx+algjrfs+2uxgWes7MZNcdTwB49V0UFebaFYscHsMEZru2yF9C1Wdj573wuHBw189fFL4L8k6hCEEAlSIQAqEiEACEqEAIkhZJEAYwhKiEAYoWUIQAXUPdN6BOSEyuR80WHkE+TxYoSOKULF6ggVhWZWqkVtcpRDESOdCVYPUkFA9q97dnQbSB71XXk1sE+ZhcgqHcep6Kz+0q8zWtjgDkzujw1PiZ8lT3v16+aTJ2x62QpdiPBo+4RVdlwCMQaJcZPBMKldz3QEWBm985fIalSN13XUqkBrDHFSezuzpeQXBdGuy720xAASZZvYaIafvIh7s2dFOnBEyM1XL52XwkuZIXTtyaWumHBU9IxrxRqqOI2pr2Eg+iZPIOYV72nubMloVEtNIsdGifGfUjJkxuLHFntJGq6D7Mb9FKuaTnd2rEcA4aeeY8lzRrpTuw2ggggwQQQeBGillUz1OxyylQeyN8C1WanVykth4G5zcj+vipxQSKhIlQQCVIhAAhCVACISpEACEIQAIQhADe4R7hnQKRUds/+AzoPRSCeuBRktT1m1IQoASk1bitbVsKsiGYlM73tPZ0Xv4DLqniqvtDt3Z2V/Jp84gfOPND4BcnCb1tPaVnvJ+JxPzUbUr/ALfqs6qY1SkDrEq1S7oFK7PWLEZIUQwTA4q77G2UOaCl5nURunVz3LhclLC0ZKcY7JNLCxrRmU4fWbuKxJ0dB7m3tEjacpuagUJeu2NKhLRLnDcOPNXi7dFJbKyWt9gkaSqBtVs8TLmjMblJUdrbVXdk6nSbuxaqXp1Kj4FXA4O0czjzCdTjuhLakqZx1zC0rKi7OQrJtvdXZuFRoydkeqq7NVoi7VmOUel0dk9jlthtSkTke8ORGvyI8l1IlcH9l95hlpaxxgOkDk4wAu6UnSAoJNwSpAlQQCEIQAJUiEACEIQAIQhAAhCEANtnvwW9ApJR1wH3LegUiU5cCmKgICUKSDFZrFKVKAQlcw9sFuw0hTn4iJ6D/wCV08riftutAFei2dKbnEdXZehVZ8FocnOqrvvimTjmt+blpqshLLmDcjKmrmt5aXUzVLGEzI16JpQohzQea117N3g0fZUSVotBuLtEjarzMns61Vw4zw3p9cN4VC8EVnEjc6TksLuuh7mBjqYgEkEA4jOue8K03Vs8e6XCA0Q0ZTrKTKqNMFK7ZZLLQL6c8Quf3pYe+QBBc4jERMDeV1e4aMNLUwtFytc4gjefVJxqtx099jkrrjdiInEBIBEy7WCJGW5WvYu5LUwy/wCDmforpY7ipA/AJ55qZNBrW5Jzk2hUcaTOce0Kyj+HcY0I9VygarsntGysr/D1C40VbDwJ1CqQ8sFpNOo17Tm0g+S9G7LXy2vZ6b/zAdCYEwRz3LzSF0v2S30WVTZnk4agxN5OA3dQmMUjtQKylN7Hod8GAeMLeoAVCSUqAFQkSoAEIQgASISoARKkSoAa7O/gt6BST1GbOfgt6BSjgnLgU+QasliEoQQI4JSlSFSgEJXCPbMwm0Mqb3NP/qHQ0fJd0qHI9CuL+1+DVojhTnwJEfMFRPgtDk51YqeRlY16cnmnjoa3rH+VqDoz37v1S7GUI0YAGznv/RZUj7xp4ET45R81oJ++a209I5o7AuTrty2YFgI5KVcxrQq7s/eIFIDknNe3Yj95rFKR1FHuWO53b51Wd4PIJLRMSVXKF/BjyMJAA1IyWFe/KlVwFECIOIn5QFWL2orJb2TdC9GuC3G2qk1W1KR0MLfZ7zJyzU2xiqtjD2h1Zsr+UH5hcfBzXVNt6k2OoT/SPNwXLmsWnDwc/Uu5G0DkrNstbIt1neBDZZTgbhhwz55qtsYZiVP7MPayvTedMQPzTRCPRdmHdHRbVrpOkAjTctiqSCEIQAqEiEAKhIhACpUgQgAlCSUIAa7NH3DegUsoTZV3uG9AptOXAp8iJUiVSQCRyVJUMBSBhUGRXE/afWBtUHSlTDOpGf1XRdqNon0hgpUyXkZF0AADMuImQAOS4Zf1ue+q91V0uxGeE7/SPBLmxkF3I2tUk8J0HLitNoqcNFprVDMrNjMQj75KhaxWVNPNOrKZOW5MnsIy36LKnasDmjdv8UPgmPO5crvtDg3JTF1W2m3vVnw47j9Aoa5qokcCrEbI17Yc3osL5OmtzdaL0spEZuHIZfNarPtDSZlRoFx04nyatLKbKf8AtMfw7sHx4pzTtzzkyngG8tEHwVo9IzpjQtevaLT3TTFIb97o6bkCyhoA36KYsVAxJEJlebwwa5aqHuxNlO9oVtw0WURq92I9G5+sKn2ctI5rbf8AeP8AEVy+e6O6zoN/iVHtyWyCqJz8kuqQ/De7POfvzUrcYDzUZMTTc9p4upgvAHMwVDWZ866KUuswcjEBzp4AfsrFTt2wl7GrQDHHvMAGepGYHlBCtAXOdhWFrA7+ot6jIx5k+S6HSdIVSWbEJEqCAQkRKAFKRIlQAqQoQgDSWnihbkIAjtkT7kdFOyq9sa73IVhTlwKfIqEhRKkgVY1NEEpne1qFOk9x4RnlmcgOWqkDnu11vwsq1iRMmm3jDMiB1eTPRcbtBJMnUmVbdpr27UOM9xriG/8AUficXP6ZnzHhUA3E8gpLdsclSGtUrfY3Q6NxEFFps8SsrJTnPh9UED+tSDmzv3+ChbXTIdn4dFNNMEjdAP380wt2YI3tOXRBLN9x3gWGDp6LotzXi14Ga5XZNVYLDWc2C0rNmhvZr083VM6rQoNdmn1Kixu4KhWC/wB7RmE6dtG46ApKs0ui3W+2NY3ULme2d8l4LGmGnU8RwT602qpU+I+CrW0IhNgtxGV1HYgqbVutNGIPFacWaeU6stwnw+i1GEbUHQpCwVvjaMy8CmPFwJ+QUc4QU6sVoDKjKkThcCR0UMlHd9lrF2dGiw6wXO6uP+VaLLv6/RVe476p1qTH0jJjMD8xiB6K02NsCDrvUEscBCEIIBIUqEAIAlQShAAkSpCgBUIQgCG2RqtFPDOYVkBXOLPZ3NMseQVZ7qvg5Mq5HjuKamKZYVi50aoa8HMKq7f2ioymDSe1ry18OfGFuGCTnlizgdeSbjh1SUQRMVL8swJHbNJBgxLoO+YHJUzby++2aKFB2JrhJLcwQRMTwgSeQ5qmXPetazv7ScTamIYnEOc5xEkzrv8AmmlkvLC2sXZuc0hh4YnQ8+UK+pxRxvpTLQXchr8eC8tYZY0w3nnr4qLosznzUrfFFrGUQ0y8sL6nIuPdb4AeZTV7eCyNNF+TRXd+ib0HYXxxRa3rCkYIJ3IsgkajsoGp9OCY2v4zvEfSCnNodDcRyJyHRRr6k/fqglhZRmrFYmyoWxUpMqfu9m5JymjAiSs1JPadnCLPRyT+hQWRmxGoWUASq7tBYC5pjVXN9JNqlixTkmQdC5pNHKAzON4StOaud57LucSWgKti7DqHg+vktuNPI6jyYZxcdxg4YuvqnFns7pAcC3qOPJPql0YWteHB2LdvB4EeKkmXiyowsNIsc0FxjNpiBOfwnotWLB63TIo9lZuuG1VKBPZVIIwuJboM8tZB1zHCea61sXtWy2sgw2s342cR+dnFvouT3NYe1ZEAEuwtOKGt7riTUno0eKsdxXLVstWnVbWonC5rnRU0ZPf3flnzWyelxzh6uz7e3zFRlKzriVMrLe1CpAZWYSdBMHyKeLkyhKLqSoamnwKhAKRVJMkiRCAFQUiJQAISShAFTo2cxiCeNDXiD/hbrrzasq9ljNquIbMbJb30Thfm3cf1VK9pu0NO04KFAF3Zul1QfCS6BgHHdnyT/ay/RSZ2YBkxiMHCG8J4lUixWntH4gA1jc2gAAuz+M/0zMcYWjT5o48kbV39LdfaN2HROeNzbrml3e1/IZW84TgB+ANHiR+qZYyS0TkDHmnd5mXvjg30UfZ6RMcBmU3VOskjNG2kb7wGI9BmeKauqbvBba1WdD4/p+qZPeN331KxOXU7LdKjsjXWZP3p1RQpZyUrgTrkFhUtAaIGqCAtz8Rjgm1NkuARTfOp/wArMU3TI1GqgO5NWKzAblL2Ch3kz2cqCr3f5grhYLuzGSzT5N2NKrFs1myTyjRzT6jZYWdCl3uiVQyzQLPJThtmyTtrAFtVkirK7tFVFGg6dXd0ccxnHhKod1jvOJb8Mdc9ysm1N6NdWwhpPZmBn3Z1dlv3DzTGxVGPFR4AEnIj+V2cAg6jMBWk0kbtJinV/b2NFrsBdTfUpt7jA0nFkWuOURvk/XgoZ1vq0wS6kIfrIAnkpyxOLbPaaZdmRScN+barZ85TOpVptD6ddhIMBmstOcOEfea7MMkvQrIn6yVfHf8AdHHy4L1HQ9o+/sPbvtbq9ncAaLMMEAM7xwQcRmA4wYid6zoB+ZabO4O3VqYa6TniaWN04eqj7uc0NmmHkNmYpucIMTjgaZDPkl/08VO8yoZ394kHeOmUBO0cJ6iacm9uVx9S+shix4umk2+6d/Qn6VMiA9mGnEuNN5e2eMBuJvorrsTebn+7Li4FmNmJ2I4QQJBidSBBK5nZqdopHUngRmPMK13JfjqBD3UwThcDE6OIJ03ktC26rQdWN9Hx3/s5OD1J7d9jpyExui8212YgIO9vBPl5tNPg6OTHLHLpkqYIQkQUBEolIUACEiEAQl0O7qzvq8hZ6ReYnRo4n9FouY91c/8AaPfeNxZTf3Wgsy3knvEHwjwT4YpTjJrsimBReaKnxZXtpr9fbHloJDSR3Qci4wJA8PFWK+qlFlBjKFIsA+PE2HkhuFvhrlzVSuel7yWYXFoLmh8w6BJ03jM+Ck70NpaB2j6XfMBrM357ydwT/wANw4/zJPdPZbbnQ/ENW0/R1u18l7ERD3ue92ESYk8g0Zn5JpaLRDY3eqlLoqCnUqAx8LmSBAlpIOvPeoW2DPkCfkk53cur22YlsqMD3s3GBwCUV2jJoWgyQt7Ghgl2p0CSBhUJiT/lNXt3rZUJcZPgt9CAMx/hSQMg1PLE4gjKeXJZPoBpdw3c50Ti7mQ4EqGC5JK4aYZamFnwuH0XVLMyAueXFQJqirhhpMdJyB810eyNMZpMzXj4N3Zysm0oC3tYtgYl0NNTGLC31ezpufvAyned3zTxoVc2qvakz3RJxiHQIw6HJ3mrwxym6grZMXBSXpHS7lVuuxsd2xrVIiA12HFLnzOL9eabUqHZU30m1gQ445wkF0wMPI5Fba1cgEjORHVZ3dbnul5DZ+HNrSMI0kEQupi/B8z2kluvqacv4rgjThJ7OvL7940umzYqwpkgB7XgyYBww4gRvyUlbrRTdQbRLJc53ZGIaW55HGQYyAjL6ptUqBtanULG90PPdGGco3ZTmnlmsrHsdUxe7cZ70gBzMwTvG8ZcU/DongXTN72c7V6mGplcexqu+76VjtVG0MfUY0BzX43tkktcC0lsS3TONVqv21WNxdXou945wx0WS1ryRm8Fohpykjf1113lau3OOpBAyAAybnBy+pUXXslPGwU8ReXfCHQAADLoOQW9aWWOLlKXJhnkjk9RRNbb8Dsi3C3g0SPHeVJ2e308u+RvAIIC33fcFOrheazXEVQDpECDEjIzmJ5J3V2f7WkcIlwDiCOIEgdCiGdRVKnElaZw9zRI3ffEFrg4tIEEzr0/dX26b3bVABcMW6Dk79+S4hSpubSFQGHMqDxBB1B4EDzWVK83seX4nNcTiO7MmZhec1ccWPK/RRa9qvbyPQwjLVYV6dq62a58zv8AKJVY2L2pba2FjiBWYMx+Zv5h9VZlVOzjTg4ScWKkhCCgoKhJKEAVOz2nBQqOmIYY67vmuYW0do7C0TMq0f6h2rHMZnMCMhzGZ8FXrMwU65Dmw4gjgQRn6T5Bd7Qephb23+dGak8nSSmyVgbTrdqMIaKbiTUnCwkRJOmu7qq7ezKz3kjG9tMtkgaNLsi4DMTCc269XT2bRLcUhswCdcTuMJlUvx9KWUqTKZgtcaZd7wzJdzC42TO5Tbgqj2rud/JpoQgutpy73vXuQ1vJwDy5kw7SeLs3fOU1LMQPit9qtJdJdMmIyGWs6eC1WTQzvB9FEnZzJJJ7DKnlK1kScTtPXkE5YwAFx4kAcT+ibPdmXH75KqFg7jx3clm85Zc1i3PPyWWnXggB05kt5j6fZW2xsJcYEjUhaphoVl2TsEtLzvmPDRRJ0i8Y2yZudgNMiMy2Wnjl9FdbK3IHkqpY7E7sCG/Ex5LOYxGR0jEPFXKxAFoI3gHzSGaVsb2NWYC2NalDVBZMb2ioGNc92jQSfBc4qXg6rWLhGM5kAAnMDI8eC6Fe93vrUyxpgandijMNndnE9FR7hux1G2NZWYWvaQ4mZkPa+IO8SB5FdbQdGKPpJK72r9vqYNTGWWahFX9/wiItTiSThInUxkTxU7szs0+tSLw9oGIgCCT1VyqmmxgaGgDcBkOO5Nbku11Vz65aIBPZNdOGRMuc0Za5DoV2HqumNR2+ouOnqNsrN87NANdieRgGKZjfBMb93mqzWtVWlRNJr+4c8wDrqM9ys9/NrNfUbWyLnNc6BkYADYOpblpy4qCv67HCkx0TjzOWTRqCXbpyyTZqMcbyT3bFt2/VVUMKNZopCrmWmG1Y3HQPAHA5HkeSh7TWY10MMh2TnNnJmrsyrFYrG5lMhzSGVAWgb/h1jiYJjkoildb31OzGEB3dzHE8dyx6xznpbiu2/u9o3Rr/ADxvYt9CkyoDZ7O9naNpMe1uKA4gkhpHgBi1E8E3pXnbqbzT/hg18fmkZaeoVPNJ9C0d13fbDmkHWMiBGhEK/XNfotMF8CoAGk73ZESeenLJYtLD/Cmn2NuqyN6iXVsypf6vVFQsqsaCHQ6MhMycvFaappGpic+ZOhMRyUtfd01a9Su6k0ODHBgLdXZAnqRMFQt2WBuPMYSHOacY3gSQQdDGfgVm1OBzqpbfyV0+seG/Vt9iQuCpUbaG1rMDLDBgjDG+Twjcu62O0CoxrxvHWDvHmuK/wFLtIEPOQyG86NGea6zstQ7OgGT8JM7gCc4HJLlg9HAjNnlldyikS5MJCVrJK1Pq5wkihwlWAchAHC7i/BP/AHH0CyYZq05z7w16hCF6J/pF8P8AlmbF+eviix7UWSmyk8spsaYbm1oafMBc+ujOtnnBbHmEIWHTpdMP9v2R0dW31vy/k03i4y/M/E71RZfolQudLliXyNrVqOiaOQhQijNw08FjT1HihCsQbqu7or1sr+F0P0CEJOQ2YPBLyLdcOn/g356qYuf8Kl/bb/xCVCWSx+UhSoUEIyB7qrW1p90138we2DvGRORQhdWX6fyLaP8AUL4kVZ6riDLiYpOIkkwZ1CvdxD3FL+3T/wCISITn2+BXUeDzNN/0wWVJAPunHMTpoqzZD/8Anb/bPyfkhC3YfyvNGFeIh72aIo5f7rfVo9CfNRdvaO0cI/N6oQtWl5fw/sVn8RWLPnTLjmQKUE5kd+Nei20sqgjLvIQsWh8PyG6jxHQ9nQG2RmERk7TL+dyr+1Yh1UjIkMJjecLxJ55DyQhZZcvzJXhNewDQbQZAyYCOROp6rrVyfDU/uH/gxCFmy+AlD+pomJ1QhZCw5CEIUAf/2Q==',
                name: 'Katrina Kaif',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            }, {
                image: 'data:image/jpeg;base64,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',
                name: 'Salaman Khan',
                details: 'Sales dashboard have been created',
                time: '9.30 AM'
            }
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Small' },
            { value: 'pizza-1', viewValue: 'Medium' },
            { value: 'tacos-2', viewValue: 'Large' }
        ];
        this.simillarProducts = this.productService.getSimillarProducts();
        this.productService.getSingleProduct(Number(this.route.snapshot.params.id)).subscribe(res => {
            this.product = res;
        });
    }
    ngOnInit() {
    }
};
SingleProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-product',
        template: __webpack_require__(/*! raw-loader!./single-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html"),
        styles: [__webpack_require__(/*! ./single-product.component.scss */ "./src/app/single-product/single-product.component.scss")]
    })
], SingleProductComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TypeScriptNinja\eshopper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map