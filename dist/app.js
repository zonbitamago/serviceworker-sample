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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nimportScripts(\"https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js\");\n\nif (workbox) {\n  console.log(\"Yay! Workbox is loaded \\uD83C\\uDF89\");\n  workbox.routing.registerRoute(new RegExp(\".*.js\"), workbox.strategies.networkFirst());\n\n  workbox.routing.registerRoute(\n  // Cache CSS files\n  /.*\\.css/,\n  // Use cache but update in the background ASAP\n  workbox.strategies.staleWhileRevalidate({\n    // Use a custom cache name\n    cacheName: \"css-cache\"\n  }));\n\n  workbox.routing.registerRoute(\n  // Cache image files\n  /.*\\.(?:png|jpg|jpeg|svg|gif)/,\n  // Use the cache if it's available\n  workbox.strategies.cacheFirst({\n    // Use a custom cache name\n    cacheName: \"image-cache\",\n    plugins: [new workbox.expiration.Plugin({\n      // Cache only 20 images\n      maxEntries: 20,\n      // Cache for a maximum of a week\n      maxAgeSeconds: 7 * 24 * 60 * 60\n    })]\n  }));\n} else {\n  console.log(\"Boo! Workbox didn't load \\uD83D\\uDE2C\");\n}\n\n//# sourceURL=webpack:///./src/sw.js?");

/***/ })

/******/ });