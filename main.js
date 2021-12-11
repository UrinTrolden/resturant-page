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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'gamixregular';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\nbody {\r\n    background-color: darkslategrey;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: medium solid black;\r\n    height: auto;\r\n    min-width: 500px;\r\n    max-width: 700px;\r\n    background-color: lightgray;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.title {\r\n    margin: 1em;\r\n    font-family: 'gamixregular';\r\n    font-size: 2em;\r\n}\r\n\r\n.tabs {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.tabbutton {\r\n    font-family: 'gamixregular';\r\n    color:black;\r\n    font-size: 3em;\r\n    background-color: lightgray;\r\n}\r\n\r\n.forret {\r\n    margin: 50px;\r\n}\r\n\r\n.quotebox {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    font-style: oblique;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.img {\r\n    width:400px;\r\n    height:200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu {\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-group-heading {\r\n    font-family:'gamixregular';\r\n    margin: 1em;\r\n    padding-bottom: 1em;\r\n    border-bottom: 2px solid darkgray;\r\n}\r\n\r\n.menu-group {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5em;\r\n    padding: 1.5em 0;\r\n}\r\n\r\n.menu-item-image {\r\n    width: 80px;\r\n    height: 80px;\r\n    flex-shrink: 0;\r\n    object-fit: cover;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu-item-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.menu-item-name {\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-description {\r\n    line-height: 1.6;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .menu {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .menu-group {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    .menu-item-image {\r\n        width: 125px;\r\n        height: 125px;\r\n        flex-shrink: 0;\r\n        object-fit: cover;\r\n        margin-right: 1.5em;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B;+DACqD;IACrD,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,2BAA2B;IAC3B,kBAAkB;IAClB,SAAS;IACT,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,2BAA2B;IAC3B,WAAW;IACX,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,mBAAmB;IACnB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,qCAAqC;IACzC;IACA;QACI,YAAY;QACZ,aAAa;QACb,cAAc;QACd,iBAAiB;QACjB,mBAAmB;IACvB;AACJ","sourcesContent":["@font-face {\r\n    font-family: 'gamixregular';\r\n    src: url('./fonts/gamix-webfont.woff2') format('woff2'),\r\n         url('./fonts/gamix-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\nbody {\r\n    background-color: darkslategrey;\r\n}\r\n\r\n.contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: medium solid black;\r\n    height: auto;\r\n    min-width: 500px;\r\n    max-width: 700px;\r\n    background-color: lightgray;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.title {\r\n    margin: 1em;\r\n    font-family: 'gamixregular';\r\n    font-size: 2em;\r\n}\r\n\r\n.tabs {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.tabbutton {\r\n    font-family: 'gamixregular';\r\n    color:black;\r\n    font-size: 3em;\r\n    background-color: lightgray;\r\n}\r\n\r\n.forret {\r\n    margin: 50px;\r\n}\r\n\r\n.quotebox {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    font-style: oblique;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    text-align: center;\r\n}\r\n\r\n.img {\r\n    width:400px;\r\n    height:200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.menu {\r\n    font-family:'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n\r\n.menu-group-heading {\r\n    font-family:'gamixregular';\r\n    margin: 1em;\r\n    padding-bottom: 1em;\r\n    border-bottom: 2px solid darkgray;\r\n}\r\n\r\n.menu-group {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.5em;\r\n    padding: 1.5em 0;\r\n}\r\n\r\n.menu-item-image {\r\n    width: 80px;\r\n    height: 80px;\r\n    flex-shrink: 0;\r\n    object-fit: cover;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.menu-item-heading {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 0;\r\n}\r\n\r\n.menu-item-name {\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.menu-item-description {\r\n    line-height: 1.6;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n    .menu {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .menu-group {\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    .menu-item-image {\r\n        width: 125px;\r\n        height: 125px;\r\n        flex-shrink: 0;\r\n        object-fit: cover;\r\n        margin-right: 1.5em;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELG9DQUFvQyx5SkFBeUosNEJBQTRCLDJCQUEyQixTQUFTLGNBQWMsd0NBQXdDLEtBQUssbUJBQW1CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyxtQ0FBbUMscUJBQXFCLHlCQUF5Qix5QkFBeUIsb0NBQW9DLDJCQUEyQixrQkFBa0Isb0NBQW9DLEtBQUssb0JBQW9CLG9CQUFvQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0MsdUJBQXVCLDJCQUEyQixhQUFhLGdCQUFnQixvQkFBb0Isb0NBQW9DLHVCQUF1QixLQUFLLGVBQWUsc0JBQXNCLCtCQUErQixvQkFBb0Isa0JBQWtCLEtBQUssb0JBQW9CLG9DQUFvQyxvQkFBb0IsdUJBQXVCLG9DQUFvQyxLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxtQkFBbUIsc0JBQXNCLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLGlCQUFpQiw0QkFBNEIsS0FBSyxpQkFBaUIsMkJBQTJCLGlCQUFpQixrQkFBa0IsZ0JBQWdCLDJCQUEyQixLQUFLLGNBQWMsb0JBQW9CLHFCQUFxQiwwQkFBMEIsS0FBSyxlQUFlLG9EQUFvRCx3QkFBd0IsS0FBSyw2QkFBNkIsbUNBQW1DLG9CQUFvQiw0QkFBNEIsMENBQTBDLEtBQUsscUJBQXFCLHNCQUFzQixtQ0FBbUMsbUJBQW1CLHlCQUF5QixLQUFLLDBCQUEwQixvQkFBb0IscUJBQXFCLHVCQUF1QiwwQkFBMEIsNEJBQTRCLEtBQUsseUJBQXlCLHFCQUFxQixLQUFLLDRCQUE0QixzQkFBc0IsdUNBQXVDLGtCQUFrQixLQUFLLHlCQUF5Qiw0QkFBNEIsS0FBSyxnQ0FBZ0MseUJBQXlCLEtBQUssOENBQThDLGVBQWUsNEJBQTRCLFNBQVMseUJBQXlCLGtEQUFrRCxTQUFTLDBCQUEwQix5QkFBeUIsMEJBQTBCLDJCQUEyQiw4QkFBOEIsZ0NBQWdDLFNBQVMsS0FBSyxPQUFPLGlGQUFpRixZQUFZLE1BQU0sT0FBTyxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxxQ0FBcUMsb0NBQW9DLDhIQUE4SCw0QkFBNEIsMkJBQTJCLFNBQVMsY0FBYyx3Q0FBd0MsS0FBSyxtQkFBbUIsc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLG1DQUFtQyxxQkFBcUIseUJBQXlCLHlCQUF5QixvQ0FBb0MsMkJBQTJCLGtCQUFrQixvQ0FBb0MsS0FBSyxvQkFBb0Isb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLGdDQUFnQyx1QkFBdUIsMkJBQTJCLGFBQWEsZ0JBQWdCLG9CQUFvQixvQ0FBb0MsdUJBQXVCLEtBQUssZUFBZSxzQkFBc0IsK0JBQStCLG9CQUFvQixrQkFBa0IsS0FBSyxvQkFBb0Isb0NBQW9DLG9CQUFvQix1QkFBdUIsb0NBQW9DLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLG1CQUFtQixzQkFBc0IsNEJBQTRCLGdDQUFnQyw0QkFBNEIsaUJBQWlCLDRCQUE0QixLQUFLLGlCQUFpQiwyQkFBMkIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsMkJBQTJCLEtBQUssY0FBYyxvQkFBb0IscUJBQXFCLDBCQUEwQixLQUFLLGVBQWUsb0RBQW9ELHdCQUF3QixLQUFLLDZCQUE2QixtQ0FBbUMsb0JBQW9CLDRCQUE0QiwwQ0FBMEMsS0FBSyxxQkFBcUIsc0JBQXNCLG1DQUFtQyxtQkFBbUIseUJBQXlCLEtBQUssMEJBQTBCLG9CQUFvQixxQkFBcUIsdUJBQXVCLDBCQUEwQiw0QkFBNEIsS0FBSyx5QkFBeUIscUJBQXFCLEtBQUssNEJBQTRCLHNCQUFzQix1Q0FBdUMsa0JBQWtCLEtBQUsseUJBQXlCLDRCQUE0QixLQUFLLGdDQUFnQyx5QkFBeUIsS0FBSyw4Q0FBOEMsZUFBZSw0QkFBNEIsU0FBUyx5QkFBeUIsa0RBQWtELFNBQVMsMEJBQTBCLHlCQUF5QiwwQkFBMEIsMkJBQTJCLDhCQUE4QixnQ0FBZ0MsU0FBUyxLQUFLLG1CQUFtQjtBQUNuM047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnNCO0FBQ2U7QUFDRjtBQUNBO0FBQ2E7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFJO0FBQ1I7QUFDQSxRQUFRLGdEQUFJO0FBQ1o7QUFDQTtBQUNBLFFBQVEsZ0RBQUk7QUFDWjtBQUNBO0FBQ0EsUUFBUSxrREFBSztBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVxRTtBQUN0QjtBQUMvQjtBQUNqQjtBQUNBO0FBQ0EsSUFBSSwwRUFBbUM7QUFDdkMsSUFBSSxzREFBVztBQUNmO0FBQ0E7QUFDQSxjQUFjLGlEQUFVO0FBQ3hCLElBQUksNEVBQXFDO0FBQ3pDO0FBQ0EsMkJBQTJCLG9EQUFTO0FBQ3BDO0FBQ0EsSUFBSSw0RUFBcUM7QUFDekM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0U7QUFDaEM7QUFDdEI7QUFDaEI7QUFDQTtBQUNBLElBQUksMEVBQW1DO0FBQ3ZDLHFCQUFxQixvREFBUztBQUM5QjtBQUNBLElBQUksc0RBQVc7QUFDZixJQUFJLDRFQUFxQztBQUN6QztBQUNBO0FBQ0EsY0FBYyw0Q0FBSztBQUNuQjtBQUNBLGtCQUFrQixvREFBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCc0U7QUFDcEI7QUFDRjtBQUNJO0FBQ3BEO0FBQ0E7QUFDZ0I7QUFDaEI7QUFDQTtBQUNBLGlCQUFpQixvREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBUztBQUNoQywwQkFBMEIsb0RBQVM7QUFDbkMsdUJBQXVCLG9EQUFTO0FBQ2hDLHdCQUF3QixvREFBUztBQUNqQyw4QkFBOEIsb0RBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUFtQztBQUN2Qyx3QkFBd0Isb0RBQVM7QUFDakMsSUFBSSw0RUFBcUM7QUFDekM7QUFDQTtBQUNBLDZCQUE2QixvREFBUztBQUN0QztBQUNBO0FBQ0EseUNBQXlDLGtEQUFXO0FBQ3BELHdDQUF3QyxpREFBVTtBQUNsRCwwQ0FBMEMsbURBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/Zjg5MCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3RhYnMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvdGFicy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3RhYnMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9nYW1peC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9nYW1peC13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgYmxhY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnZ2FtaXhyZWd1bGFyJztcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5mb3JyZXQge1xcclxcbiAgICBtYXJnaW46IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5xdW90ZWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gICAgd2lkdGg6NDAwcHg7XFxyXFxuICAgIGhlaWdodDoyMDBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1ncm91cC1oZWFkaW5nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J2dhbWl4cmVndWxhcic7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya2dyYXk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWdyb3VwIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdhcDogMS41ZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0taW1hZ2Uge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1oZWFkaW5nIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tbmFtZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtZ3JvdXAge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1pdGVtLWltYWdlIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgICAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjVlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQjsrREFDcUQ7SUFDckQsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdnYW1peHJlZ3VsYXInO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9nYW1peC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICAgICAgIHVybCgnLi9mb250cy9nYW1peC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ2dhbWl4cmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFicyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50YWJidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ2dhbWl4cmVndWxhcic7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ycmV0IHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucXVvdGVib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICAgIHdpZHRoOjQwMHB4O1xcclxcbiAgICBoZWlnaHQ6MjAwcHg7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZ3JvdXAtaGVhZGluZyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidnYW1peHJlZ3VsYXInO1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1ncm91cCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBnYXA6IDEuNWVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0taGVhZGluZyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLW5hbWUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWdyb3VwIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtaXRlbS1pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTI1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEyNXB4O1xcclxcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBhYm91dCB9IGZyb20gJy4vdGFicy9hYm91dCc7XHJcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL3RhYnMvaG9tZSc7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL3RhYnMvbWVudSc7XHJcbmV4cG9ydCB7Y29tcG9uZW50LCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlfVxyXG5cclxuY29uc3QgY3JlYXRlVGl0bGUgPSAoaW5uZXJUZXh0KSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IGNvbXBvbmVudChcInRpdGxlXCIsIFwiZGl2XCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gaW5uZXJUZXh0O1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQobmFtZSwgdHlwZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBpZiAobmFtZSAhPSBcIlwiKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlQ29udGVudCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50cyA9IGNvbXBvbmVudChcImNvbnRlbnRzXCIsIFwiZGl2XCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50cyk7XHJcbiAgICByZXR1cm4ge2NvbnRlbnRzfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUJ1dHRvbnMgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFicyA9IGNvbXBvbmVudChcInRhYnNcIiwgXCJkaXZcIik7XHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gY29tcG9uZW50KFwidGFiYnV0dG9uXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGNvbXBvbmVudChcInRhYmJ1dHRvblwiLCBcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gY29tcG9uZW50KFwidGFiYnV0dG9uXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSBcImhvbWVcIjtcclxuICAgIG1lbnVCdXR0b24uaW5uZXJUZXh0ID0gXCJtZW51XCI7XHJcbiAgICBhYm91dEJ1dHRvbi5pbm5lclRleHQgPSBcImFib3V0XCI7XHJcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xyXG4gICAgY3JlYXRlQ29udGVudC5jb250ZW50cy5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICAgIHJldHVybiB7aG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgYWJvdXRCdXR0b259O1xyXG59KSgpO1xyXG5cclxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbXBvbmVudChcImNvbnRhaW5lclwiLCBcImRpdlwiKTtcclxuICAgIGNyZWF0ZUNvbnRlbnQuY29udGVudHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIHJldHVybiB7Y29udGFpbmVyfTtcclxufSkoKTtcclxuXHJcblxyXG5cclxuY29uc3QgdGFiU2VsZWN0b3IgPSAoKCkgPT4ge1xyXG4gICAgaG9tZSgpO1xyXG4gICAgY3JlYXRlQnV0dG9ucy5tZW51QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgbWVudSgpO1xyXG4gICAgfTtcclxuICAgIGNyZWF0ZUJ1dHRvbnMuaG9tZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGhvbWUoKTtcclxuICAgIH07XHJcbiAgICBjcmVhdGVCdXR0b25zLmFib3V0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgYWJvdXQoKTtcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgZm9vdGVyID0gY29tcG9uZW50KFwiZm9vdGVyXCIsIFwiZm9vdGVyXCIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGNvbXBvbmVudChcImZvb3RlclRleHRcIiwgXCJwXCIpO1xyXG4gICAgZm9vdGVyVGV4dC5pbm5lclRleHQgPSBcIk1hZGUgYnkgVXJpblRyb2xkZW5cIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxufSkoKTsiLCJpbXBvcnQgeyBjb21wb25lbnQsIGNyZWF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IGRpcmVjdGlvbnMgZnJvbSAnLi4vcGljcy9kaXJlY3Rpb25zLnBuZyc7XHJcbmV4cG9ydCB7IGFib3V0IH07XHJcblxyXG5jb25zdCBhYm91dCA9ICgpID0+IHtcclxuICAgIGNyZWF0ZUNvbnRhaW5lci5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNyZWF0ZVRpdGxlKFwiRmluZCBlcGljIGdhbWVyIGZvb2QgcGFsYWNlXCIpO1xyXG5cclxuICAgIGNvbnN0IHBpYyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcGljLnNyYyA9IGRpcmVjdGlvbnM7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKHBpYyk7XHJcbiAgICBwaWMuY2xhc3NMaXN0LmFkZChcImltZ1wiKTtcclxuICAgIGNvbnN0IHBpY0Rlc2NyaXB0aW9uID0gY29tcG9uZW50KFwiZGVzY3JpcHRpb25cIiwgXCJwXCIpO1xyXG4gICAgcGljRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJTb20gZGV0IHNlcyBww6UgYmlsbGVkZXQgZ8OlciBkdSBiYXJlIGhlbiBhZiB2ZWplbiBzw6UgZXIgZHUgdmVkIEVQSUMgR0FNRVIgRk9PRCBQQUxBQ0VcIjtcclxuICAgIGNyZWF0ZUNvbnRhaW5lci5jb250YWluZXIuYXBwZW5kQ2hpbGQocGljRGVzY3JpcHRpb24pO1xyXG59IiwiaW1wb3J0IHsgY29tcG9uZW50LCBjcmVhdGVDb250YWluZXIsIGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCBnYW1lciBmcm9tICcuLi9waWNzL2dhbWVyLnBuZyc7XHJcbmV4cG9ydCB7IGhvbWUgfTtcclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBxdW90ZUJveCA9IGNvbXBvbmVudCgncXVvdGVib3gnLCAnZGl2Jyk7XHJcbiAgICBcclxuICAgIGNyZWF0ZVRpdGxlKFwiVmVsa29tbWVuIHRpbCBlcGljIGdhbWVyIGZvb2QgcGFsYWNlXCIpO1xyXG4gICAgY3JlYXRlQ29udGFpbmVyLmNvbnRhaW5lci5hcHBlbmRDaGlsZChxdW90ZUJveCk7XHJcblxyXG4gICAgY29uc3QgcGljID0gbmV3IEltYWdlKCk7XHJcbiAgICBwaWMuc3JjID0gZ2FtZXI7XHJcblxyXG4gICAgY29uc3QgcXVvdGUgPSBjb21wb25lbnQoJ3F1b3RlJywgJ2gzJyk7XHJcbiAgICBxdW90ZS5pbm5lclRleHQgPSBcIidKZWcgZWxza2VyIG1hZCcgLSBKZWhvdmFcIjtcclxuXHJcbiAgICBxdW90ZUJveC5hcHBlbmRDaGlsZChwaWMpO1xyXG4gICAgcXVvdGVCb3guYXBwZW5kQ2hpbGQocXVvdGUpO1xyXG5cclxufTsiLCJpbXBvcnQgeyBjb21wb25lbnQsIGNyZWF0ZUNvbnRhaW5lciwgY3JlYXRlVGl0bGUgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IGR1cnVtc0JsYWRlIGZyb20gJy4uL3BpY3MvZHVydW1zYmxhZGUucG5nJztcclxuaW1wb3J0IGR1cnVtc1JpbmcgZnJvbSAnLi4vcGljcy9kdXJ1bXNyaW5nLnBuZyc7XHJcbmltcG9ydCBkdXJ1bXNTaGllbGQgZnJvbSAnLi4vcGljcy9kdXJ1bXNzaGllbGQucG5nJztcclxuXHJcblxyXG5leHBvcnQgeyBtZW51IH07XHJcblxyXG5jb25zdCBjcmVhdGVNZW51R3JvdXBIZWFkaW5nID0gKG1lYWxEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgY29uc3QgbWVhbCA9IGNvbXBvbmVudChcIm1lbnUtZ3JvdXAtaGVhZGluZ1wiLCAnaDInKTtcclxuICAgIG1lYWwuaW5uZXJUZXh0ID0gbWVhbERlc2NyaXB0aW9uO1xyXG4gICAgcmV0dXJuIG1lYWw7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1JbWFnZSwgaXRlbU5hbWUsIGl0ZW1QcmljZSwgaXRlbURlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBsZXQgbWVudUl0ZW1Db250YWluZXIgPSBjb21wb25lbnQoXCJtZW51LWl0ZW1cIiwgXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudUl0ZW1JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbWVudUl0ZW1JbWFnZS5zcmMgPSBpdGVtSW1hZ2U7XHJcbiAgICBtZW51SXRlbUltYWdlLmNsYXNzTGlzdCA9IFwibWVudS1pdGVtLWltYWdlXCI7XHJcbiAgICBsZXQgbWVudUl0ZW1UZXh0ID0gY29tcG9uZW50KFwibWVudS1pdGVtLXRleHRcIiwgXCJkaXZcIik7XHJcbiAgICBsZXQgbWVudUl0ZW1IZWFkaW5nID0gY29tcG9uZW50KFwibWVudS1pdGVtLWhlYWRpbmdcIiwgXCJoM1wiKTtcclxuICAgIGxldCBtZW51SXRlbU5hbWUgPSBjb21wb25lbnQoXCJtZW51LWl0ZW0tbmFtZVwiLCBcInNwYW5cIik7XHJcbiAgICBsZXQgbWVudUl0ZW1QcmljZSA9IGNvbXBvbmVudChcIm1lbnUtaXRlbS1wcmljZVwiLCBcInNwYW5cIik7XHJcbiAgICBsZXQgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGNvbXBvbmVudChcIm1lbnUtaXRlbS1kZXNjcmlwdGlvblwiLCBcInBcIik7XHJcblxyXG4gICAgbWVudUl0ZW1OYW1lLmlubmVyVGV4dCA9IGl0ZW1OYW1lO1xyXG4gICAgbWVudUl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtUHJpY2U7XHJcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGl0ZW1EZXNjcmlwdGlvbjsgICAgXHJcblxyXG4gICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWFnZSk7XHJcbiAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbVRleHQpO1xyXG4gICAgbWVudUl0ZW1UZXh0LmFwcGVuZENoaWxkKG1lbnVJdGVtSGVhZGluZyk7XHJcbiAgICBtZW51SXRlbUhlYWRpbmcuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcclxuICAgIG1lbnVJdGVtSGVhZGluZy5hcHBlbmRDaGlsZChtZW51SXRlbVByaWNlKTtcclxuICAgIG1lbnVJdGVtVGV4dC5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcclxuICAgIHJldHVybiBtZW51SXRlbUNvbnRhaW5lcjtcclxufVxyXG5cclxuY29uc3QgbWVudSA9ICgpID0+IHtcclxuICAgIC8vY2xlYXIgY29udGFpbmVyXHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBsZXQgbWVudUNvbnRhaW5lciA9IGNvbXBvbmVudChcIm1lbnVcIiwgXCJkaXZcIik7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51R3JvdXBIZWFkaW5nKFwiRHVydW1cIikpO1xyXG5cclxuICAgIGxldCBtZW51R3JvdXBDb250YWluZXIgPSBjb21wb25lbnQoXCJtZW51LWdyb3VwXCIsIFwiZGl2XCIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51R3JvdXBDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICBsZXQgZHVydW1zQmxhZGVJdGVtID0gY3JlYXRlTWVudUl0ZW0oZHVydW1zQmxhZGUsIFwiRHVydW1zJyBCbGFkZVwiLCBcIjM5IGtyLlwiLCBcIlByw7h2IGRlbiB1ZHPDuGd0ZSBkdXJ1bXMgYmxhZGUgdmFybXQgYW5iZWZhbGV0IGFmIG1hZGtyaXRpa2VyZSBoZXJ1bmRlciBkZW4gdmVyZGVuc2tlbmR0ZSBEb3Jhbi5cIik7XHJcbiAgICBsZXQgZHVydW1zUmluZ0l0ZW0gPSBjcmVhdGVNZW51SXRlbShkdXJ1bXNSaW5nLCBcIkR1cnVtcycgUmluZ1wiLCBcIjM5IGtyLlwiLCBcIlByw7h2IGRlbiB1ZHPDuGd0ZSBkdXJ1bXMgcmluZyB2YXJtdCBhbmJlZmFsZXQgYWYgbWFka3JpdGlrZXJlIGhlcnVuZGVyIGRlbiB2ZXJkZW5za2VuZHRlIERvcmFuLlwiKTtcclxuICAgIGxldCBkdXJ1bXNTaGllbGRJdGVtID0gY3JlYXRlTWVudUl0ZW0oZHVydW1zU2hpZWxkLCBcIkR1cnVtcycgU2hpZWxkXCIsIFwiMzkga3IuXCIsIFwiUHLDuHYgZGVuIHVkc8O4Z3RlIGR1cnVtcyBzaGllbGQgdmFybXQgYW5iZWZhbGV0IGFmIG1hZGtyaXRpa2VyZSBoZXJ1bmRlciBkZW4gdmVyZGVuc2tlbmR0ZSBEb3Jhbi5cIik7XHJcblxyXG5cclxuICAgIG1lbnVHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChkdXJ1bXNCbGFkZUl0ZW0pO1xyXG4gICAgbWVudUdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1cnVtc1JpbmdJdGVtKTtcclxuICAgIG1lbnVHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChkdXJ1bXNTaGllbGRJdGVtKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgbGV0IGR1cnVtT25lID0gY29tcG9uZW50KFwibWVudS1pdGVtXCIsIFwiZGl2XCIpO1xyXG4gICAgZHVydW1PbmUuaW5uZXJUZXh0ID0gXCJEdXJ1bXMgQmxhZGVcIjtcclxuICAgIG1lbnVHcm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChkdXJ1bU9uZSk7XHJcbiAgICBsZXQgZHVydW1Ud28gPSBjb21wb25lbnQoXCJtZW51LWl0ZW1cIiwgXCJkaXZcIik7XHJcbiAgICBkdXJ1bVR3by5pbm5lclRleHQgPSBcIkR1cnVtcyBSaW5nXCI7XHJcbiAgICBtZW51R3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVydW1Ud28pO1xyXG4gICAgbGV0IGR1cnVtVGhyZWUgPSBjb21wb25lbnQoXCJtZW51LWl0ZW1cIiwgXCJkaXZcIik7XHJcbiAgICBkdXJ1bVRocmVlLmlubmVyVGV4dCA9IFwiRHVydW1zIFNoaWVsZFwiO1xyXG4gICAgbWVudUdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1cnVtVGhyZWUpO1xyXG4gICAgKi9cclxuICAgIFxyXG4gICAgLypcclxuICAgIGNyZWF0ZVRpdGxlKFwiRm9yZXR0ZXJcIik7XHJcbiAgICBjcmVhdGVDb250YWluZXIuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lYWwoXCJmb3JyZXRcIiwgZHVydW1zQmxhZGUsIFwiRHVydW1zJyBCbGFkZSA1OSwtXCIpKTtcclxuICAgIGNyZWF0ZUNvbnRhaW5lci5jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVhbChcImZvcnJldFwiLCBkdXJ1bXNSaW5nLCBcIkR1cnVtcycgUmluZyA1OSwtXCIpKTtcclxuICAgICovXHJcbiAgICBcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc3R1cmFudC1wYWdlL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9