/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/gamix-webfont.woff2 */ "./src/fonts/gamix-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/gamix-webfont.woff */ "./src/fonts/gamix-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'gamixregular';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\nbody {\r\n    background-color: darkslategrey;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: medium solid black;\r\n    height: auto;\r\n    min-width: 500px;\r\n    max-width: 750px;\r\n    background-color: lightgray;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.title {\r\n    margin: 1em;\r\n    font-family: 'gamixregular';\r\n    font-size: 2em;\r\n}\r\n\r\n.tabs {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(0, 1fr));\r\n    grid-auto-flow: column;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.tabbutton {\r\n    font-family: 'gamixregular';\r\n    color:black;\r\n    font-size: 3em;\r\n    background-color: lightgray;\r\n    width: 100%;\r\n}\r\n\r\n.forret {\r\n    margin: 50px;\r\n}\r\n\r\n.quotebox {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    font-style: oblique;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.img {\r\n    width:400px;\r\n    height:200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu {\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-group-heading {\r\n    font-family:'gamixregular';\r\n    margin: 1em;\r\n    padding-bottom: 1em;\r\n    border-bottom: 2px solid darkgray;\r\n}\r\n\r\n.menu-group {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5em;\r\n    padding: 1.5em 0;\r\n}\r\n\r\n.menu-item-image {\r\n    width: 80px;\r\n    height: 80px;\r\n    flex-shrink: 0;\r\n    object-fit: cover;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu-item-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.menu-item-name {\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-description {\r\n    line-height: 1.6;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .menu {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .menu-group {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    .menu-item-image {\r\n        width: 125px;\r\n        height: 125px;\r\n        flex-shrink: 0;\r\n        object-fit: cover;\r\n        margin-right: 1.5em;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B;+DACqD;IACrD,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;IAClB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,gDAAgD;IAChD,sBAAsB;IACtB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,2BAA2B;IAC3B,WAAW;IACX,cAAc;IACd,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,qCAAqC;IACzC;IACA;QACI,YAAY;QACZ,aAAa;QACb,cAAc;QACd,iBAAiB;QACjB,mBAAmB;IACvB;AACJ","sourcesContent":["@font-face {\r\n    font-family: 'gamixregular';\r\n    src: url('./fonts/gamix-webfont.woff2') format('woff2'),\r\n         url('./fonts/gamix-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\nbody {\r\n    background-color: darkslategrey;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: medium solid black;\r\n    height: auto;\r\n    min-width: 500px;\r\n    max-width: 750px;\r\n    background-color: lightgray;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.title {\r\n    margin: 1em;\r\n    font-family: 'gamixregular';\r\n    font-size: 2em;\r\n}\r\n\r\n.tabs {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(0, 1fr));\r\n    grid-auto-flow: column;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.tabbutton {\r\n    font-family: 'gamixregular';\r\n    color:black;\r\n    font-size: 3em;\r\n    background-color: lightgray;\r\n    width: 100%;\r\n}\r\n\r\n.forret {\r\n    margin: 50px;\r\n}\r\n\r\n.quotebox {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    font-style: oblique;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.img {\r\n    width:400px;\r\n    height:200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu {\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-group-heading {\r\n    font-family:'gamixregular';\r\n    margin: 1em;\r\n    padding-bottom: 1em;\r\n    border-bottom: 2px solid darkgray;\r\n}\r\n\r\n.menu-group {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5em;\r\n    padding: 1.5em 0;\r\n}\r\n\r\n.menu-item-image {\r\n    width: 80px;\r\n    height: 80px;\r\n    flex-shrink: 0;\r\n    object-fit: cover;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu-item-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.menu-item-name {\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-description {\r\n    line-height: 1.6;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .menu {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .menu-group {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    .menu-item-image {\r\n        width: 125px;\r\n        height: 125px;\r\n        flex-shrink: 0;\r\n        object-fit: cover;\r\n        margin-right: 1.5em;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "component": () => (/* binding */ component),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _tabs_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/about */ "./src/tabs/about.js");
/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/home */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/menu */ "./src/tabs/menu.js");






const createTitle = (innerText) => {
    const title = component("title", "div");
    title.innerText = innerText;
    createContainer.container.appendChild(title);
};

function component(name, type) {
    const element = document.createElement(type);
    if (name != "") element.classList.add(name);
    return element;
}

const createContent = (() => {
    const contents = component("contents", "div");
    document.body.appendChild(contents);
    return {contents};
})();

const createButtons = (() => {
    const tabs = component("tabs", "div");
    const homeButton = component("tabbutton", "button");
    const menuButton = component("tabbutton", "button");
    const aboutButton = component("tabbutton", "button");
    homeButton.innerText = "home";
    menuButton.innerText = "menu";
    aboutButton.innerText = "about";
    tabs.appendChild(homeButton);
    tabs.appendChild(menuButton);
    tabs.appendChild(aboutButton);
    createContent.contents.appendChild(tabs);
    return {homeButton, menuButton, aboutButton};
})();

const createContainer = (() => {
    const container = component("container", "div");
    createContent.contents.appendChild(container);
    return {container};
})();



const tabSelector = (() => {
    (0,_tabs_home__WEBPACK_IMPORTED_MODULE_2__.home)();
    createButtons.menuButton.onclick = () => {
        (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_3__.menu)();
    };
    createButtons.homeButton.onclick = () => {
        (0,_tabs_home__WEBPACK_IMPORTED_MODULE_2__.home)();
    };
    createButtons.aboutButton.onclick = () => {
        (0,_tabs_about__WEBPACK_IMPORTED_MODULE_1__.about)();
    };
})();

const createFooter = (() => {
    const footer = component("footer", "footer");
    document.body.appendChild(footer);
    const footerText = component("footerText", "p");
    footerText.innerText = "Made by UrinTrolden";
    document.body.appendChild(footer);
    footer.appendChild(footerText);
})();

/***/ }),

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _pics_directions_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/directions.png */ "./src/pics/directions.png");




const about = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.innerHTML = "";
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Find epic gamer food palace");

    const pic = new Image();
    pic.src = _pics_directions_png__WEBPACK_IMPORTED_MODULE_1__;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.appendChild(pic);
    pic.classList.add("img");
    const picDescription = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("description", "p");
    picDescription.innerText = "Som det ses på billedet går du bare hen af vejen så er du ved EPIC GAMER FOOD PALACE";
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.appendChild(picDescription);
}

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _pics_gamer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/gamer.png */ "./src/pics/gamer.png");




const home = () => {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.innerHTML = "";
    const quoteBox = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)('quotebox', 'div');
    
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTitle)("Velkommen til epic gamer food palace");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.appendChild(quoteBox);

    const pic = new Image();
    pic.src = _pics_gamer_png__WEBPACK_IMPORTED_MODULE_1__;

    const quote = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)('quote', 'h3');
    quote.innerText = "'Jeg elsker mad' - Jehova";

    quoteBox.appendChild(pic);
    quoteBox.appendChild(quote);

};

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _pics_durumsblade_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pics/durumsblade.png */ "./src/pics/durumsblade.png");
/* harmony import */ var _pics_durumsring_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pics/durumsring.png */ "./src/pics/durumsring.png");
/* harmony import */ var _pics_durumsshield_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pics/durumsshield.png */ "./src/pics/durumsshield.png");








