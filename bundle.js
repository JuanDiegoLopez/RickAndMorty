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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/character-thumbnail/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/character-thumbnail/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/character-thumbnail.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/character-thumbnail.js":
  /*!************************************!*\
    !*** ./src/character-thumbnail.js ***!
    \************************************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character_thumbnail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-thumbnail.scss */ \"./src/character-thumbnail.scss\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar CharacterThumbnail =\n/*#__PURE__*/\nfunction (_HTMLElement) {\n  _inherits(CharacterThumbnail, _HTMLElement);\n\n  function CharacterThumbnail() {\n    var _this;\n\n    _classCallCheck(this, CharacterThumbnail);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterThumbnail).call(this));\n    _this.shadow = _this.attachShadow({\n      mode: 'open'\n    });\n    _this.template = document.createElement('template');\n    _this.styleSheet = new CSSStyleSheet();\n\n    _this.render();\n\n    return _this;\n  }\n\n  _createClass(CharacterThumbnail, [{\n    key: \"render\",\n    value: function render() {\n      var image = this.getAttribute('data-image');\n      var name = this.getAttribute('data-name');\n      this.template.innerHTML = \"\\n      <div class=\\\"card\\\">\\n        <div class=\\\"card-image\\\">\\n          <img src=\\\"\".concat(image, \"\\\">\\n        </div>\\n        <div class=\\\"card-content\\\">\\n          <span class=\\\"card-title\\\">\").concat(name, \"</span>\\n        </div>\\n      </div>\");\n      this.styleSheet.replaceSync(_character_thumbnail_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      this.shadow.adoptedStyleSheets = [this.styleSheet];\n      this.shadow.appendChild(this.template.content.cloneNode(true));\n    }\n  }]);\n\n  return CharacterThumbnail;\n}(_wrapNativeSuper(HTMLElement));\n\ncustomElements.define('character-thumbnail', CharacterThumbnail);\n\n//# sourceURL=webpack:///./src/character-thumbnail.js?");
    /***/
  },

  /***/
  "./src/character-thumbnail.scss":
  /*!**************************************!*\
    !*** ./src/character-thumbnail.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\".card {\\n  height: 100%;\\n  margin: 0;\\n  position: relative;\\n  background-color: #fff;\\n  -webkit-transition: -webkit-box-shadow .25s;\\n  transition: -webkit-box-shadow .25s;\\n  transition: box-shadow .25s;\\n  transition: box-shadow .25s, -webkit-box-shadow .25s;\\n  border-radius: 2px;\\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\\n\\n.card-image {\\n  position: relative; }\\n  .card-image img {\\n    display: block;\\n    border-radius: 2px 2px 0 0;\\n    position: relative;\\n    left: 0;\\n    right: 0;\\n    top: 0;\\n    bottom: 0;\\n    width: 100%; }\\n\\n.card-content {\\n  padding: 24px;\\n  border-radius: 0 0 2px 2px; }\\n  .card-content .card-title {\\n    font-size: 24px;\\n    font-weight: 300;\\n    display: block;\\n    line-height: 32px;\\n    margin-bottom: 8px; }\\n\");\n\n//# sourceURL=webpack:///./src/character-thumbnail.scss?");
    /***/
  }
  /******/

});

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var scss_grid_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scss/grid.scss */ "./src/scss/grid.scss");
/* harmony import */ var scss_grid_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(scss_grid_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils */ "./src/utils.js");
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/router */ "./src/router.js");
/* harmony import */ var _components_characters_characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/characters/characters */ "./src/app/components/characters/characters.js");
/* harmony import */ var _components_details_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details/details */ "./src/app/components/details/details.js");
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home */ "./src/app/components/home/home.js");









class AppComponent {
  constructor() {
    this.router = src_router__WEBPACK_IMPORTED_MODULE_4__["default"];
  }

  createComponent() {
    const navbarItems = Array.from(Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["getElements"])().navbar.getElementsByTagName('a'));
    navbarItems.forEach(element => {
      element.addEventListener('click', event => {
        event.preventDefault();
        this.router.navigate(element.getAttribute('href'));
      });
    });
    const logoImage = new Image();
    logoImage.src = assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a;
    const logoElement = Object(src_utils__WEBPACK_IMPORTED_MODULE_3__["getElements"])().navbar.querySelector('.brand-logo');
    logoElement.appendChild(logoImage);
    this.setupRouter();
  }

  setupRouter() {
    this.router.config({
      mode: 'history'
    });
    this.router.add(/home/, _components_home_home__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.router.add(/characters\/(.*)/, _components_characters_characters__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.router.add(/details\/(.*)/, _components_details_details__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.router.listen();
    this.router.navigate('/home');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "./src/app/components/characters/characters.js":
/*!*****************************************************!*\
  !*** ./src/app/components/characters/characters.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils */ "./src/utils.js");
/* harmony import */ var services_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/characters */ "./src/services/characters.js");
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/router */ "./src/router.js");
/* harmony import */ var _characters_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.pug */ "./src/app/components/characters/characters.pug");
/* harmony import */ var _characters_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_characters_pug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _characters_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters.scss */ "./src/app/components/characters/characters.scss");
/* harmony import */ var _characters_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_characters_scss__WEBPACK_IMPORTED_MODULE_4__);






class CharactersComponent {
  constructor(page) {
    this.page = page;
    this.paginationStart = 1;
    this.paginationEnd = 10;
    this.router = src_router__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.charactersService = services_characters__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  async createComponent() {
    try {
      const response = await this.charactersService.getAllCharacters(this.page);
      const data = await response.json();
      this.render(data, this.page);
      this.setupListeners();
    } catch (error) {
      Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["HandleError"])(error);
    }
  }

  checkPagination(currentPage, totalPages) {
    if (currentPage > this.paginationEnd && currentPage <= totalPages) {
      this.paginationStart = currentPage - 9;
      this.paginationEnd = currentPage;
    }

    if (currentPage < this.paginationStart) {
      this.paginationStart = currentPage;
      this.paginationEnd = currentPage + 9;
    }
  }

  render(data, currentPage) {
    const currentPageParsed = parseInt(currentPage, 10);
    this.checkPagination(currentPage, data.info.pages);
    const vars = {
      characters: data.results,
      pagination: {
        current: currentPageParsed,
        total: data.info.pages,
        start: this.paginationStart,
        end: this.paginationEnd
      }
    };
    Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.innerHTML = _characters_pug__WEBPACK_IMPORTED_MODULE_3___default()(vars);
    Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.style.cssText = _characters_scss__WEBPACK_IMPORTED_MODULE_4___default.a;
  }

