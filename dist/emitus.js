/*! emitus v1.0.2 | MIT (c) 2016 José Luis Quintana */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  var Emitus = function Emitus() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var list = [];
    var api = _extends({ on: on, off: off, emit: emit }, obj);

    function on(name, callback) {
      list.push({ name: name, callback: callback });
    }

    function off(name) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      list.forEach(function (evnt, i) {
        if (evnt.name === name && evnt.callback === callback) {
          list.splice(i, 1);
        }

        if (evnt.name === name && !callback) {
          list.splice(i, 1);
        }
      });
    }

    function emit(name) {
      var _this = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      list.forEach(function (evnt) {
        if (evnt.name === name) {
          evnt.callback.apply(_this, args);
        }
      });
    }

    return api;
  };

  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = Emitus;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return Emitus;
    });
  } else {
    window.Emitus = Emitus;
  }
})();

