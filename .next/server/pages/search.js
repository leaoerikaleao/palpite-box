module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Erika\\Desktop\\devPleno\\palpite-box\\components\\PageTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PageTitle = ({
  title
}) => {
  return __jsx("head", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, title, " | PalpiteBox"));
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
var _jsxFileName = "C:\\Users\\Erika\\Desktop\\devPleno\\palpite-box\\pages\\search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Search = () => {
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  });
  const grades = [0, 1, 2, 3, 4, 5];
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: retn,
    1: setRetn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const save = async () => {
    try {
      const validate = JSON.stringify(form); //console.log(validate)
      // Acessa a API para enviar os dados

      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSuccess(true);
      setRetn(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = e => {
    const value = e.target.value;
    const key = e.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: value
    }));
  };

  return __jsx("div", {
    className: "pt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Pesquisa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-center font-bold my-4 text-4x1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Cr\xEDticas e sugest\xF5es"), __jsx("p", {
    className: "text-center mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "O restaurante X sempre busca por atender melhor seus clientes. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 80
    }
  }), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."), !success && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, "Seu nome:"), __jsx("input", {
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    type: "text",
    placeholder: "Nome",
    name: "Nome",
    onChange: onChange,
    value: form.Nome,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Email:"), __jsx("input", {
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    type: "text",
    placeholder: "Email",
    name: "Email",
    onChange: onChange,
    value: form.Email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "WhatsApp:"), __jsx("input", {
    className: "p-4 block shadow bg-blue-100 my-2 rounded",
    type: "text",
    placeholder: "WhatsApp",
    name: "Whatsapp",
    onChange: onChange,
    value: form.Whatsapp,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx("label", {
    className: "font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "Nota:"), __jsx("div", {
    className: "flex py-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, grades.map(grade => {
    return __jsx("label", {
      className: "block w-1/6 text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 40
      }
    }, grade, " ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 45
      }
    }), __jsx("input", {
      type: "radio",
      name: "Nota",
      value: grade,
      onChange: onChange,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 37
      }
    }));
  })), __jsx("button", {
    onClick: save,
    className: "bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "Salvar")), success && __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Obrigado por contribuir com sua sugest\xE3o ou cr\xEDtica!"), retn.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "Seu Cupom \xE9: ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 42
    }
  }), __jsx("span", {
    className: "font-bold text-2xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, retn.coupon)), retn.showCoupon && __jsx("div", {
    className: "text-center border p-4 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "font-bold block mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, retn.promo), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }), __jsx("span", {
    className: "italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, "Tire um print ou foto desta tela e apresente ao gar\xE7om."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUGFnZVRpdGxlIiwidGl0bGUiLCJTZWFyY2giLCJmb3JtIiwic2V0Rm9ybSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJOb3RhIiwiZ3JhZGVzIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJyZXRuIiwic2V0UmV0biIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInNhdmUiLCJ2YWxpZGF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwia2V5IiwibmFtZSIsIm9sZCIsIm1hcCIsImdyYWRlIiwic2hvd0NvdXBvbiIsImNvdXBvbiIsInByb21vIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDMUIsSUFBSSxDQUFDMkIsTUFBM0MsQ0FGSixDQVBSLEVBYVEzQixJQUFJLENBQUMwQixVQUFMLElBQ0E7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDMUIsSUFBSSxDQUFDNEIsS0FBN0MsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBSEosQ0FkUixDQTFDUixDQURKO0FBb0VILENBbEhEOztBQW9IZXZDLHFFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkhBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2VhcmNoLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQYWdlVGl0bGUgPSAoeyB0aXRsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSB8IFBhbHBpdGVCb3g8L3RpdGxlPlxyXG4gICAgICAgIDwvaGVhZD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpdGxlIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlVGl0bGUnXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgTm9tZTogJycsXHJcbiAgICAgICAgRW1haWw6ICcnLFxyXG4gICAgICAgIFdoYXRzYXBwOiAnJyxcclxuICAgICAgICBOb3RhOiAwXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBncmFkZXMgPSBbMCwgMSwgMiwgMywgNCwgNV1cclxuXHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtyZXRuLCBzZXRSZXRuXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlID0gSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWxpZGF0ZSlcclxuXHJcbiAgICAgICAgICAgIC8vIEFjZXNzYSBhIEFQSSBwYXJhIGVudmlhciBvcyBkYWRvc1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSlcclxuICAgICAgICAgICAgc2V0UmV0bihkYXRhKVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBrZXkgPSBlLnRhcmdldC5uYW1lXHJcblxyXG4gICAgICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT1cIlBlc3F1aXNhXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCBteS00IHRleHQtNHgxXCI+Q3LDrXRpY2FzIGUgc3VnZXN0w7VlczwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgIE8gcmVzdGF1cmFudGUgWCBzZW1wcmUgYnVzY2EgcG9yIGF0ZW5kZXIgbWVsaG9yIHNldXMgY2xpZW50ZXMuIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgUG9yIGlzc28sIGVzdGFtb3Mgc2VtcHJlIGFiZXJ0b3MgYSBvdXZpciBhIHN1YSBvcGluacOjby5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc3VjY2VzcyAmJlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5TZXUgbm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21lXCIgbmFtZT1cIk5vbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLk5vbWV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG5hbWU9XCJFbWFpbFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uRW1haWx9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5XaGF0c0FwcDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG15LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJXaGF0c0FwcFwiIG5hbWU9XCJXaGF0c2FwcFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uV2hhdHNhcHB9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5Ob3RhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGVzLm1hcChncmFkZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JhZGV9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJOb3RhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtncmFkZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmV9IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHB4LTEyIHB5LTQgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOnNoYWRvd1wiPlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeyBzdWNjZXNzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IHRleHQtY2VudGVyIGJnLWJsdWUtMTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIHB4LTQgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYnJpZ2FkbyBwb3IgY29udHJpYnVpciBjb20gc3VhIHN1Z2VzdMOjbyBvdSBjcsOtdGljYSFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0bi5zaG93Q291cG9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyIHAtNCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXUgQ3Vwb20gw6k6IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e3JldG4uY291cG9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0bi5zaG93Q291cG9uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyIHAtNCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgYmxvY2sgbWItMlwiPntyZXRuLnByb21vfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaXRhbGljXCI+VGlyZSB1bSBwcmludCBvdSBmb3RvIGRlc3RhIHRlbGEgZSBhcHJlc2VudGUgYW8gZ2Fyw6dvbS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==