  setupListeners() {
    const linksElements = Array.from(Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.getElementsByTagName('a'));
    const charactersElements = Array.from(Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.getElementsByClassName('character'));
    linksElements.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        this.router.navigate(link.getAttribute('href'));
      });
    });
    charactersElements.forEach(character => {
      character.addEventListener('click', () => {
        this.router.navigate(`/details/${character.id}`);
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CharactersComponent);

/***/ }),

/***/ "./src/app/components/characters/characters.pug":
/*!******************************************************!*\
  !*** ./src/app/components/characters/characters.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (characters, pagination, parseInt) {pug_html = pug_html + "\u003Capp-characters\u003E\u003Cdiv class=\"flex-container\"\u003E";
// iterate characters
;(function(){
  var $$obj = characters;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ccharacter-thumbnail" + (" class=\"character\""+pug.attr("data-name", character.name, true, true)+pug.attr("data-image", character.image, true, true)+pug.attr("id", character.id, true, true)) + "\u003E\u003C\u002Fcharacter-thumbnail\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ccharacter-thumbnail" + (" class=\"character\""+pug.attr("data-name", character.name, true, true)+pug.attr("data-image", character.image, true, true)+pug.attr("id", character.id, true, true)) + "\u003E\u003C\u002Fcharacter-thumbnail\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
const page = parseInt(pagination.current);
pug_html = pug_html + "\u003Cul class=\"pagination center\"\u003E";
if ((page - 1) === 0) {
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E\u003Ca href=\"#!\"\u003E\u003Ci class=\"material-icons\"\u003Echevron_left\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${page - 1}`, true, true)) + "\u003E\u003Ci class=\"material-icons\"\u003Echevron_left\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
for(let i = pagination.start; i <= pagination.end; i++) {
{
if (i == page) {
pug_html = pug_html + "\u003Cli class=\"active\"\u003E\u003Ca" + (" class=\"white-text\""+pug.attr("href", `/characters/${i}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${i}`, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
}
}
if (page === pagination.total) {
pug_html = pug_html + "\u003Cli class=\"disabled\"\u003E\u003Ca href=\"#!\"\u003E\u003Ci class=\"material-icons\"\u003Echevron_right\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli class=\"waves-effect\"\u003E\u003Ca" + (pug.attr("href", `/characters/${page + 1}`, true, true)) + "\u003E\u003Ci class=\"material-icons\"\u003Echevron_right\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fapp-characters\u003E";}.call(this,"characters" in locals_for_with?locals_for_with.characters:typeof characters!=="undefined"?characters:undefined,"pagination" in locals_for_with?locals_for_with.pagination:typeof pagination!=="undefined"?pagination:undefined,"parseInt" in locals_for_with?locals_for_with.parseInt:typeof parseInt!=="undefined"?parseInt:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/app/components/characters/characters.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/characters/characters.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/details/details.js":
/*!***********************************************!*\
  !*** ./src/app/components/details/details.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils */ "./src/utils.js");
/* harmony import */ var services_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/characters */ "./src/services/characters.js");
/* harmony import */ var _details_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.pug */ "./src/app/components/details/details.pug");
/* harmony import */ var _details_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_details_pug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _details_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.scss */ "./src/app/components/details/details.scss");
/* harmony import */ var _details_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_details_scss__WEBPACK_IMPORTED_MODULE_3__);





class DetailsComponent {
  constructor(id) {
    this.id = id;
    this.charactersService = services_characters__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  async createComponent() {
    try {
      const response = await this.charactersService.getCharacterById(this.id);
      const data = await response.json();
      Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.innerHTML = _details_pug__WEBPACK_IMPORTED_MODULE_2___default()({
        character: data
      });
    } catch (error) {
      Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["HandleError"])(error);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailsComponent);

/***/ }),

/***/ "./src/app/components/details/details.pug":
/*!************************************************!*\
  !*** ./src/app/components/details/details.pug ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (character) {pug_html = pug_html + "\u003Capp-details\u003E\u003Cdiv class=\"flex-container\"\u003E\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-4\"\u003E\u003Cdiv class=\"image-container\"\u003E\u003Ch4\u003E" + (pug.escape(null == (pug_interp = character.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E\u003Cimg" + (pug.attr("src", character.image, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-xs-12 col-sm-6 col-md-8\"\u003E\u003Ch4\u003ECharacter Data\u003C\u002Fh4\u003E\u003Cdiv class=\"collection\"\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EStatus: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.status) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003ESpecie: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.species) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EGender: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.gender) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EOrigin: \u003C\u002Fb\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = character.origin.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collection-item\"\u003E\u003Cb\u003EDescription: \u003C\u002Fb\u003E\u003Cp\u003ELorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum tenetur voluptatum. Beatae magni perspiciatis culpa accusamus placeat voluptatem veniam voluptatibus dolorem! Enim, nulla! Officiis cumque saepe velit officia voluptates!\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fapp-details\u003E";}.call(this,"character" in locals_for_with?locals_for_with.character:typeof character!=="undefined"?character:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/app/components/details/details.scss":
/*!*************************************************!*\
  !*** ./src/app/components/details/details.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app/components/home/home.js":
/*!*****************************************!*\
  !*** ./src/app/components/home/home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils */ "./src/utils.js");
/* harmony import */ var services_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/characters */ "./src/services/characters.js");
/* harmony import */ var src_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/router */ "./src/router.js");
/* harmony import */ var _home_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.pug */ "./src/app/components/home/home.pug");
/* harmony import */ var _home_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_pug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.scss */ "./src/app/components/home/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_4__);






class HomeComponent {
  constructor() {
    this.characters = [];
    this.router = src_router__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.charactersService = services_characters__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  async createComponent() {
    try {
      const response = await this.charactersService.getMainCharacters();
      const data = await response.json();
      this.characters = data;
      this.render();
    } catch (error) {
      Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["HandleError"])(error);
    }
  }

