webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common/js/timeFilter.js":
/*!*********************************!*\
  !*** ./common/js/timeFilter.js ***!
  \*********************************/
/*! exports provided: normalizationTime, getNowDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizationTime", function() { return normalizationTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNowDate", function() { return getNowDate; });
function normalizationTime(time) {
  var newTime = "".concat(time.slice(0, 10), " ").concat(time.slice(11, 19));
  return newTime;
}
function getNowDate() {
  var Date = Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var day = nowDate.getDate();
  var hours = nowDate.getHours();
  var minutes = nowDate.getMinutes();
  var seconds = nowDate.getSeconds();
  var nowDate = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
  return nowDate;
}

/***/ })

})
//# sourceMappingURL=index.js.b850cb09dd90dce4d238.hot-update.js.map