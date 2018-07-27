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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/careers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "/Users/j/williams/pages/careers.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var CareersComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CareersComponent, _React$Component);

  function CareersComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CareersComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CareersComponent.__proto__ || Object.getPrototypeOf(CareersComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        currentCareer: 'driver'
      }
    }), _temp));
  }

  _createClass(CareersComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var careers = {
        //PAGE FOR DRIVER OPPORTUNITES
        driver: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"].Group, {
          size: "large",
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg2.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg3.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'driver'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, "Driver Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, "View opportunity")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: "fade",
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'mechanic'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "View opportunity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "Mechanic Opportunites")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'clerical'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, "Clerical Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, "View opportunity"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          centered: true,
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"], {
          fluid: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "Driver Opportunities"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "summary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, "This position requires the loading, transporting, and delivering of petroleum products and operation of company equipment in a safe manner, complying with all state, federal, company and customer policies and procedures.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, "Job Description and Requirements"), "Night shift position starting time 5 PM to 5 AM (starting times may vary between terminals)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), "All shifts run on a twelve (12) hour shift basis (may vary from day to day)", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), "Weekly shifts schedule is five (5) days on, two (2) days off, and five (5) days on, three (3) days off.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), "Straight pay. NO overtime", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), "Availability to work long hours, including weekends, holidays and nights Ability to work in all types of weather conditions", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), "Drug/Alcohol free", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Employment Criteria"), "The criteria stated below are minimum qualification levels for hiring commercial drivers by Williams Tank Lines.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), "Minimum Experience:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }), "Applicants must have (1) year of verifiable experience as a Class A Driver. Minimum of high school education completed is desirable but not mandatory in all applicants.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, "Qualifications"), "Class A Commercial Drivers License with hazardous materials and tanker endorsement (doubles/triples if in Nevada), with TSA clearance", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }), "Must possess TWIC badge (Transportation Worker\u2019s Identification Credentials) ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }), "Applicant must receive a 1 year minimum clearance on pre-employment physical and back evaluation", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, "Driving Record"), "Applicant must not have been convicted of a felony in the use of a motor vehicle. ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), "No outstanding Failure to appear or Pay fines entries on their driving record.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }), "No more than 1 moving violation conviction in the preceding 12 months and no more than 2 moving violation convictions in the past 36 months.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, "Other Requirements"), "Applicants who have been convicted of any of the following violations may not be considered for employment:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"].Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, "DWI/DUI"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, "RECKLESS OR CARELSS DRIVING"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, "HIT & RUN, (LEAVING THE SCENE OF AN ACCIDENT)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, "SUSPENDED LICENSE AS A RESULT OF MOVING VIOLATION CONVICTIONS")), "No more than one preventable accident in the past three (3) years.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }), "Applicant must provide a complete list of all states in which they have held drivers or commercial driver\u2019s licenses within the last three (3) years and the license numbers so that we can obtain a complete driving record check. Applicant must agree to obtain a new CDL issued from the state they are currently working", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }), "in within thirty (30) days of employment with the company.", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
          as: "h4",
          color: "grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, "Benefits"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"].Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, "Medical and Dental and Vision plan - 60 days."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, "No Cost Life Insurance"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, "401(k) with employer matching and profit sharing"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, "Competitive pay"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, "Training for those that meet the minimum criteria"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, "Quarterly Incentive Bonus"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "Paid Vacations"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, "Paid Holidays"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, "Direct Deposits"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, "Full Uniform Service"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Segment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, "Trained on Defensive Driving")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }), "You will not be considered if you do not meet the requirements and qualification listed above.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Content, {
          extra: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, "Send Resume and 3 year DMV printout along with pre-application questionaire to:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), "Fax: 800-417-8036", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), "Email: employment@williamstanklines.com", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }), "For Questions call:", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }), "Phone: 209-944-5613 ext. 1000", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }), "Please provide email address or phone number where you can be contacted", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        })))))),
        mechanic: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"].Group, {
          size: "large",
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/mechanicImg1.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/mechanicImg2.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'driver'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, "Driver Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "View opportunity")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: "fade",
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'mechanic'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, "View opportunity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, "Mechanic Opportunites")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'clerical'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, "Clerical Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, "View opportunity"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          centered: true,
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }))),
        clerical: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careersImg.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"].Group, {
          size: "large",
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg2.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Image"], {
          src: "https://raw.githubusercontent.com/jdleo/Williams-Tank-Lines/master/assets/careers/careersImg3.png",
          rounded: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'driver'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, "Driver Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, "View opportunity")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: "fade",
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'mechanic'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, "View opportunity"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          }
        }, "Mechanic Opportunites")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          animated: true,
          onClick: function onClick() {
            _this2.setState({
              'currentCareer': 'clerical'
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          visible: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, "Clerical Opportunites"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"].Content, {
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, "View opportunity"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Card"].Group, {
          centered: true,
          style: {
            'marginTop': '40px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        })))
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, careers[this.state.currentCareer]);
    }
  }]);

  return CareersComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CareersComponent);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

module.exports = routes;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/careers.js");


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
//# sourceMappingURL=careers.js.map