  render() {
    Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.innerHTML = _home_pug__WEBPACK_IMPORTED_MODULE_3___default()({
      characters: this.characters
    });
    const button = Object(src_utils__WEBPACK_IMPORTED_MODULE_0__["getElements"])().content.querySelector('.btn');
    button.addEventListener('click', () => {
      this.router.navigate('/characters/1');
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HomeComponent);

/***/ }),

/***/ "./src/app/components/home/home.pug":
/*!******************************************!*\
  !*** ./src/app/components/home/home.pug ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (characters) {pug_html = pug_html + "\u003Capp-home\u003E\u003Cdiv class=\"flex-container\"\u003E";
// iterate characters
;(function(){
  var $$obj = characters;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-4\"\u003E\u003Ccharacter-thumbnail" + (pug.attr("data-name", character.name, true, true)+pug.attr("data-image", character.image, true, true)) + "\u003E\u003C\u002Fcharacter-thumbnail\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var character = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"col-xs-12 col-sm-4\"\u003E\u003Ccharacter-thumbnail" + (pug.attr("data-name", character.name, true, true)+pug.attr("data-image", character.image, true, true)) + "\u003E\u003C\u002Fcharacter-thumbnail\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cbutton class=\"btn waves-effect waves-light right\"\u003EVer todos\u003C\u002Fbutton\u003E\u003C\u002Fapp-home\u003E";}.call(this,"characters" in locals_for_with?locals_for_with.characters:typeof characters!=="undefined"?characters:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/app/components/home/home.scss":
/*!*******************************************!*\
  !*** ./src/app/components/home/home.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "75509f2ec9725b3cef07eefe651a4a8f.png";

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const CONFIG = {
  API_URL: 'https://rickandmortyapi.com/api'
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./src/app/app.js");
/* harmony import */ var character_thumbnail_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! character-thumbnail/dist */ "./node_modules/character-thumbnail/dist/index.js");
/* harmony import */ var character_thumbnail_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(character_thumbnail_dist__WEBPACK_IMPORTED_MODULE_1__);


const app = new _app_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
app.createComponent();

/***/ }),

/***/ "./src/lib/Router.js":
/*!***************************!*\
  !*** ./src/lib/Router.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Router {
  constructor() {
    this.routes = [];
    this.mode = null;
    this.root = '/';
  }

  config(options) {
    this.mode = options && options.mode && options.mode === 'history' && !!history.pushState ? 'history' : 'hash';
    this.root = options && options.root ? `/${this.clearSlashes(options.root)}/` : '/';
  }

  getFragment() {
    let fragment = '';

    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(location.pathname));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/·(.*)$/);
      fragment = match ? match[1] : '';
    }

    return this.clearSlashes(fragment);
  }

  clearSlashes(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  }

  add(re, handler) {
    if (typeof re === 'function') {
      handler = re;
      re = '';
    }

    this.routes.push({
      re,
      handler
    });
  }

  remove(param) {
    this.routes.forEach(route => {
      if (route.handler === param || route.re.toString() === param.toString()) {
        const index = this.routes.indexOf(route);
        this.routes.splice(index, 1);
      }
    });
  }

  flush() {
    this.routes = [];
    this.mode = null;
    this.root = '/';
  }

  check(f) {
    const fragment = f || this.getFragment();
    this.routes.forEach(route => {
      const match = fragment.match(route.re);

      if (match) {
        match.shift();
        const handlerInstance = new route.handler(match);
        handlerInstance.createComponent();
      }
    });
  }

  listen() {
    const self = this;
    let current = self.getFragment();

    const fn = () => {
      if (current !== self.getFragment()) {
        current = self.getFragment();
        self.check(current);
      }
    };

    clearInterval(this.interval);
    this.interval = setInterval(fn, 50);
  }

  navigate(path) {
    path = path ? path : '';

    if (this.mode === 'history') {
      history.pushState(null, null, `${this.root}${this.clearSlashes(path)}`);
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Router */ "./src/lib/Router.js");

