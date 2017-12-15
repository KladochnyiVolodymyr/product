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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction menuFunction() {\n  var menu = document.getElementById('menu');\n  var account = document.getElementById('account');\n\n  if (menu.className === 'header__nav' || account.className === 'header__account') {\n    menu.className += ' responsive';\n    account.className += ' responsive';\n  } else {\n    menu.className = 'header__nav';\n    account.className = 'header__account';\n  }\n  var btn = document.getElementById('btn');\n  btn.classList.toggle('open');\n}\nmodule.exports = menuFunction;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbGliL3Jlc3BvbnNpdmVfbWVudS5qcz9hYzBjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1lbnVGdW5jdGlvbigpIHtcbiAgdmFyIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuICB2YXIgYWNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50Jyk7XG5cbiAgaWYgKG1lbnUuY2xhc3NOYW1lID09PSAnaGVhZGVyX19uYXYnIHx8IGFjY291bnQuY2xhc3NOYW1lID09PSAnaGVhZGVyX19hY2NvdW50Jykge1xuICAgIG1lbnUuY2xhc3NOYW1lICs9ICcgcmVzcG9uc2l2ZSc7XG4gICAgYWNjb3VudC5jbGFzc05hbWUgKz0gJyByZXNwb25zaXZlJztcbiAgfSBlbHNlIHtcbiAgICBtZW51LmNsYXNzTmFtZSA9ICdoZWFkZXJfX25hdic7XG4gICAgYWNjb3VudC5jbGFzc05hbWUgPSAnaGVhZGVyX19hY2NvdW50JztcbiAgfVxuICB2YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bicpO1xuICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBtZW51RnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2xpYi9yZXNwb25zaXZlX21lbnUuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _responsive_menu = __webpack_require__(0);\n\nvar _responsive_menu2 = _interopRequireDefault(_responsive_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _responsive_menu2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lbnVGdW5jdGlvbiBmcm9tICcuL2xpYi9yZXNwb25zaXZlX21lbnUuanMnO1xuXG5tZW51RnVuY3Rpb24oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);