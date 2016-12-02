/*! emitus v1.0.5 | MIT (c) 2016 José Luis Quintana */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("Emitus", ["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Emitus = mod.exports;
  }
})(this, function (module) {
  "use strict";

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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
});

