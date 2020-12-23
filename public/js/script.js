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
/* harmony import */ var _user_forms_leave_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/forms/leave-review */ "./resources/js/user/forms/leave-review/index.js");
/* harmony import */ var _user_forms_writeUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/forms/writeUs */ "./resources/js/user/forms/writeUs/index.js");
/* harmony import */ var _user_watchVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/watchVideo */ "./resources/js/user/watchVideo/index.js");
/* harmony import */ var _user_forms_addReviewAnswer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/forms/addReviewAnswer */ "./resources/js/user/forms/addReviewAnswer/index.js");
/* harmony import */ var _user_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/footer */ "./resources/js/user/footer/index.js");







document.addEventListener('DOMContentLoaded', function () {
  Object(_user_header__WEBPACK_IMPORTED_MODULE_0__["toggleNav"])();
  Object(_user_stars__WEBPACK_IMPORTED_MODULE_1__["printStars"])();
  Object(_user_forms_leave_review__WEBPACK_IMPORTED_MODULE_2__["toggleReviewForm"])();
  Object(_user_stars__WEBPACK_IMPORTED_MODULE_1__["formStars"])();
  Object(_user_forms_writeUs__WEBPACK_IMPORTED_MODULE_3__["writeUsToggle"])();
  Object(_user_watchVideo__WEBPACK_IMPORTED_MODULE_4__["watchVideo"])();
  Object(_user_forms_addReviewAnswer__WEBPACK_IMPORTED_MODULE_5__["addReviewAnswerToggle"])();
  Object(_user_footer__WEBPACK_IMPORTED_MODULE_6__["footerToBottom"])();
});

/***/ }),

/***/ "./resources/js/user/footer/footerToBottom.js":
/*!****************************************************!*\
  !*** ./resources/js/user/footer/footerToBottom.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var footerToBottomCore = function footerToBottomCore() {
  var footer = document.querySelector('.footer');
  var body = document.querySelector('body');

  var _footer$getBoundingCl = footer.getBoundingClientRect(),
      footerBottom = _footer$getBoundingCl.bottom;

  var _body$getBoundingClie = body.getBoundingClientRect(),
      bodyBottom = _body$getBoundingClie.bottom;

  if (bodyBottom > footerBottom) {
    footer.style.position = 'absolute';
    footer.style.bottom = 0;
    footer.style.left = 0;
  }
};

var footerToBottom = function footerToBottom() {
  return window.onload = footerToBottomCore;
};

/* harmony default export */ __webpack_exports__["default"] = (footerToBottom);

/***/ }),

/***/ "./resources/js/user/footer/index.js":
/*!*******************************************!*\
  !*** ./resources/js/user/footer/index.js ***!
  \*******************************************/
/*! exports provided: footerToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footerToBottom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footerToBottom */ "./resources/js/user/footer/footerToBottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "footerToBottom", function() { return _footerToBottom__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/forms/addReviewAnswer/addReviewAnswerToggle.js":
/*!**************************************************************************!*\
  !*** ./resources/js/user/forms/addReviewAnswer/addReviewAnswerToggle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toggleForm */ "./resources/js/user/forms/helpers/toggleForm.js");
/* harmony import */ var _helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/setInitialBodyOverflow */ "./resources/js/user/forms/helpers/setInitialBodyOverflow.js");



var addReviewAnswerToggle = function addReviewAnswerToggle() {
  var answerArr = document.querySelectorAll('.reviews__item');
  var form = document.querySelector('#addReviewAnswer');
  var close = document.querySelector('#commentClose');
  var body = document.querySelector('body');

  if (answerArr && form && close && body) {
    Object(_helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__["default"])(form, body);
    answerArr.forEach(function (item) {
      var id = item.dataset.identifier;
      var link = item.querySelector('[data-toggle="addReviewAnswer"]');
      link.addEventListener('click', onClick(form, id, body));
    });
    close.addEventListener('click', Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body));
  }
};

