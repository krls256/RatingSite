/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/header */ "./resources/js/user/header/index.js");
/* harmony import */ var _user_stars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/stars */ "./resources/js/user/stars/index.js");
/* harmony import */ var _user_leave_review_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/leave-review/index */ "./resources/js/user/leave-review/index.js");



document.addEventListener('DOMContentLoaded', function () {
  Object(_user_header__WEBPACK_IMPORTED_MODULE_0__["toggleNav"])();
  Object(_user_stars__WEBPACK_IMPORTED_MODULE_1__["printStars"])();
  Object(_user_leave_review_index__WEBPACK_IMPORTED_MODULE_2__["toggleReviewForm"])();
});

/***/ }),

/***/ "./resources/js/user/header/index.js":
/*!*******************************************!*\
  !*** ./resources/js/user/header/index.js ***!
  \*******************************************/
/*! exports provided: toggleNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleNav */ "./resources/js/user/header/toggleNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleNav", function() { return _toggleNav__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/header/toggleNav.js":
/*!***********************************************!*\
  !*** ./resources/js/user/header/toggleNav.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleNav = function toggleNav() {
  var close = document.querySelector('.burger');
  var list = document.querySelector('.header__nav');
  var overlay = document.querySelector('.header__overlay');
  close.addEventListener('click', toggle(close, list, overlay));
  overlay.addEventListener('click', function () {
    if (!overlay.classList.contains('header__overlay--disable')) {
      toggle(close, list, overlay)();
    }
  });
};

var toggle = function toggle(close, list, overlay) {
  return function () {
    close.classList.toggle('burger--active');
    list.classList.toggle('header__nav--disabled');
    list.classList.toggle('header__nav--active');
    list.classList.remove('header__nav--initial');
    overlay.classList.toggle('header__overlay--disable');
  };
};

/* harmony default export */ __webpack_exports__["default"] = (toggleNav);

/***/ }),

/***/ "./resources/js/user/leave-review/index.js":
/*!*************************************************!*\
  !*** ./resources/js/user/leave-review/index.js ***!
  \*************************************************/
/*! exports provided: toggleReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_review_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-review-form */ "./resources/js/user/leave-review/toggle-review-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleReviewForm", function() { return _toggle_review_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/leave-review/toggle-review-form.js":
/*!**************************************************************!*\
  !*** ./resources/js/user/leave-review/toggle-review-form.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleReviewForm = function toggleReviewForm() {
  var button = document.querySelector('#leave-review');
  var block = document.querySelector('.leave-review');
  var close = document.querySelector('.leave-review__close');
  var body = document.querySelector('body');
  button.addEventListener('click', toggleForm(block, body));
  close.addEventListener('click', toggleForm(block, body));
};

var toggleForm = function toggleForm(block, body) {
  return function () {
    block.classList.toggle('leave-review--disable');

    if (body.style.overflow === 'hidden') {
      body.style.overflow = '';
    } else {
      body.style.overflow = 'hidden';
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (toggleReviewForm);

/***/ }),

/***/ "./resources/js/user/stars/index.js":
/*!******************************************!*\
  !*** ./resources/js/user/stars/index.js ***!
  \******************************************/
/*! exports provided: printStars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printStars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printStars */ "./resources/js/user/stars/printStars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printStars", function() { return _printStars__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/stars/printStars.js":
/*!***********************************************!*\
  !*** ./resources/js/user/stars/printStars.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var printStars = function printStars() {
  var stars = document.querySelectorAll('.stars');
  stars.forEach(function (star) {
    var width = star.dataset.rate * 20;
    var activeStars = star.querySelector('.stars__active');
    activeStars.style.width = "".concat(width, "%");
    console.log(activeStars, width, star);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (printStars);

/***/ }),

/***/ "./resources/sass/admin.scss":
/*!***********************************!*\
  !*** ./resources/sass/admin.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/style.scss":
/*!***********************************!*\
  !*** ./resources/sass/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi ./resources/js/script.js ./resources/sass/admin.scss ./resources/sass/style.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\laravel\ratingNo2\resources\js\script.js */"./resources/js/script.js");
__webpack_require__(/*! C:\xampp\htdocs\laravel\ratingNo2\resources\sass\admin.scss */"./resources/sass/admin.scss");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel\ratingNo2\resources\sass\style.scss */"./resources/sass/style.scss");


/***/ })

/******/ });