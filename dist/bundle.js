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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var spectacle_lib_themes_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spectacle/lib/themes/default */ \"./node_modules/spectacle/lib/themes/default/index.js\");\n/* harmony import */ var spectacle_lib_themes_default__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spectacle_lib_themes_default__WEBPACK_IMPORTED_MODULE_0__);\n// Import theme\n\n\nconst initialTheme = spectacle_lib_themes_default__WEBPACK_IMPORTED_MODULE_0___default()({\n\tprimary: \"#042B35\",\n\tsecondary: \"#D2A03E\",\n\ttertiary: \"#FD853D\",\n  quartenary: \"#A7A7A7\",\n  heading: ''\n}, {\n\tbody: `'Open Sans', sans-serif`,\n  header: `Montserrat, sans-serif`,\n  code: `'Fira Mono', monospace`\n});\n\nconst header = style => ({\n  fontFamily: fonts.header,\n  fontWeight: 700,\n  color: color.heading,\n  lineHeight: 1,\n  margin: '0 auto 2rem',\n  ...style\n});\n\nconst theme = {\n\t...initialTheme,\n\tscreen: {\n\t\t...initialTheme.screen,\n\t\tcomponents: {\n\t\t\t...initialTheme.screen.components,\n\t\t\tcode: {\n\t\t\t\t...initialTheme.screen.components.code,\n\t\t\t\tcolor: initialTheme.screen.colors.quartenary\n\t\t\t},\n\t\t\ttext: {\n\t\t\t\t...initialTheme.screen.components.text,\n\t\t\t\tcolor: initialTheme.screen.colors.quartenary\n\t\t\t},\n\t\t\tlink: {\n\t\t\t\t...initialTheme.screen.components.link,\n\t\t\t\tcolor: initialTheme.screen.colors.secondary\n      },\n      heading: {\n        h1: header({fontSize: '7rem'}),\n        h2: header({fontSize: '5rem'}),\n        h3: header({\n          fontSize: '3rem',\n          color: color.text\n        }),\n        h4: header({\n          fontSize: '2rem',\n          color: color.text\n        }),\n        link: {textDecoration: 'none'}\n      }\n\t\t}\n\t}\n};\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./node_modules/spectacle/lib/themes/default/index.js":
/*!************************************************************!*\
  !*** ./node_modules/spectacle/lib/themes/default/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _screen = __webpack_require__(/*! ./screen */ \"./node_modules/spectacle/lib/themes/default/screen.js\");\n\nvar _screen2 = _interopRequireDefault(_screen);\n\nvar _print = __webpack_require__(/*! ./print */ \"./node_modules/spectacle/lib/themes/default/print.js\");\n\nvar _print2 = _interopRequireDefault(_print);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles(colors, fonts) {\n  return {\n    screen: (0, _screen2.default)(colors, fonts),\n    print: (0, _print2.default)()\n  };\n};\n\nexports.default = styles;\n\n//# sourceURL=webpack:///./node_modules/spectacle/lib/themes/default/index.js?");

/***/ }),