var onClick = function onClick(form, id, body) {
  return function (e) {
    e.preventDefault();
    Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body)();
    var idInput = form.querySelector('[name=review_id]');
    var nameInput = form.querySelector('[name=reviewer_answer_name]');
    var textInput = form.querySelector('[name=review_answer_text]');
    idInput.value = id;
    nameInput.value = '';
    textInput.value = '';
  };
};

/* harmony default export */ __webpack_exports__["default"] = (addReviewAnswerToggle);

/***/ }),

/***/ "./resources/js/user/forms/addReviewAnswer/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/user/forms/addReviewAnswer/index.js ***!
  \**********************************************************/
/*! exports provided: addReviewAnswerToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addReviewAnswerToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addReviewAnswerToggle */ "./resources/js/user/forms/addReviewAnswer/addReviewAnswerToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addReviewAnswerToggle", function() { return _addReviewAnswerToggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/forms/helpers/setInitialBodyOverflow.js":
/*!*******************************************************************!*\
  !*** ./resources/js/user/forms/helpers/setInitialBodyOverflow.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setInitialBodyOverflow = function setInitialBodyOverflow(form, body) {
  if (!form.classList.contains('form--disable')) {
    body.style.overflow = 'hidden';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setInitialBodyOverflow);

/***/ }),

/***/ "./resources/js/user/forms/helpers/toggleForm.js":
/*!*******************************************************!*\
  !*** ./resources/js/user/forms/helpers/toggleForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var toggleForm = function toggleForm(block, body) {
  return function () {
    block.classList.toggle('form--disable');

    if (body.style.overflow === 'hidden') {
      body.style.overflow = '';
    } else {
      body.style.overflow = 'hidden';
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (toggleForm);

/***/ }),

/***/ "./resources/js/user/forms/leave-review/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/user/forms/leave-review/index.js ***!
  \*******************************************************/
/*! exports provided: toggleReviewForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_review_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-review-form */ "./resources/js/user/forms/leave-review/toggle-review-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleReviewForm", function() { return _toggle_review_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/forms/leave-review/toggle-review-form.js":
/*!********************************************************************!*\
  !*** ./resources/js/user/forms/leave-review/toggle-review-form.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toggleForm */ "./resources/js/user/forms/helpers/toggleForm.js");
/* harmony import */ var _helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/setInitialBodyOverflow */ "./resources/js/user/forms/helpers/setInitialBodyOverflow.js");



var toggleReviewForm = function toggleReviewForm() {
  var button = document.querySelector('#leave-review');
  var form = document.querySelector('#leaveReviewForm');
  var close = document.querySelector('#leaveClose');
  var body = document.querySelector('body');

  if (button && form && close && body) {
    Object(_helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__["default"])(form, body);
    button.addEventListener('click', Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body));
    close.addEventListener('click', Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toggleReviewForm);

/***/ }),

/***/ "./resources/js/user/forms/writeUs/index.js":
/*!**************************************************!*\
  !*** ./resources/js/user/forms/writeUs/index.js ***!
  \**************************************************/
/*! exports provided: writeUsToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writeUsToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeUsToggle */ "./resources/js/user/forms/writeUs/writeUsToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeUsToggle", function() { return _writeUsToggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/forms/writeUs/writeUsToggle.js":
/*!**********************************************************!*\
  !*** ./resources/js/user/forms/writeUs/writeUsToggle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/toggleForm */ "./resources/js/user/forms/helpers/toggleForm.js");
/* harmony import */ var _helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/setInitialBodyOverflow */ "./resources/js/user/forms/helpers/setInitialBodyOverflow.js");