const router = new _lib_Router__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/scss/grid.scss":
/*!****************************!*\
  !*** ./src/scss/grid.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/services/characters.js":
/*!************************************!*\
  !*** ./src/services/characters.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");

const CharactersService = {
  getMainCharacters: () => fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL}/character/1,2,3`),
  getAllCharacters: page => fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL}/character/?page=${page}`),
  getCharacterById: id => fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__["default"].API_URL}/character/${id}`)
};
/* harmony default export */ __webpack_exports__["default"] = (CharactersService);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: HandleError, getElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleError", function() { return HandleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return getElements; });
const HandleError = error => {
  console.error(error);
};
const getElements = () => ({
  app: document.querySelector('#app'),
  navbar: document.querySelector('.nav-wrapper'),
  content: document.querySelector('.container'),
  footer: document.querySelector('.page-footer')
});

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NoYXJhY3Rlci10aHVtYm5haWwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLnB1ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLnNjc3M/OTlkOSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMucHVnIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuc2Nzcz8wZWFhIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5wdWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5zY3NzPzE4YzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dyaWQuc2Nzcz80MzhiIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvY2hhcmFjdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2ZzIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsImV2YWwiLCJBcHBDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInJvdXRlciIsImNyZWF0ZUNvbXBvbmVudCIsIm5hdmJhckl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHMiLCJuYXZiYXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0ZSIsImdldEF0dHJpYnV0ZSIsImxvZ29JbWFnZSIsIkltYWdlIiwic3JjIiwiTG9nbyIsImxvZ29FbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImFwcGVuZENoaWxkIiwic2V0dXBSb3V0ZXIiLCJjb25maWciLCJhZGQiLCJIb21lQ29tcG9uZW50IiwiQ2hhcmFjdGVyc0NvbXBvbmVudCIsIkRldGFpbHNDb21wb25lbnQiLCJsaXN0ZW4iLCJwYWdlIiwicGFnaW5hdGlvblN0YXJ0IiwicGFnaW5hdGlvbkVuZCIsImNoYXJhY3RlcnNTZXJ2aWNlIiwiQ2hhcmFjdGVyc1NlcnZpY2UiLCJyZXNwb25zZSIsImdldEFsbENoYXJhY3RlcnMiLCJkYXRhIiwianNvbiIsInJlbmRlciIsInNldHVwTGlzdGVuZXJzIiwiZXJyb3IiLCJIYW5kbGVFcnJvciIsImNoZWNrUGFnaW5hdGlvbiIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlUGFyc2VkIiwicGFyc2VJbnQiLCJpbmZvIiwicGFnZXMiLCJ2YXJzIiwiY2hhcmFjdGVycyIsInJlc3VsdHMiLCJwYWdpbmF0aW9uIiwiY3VycmVudCIsInRvdGFsIiwic3RhcnQiLCJlbmQiLCJjb250ZW50IiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJzdHlsZSIsImNzc1RleHQiLCJsaW5rc0VsZW1lbnRzIiwiY2hhcmFjdGVyc0VsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxpbmsiLCJjaGFyYWN0ZXIiLCJpZCIsImdldENoYXJhY3RlckJ5SWQiLCJnZXRNYWluQ2hhcmFjdGVycyIsImJ1dHRvbiIsIkNPTkZJRyIsIkFQSV9VUkwiLCJhcHAiLCJSb3V0ZXIiLCJyb3V0ZXMiLCJyb290Iiwib3B0aW9ucyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJjbGVhclNsYXNoZXMiLCJnZXRGcmFnbWVudCIsImZyYWdtZW50IiwiZGVjb2RlVVJJIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJtYXRjaCIsIndpbmRvdyIsImhyZWYiLCJwYXRoIiwidG9TdHJpbmciLCJyZSIsImhhbmRsZXIiLCJwdXNoIiwicmVtb3ZlIiwicGFyYW0iLCJyb3V0ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImZsdXNoIiwiY2hlY2siLCJmIiwic2hpZnQiLCJoYW5kbGVySW5zdGFuY2UiLCJzZWxmIiwiZm4iLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwi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SUEsTUFBTW5DLFdBQVcsR0FBRyxPQUFPO0FBQ2hDb0UsS0FBRyxFQUFFeUMsUUFBUSxDQUFDOUYsYUFBVCxDQUF1QixNQUF2QixDQUQyQjtBQUVoQ2QsUUFBTSxFQUFFNEcsUUFBUSxDQUFDOUYsYUFBVCxDQUF1QixjQUF2QixDQUZ3QjtBQUdoQ3FDLFNBQU8sRUFBRXlELFFBQVEsQ0FBQzlGLGFBQVQsQ0FBdUIsWUFBdkIsQ0FIdUI7QUFJaEMrRixRQUFNLEVBQUVELFFBQVEsQ0FBQzlGLGFBQVQsQ0FBdUIsY0FBdkI7QUFKd0IsQ0FBUCxDQUFwQixDOzs7Ozs7Ozs7OztBQ0pQLGUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jaGFyYWN0ZXItdGh1bWJuYWlsLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2NoYXJhY3Rlci10aHVtYm5haWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFyYWN0ZXItdGh1bWJuYWlsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gZXhwb3J0cyBwcm92aWRlZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XFxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jaGFyYWN0ZXJfdGh1bWJuYWlsX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2hhcmFjdGVyLXRodW1ibmFpbC5zY3NzICovIFxcXCIuL3NyYy9jaGFyYWN0ZXItdGh1bWJuYWlsLnNjc3NcXFwiKTtcXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXFxcImZ1bmN0aW9uXFxcIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcXFwic3ltYm9sXFxcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFxcXCJmdW5jdGlvblxcXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXFxcInN5bWJvbFxcXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cXG5cXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblxcXCIpOyB9IH1cXG5cXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcXFwidmFsdWVcXFwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxcblxcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XFxuXFxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXFxcIm9iamVjdFxcXCIgfHwgdHlwZW9mIGNhbGwgPT09IFxcXCJmdW5jdGlvblxcXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XFxuXFxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFxcXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcXFwiKTsgfSByZXR1cm4gc2VsZjsgfVxcblxcbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFxcXCJmdW5jdGlvblxcXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFxcXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblxcXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cXG5cXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcXFwiZnVuY3Rpb25cXFwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcXFwiZnVuY3Rpb25cXFwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXFxcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXFxcIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFxcXCJ1bmRlZmluZWRcXFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cXG5cXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFxcXCJmdW5jdGlvblxcXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxcblxcbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxcblxcbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFxcXCJbbmF0aXZlIGNvZGVdXFxcIikgIT09IC0xOyB9XFxuXFxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cXG5cXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XFxuXFxuXFxuXFxudmFyIENoYXJhY3RlclRodW1ibmFpbCA9XFxuLyojX19QVVJFX18qL1xcbmZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcXG4gIF9pbmhlcml0cyhDaGFyYWN0ZXJUaHVtYm5haWwsIF9IVE1MRWxlbWVudCk7XFxuXFxuICBmdW5jdGlvbiBDaGFyYWN0ZXJUaHVtYm5haWwoKSB7XFxuICAgIHZhciBfdGhpcztcXG5cXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYXJhY3RlclRodW1ibmFpbCk7XFxuXFxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENoYXJhY3RlclRodW1ibmFpbCkuY2FsbCh0aGlzKSk7XFxuICAgIF90aGlzLnNoYWRvdyA9IF90aGlzLmF0dGFjaFNoYWRvdyh7XFxuICAgICAgbW9kZTogJ29wZW4nXFxuICAgIH0pO1xcbiAgICBfdGhpcy50ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XFxuICAgIF90aGlzLnN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xcblxcbiAgICBfdGhpcy5yZW5kZXIoKTtcXG5cXG4gICAgcmV0dXJuIF90aGlzO1xcbiAgfVxcblxcbiAgX2NyZWF0ZUNsYXNzKENoYXJhY3RlclRodW1ibmFpbCwgW3tcXG4gICAga2V5OiBcXFwicmVuZGVyXFxcIixcXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcXG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpO1xcbiAgICAgIHZhciBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xcbiAgICAgIHRoaXMudGVtcGxhdGUuaW5uZXJIVE1MID0gXFxcIlxcXFxuICAgICAgPGRpdiBjbGFzcz1cXFxcXFxcImNhcmRcXFxcXFxcIj5cXFxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFxcXFxcImNhcmQtaW1hZ2VcXFxcXFxcIj5cXFxcbiAgICAgICAgICA8aW1nIHNyYz1cXFxcXFxcIlxcXCIuY29uY2F0KGltYWdlLCBcXFwiXFxcXFxcXCI+XFxcXG4gICAgICAgIDwvZGl2PlxcXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXFxcXFwiY2FyZC1jb250ZW50XFxcXFxcXCI+XFxcXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcXFxcXCJjYXJkLXRpdGxlXFxcXFxcXCI+XFxcIikuY29uY2F0KG5hbWUsIFxcXCI8L3NwYW4+XFxcXG4gICAgICAgIDwvZGl2PlxcXFxuICAgICAgPC9kaXY+XFxcIik7XFxuICAgICAgdGhpcy5zdHlsZVNoZWV0LnJlcGxhY2VTeW5jKF9jaGFyYWN0ZXJfdGh1bWJuYWlsX3Njc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcXFwiZGVmYXVsdFxcXCJdKTtcXG4gICAgICB0aGlzLnNoYWRvdy5hZG9wdGVkU3R5bGVTaGVldHMgPSBbdGhpcy5zdHlsZVNoZWV0XTtcXG4gICAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcXG4gICAgfVxcbiAgfV0pO1xcblxcbiAgcmV0dXJuIENoYXJhY3RlclRodW1ibmFpbDtcXG59KF93cmFwTmF0aXZlU3VwZXIoSFRNTEVsZW1lbnQpKTtcXG5cXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NoYXJhY3Rlci10aHVtYm5haWwnLCBDaGFyYWN0ZXJUaHVtYm5haWwpO1xcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItdGh1bWJuYWlsLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2hhcmFjdGVyLXRodW1ibmFpbC5zY3NzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jaGFyYWN0ZXItdGh1bWJuYWlsLnNjc3MgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcXFwiZGVmYXVsdFxcXCJdID0gKFxcXCIuY2FyZCB7XFxcXG4gIGhlaWdodDogMTAwJTtcXFxcbiAgbWFyZ2luOiAwO1xcXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IC4yNXM7XFxcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAuMjVzO1xcXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXM7XFxcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cywgLXdlYmtpdC1ib3gtc2hhZG93IC4yNXM7XFxcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXFxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcXFxuXFxcXG4uY2FyZC1pbWFnZSB7XFxcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcXFxuICAuY2FyZC1pbWFnZSBpbWcge1xcXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xcXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXFxcbiAgICBsZWZ0OiAwO1xcXFxuICAgIHJpZ2h0OiAwO1xcXFxuICAgIHRvcDogMDtcXFxcbiAgICBib3R0b206IDA7XFxcXG4gICAgd2lkdGg6IDEwMCU7IH1cXFxcblxcXFxuLmNhcmQtY29udGVudCB7XFxcXG4gIHBhZGRpbmc6IDI0cHg7XFxcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4OyB9XFxcXG4gIC5jYXJkLWNvbnRlbnQgLmNhcmQtdGl0bGUge1xcXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXFxcbiAgICBmb250LXdlaWdodDogMzAwO1xcXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcXFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcXFxuICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcXFxuXFxcIik7XFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3Rlci10aHVtYm5haWwuc2Nzcz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsImltcG9ydCAnc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnc2Nzcy9ncmlkLnNjc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnYXNzZXRzL2xvZ28ucG5nJztcblxuaW1wb3J0IHsgZ2V0RWxlbWVudHMgfSBmcm9tICdzcmMvdXRpbHMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdzcmMvcm91dGVyJztcblxuaW1wb3J0IENoYXJhY3RlcnNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycyc7XG5pbXBvcnQgRGV0YWlsc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzJztcbmltcG9ydCBIb21lQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUnO1xuXG5jbGFzcyBBcHBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBuYXZiYXJJdGVtcyA9IEFycmF5LmZyb20oZ2V0RWxlbWVudHMoKS5uYXZiYXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKSk7XG5cbiAgICBuYXZiYXJJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSW1hZ2Uuc3JjID0gTG9nbztcblxuICAgIGNvbnN0IGxvZ29FbGVtZW50ID0gZ2V0RWxlbWVudHMoKS5uYXZiYXIucXVlcnlTZWxlY3RvcignLmJyYW5kLWxvZ28nKTtcbiAgICBsb2dvRWxlbWVudC5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuXG4gICAgdGhpcy5zZXR1cFJvdXRlcigpO1xuICB9XG5cbiAgc2V0dXBSb3V0ZXIoKSB7XG4gICAgdGhpcy5yb3V0ZXIuY29uZmlnKHsgbW9kZTogJ2hpc3RvcnknIH0pO1xuXG4gICAgdGhpcy5yb3V0ZXIuYWRkKC9ob21lLywgSG9tZUNvbXBvbmVudCk7XG4gICAgdGhpcy5yb3V0ZXIuYWRkKC9jaGFyYWN0ZXJzXFwvKC4qKS8sIENoYXJhY3RlcnNDb21wb25lbnQpO1xuICAgIHRoaXMucm91dGVyLmFkZCgvZGV0YWlsc1xcLyguKikvLCBEZXRhaWxzQ29tcG9uZW50KTtcbiAgICB0aGlzLnJvdXRlci5saXN0ZW4oKTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCcvaG9tZScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudDtcbiIsImltcG9ydCB7IEhhbmRsZUVycm9yLCBnZXRFbGVtZW50cyB9IGZyb20gJ3NyYy91dGlscyc7XG5pbXBvcnQgQ2hhcmFjdGVyc1NlcnZpY2UgZnJvbSAnc2VydmljZXMvY2hhcmFjdGVycyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ3NyYy9yb3V0ZXInO1xuXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9jaGFyYWN0ZXJzLnB1Zyc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jaGFyYWN0ZXJzLnNjc3MnO1xuXG5jbGFzcyBDaGFyYWN0ZXJzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocGFnZSkge1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3RhcnQgPSAxO1xuICAgIHRoaXMucGFnaW5hdGlvbkVuZCA9IDEwO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY2hhcmFjdGVyc1NlcnZpY2UgPSBDaGFyYWN0ZXJzU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNoYXJhY3RlcnNTZXJ2aWNlLmdldEFsbENoYXJhY3RlcnModGhpcy5wYWdlKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHRoaXMucmVuZGVyKGRhdGEsIHRoaXMucGFnZSk7XG4gICAgICB0aGlzLnNldHVwTGlzdGVuZXJzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIEhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1BhZ2luYXRpb24oY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpIHtcbiAgICBpZiAoY3VycmVudFBhZ2UgPiB0aGlzLnBhZ2luYXRpb25FbmQgJiYgY3VycmVudFBhZ2UgPD0gdG90YWxQYWdlcykge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhcnQgPSBjdXJyZW50UGFnZSAtIDk7XG4gICAgICB0aGlzLnBhZ2luYXRpb25FbmQgPSBjdXJyZW50UGFnZTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBhZ2UgPCB0aGlzLnBhZ2luYXRpb25TdGFydCkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9uU3RhcnQgPSBjdXJyZW50UGFnZTtcbiAgICAgIHRoaXMucGFnaW5hdGlvbkVuZCA9IGN1cnJlbnRQYWdlICsgOTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoZGF0YSwgY3VycmVudFBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZVBhcnNlZCA9IHBhcnNlSW50KGN1cnJlbnRQYWdlLCAxMCk7XG4gICAgdGhpcy5jaGVja1BhZ2luYXRpb24oY3VycmVudFBhZ2UsIGRhdGEuaW5mby5wYWdlcyk7XG5cbiAgICBjb25zdCB2YXJzID0ge1xuICAgICAgY2hhcmFjdGVyczogZGF0YS5yZXN1bHRzLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50UGFnZVBhcnNlZCxcbiAgICAgICAgdG90YWw6IGRhdGEuaW5mby5wYWdlcyxcbiAgICAgICAgc3RhcnQ6IHRoaXMucGFnaW5hdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IHRoaXMucGFnaW5hdGlvbkVuZCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGdldEVsZW1lbnRzKCkuY29udGVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh2YXJzKTtcbiAgICBnZXRFbGVtZW50cygpLmNvbnRlbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlO1xuICB9XG5cbiAgc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3NFbGVtZW50cyA9IEFycmF5LmZyb20oZ2V0RWxlbWVudHMoKS5jb250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJykpO1xuICAgIGNvbnN0IGNoYXJhY3RlcnNFbGVtZW50cyA9IEFycmF5LmZyb20oZ2V0RWxlbWVudHMoKS5jb250ZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NoYXJhY3RlcicpKTtcblxuICAgIGxpbmtzRWxlbWVudHMuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY2hhcmFjdGVyc0VsZW1lbnRzLmZvckVhY2goKGNoYXJhY3RlcikgPT4ge1xuICAgICAgY2hhcmFjdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL2RldGFpbHMvJHtjaGFyYWN0ZXIuaWR9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzQ29tcG9uZW50O1xuIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNoYXJhY3RlcnMsIHBhZ2luYXRpb24sIHBhcnNlSW50KSB7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2FwcC1jaGFyYWN0ZXJzXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZsZXgtY29udGFpbmVyXFxcIlxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgY2hhcmFjdGVyc1xuOyhmdW5jdGlvbigpe1xuICB2YXIgJCRvYmogPSBjaGFyYWN0ZXJzO1xuICBpZiAoJ251bWJlcicgPT0gdHlwZW9mICQkb2JqLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgcHVnX2luZGV4MCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgcHVnX2luZGV4MCA8ICQkbDsgcHVnX2luZGV4MCsrKSB7XG4gICAgICAgIHZhciBjaGFyYWN0ZXIgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1xcXCJcXHUwMDNFXFx1MDAzQ2NoYXJhY3Rlci10aHVtYm5haWxcIiArIChcIiBjbGFzcz1cXFwiY2hhcmFjdGVyXFxcIlwiK3B1Zy5hdHRyKFwiZGF0YS1uYW1lXCIsIGNoYXJhY3Rlci5uYW1lLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImRhdGEtaW1hZ2VcIiwgY2hhcmFjdGVyLmltYWdlLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImlkXCIsIGNoYXJhY3Rlci5pZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjaGFyYWN0ZXItdGh1bWJuYWlsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIGNoYXJhY3RlciA9ICQkb2JqW3B1Z19pbmRleDBdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zXFxcIlxcdTAwM0VcXHUwMDNDY2hhcmFjdGVyLXRodW1ibmFpbFwiICsgKFwiIGNsYXNzPVxcXCJjaGFyYWN0ZXJcXFwiXCIrcHVnLmF0dHIoXCJkYXRhLW5hbWVcIiwgY2hhcmFjdGVyLm5hbWUsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwiZGF0YS1pbWFnZVwiLCBjaGFyYWN0ZXIuaW1hZ2UsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwiaWRcIiwgY2hhcmFjdGVyLmlkLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmNoYXJhY3Rlci10aHVtYm5haWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbmNvbnN0IHBhZ2UgPSBwYXJzZUludChwYWdpbmF0aW9uLmN1cnJlbnQpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3VsIGNsYXNzPVxcXCJwYWdpbmF0aW9uIGNlbnRlclxcXCJcXHUwMDNFXCI7XG5pZiAoKHBhZ2UgLSAxKSA9PT0gMCkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xpIGNsYXNzPVxcXCJkaXNhYmxlZFxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiIyFcXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCJcXHUwMDNFY2hldnJvbl9sZWZ0XFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDbGkgY2xhc3M9XFxcIndhdmVzLWVmZmVjdFxcXCJcXHUwMDNFXFx1MDAzQ2FcIiArIChwdWcuYXR0cihcImhyZWZcIiwgYC9jaGFyYWN0ZXJzLyR7cGFnZSAtIDF9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIlxcdTAwM0VjaGV2cm9uX2xlZnRcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG59XG5mb3IobGV0IGkgPSBwYWdpbmF0aW9uLnN0YXJ0OyBpIDw9IHBhZ2luYXRpb24uZW5kOyBpKyspIHtcbntcbmlmIChpID09IHBhZ2UpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIlxcdTAwM0VcXHUwMDNDYVwiICsgKFwiIGNsYXNzPVxcXCJ3aGl0ZS10ZXh0XFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCBgL2NoYXJhY3RlcnMvJHtpfWAsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGkpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NsaSBjbGFzcz1cXFwid2F2ZXMtZWZmZWN0XFxcIlxcdTAwM0VcXHUwMDNDYVwiICsgKHB1Zy5hdHRyKFwiaHJlZlwiLCBgL2NoYXJhY3RlcnMvJHtpfWAsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGkpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXCI7XG59XG59XG59XG5pZiAocGFnZSA9PT0gcGFnaW5hdGlvbi50b3RhbCkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xpIGNsYXNzPVxcXCJkaXNhYmxlZFxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiIyFcXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCJcXHUwMDNFY2hldnJvbl9yaWdodFxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2xpIGNsYXNzPVxcXCJ3YXZlcy1lZmZlY3RcXFwiXFx1MDAzRVxcdTAwM0NhXCIgKyAocHVnLmF0dHIoXCJocmVmXCIsIGAvY2hhcmFjdGVycy8ke3BhZ2UgKyAxfWAsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCJcXHUwMDNFY2hldnJvbl9yaWdodFxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhcHAtY2hhcmFjdGVyc1xcdTAwM0VcIjt9LmNhbGwodGhpcyxcImNoYXJhY3RlcnNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNoYXJhY3RlcnM6dHlwZW9mIGNoYXJhY3RlcnMhPT1cInVuZGVmaW5lZFwiP2NoYXJhY3RlcnM6dW5kZWZpbmVkLFwicGFnaW5hdGlvblwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucGFnaW5hdGlvbjp0eXBlb2YgcGFnaW5hdGlvbiE9PVwidW5kZWZpbmVkXCI/cGFnaW5hdGlvbjp1bmRlZmluZWQsXCJwYXJzZUludFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucGFyc2VJbnQ6dHlwZW9mIHBhcnNlSW50IT09XCJ1bmRlZmluZWRcIj9wYXJzZUludDp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGdldEVsZW1lbnRzLCBIYW5kbGVFcnJvciB9IGZyb20gJ3NyYy91dGlscyc7XG5pbXBvcnQgQ2hhcmFjdGVyc1NlcnZpY2UgZnJvbSAnc2VydmljZXMvY2hhcmFjdGVycyc7XG5cbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2RldGFpbHMucHVnJztcbmltcG9ydCAnLi9kZXRhaWxzLnNjc3MnO1xuXG5jbGFzcyBEZXRhaWxzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5jaGFyYWN0ZXJzU2VydmljZSA9IENoYXJhY3RlcnNTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQ29tcG9uZW50KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2hhcmFjdGVyc1NlcnZpY2UuZ2V0Q2hhcmFjdGVyQnlJZCh0aGlzLmlkKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIGdldEVsZW1lbnRzKCkuY29udGVudC5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7IGNoYXJhY3RlcjogZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgSGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzQ29tcG9uZW50O1xuIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKGNoYXJhY3Rlcikge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhcHAtZGV0YWlsc1xcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJpbWFnZS1jb250YWluZXJcXFwiXFx1MDAzRVxcdTAwM0NoNFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBjaGFyYWN0ZXIubmFtZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmg0XFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcInNyY1wiLCBjaGFyYWN0ZXIuaW1hZ2UsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtOFxcXCJcXHUwMDNFXFx1MDAzQ2g0XFx1MDAzRUNoYXJhY3RlciBEYXRhXFx1MDAzQ1xcdTAwMkZoNFxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NiXFx1MDAzRVN0YXR1czogXFx1MDAzQ1xcdTAwMkZiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGNoYXJhY3Rlci5zdGF0dXMpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb24taXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2JcXHUwMDNFU3BlY2llOiBcXHUwMDNDXFx1MDAyRmJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2hhcmFjdGVyLnNwZWNpZXMpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb24taXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2JcXHUwMDNFR2VuZGVyOiBcXHUwMDNDXFx1MDAyRmJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gY2hhcmFjdGVyLmdlbmRlcikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29sbGVjdGlvbi1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYlxcdTAwM0VPcmlnaW46IFxcdTAwM0NcXHUwMDJGYlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBjaGFyYWN0ZXIub3JpZ2luLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb24taXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2JcXHUwMDNFRGVzY3JpcHRpb246IFxcdTAwM0NcXHUwMDJGYlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQb3NzaW11cyBub3N0cnVtIHRlbmV0dXIgdm9sdXB0YXR1bS4gQmVhdGFlIG1hZ25pIHBlcnNwaWNpYXRpcyBjdWxwYSBhY2N1c2FtdXMgcGxhY2VhdCB2b2x1cHRhdGVtIHZlbmlhbSB2b2x1cHRhdGlidXMgZG9sb3JlbSEgRW5pbSwgbnVsbGEhIE9mZmljaWlzIGN1bXF1ZSBzYWVwZSB2ZWxpdCBvZmZpY2lhIHZvbHVwdGF0ZXMhXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYXBwLWRldGFpbHNcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJjaGFyYWN0ZXJcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNoYXJhY3Rlcjp0eXBlb2YgY2hhcmFjdGVyIT09XCJ1bmRlZmluZWRcIj9jaGFyYWN0ZXI6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBnZXRFbGVtZW50cywgSGFuZGxlRXJyb3IgfSBmcm9tICdzcmMvdXRpbHMnO1xuaW1wb3J0IENoYXJhY3RlcnNTZXJ2aWNlIGZyb20gJ3NlcnZpY2VzL2NoYXJhY3RlcnMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICdzcmMvcm91dGVyJztcblxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaG9tZS5wdWcnO1xuaW1wb3J0ICcuL2hvbWUuc2Nzcyc7XG5cbmNsYXNzIEhvbWVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYXJhY3RlcnMgPSBbXTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmNoYXJhY3RlcnNTZXJ2aWNlID0gQ2hhcmFjdGVyc1NlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGVDb21wb25lbnQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jaGFyYWN0ZXJzU2VydmljZS5nZXRNYWluQ2hhcmFjdGVycygpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gZGF0YTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIEhhbmRsZUVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgZ2V0RWxlbWVudHMoKS5jb250ZW50LmlubmVySFRNTCA9IHRlbXBsYXRlKHsgY2hhcmFjdGVyczogdGhpcy5jaGFyYWN0ZXJzIH0pO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGdldEVsZW1lbnRzKCkuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnL2NoYXJhY3RlcnMvMScpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVDb21wb25lbnQ7XG4iLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoY2hhcmFjdGVycykge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NhcHAtaG9tZVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbGV4LWNvbnRhaW5lclxcXCJcXHUwMDNFXCI7XG4vLyBpdGVyYXRlIGNoYXJhY3RlcnNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gY2hhcmFjdGVycztcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIHB1Z19pbmRleDAgPSAwLCAkJGwgPSAkJG9iai5sZW5ndGg7IHB1Z19pbmRleDAgPCAkJGw7IHB1Z19pbmRleDArKykge1xuICAgICAgICB2YXIgY2hhcmFjdGVyID0gJCRvYmpbcHVnX2luZGV4MF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb2wteHMtMTIgY29sLXNtLTRcXFwiXFx1MDAzRVxcdTAwM0NjaGFyYWN0ZXItdGh1bWJuYWlsXCIgKyAocHVnLmF0dHIoXCJkYXRhLW5hbWVcIiwgY2hhcmFjdGVyLm5hbWUsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwiZGF0YS1pbWFnZVwiLCBjaGFyYWN0ZXIuaW1hZ2UsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGY2hhcmFjdGVyLXRodW1ibmFpbFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBwdWdfaW5kZXgwIGluICQkb2JqKSB7XG4gICAgICAkJGwrKztcbiAgICAgIHZhciBjaGFyYWN0ZXIgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbC14cy0xMiBjb2wtc20tNFxcXCJcXHUwMDNFXFx1MDAzQ2NoYXJhY3Rlci10aHVtYm5haWxcIiArIChwdWcuYXR0cihcImRhdGEtbmFtZVwiLCBjaGFyYWN0ZXIubmFtZSwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJkYXRhLWltYWdlXCIsIGNoYXJhY3Rlci5pbWFnZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjaGFyYWN0ZXItdGh1bWJuYWlsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgIH1cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCByaWdodFxcXCJcXHUwMDNFVmVyIHRvZG9zXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhcHAtaG9tZVxcdTAwM0VcIjt9LmNhbGwodGhpcyxcImNoYXJhY3RlcnNcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLmNoYXJhY3RlcnM6dHlwZW9mIGNoYXJhY3RlcnMhPT1cInVuZGVmaW5lZFwiP2NoYXJhY3RlcnM6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NTUwOWYyZWM5NzI1YjNjZWYwN2VlZmU2NTFhNGE4Zi5wbmdcIjsiLCJjb25zdCBDT05GSUcgPSB7XG4gIEFQSV9VUkw6ICdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImltcG9ydCBBcHBDb21wb25lbnQgZnJvbSAnLi9hcHAvYXBwJztcbmltcG9ydCAnY2hhcmFjdGVyLXRodW1ibmFpbC9kaXN0JztcblxuY29uc3QgYXBwID0gbmV3IEFwcENvbXBvbmVudCgpO1xuYXBwLmNyZWF0ZUNvbXBvbmVudCgpO1xuIiwiY2xhc3MgUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMucm9vdCA9ICcvJztcbiAgfVxuXG4gIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucyAmJiBvcHRpb25zLm1vZGUgJiYgb3B0aW9ucy5tb2RlID09PSAnaGlzdG9yeScgJiYgISEoaGlzdG9yeS5wdXNoU3RhdGUpID8gJ2hpc3RvcnknIDogJ2hhc2gnO1xuICAgIHRoaXMucm9vdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5yb290ID8gYC8ke3RoaXMuY2xlYXJTbGFzaGVzKG9wdGlvbnMucm9vdCl9L2AgOiAnLyc7XG4gIH1cblxuICBnZXRGcmFnbWVudCgpIHtcbiAgICBsZXQgZnJhZ21lbnQgPSAnJztcblxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdoaXN0b3J5Jykge1xuICAgICAgZnJhZ21lbnQgPSB0aGlzLmNsZWFyU2xhc2hlcyhkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpKTtcbiAgICAgIGZyYWdtZW50ID0gZnJhZ21lbnQucmVwbGFjZSgvXFw/KC4qKSQvLCAnJyk7XG4gICAgICBmcmFnbWVudCA9IHRoaXMucm9vdCAhPT0gJy8nID8gZnJhZ21lbnQucmVwbGFjZSh0aGlzLnJvb3QsICcnKSA6IGZyYWdtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC/CtyguKikkLyk7XG4gICAgICBmcmFnbWVudCA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbGVhclNsYXNoZXMoZnJhZ21lbnQpO1xuICB9XG5cbiAgY2xlYXJTbGFzaGVzKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC50b1N0cmluZygpLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgfVxuXG4gIGFkZChyZSwgaGFuZGxlcikge1xuICAgIGlmICh0eXBlb2YgcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZXIgPSByZTtcbiAgICAgIHJlID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IHJlLCBoYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVtb3ZlKHBhcmFtKSB7XG4gICAgdGhpcy5yb3V0ZXMuZm9yRWFjaCgocm91dGUpID0+IHtcbiAgICAgIGlmIChyb3V0ZS5oYW5kbGVyID09PSBwYXJhbSB8fCByb3V0ZS5yZS50b1N0cmluZygpID09PSBwYXJhbS50b1N0cmluZygpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yb3V0ZXMuaW5kZXhPZihyb3V0ZSk7XG4gICAgICAgIHRoaXMucm91dGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmbHVzaCgpIHtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5yb290ID0gJy8nO1xuICB9XG5cbiAgY2hlY2soZikge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZiB8fCB0aGlzLmdldEZyYWdtZW50KCk7XG5cbiAgICB0aGlzLnJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSBmcmFnbWVudC5tYXRjaChyb3V0ZS5yZSk7XG5cbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5zaGlmdCgpO1xuICAgICAgICBjb25zdCBoYW5kbGVySW5zdGFuY2UgPSBuZXcgcm91dGUuaGFuZGxlcihtYXRjaCk7XG4gICAgICAgIGhhbmRsZXJJbnN0YW5jZS5jcmVhdGVDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlbigpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgY3VycmVudCA9IHNlbGYuZ2V0RnJhZ21lbnQoKTtcblxuICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQgIT09IHNlbGYuZ2V0RnJhZ21lbnQoKSkge1xuICAgICAgICBjdXJyZW50ID0gc2VsZi5nZXRGcmFnbWVudCgpO1xuICAgICAgICBzZWxmLmNoZWNrKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmbiwgNTApO1xuICB9XG5cbiAgbmF2aWdhdGUocGF0aCkge1xuICAgIHBhdGggPSBwYXRoID8gcGF0aCA6ICcnO1xuXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hpc3RvcnknKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgJHt0aGlzLnJvb3R9JHt0aGlzLmNsZWFyU2xhc2hlcyhwYXRoKX1gKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIyguKikkLywgJycpfSMke3BhdGh9YDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL2xpYi9Sb3V0ZXInO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuY29uc3QgQ2hhcmFjdGVyc1NlcnZpY2UgPSB7XG4gIGdldE1haW5DaGFyYWN0ZXJzOiAoKSA9PiBmZXRjaChgJHtDb25maWcuQVBJX1VSTH0vY2hhcmFjdGVyLzEsMiwzYCksXG4gIGdldEFsbENoYXJhY3RlcnM6IChwYWdlKSA9PiBmZXRjaChgJHtDb25maWcuQVBJX1VSTH0vY2hhcmFjdGVyLz9wYWdlPSR7cGFnZX1gKSxcbiAgZ2V0Q2hhcmFjdGVyQnlJZDogKGlkKSA9PiBmZXRjaChgJHtDb25maWcuQVBJX1VSTH0vY2hhcmFjdGVyLyR7aWR9YCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzU2VydmljZTtcbiIsImV4cG9ydCBjb25zdCBIYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbGVtZW50cyA9ICgpID0+ICh7XG4gIGFwcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLFxuICBuYXZiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtd3JhcHBlcicpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gIGZvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtZm9vdGVyJyksXG59KTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=