/***/ "./node_modules/spectacle/lib/themes/default/print.js":
/*!************************************************************!*\
  !*** ./node_modules/spectacle/lib/themes/default/print.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*eslint-disable object-shorthand*/\n\nvar defaultColors = {\n  primary: \"black\",\n  secondary: \"black\",\n  tertiary: \"black\",\n  quartenary: \"black\"\n};\n\nvar defaultFonts = {\n  primary: \"Open Sans Condensed\",\n  secondary: \"Lobster Two\",\n  tertiary: \"monospace\"\n};\n\nvar print = function print() {\n  var colorArgs = arguments.length <= 0 || arguments[0] === undefined ? defaultColors : arguments[0];\n  var fontArgs = arguments.length <= 1 || arguments[1] === undefined ? defaultFonts : arguments[1];\n\n  var colors = Object.assign({}, defaultColors, colorArgs);\n  var fonts = Object.assign({}, defaultFonts, fontArgs);\n  return {\n    colors: colors,\n    fonts: fonts,\n    global: {\n      body: {\n        background: \"white\",\n        fontFamily: fonts.primary,\n        fontWeight: \"normal\",\n        fontSize: \"2em\",\n        color: \"black\",\n        overflow: \"hidden\"\n      },\n      \".hljs\": {\n        background: \"white\",\n        color: \"black\"\n      },\n      \".hljs span\": {\n        color: \"black !important\"\n      }\n    },\n    fullscreen: {\n      fill: colors.tertiary\n    },\n    controls: {\n      prev: {\n        position: \"absolute\",\n        top: \"50%\",\n        left: 20,\n        transform: \"translateY(-50%)\",\n        zIndex: 9999,\n        background: \"none\",\n        border: \"none\",\n        outline: 0\n      },\n      prevIcon: {\n        fill: colors.quartenary\n      },\n      next: {\n        position: \"absolute\",\n        top: \"50%\",\n        right: 20,\n        transform: \"translateY(-50%)\",\n        zIndex: 9999,\n        background: \"none\",\n        border: \"none\",\n        outline: 0\n      },\n      nextIcon: {\n        fill: colors.quartenary\n      }\n    },\n    progress: {\n      pacman: {\n        container: {\n          position: \"absolute\",\n          bottom: \"5px\",\n          left: \"50%\",\n          transition: \"all 1s ease-in-out 0.2s\",\n          zIndex: 1000\n        },\n        pacman: {\n          position: \"absolute\",\n          transition: \"left 0.3s ease-in-out 0.2s\",\n          width: \"20px\",\n          height: \"20px\",\n          transform: \"translate(-5px, -5px)\"\n        },\n        pacmanTop: {\n          position: \"absolute\",\n          content: \" \",\n          width: \"20px\",\n          height: \"10px\",\n          borderTopLeftRadius: \"10px\",\n          borderTopRightRadius: \"10px\",\n          background: colors.tertiary\n        },\n        pacmanBottom: {\n          position: \"absolute\",\n          content: \" \",\n          width: \"20px\",\n          height: \"10px\",\n          borderBottomLeftRadius: \"10px\",\n          borderBottomRightRadius: \"10px\",\n          background: colors.tertiary,\n          top: \"10px\"\n        },\n        point: {\n          position: \"absolute\",\n          float: \"left\",\n          background: \"transparent\",\n          width: \"10px\",\n          height: \"10px\",\n          borderWidth: 2,\n          borderStyle: \"solid\",\n          borderColor: colors.tertiary,\n          borderRadius: \"50%\",\n          transition: \"all 0.01s ease-out 0.4s\"\n        }\n      },\n      bar: {\n        container: {\n          position: \"absolute\",\n          height: \"10px\",\n          width: \"100%\",\n          bottom: 0,\n          left: 0,\n          transition: \"all 1s ease-in-out 0.2s\",\n          zIndex: 1000\n        },\n        bar: {\n          height: \"100%\",\n          background: colors.tertiary,\n          transition: \"all 0.3s ease-out\"\n        }\n      },\n      number: {\n        container: {\n          position: \"absolute\",\n          bottom: 10,\n          right: 10,\n          zIndex: 1000,\n          color: colors.tertiary\n        }\n      }\n    },\n    components: {\n      blockquote: {\n        textAlign: \"left\",\n        position: \"relative\",\n        display: \"inline-block\"\n      },\n      quote: {\n        borderLeft: \"1px solid \" + colors.primary,\n        paddingLeft: 40,\n        display: \"block\",\n        color: \"black\",\n        fontSize: \"4.9rem\",\n        lineHeight: 1,\n        fontWeight: \"bold\"\n      },\n      cite: {\n        color: \"black\",\n        display: \"block\",\n        clear: \"left\",\n        fontSize: \"2rem\",\n        marginTop: \"1rem\"\n      },\n      content: {\n        margin: \"auto\",\n        textAlign: \"center\"\n      },\n      codePane: {\n        pre: {\n          maxWidth: 800,\n          margin: \"auto\",\n          fontSize: \"0.8rem\",\n          fontWeight: \"normal\",\n          fontFamily: fonts.tertiary\n        },\n        code: {\n          textAlign: \"left\",\n          padding: 20,\n          fontWeight: \"normal\"\n        }\n      },\n      code: {\n        color: \"black\",\n        fontSize: \"2.66rem\",\n        fontFamily: fonts.tertiary,\n        margin: \"0.25rem auto\",\n        backgroundColor: \"rgba(0,0,0,0.15)\",\n        padding: \"0 10px\",\n        borderRadius: 3\n      },\n      heading: {\n        h1: {\n          color: \"black\",\n          fontSize: \"7.05rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: 0\n        },\n        h2: {\n          color: \"black\",\n          fontSize: \"5.88rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: 0\n        },\n        h3: {\n          color: \"black\",\n          fontSize: \"4.9rem\",\n          fontFamily: fonts.secondary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h4: {\n          color: \"black\",\n          fontSize: \"3.82rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h5: {\n          color: \"black\",\n          fontSize: \"3.19rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h6: {\n          color: \"black\",\n          fontSize: \"2.66rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        }\n      },\n      image: {\n        display: \"block\",\n        margin: \"0.5rem auto\"\n      },\n      link: {\n        textDecoration: \"none\"\n      },\n      listItem: {\n        fontSize: \"2.66rem\"\n      },\n      list: {\n        textAlign: \"left\",\n        listStylePosition: \"inside\",\n        padding: 0\n      },\n      s: {\n        strikethrough: {}\n      },\n      tableHeaderItem: {\n        fontSize: \"2.66rem\",\n        fontWeight: \"bold\"\n      },\n      tableItem: {\n        fontSize: \"2.66rem\"\n      },\n      table: {\n        width: \"100%\"\n      },\n      text: {\n        color: \"black\",\n        fontSize: \"2.66rem\",\n        fontFamily: fonts.primary,\n        margin: \"0.25rem auto\"\n      }\n    }\n  };\n};\n\nexports.default = print;\n\n//# sourceURL=webpack:///./node_modules/spectacle/lib/themes/default/print.js?");