var writeUsToggle = function writeUsToggle() {
  var button = document.querySelector('#write');
  var form = document.querySelector('#writeUsForm');
  var close = document.querySelector('#writeClose');
  var body = document.querySelector('body');

  if (button && form && close && body) {
    Object(_helpers_setInitialBodyOverflow__WEBPACK_IMPORTED_MODULE_1__["default"])(form, body);

    if (button && close) {
      button.addEventListener('click', Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body));
      close.addEventListener('click', Object(_helpers_toggleForm__WEBPACK_IMPORTED_MODULE_0__["default"])(form, body));
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (writeUsToggle);

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

/***/ "./resources/js/user/stars/formStars.js":
/*!**********************************************!*\
  !*** ./resources/js/user/stars/formStars.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  current: 0
};

var formStars = function formStars() {
  var wrapper = document.querySelector('#formStars');

  if (wrapper) {
    funcLogic(wrapper);
  }
};

var funcLogic = function funcLogic(wrapper) {
  var passive = wrapper.querySelector('.stars__passive');
  var passiveStars = wrapper.querySelectorAll('.stars__item--passive');
  var active = wrapper.querySelector('.stars__active');
  var activeStars = wrapper.querySelectorAll('.stars__item--active');
  var input = wrapper.querySelector('input');
  var mark = wrapper.querySelector('.stars__mark');
  makeHover(passiveStars, active);
  makeHover(activeStars, active);
  makeClick(activeStars, mark, input);
};

var makeClick = function makeClick(array, mark, input) {
  array.forEach(function (item, index) {
    item.addEventListener('click', function () {
      mark.textContent = index + 1;
      input.value = index + 1;
      data.current = index + 1;
    });
  });
};

var makeHover = function makeHover(array, activeWrapper) {
  array.forEach(function (item, index) {
    item.addEventListener('mouseover', printTillIndex(index + 1, activeWrapper));
    item.addEventListener('mouseout', disPrint(activeWrapper));
  });
};

var printTillIndex = function printTillIndex(index, activeWrapper) {
  return function () {
    activeWrapper.style.width = "".concat(index * 20, "%");
  };
};

var disPrint = function disPrint(activeWrapper) {
  return function () {
    activeWrapper.style.width = "".concat(data.current * 20, "%");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formStars);

/***/ }),

/***/ "./resources/js/user/stars/index.js":
/*!******************************************!*\
  !*** ./resources/js/user/stars/index.js ***!
  \******************************************/
/*! exports provided: printStars, formStars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _printStars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printStars */ "./resources/js/user/stars/printStars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printStars", function() { return _printStars__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _formStars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formStars */ "./resources/js/user/stars/formStars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formStars", function() { return _formStars__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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
  });
};

/* harmony default export */ __webpack_exports__["default"] = (printStars);

/***/ }),

/***/ "./resources/js/user/watchVideo/index.js":
/*!***********************************************!*\
  !*** ./resources/js/user/watchVideo/index.js ***!
  \***********************************************/
/*! exports provided: watchVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watchVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watchVideo */ "./resources/js/user/watchVideo/watchVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchVideo", function() { return _watchVideo__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./resources/js/user/watchVideo/watchVideo.js":
/*!****************************************************!*\
  !*** ./resources/js/user/watchVideo/watchVideo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var watchVideo = function watchVideo() {
  var wrappers = document.querySelectorAll('.videos__iframe-wrapper');
  var mainIframe = document.querySelector('#mainIframe');
  var close = document.querySelector('#videoClose');
  var player = document.querySelector('.videos__player');
  var body = document.querySelector('body');

  if (wrappers && mainIframe && close && player && body) {
    wrappers.forEach(function (video) {
      video.addEventListener('click', openFunc(player, mainIframe, body, video));
    });
    close.addEventListener('click', closeFunc(player, mainIframe, body));
    player.addEventListener('click', closeFunc(player, mainIframe, body));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (watchVideo);

var closeFunc = function closeFunc(player, mainIframe, body) {
  return function () {
    player.classList.add('videos__player--disable');
    mainIframe.src = '';
    body.style.overflow = '';
  };
};

var openFunc = function openFunc(player, mainIframe, body, video) {
  return function () {
    player.classList.toggle('videos__player--disable');
    mainIframe.src = "https://www.youtube.com/embed/".concat(video.dataset.ytid, "?rel=0&showinfo=0&autoplay=1");
    body.style.overflow = 'hidden';
  };
};

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