module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = "/Users/j/williams/components/Footer.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Message"], {
    style: {
      marginTop: '70px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Message"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h4",
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Contact")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
    name: "map pin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), " 1477 Tillioe Lewis Dr. Stockton CA 95206 ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
    name: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), " (209) 944-5613"));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = "/Users/j/williams/components/Header.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
    pointing: true,
    secondary: true,
    style: {
      marginTop: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/logo.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "EST. 1976")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h4",
    color: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "About"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/employees",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h4",
    color: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Employee Links"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/terminals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h4",
    color: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, "Terminals"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
    route: "/careers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], {
    as: "h4",
    color: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "Careers")))));
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
var _jsxFileName = "/Users/j/williams/components/Layout.js";





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      'textAlign': 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});

/***/ }),

/***/ "./pages/terminals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "/Users/j/williams/pages/terminals.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var description = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
  as: "h1",
  inverted: true,
  color: "grey",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  }
}, "Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "tasks",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}), "  Inventory Management - Inventories are managed and orders are generated automatically based on daily or weekly usage. Product levels can be received electronically with little or no effort on your part."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "rss",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
}), "  Trucking Communication - All company owned vehicles are equipped with GPS units. These units are integrated into our dispatch software provided up to date information between the driver and dispatch. The system is updated at every stage of delivery."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "calendar check",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  }
}), "   Delivery Scheduling - Orders can be placed on a planning board until the best option is made available. This ensures optimal utilization of company resources and customer expectations."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "computer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  }
}), "  Onboard Computers - The onboard computers also track driver logs, GPS tracking, productivity management, safety, & security tools."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "file",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  }
}), "  Electronic Filing - All paperwork relating to an order is stored electronically. These files can be sent automatically or at the request of our customers with a few simple clicks."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  }
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
  name: "lightbulb",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
}), "  Four dispatch locations - two 24/7/365 and two others open during normal business hours.")];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref;

  var items = [{
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/stocktonImg.png',
    header: 'Stockton, California',
    description: 'Phone: 209-944-5613',
    extra: '1477 Tillie Lewis Dr. Stockton, CA 95206',
    meta: 'Manager: Mark Sperling'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/martinezImg.png',
    header: 'San Jose, California',
    description: 'Phone: 408-433-0214',
    extra: '2050 Oakland Rd. San Jose, CA 95131',
    meta: 'Manager: Jeffrey Williams'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/martinezImg.png',
    header: 'Martinez, California',
    description: 'Phone: 409-433-0014',
    extra: '5050 Imhoff Dr. Martinez, CA 94553',
    meta: 'Manager: Jeffrey Williams'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/sacramentoImg.png',
    header: 'Sacramento, California',
    description: 'Phone: 916-361-7655',
    extra: '1700 S. River Rd. West Sacramento, CA 95691',
    meta: 'Manager: Rod Hindman'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/chicoImg.png',
    header: 'Chico, California',
    description: 'Phone: 530-894-8581',
    extra: '2266 Park Ave. Chico, CA 95928',
    meta: 'Manager: Debbie Holmby'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/lasvegasImg.png',
    header: 'Las Vegas, Nevada',
    description: 'Phone: 702-399-2800',
    extra: '5530 N. Sloan Ave. Las Vegas, NV 89115',
    meta: 'Manager: Charlotte Slagle'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/sparksImg.png',
    header: 'Sparks, Nevada',
    description: 'Phone: 775-356-1175',
    extra: '950 E. Greg St. Sparks, NV 89431',
    meta: 'Manager: Lee Sizemore'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/bakersfieldImg.png',
    header: 'Bakersfield, California',
    description: 'Phone: 661-634-9755',
    extra: '2148 Bricyn Ln. Bakersfield, CA 93308',
    meta: 'Manager: Steve Bailey'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/fresnoImg.png',
    header: 'Fresno, California',
    description: 'Phone: 559-264-1709',
    extra: '4260 S. Orange Ave. Fresno, CA 93725',
    meta: 'Manager: Larry Ames'
  }, {
    'image': 'https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminals/longbeachImg.png',
    header: 'Long Beach, California',
    description: 'Phone: 310-513-2446',
    extra: '710 E. D St. Wilmington, CA 90744',
    meta: 'Manager: Adriana Ramirez'
  }];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
    src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/terminalsImg.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
    style: {
      'marginTop': '40px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
    centered: true,
    items: items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: (_ref = {
      'margin': 'auto',
      'width': '100%',
      'height': '600px',
      'position': 'relative',
      'marginTop': '50px',
      'background': '#373b44'
    }, _defineProperty(_ref, "background", '-webkit-linear-gradient(to right, #373b44, #4286f4)'), _defineProperty(_ref, "background", 'linear-gradient(to right, #373b44, #4286f4)'), _ref),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: {
      'position': 'relative',
      'float': 'left',
      'top': '50%',
      'margin-left': '50%',
      'transform': 'translate(-50%, -50%)',
      'color': 'white',
      'line-height': '5px',
      'font-size': '16px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    }
  }, description)));
});

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

module.exports = routes;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/terminals.js");


/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=terminals.js.map