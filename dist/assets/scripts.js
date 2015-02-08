"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Sample = (function () {
  function Sample() {
    _classCallCheck(this, Sample);
  }

  _prototypeProperties(Sample, null, {
    foo: {
      value: function foo() {
        return "bar " + new Date();
      },
      writable: true,
      configurable: true
    }
  });

  return Sample;
})();