/***/ }),

/***/ "./node_modules/spectacle/lib/themes/default/screen.js":
/*!*************************************************************!*\
  !*** ./node_modules/spectacle/lib/themes/default/screen.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/*eslint-disable object-shorthand*/\n\nvar defaultColors = {\n  primary: \"#f9c300\",\n  secondary: \"black\",\n  tertiary: \"white\",\n  quartenary: \"white\"\n};\n\nvar defaultFonts = {\n  primary: \"Open Sans Condensed\",\n  secondary: \"Lobster Two\",\n  tertiary: \"monospace\"\n};\n\nvar screen = function screen() {\n  var colorArgs = arguments.length <= 0 || arguments[0] === undefined ? defaultColors : arguments[0];\n  var fontArgs = arguments.length <= 1 || arguments[1] === undefined ? defaultFonts : arguments[1];\n\n  var colors = Object.assign({}, defaultColors, colorArgs);\n  var fonts = Object.assign({}, defaultFonts, fontArgs);\n  return {\n    colors: colors,\n    fonts: fonts,\n    global: {\n      body: {\n        background: colors.primary,\n        fontFamily: fonts.primary,\n        fontWeight: \"normal\",\n        fontSize: \"2em\",\n        color: colors.secondary,\n        overflow: \"hidden\"\n      },\n      \"html, body\": {\n        height: \"100%\"\n      },\n      \"*\": {\n        boxSizing: \"border-box\"\n      }\n    },\n    fullscreen: {\n      fill: colors.tertiary\n    },\n    controls: {\n      prev: {\n        position: \"absolute\",\n        top: \"50%\",\n        left: 20,\n        transform: \"translateY(-50%)\",\n        zIndex: 9999,\n        background: \"none\",\n        border: \"none\",\n        outline: 0\n      },\n      prevIcon: {\n        fill: colors.quartenary\n      },\n      next: {\n        position: \"absolute\",\n        top: \"50%\",\n        right: 20,\n        transform: \"translateY(-50%)\",\n        zIndex: 9999,\n        background: \"none\",\n        border: \"none\",\n        outline: 0\n      },\n      nextIcon: {\n        fill: colors.quartenary\n      }\n    },\n    progress: {\n      pacman: {\n        container: {\n          position: \"absolute\",\n          bottom: \"5px\",\n          left: \"50%\",\n          transition: \"all 1s ease-in-out 0.2s\",\n          zIndex: 1000\n        },\n        pacman: {\n          position: \"absolute\",\n          transition: \"left 0.3s ease-in-out 0.2s\",\n          width: \"20px\",\n          height: \"20px\",\n          transform: \"translate(-5px, -5px)\"\n        },\n        pacmanTop: {\n          position: \"absolute\",\n          content: \"\",\n          width: \"20px\",\n          height: \"10px\",\n          borderTopLeftRadius: \"10px\",\n          borderTopRightRadius: \"10px\",\n          background: colors.quartenary\n        },\n        pacmanBottom: {\n          position: \"absolute\",\n          content: \"\",\n          width: \"20px\",\n          height: \"10px\",\n          borderBottomLeftRadius: \"10px\",\n          borderBottomRightRadius: \"10px\",\n          background: colors.quartenary,\n          top: \"10px\"\n        },\n        point: {\n          position: \"absolute\",\n          float: \"left\",\n          background: \"transparent\",\n          width: \"10px\",\n          height: \"10px\",\n          borderWidth: 2,\n          borderStyle: \"solid\",\n          borderColor: colors.quartenary,\n          borderRadius: \"50%\",\n          transition: \"all 0.01s ease-out 0.4s\"\n        }\n      },\n      bar: {\n        container: {\n          position: \"absolute\",\n          height: \"10px\",\n          width: \"100%\",\n          bottom: 0,\n          left: 0,\n          transition: \"all 1s ease-in-out 0.2s\",\n          zIndex: 1000\n        },\n        bar: {\n          height: \"100%\",\n          background: colors.quartenary,\n          transition: \"all 0.3s ease-out\"\n        }\n      },\n      number: {\n        container: {\n          position: \"absolute\",\n          bottom: 10,\n          right: 10,\n          zIndex: 1000,\n          color: colors.quartenary\n        }\n      }\n    },\n    components: {\n      blockquote: {\n        textAlign: \"left\",\n        position: \"relative\",\n        display: \"inline-block\",\n        margin: 20\n      },\n      quote: {\n        borderLeft: \"1px solid \" + colors.primary,\n        paddingLeft: 40,\n        display: \"block\",\n        color: colors.primary,\n        fontSize: \"4.9rem\",\n        lineHeight: 1,\n        fontWeight: \"bold\"\n      },\n      cite: {\n        color: colors.tertiary,\n        display: \"block\",\n        clear: \"left\",\n        fontSize: \"2rem\",\n        marginTop: \"1rem\"\n      },\n      content: {\n        margin: \"0 auto\",\n        textAlign: \"center\"\n      },\n      codePane: {\n        pre: {\n          margin: \"auto\",\n          fontSize: \"0.8rem\",\n          fontWeight: \"normal\",\n          fontFamily: fonts.tertiary,\n          minWidth: \"100%\",\n          maxWidth: 800\n        },\n        code: {\n          textAlign: \"left\",\n          fontWeight: \"normal\"\n        }\n      },\n      code: {\n        color: \"black\",\n        fontSize: \"2.66rem\",\n        fontFamily: fonts.tertiary,\n        margin: \"0.25rem auto\",\n        backgroundColor: \"rgba(0,0,0,0.15)\",\n        padding: \"0 10px\",\n        borderRadius: 3\n      },\n      heading: {\n        h1: {\n          color: colors.tertiary,\n          fontSize: \"7.05rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: 0,\n          zoom: 1\n        },\n        h2: {\n          color: colors.secondary,\n          fontSize: \"5.88rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: 0\n        },\n        h3: {\n          color: \"black\",\n          fontSize: \"4.9rem\",\n          fontFamily: fonts.secondary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h4: {\n          color: \"black\",\n          fontSize: \"3.82rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h5: {\n          color: \"black\",\n          fontSize: \"3.19rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        },\n        h6: {\n          color: \"black\",\n          fontSize: \"2.66rem\",\n          fontFamily: fonts.primary,\n          lineHeight: 1,\n          fontWeight: \"bold\",\n          margin: \"0.5rem auto\"\n        }\n      },\n      image: {\n        display: \"block\",\n        margin: \"0.5rem auto\"\n      },\n      link: {\n        textDecoration: \"none\"\n      },\n      listItem: {\n        fontSize: \"2.66rem\"\n      },\n      list: {\n        textAlign: \"left\",\n        listStylePosition: \"inside\",\n        padding: 0\n      },\n      s: {\n        strikethrough: {}\n      },\n      tableHeaderItem: {\n        fontSize: \"2.66rem\",\n        fontWeight: \"bold\"\n      },\n      tableItem: {\n        fontSize: \"2.66rem\"\n      },\n      table: {\n        width: \"100%\"\n      },\n      text: {\n        color: \"black\",\n        fontSize: \"2.66rem\",\n        fontFamily: fonts.primary,\n        margin: \"0.25rem auto\"\n      }\n    }\n  };\n};\n\nexports.default = screen;\n\n//# sourceURL=webpack:///./node_modules/spectacle/lib/themes/default/screen.js?");

/***/ })

/******/ });