const createMenuGroupHeading = (mealDescription) => {
    const meal = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-group-heading", 'h2');
    meal.innerText = mealDescription;
    return meal;
}

const createMenuItem = (itemImage, itemName, itemPrice, itemDescription) => {
    let menuItemContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item", "div");
    let menuItemImage = new Image();
    menuItemImage.src = itemImage;
    menuItemImage.classList = "menu-item-image";
    let menuItemText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item-text", "div");
    let menuItemHeading = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item-heading", "h3");
    let menuItemName = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item-name", "span");
    let menuItemPrice = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item-price", "span");
    let menuItemDescription = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-item-description", "p");

    menuItemName.innerText = itemName;
    menuItemPrice.innerText = itemPrice;
    menuItemDescription.innerText = itemDescription;    

    menuItemContainer.appendChild(menuItemImage);
    menuItemContainer.appendChild(menuItemText);
    menuItemText.appendChild(menuItemHeading);
    menuItemHeading.appendChild(menuItemName);
    menuItemHeading.appendChild(menuItemPrice);
    menuItemText.appendChild(menuItemDescription);
    return menuItemContainer;
}

const menu = () => {
    //clear container
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.innerHTML = "";
    let menuContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu", "div");
    _index_js__WEBPACK_IMPORTED_MODULE_0__.createContainer.container.appendChild(menuContainer);
    menuContainer.appendChild(createMenuGroupHeading("Durum"));

    let menuGroupContainer = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.component)("menu-group", "div");
    menuContainer.appendChild(menuGroupContainer);
    
    let durumsBladeItem = createMenuItem(_pics_durumsblade_png__WEBPACK_IMPORTED_MODULE_1__, "Durums' Blade", "39 kr.", "Prøv den udsøgte durums blade varmt anbefalet af madkritikere herunder den verdenskendte Doran.");
    let durumsRingItem = createMenuItem(_pics_durumsring_png__WEBPACK_IMPORTED_MODULE_2__, "Durums' Ring", "39 kr.", "Prøv den udsøgte durums ring varmt anbefalet af madkritikere herunder den verdenskendte Doran.");
    let durumsShieldItem = createMenuItem(_pics_durumsshield_png__WEBPACK_IMPORTED_MODULE_3__, "Durums' Shield", "39 kr.", "Prøv den udsøgte durums shield varmt anbefalet af madkritikere herunder den verdenskendte Doran.");


    menuGroupContainer.appendChild(durumsBladeItem);
    menuGroupContainer.appendChild(durumsRingItem);
    menuGroupContainer.appendChild(durumsShieldItem);


    
    /*
    let durumOne = component("menu-item", "div");
    durumOne.innerText = "Durums Blade";
    menuGroupContainer.appendChild(durumOne);
    let durumTwo = component("menu-item", "div");
    durumTwo.innerText = "Durums Ring";
    menuGroupContainer.appendChild(durumTwo);
    let durumThree = component("menu-item", "div");
    durumThree.innerText = "Durums Shield";
    menuGroupContainer.appendChild(durumThree);
    */
    
    /*
    createTitle("Foretter");
    createContainer.container.appendChild(createMeal("forret", durumsBlade, "Durums' Blade 59,-"));
    createContainer.container.appendChild(createMeal("forret", durumsRing, "Durums' Ring 59,-"));
    */
    
};

