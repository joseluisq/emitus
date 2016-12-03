(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Emitus"] = factory();
	else
		root["Emitus"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	/* global module */

	module.exports = function () {
	  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var list = [];
	  var api = _extends({ on: on, off: off, emit: emit }, obj);

	  function on(name, fn) {
	    list.push({ name: name, fn: fn });
	  }

	  function off(name) {
	    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    list.forEach(function (e, i) {
	      if (e.name === name && e.fn === fn) {
	        list.splice(i, 1);
	      }

	      if (e.name === name && !fn) {
	        list.splice(i, 1);
	      }
	    });
	  }

	  function emit(name) {
	    var _this = this;

	    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    list.forEach(function (e) {
	      if (e.name === name) {
	        e.fn.apply(_this, args);
	      }
	    });
	  }

	  return api;
	};

/***/ }
/******/ ])
});
;