module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/save.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__["GoogleSpreadsheet"](process.env.SHEET_DOC_ID);

const genCoupon = () => {
  const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase();
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    });
    '';
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);
    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');
    const promotionCell = sheetConfig.getCell(2, 0);
    const textCell = sheetConfig.getCell(2, 1);
    let coupon = '';
    let promo = '';

    if (promotionCell.value === "VERDADEIRO") {
      // Gerar cupom
      coupon = genCoupon();
      promo = textCell.value;
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      'Data Preencimento': moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY HH:mm:ss'),
      Cupom: coupon,
      Promo: promo
    });
    res.end(JSON.stringify({
      showCoupon: coupon !== "",
      coupon,
      promo
    }));
  } catch (err) {
    console.log(err);
    res.end('error');
  }
});

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NhdmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJwcm9jZXNzIiwiZW52IiwiU0hFRVRfRE9DX0lEIiwiZ2VuQ291cG9uIiwiY29kZSIsInBhcnNlSW50IiwibW9tZW50IiwiZm9ybWF0IiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNsaWVudF9lbWFpbCIsIlNIRUVUX0NMSUVOVF9FTUFJTCIsInByaXZhdGVfa2V5IiwiU0hFRVRfUFJJVkFURV9LRVkiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic2hlZXRDb25maWciLCJsb2FkQ2VsbHMiLCJwcm9tb3Rpb25DZWxsIiwiZ2V0Q2VsbCIsInRleHRDZWxsIiwiY291cG9uIiwicHJvbW8iLCJ2YWx1ZSIsImFkZFJvdyIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiTm90YSIsIkN1cG9tIiwiUHJvbW8iLCJlbmQiLCJzdHJpbmdpZnkiLCJzaG93Q291cG9uIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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O0FBVUFuQixPQUFHLENBQUM0QixHQUFKLENBQVFsQixJQUFJLENBQUNtQixTQUFMLENBQWU7QUFDbkJDLGdCQUFVLEVBQUVaLE1BQU0sS0FBSyxFQURKO0FBRW5CQSxZQUZtQjtBQUduQkM7QUFIbUIsS0FBZixDQUFSO0FBTUgsR0F6Q0QsQ0F5Q0UsT0FBT1ksR0FBUCxFQUFZO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EvQixPQUFHLENBQUM0QixHQUFKLENBQVEsT0FBUjtBQUNIO0FBR0osQ0FoREQsRTs7Ozs7Ozs7Ozs7QUNWQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9hcGkvc2F2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3NhdmUuanNcIik7XG4iLCJpbXBvcnQgeyBHb29nbGVTcHJlYWRzaGVldCB9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuU0hFRVRfRE9DX0lEKVxyXG5cclxuY29uc3QgZ2VuQ291cG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29kZSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnWVlNTURESEhtbXNzU1NTJykpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICByZXR1cm4gY29kZS5zdWJzdHIoMCwgNCkgKyAnLScgKyBjb2RlLnN1YnN0cig0LCA0KSArICctJyArIGNvZGUuc3Vic3RyKDgsIDQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcclxuICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXHJcbiAgICAgICAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJydcclxuICAgICAgICBhd2FpdCBkb2MubG9hZEluZm8oKVxyXG4gICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMV1cclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICAgICAgY29uc3Qgc2hlZXRDb25maWcgPSBkb2Muc2hlZXRzQnlJbmRleFsyXVxyXG4gICAgICAgIGF3YWl0IHNoZWV0Q29uZmlnLmxvYWRDZWxscygnQTM6QjMnKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9tb3Rpb25DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAwKVxyXG4gICAgICAgIGNvbnN0IHRleHRDZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAxKVxyXG5cclxuICAgICAgICBsZXQgY291cG9uID0gJydcclxuICAgICAgICBsZXQgcHJvbW8gPSAnJ1xyXG5cclxuICAgICAgICBpZiAocHJvbW90aW9uQ2VsbC52YWx1ZSA9PT0gXCJWRVJEQURFSVJPXCIpIHtcclxuICAgICAgICAgICAgLy8gR2VyYXIgY3Vwb21cclxuICAgICAgICAgICAgY291cG9uID0gZ2VuQ291cG9uKClcclxuICAgICAgICAgICAgcHJvbW8gPSB0ZXh0Q2VsbC52YWx1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgc2hlZXQuYWRkUm93KHtcclxuICAgICAgICAgICAgTm9tZTogZGF0YS5Ob21lLFxyXG4gICAgICAgICAgICBFbWFpbDogZGF0YS5FbWFpbCxcclxuICAgICAgICAgICAgV2hhdHNhcHA6IGRhdGEuV2hhdHNhcHAsXHJcbiAgICAgICAgICAgIE5vdGE6IHBhcnNlSW50KGRhdGEuTm90YSksXHJcbiAgICAgICAgICAgICdEYXRhIFByZWVuY2ltZW50byc6IG1vbWVudCgpLmZvcm1hdCgnREQvTU0vWVlZWSBISDptbTpzcycpLFxyXG4gICAgICAgICAgICBDdXBvbTogY291cG9uLFxyXG4gICAgICAgICAgICBQcm9tbzogcHJvbW8sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDb3Vwb246IGNvdXBvbiAhPT0gXCJcIixcclxuICAgICAgICAgICAgY291cG9uLFxyXG4gICAgICAgICAgICBwcm9tb1xyXG4gICAgICAgIH0pKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICByZXMuZW5kKCdlcnJvcicpXHJcbiAgICB9XHJcblxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==