/***/ }),

/***/ "./src/fonts/gamix-webfont.woff":
/*!**************************************!*\
  !*** ./src/fonts/gamix-webfont.woff ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e30298bb2468dbc6.woff";

/***/ }),

/***/ "./src/fonts/gamix-webfont.woff2":
/*!***************************************!*\
  !*** ./src/fonts/gamix-webfont.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd120844d1971348.woff2";

/***/ }),

/***/ "./src/pics/directions.png":
/*!*********************************!*\
  !*** ./src/pics/directions.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9063a21dc26411fb.png";

/***/ }),

/***/ "./src/pics/durumsblade.png":
/*!**********************************!*\
  !*** ./src/pics/durumsblade.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e80bf7d3ac111a0.png";

/***/ }),

/***/ "./src/pics/durumsring.png":
/*!*********************************!*\
  !*** ./src/pics/durumsring.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2973b625c58b3e45.png";

/***/ }),

/***/ "./src/pics/durumsshield.png":
/*!***********************************!*\
  !*** ./src/pics/durumsshield.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dfc967fedba1c3d2.png";

/***/ }),

/***/ "./src/pics/gamer.png":
/*!****************************!*\
  !*** ./src/pics/gamer.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3704ddb51d7620f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/resturant-page/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz9mODkwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2dhbWl4LXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2dhbWl4LXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdnYW1peHJlZ3VsYXInO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdnYW1peHJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50YWJidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ2dhbWl4cmVndWxhcic7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcnJldCB7XFxyXFxuICAgIG1hcmdpbjogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1b3RlYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgICB3aWR0aDo0MDBweDtcXHJcXG4gICAgaGVpZ2h0OjIwMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWdyb3VwLWhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ2FwOiAxLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWhlYWRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1ncm91cCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWl0ZW0taW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCOytEQUNxRDtJQUNyRCxtQkFBbUI7SUFDbkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUNBQXFDO0lBQ3pDO0lBQ0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvZ2FtaXgtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgICAgICB1cmwoJy4vZm9udHMvZ2FtaXgtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyZXk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IG1lZGl1bSBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdnYW1peHJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50YWJidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ2dhbWl4cmVndWxhcic7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcnJldCB7XFxyXFxuICAgIG1hcmdpbjogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1b3RlYm94IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgICB3aWR0aDo0MDBweDtcXHJcXG4gICAgaGVpZ2h0OjIwMHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWdyb3VwLWhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JvdXAge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ2FwOiAxLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMS41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWhlYWRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1uYW1lIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1ncm91cCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LWl0ZW0taW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL3RhYnMvYWJvdXQnO1xyXG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi90YWJzL2hvbWUnO1xyXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi90YWJzL21lbnUnO1xyXG5leHBvcnQge2NvbXBvbmVudCwgY3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZX1cclxuXHJcbmNvbnN0IGNyZWF0ZVRpdGxlID0gKGlubmVyVGV4dCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjb21wb25lbnQoXCJ0aXRsZVwiLCBcImRpdlwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGlubmVyVGV4dDtcclxuICAgIGNyZWF0ZUNvbnRhaW5lci5jb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KG5hbWUsIHR5cGUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgaWYgKG5hbWUgIT0gXCJcIikgZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudHMgPSBjb21wb25lbnQoXCJjb250ZW50c1wiLCBcImRpdlwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudHMpO1xyXG4gICAgcmV0dXJuIHtjb250ZW50c307XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjcmVhdGVCdXR0b25zID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHRhYnMgPSBjb21wb25lbnQoXCJ0YWJzXCIsIFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGNvbXBvbmVudChcInRhYmJ1dHRvblwiLCBcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBjb21wb25lbnQoXCJ0YWJidXR0b25cIiwgXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGNvbXBvbmVudChcInRhYmJ1dHRvblwiLCBcImJ1dHRvblwiKTtcclxuICAgIGhvbWVCdXR0b24uaW5uZXJUZXh0ID0gXCJob21lXCI7XHJcbiAgICBtZW51QnV0dG9uLmlubmVyVGV4dCA9IFwibWVudVwiO1xyXG4gICAgYWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gXCJhYm91dFwiO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcclxuICAgIGNyZWF0ZUNvbnRlbnQuY29udGVudHMuYXBwZW5kQ2hpbGQodGFicyk7XHJcbiAgICByZXR1cm4ge2hvbWVCdXR0b24sIG1lbnVCdXR0b24sIGFib3V0QnV0dG9ufTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBjb21wb25lbnQoXCJjb250YWluZXJcIiwgXCJkaXZcIik7XHJcbiAgICBjcmVhdGVDb250ZW50LmNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICByZXR1cm4ge2NvbnRhaW5lcn07XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbmNvbnN0IHRhYlNlbGVjdG9yID0gKCgpID0+IHtcclxuICAgIGhvbWUoKTtcclxuICAgIGNyZWF0ZUJ1dHRvbnMubWVudUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIG1lbnUoKTtcclxuICAgIH07XHJcbiAgICBjcmVhdGVCdXR0b25zLmhvbWVCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBob21lKCk7XHJcbiAgICB9O1xyXG4gICAgY3JlYXRlQnV0dG9ucy5hYm91dEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGFib3V0KCk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGNvbXBvbmVudChcImZvb3RlclwiLCBcImZvb3RlclwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBjb21wb25lbnQoXCJmb290ZXJUZXh0XCIsIFwicFwiKTtcclxuICAgIGZvb3RlclRleHQuaW5uZXJUZXh0ID0gXCJNYWRlIGJ5IFVyaW5Ucm9sZGVuXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcbn0pKCk7IiwiaW1wb3J0IHsgY29tcG9uZW50LCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCBkaXJlY3Rpb25zIGZyb20gJy4uL3BpY3MvZGlyZWN0aW9ucy5wbmcnO1xyXG5leHBvcnQgeyBhYm91dCB9O1xyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjcmVhdGVUaXRsZShcIkZpbmQgZXBpYyBnYW1lciBmb29kIHBhbGFjZVwiKTtcclxuXHJcbiAgICBjb25zdCBwaWMgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHBpYy5zcmMgPSBkaXJlY3Rpb25zO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChwaWMpO1xyXG4gICAgcGljLmNsYXNzTGlzdC5hZGQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBwaWNEZXNjcmlwdGlvbiA9IGNvbXBvbmVudChcImRlc2NyaXB0aW9uXCIsIFwicFwiKTtcclxuICAgIHBpY0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IFwiU29tIGRldCBzZXMgcMOlIGJpbGxlZGV0IGfDpXIgZHUgYmFyZSBoZW4gYWYgdmVqZW4gc8OlIGVyIGR1IHZlZCBFUElDIEdBTUVSIEZPT0QgUEFMQUNFXCI7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKHBpY0Rlc2NyaXB0aW9uKTtcclxufSIsImltcG9ydCB7IGNvbXBvbmVudCwgY3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUaXRsZSB9IGZyb20gXCIuLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgZ2FtZXIgZnJvbSAnLi4vcGljcy9nYW1lci5wbmcnO1xyXG5leHBvcnQgeyBob21lIH07XHJcblxyXG5jb25zdCBob21lID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc3QgcXVvdGVCb3ggPSBjb21wb25lbnQoJ3F1b3RlYm94JywgJ2RpdicpO1xyXG4gICAgXHJcbiAgICBjcmVhdGVUaXRsZShcIlZlbGtvbW1lbiB0aWwgZXBpYyBnYW1lciBmb29kIHBhbGFjZVwiKTtcclxuICAgIGNyZWF0ZUNvbnRhaW5lci5jb250YWluZXIuYXBwZW5kQ2hpbGQocXVvdGVCb3gpO1xyXG5cclxuICAgIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGljLnNyYyA9IGdhbWVyO1xyXG5cclxuICAgIGNvbnN0IHF1b3RlID0gY29tcG9uZW50KCdxdW90ZScsICdoMycpO1xyXG4gICAgcXVvdGUuaW5uZXJUZXh0ID0gXCInSmVnIGVsc2tlciBtYWQnIC0gSmVob3ZhXCI7XHJcblxyXG4gICAgcXVvdGVCb3guYXBwZW5kQ2hpbGQocGljKTtcclxuICAgIHF1b3RlQm94LmFwcGVuZENoaWxkKHF1b3RlKTtcclxuXHJcbn07IiwiaW1wb3J0IHsgY29tcG9uZW50LCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCBkdXJ1bXNCbGFkZSBmcm9tICcuLi9waWNzL2R1cnVtc2JsYWRlLnBuZyc7XHJcbmltcG9ydCBkdXJ1bXNSaW5nIGZyb20gJy4uL3BpY3MvZHVydW1zcmluZy5wbmcnO1xyXG5pbXBvcnQgZHVydW1zU2hpZWxkIGZyb20gJy4uL3BpY3MvZHVydW1zc2hpZWxkLnBuZyc7XHJcblxyXG5cclxuZXhwb3J0IHsgbWVudSB9O1xyXG5cclxuY29uc3QgY3JlYXRlTWVudUdyb3VwSGVhZGluZyA9IChtZWFsRGVzY3JpcHRpb24pID0+IHtcclxuICAgIGNvbnN0IG1lYWwgPSBjb21wb25lbnQoXCJtZW51LWdyb3VwLWhlYWRpbmdcIiwgJ2gyJyk7XHJcbiAgICBtZWFsLmlubmVyVGV4dCA9IG1lYWxEZXNjcmlwdGlvbjtcclxuICAgIHJldHVybiBtZWFsO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChpdGVtSW1hZ2UsIGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgbGV0IG1lbnVJdGVtQ29udGFpbmVyID0gY29tcG9uZW50KFwibWVudS1pdGVtXCIsIFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnVJdGVtSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIG1lbnVJdGVtSW1hZ2Uuc3JjID0gaXRlbUltYWdlO1xyXG4gICAgbWVudUl0ZW1JbWFnZS5jbGFzc0xpc3QgPSBcIm1lbnUtaXRlbS1pbWFnZVwiO1xyXG4gICAgbGV0IG1lbnVJdGVtVGV4dCA9IGNvbXBvbmVudChcIm1lbnUtaXRlbS10ZXh0XCIsIFwiZGl2XCIpO1xyXG4gICAgbGV0IG1lbnVJdGVtSGVhZGluZyA9IGNvbXBvbmVudChcIm1lbnUtaXRlbS1oZWFkaW5nXCIsIFwiaDNcIik7XHJcbiAgICBsZXQgbWVudUl0ZW1OYW1lID0gY29tcG9uZW50KFwibWVudS1pdGVtLW5hbWVcIiwgXCJzcGFuXCIpO1xyXG4gICAgbGV0IG1lbnVJdGVtUHJpY2UgPSBjb21wb25lbnQoXCJtZW51LWl0ZW0tcHJpY2VcIiwgXCJzcGFuXCIpO1xyXG4gICAgbGV0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBjb21wb25lbnQoXCJtZW51LWl0ZW0tZGVzY3JpcHRpb25cIiwgXCJwXCIpO1xyXG5cclxuICAgIG1lbnVJdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtTmFtZTtcclxuICAgIG1lbnVJdGVtUHJpY2UuaW5uZXJUZXh0ID0gaXRlbVByaWNlO1xyXG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBpdGVtRGVzY3JpcHRpb247ICAgIFxyXG5cclxuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtSW1hZ2UpO1xyXG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1UZXh0KTtcclxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChtZW51SXRlbUhlYWRpbmcpO1xyXG4gICAgbWVudUl0ZW1IZWFkaW5nLmFwcGVuZENoaWxkKG1lbnVJdGVtTmFtZSk7XHJcbiAgICBtZW51SXRlbUhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUl0ZW1QcmljZSk7XHJcbiAgICBtZW51SXRlbVRleHQuYXBwZW5kQ2hpbGQobWVudUl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICByZXR1cm4gbWVudUl0ZW1Db250YWluZXI7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICAvL2NsZWFyIGNvbnRhaW5lclxyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbGV0IG1lbnVDb250YWluZXIgPSBjb21wb25lbnQoXCJtZW51XCIsIFwiZGl2XCIpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUdyb3VwSGVhZGluZyhcIkR1cnVtXCIpKTtcclxuXHJcbiAgICBsZXQgbWVudUdyb3VwQ29udGFpbmVyID0gY29tcG9uZW50KFwibWVudS1ncm91cFwiLCBcImRpdlwiKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUdyb3VwQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgbGV0IGR1cnVtc0JsYWRlSXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGR1cnVtc0JsYWRlLCBcIkR1cnVtcycgQmxhZGVcIiwgXCIzOSBrci5cIiwgXCJQcsO4diBkZW4gdWRzw7hndGUgZHVydW1zIGJsYWRlIHZhcm10IGFuYmVmYWxldCBhZiBtYWRrcml0aWtlcmUgaGVydW5kZXIgZGVuIHZlcmRlbnNrZW5kdGUgRG9yYW4uXCIpO1xyXG4gICAgbGV0IGR1cnVtc1JpbmdJdGVtID0gY3JlYXRlTWVudUl0ZW0oZHVydW1zUmluZywgXCJEdXJ1bXMnIFJpbmdcIiwgXCIzOSBrci5cIiwgXCJQcsO4diBkZW4gdWRzw7hndGUgZHVydW1zIHJpbmcgdmFybXQgYW5iZWZhbGV0IGFmIG1hZGtyaXRpa2VyZSBoZXJ1bmRlciBkZW4gdmVyZGVuc2tlbmR0ZSBEb3Jhbi5cIik7XHJcbiAgICBsZXQgZHVydW1zU2hpZWxkSXRlbSA9IGNyZWF0ZU1lbnVJdGVtKGR1cnVtc1NoaWVsZCwgXCJEdXJ1bXMnIFNoaWVsZFwiLCBcIjM5IGtyLlwiLCBcIlByw7h2IGRlbiB1ZHPDuGd0ZSBkdXJ1bXMgc2hpZWxkIHZhcm10IGFuYmVmYWxldCBhZiBtYWRrcml0aWtlcmUgaGVydW5kZXIgZGVuIHZlcmRlbnNrZW5kdGUgRG9yYW4uXCIpO1xyXG5cclxuXHJcbiAgICBtZW51R3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVydW1zQmxhZGVJdGVtKTtcclxuICAgIG1lbnVHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChkdXJ1bXNSaW5nSXRlbSk7XHJcbiAgICBtZW51R3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVydW1zU2hpZWxkSXRlbSk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgLypcclxuICAgIGxldCBkdXJ1bU9uZSA9IGNvbXBvbmVudChcIm1lbnUtaXRlbVwiLCBcImRpdlwiKTtcclxuICAgIGR1cnVtT25lLmlubmVyVGV4dCA9IFwiRHVydW1zIEJsYWRlXCI7XHJcbiAgICBtZW51R3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVydW1PbmUpO1xyXG4gICAgbGV0IGR1cnVtVHdvID0gY29tcG9uZW50KFwibWVudS1pdGVtXCIsIFwiZGl2XCIpO1xyXG4gICAgZHVydW1Ud28uaW5uZXJUZXh0ID0gXCJEdXJ1bXMgUmluZ1wiO1xyXG4gICAgbWVudUdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1cnVtVHdvKTtcclxuICAgIGxldCBkdXJ1bVRocmVlID0gY29tcG9uZW50KFwibWVudS1pdGVtXCIsIFwiZGl2XCIpO1xyXG4gICAgZHVydW1UaHJlZS5pbm5lclRleHQgPSBcIkR1cnVtcyBTaGllbGRcIjtcclxuICAgIG1lbnVHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChkdXJ1bVRocmVlKTtcclxuICAgICovXHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBjcmVhdGVUaXRsZShcIkZvcmV0dGVyXCIpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZWFsKFwiZm9ycmV0XCIsIGR1cnVtc0JsYWRlLCBcIkR1cnVtcycgQmxhZGUgNTksLVwiKSk7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lYWwoXCJmb3JyZXRcIiwgZHVydW1zUmluZywgXCJEdXJ1bXMnIFJpbmcgNTksLVwiKSk7XHJcbiAgICAqL1xyXG4gICAgXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXN0dXJhbnQtcGFnZS9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==