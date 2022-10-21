"use strict";
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #42c6e7;\r\n  --secondary-color: #e2f89c;\r\n  --tetiary-color: #031926;\r\n  --tetiary-color-2: #797596;\r\n  --tetiary-color-2-1: #7975969c;\r\n  --tetiary-color-3: #e3f89c9d;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--tetiary-color-2);\r\n}\r\n\r\n.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--tetiary-color);\r\n}\r\n\r\nimg {\r\n  width: 10rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n  margin: 1rem 0;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.01);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.br {\r\n  border-radius: 1rem;\r\n  margin: 0.1rem auto;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\n.nav {\r\n  padding: 1rem;\r\n  justify-content: space-around;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\nh1 {\r\n  margin: 3rem auto;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--secondary-color);\r\n  width: max-content;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n.foods {\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  justify-content: center;\r\n}\r\n\r\n.food-card {\r\n  width: 15.5rem;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n}\r\n\r\n.img {\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.summary {\r\n  max-width: 17rem;\r\n}\r\n\r\n.desc {\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leader {\r\n  width: 100%;\r\n  height: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  margin: 0.2rem 0;\r\n  height: 2rem;\r\n}\r\n\r\n/* $-modal-$ */\r\n.modal-filter {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--tetiary-color-2-1);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.8s;\r\n  overflow: scroll;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.modal-filter::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.modal-filter.open {\r\n  opacity: 1;\r\n  pointer-events: visible;\r\n}\r\n\r\n.modal {\r\n  border-radius: 1rem;\r\n  position: relative;\r\n  padding: 1.5rem;\r\n  width: max-content;\r\n  transition: 0.7s;\r\n  transform: scaleX(0);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.modal.open {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.bx-x {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0.5rem;\r\n  border: 1px solid;\r\n  border-radius: 30px;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.modal-form {\r\n  flex-direction: column;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA,cAAc;AACd;EACE,WAAW;AACb;;AAEA,cAAc;AACd;EACE,sCAAsC;AACxC;;AAEA,eAAe;AACf;EACE,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qDAAqD;AACvD;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,sCAAsC;EACtC,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;EACE,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,wCAAwC;EACxC,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,8BAA8B;EAC9B,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA,cAAc;AACd;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,UAAU;EACV,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,wCAAwC;AAC1C;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #42c6e7;\r\n  --secondary-color: #e2f89c;\r\n  --tetiary-color: #031926;\r\n  --tetiary-color-2: #797596;\r\n  --tetiary-color-2-1: #7975969c;\r\n  --tetiary-color-3: #e3f89c9d;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--tetiary-color-2);\r\n}\r\n\r\n.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--tetiary-color);\r\n}\r\n\r\nimg {\r\n  width: 10rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n  margin: 1rem 0;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.01);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.br {\r\n  border-radius: 1rem;\r\n  margin: 0.1rem auto;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\n.nav {\r\n  padding: 1rem;\r\n  justify-content: space-around;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\nh1 {\r\n  margin: 3rem auto;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--secondary-color);\r\n  width: max-content;\r\n  filter: drop-shadow(1px 1px 1px);\r\n}\r\n\r\n.foods {\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  justify-content: center;\r\n}\r\n\r\n.food-card {\r\n  width: 15.5rem;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n}\r\n\r\n.img {\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.summary {\r\n  max-width: 17rem;\r\n}\r\n\r\n.desc {\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leader {\r\n  width: 100%;\r\n  height: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  margin: 0.2rem 0;\r\n  height: 2rem;\r\n}\r\n\r\n/* $-modal-$ */\r\n.modal-filter {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--tetiary-color-2-1);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.8s;\r\n  overflow: scroll;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.modal-filter::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.modal-filter.open {\r\n  opacity: 1;\r\n  pointer-events: visible;\r\n}\r\n\r\n.modal {\r\n  border-radius: 1rem;\r\n  position: relative;\r\n  padding: 1.5rem;\r\n  width: max-content;\r\n  transition: 0.7s;\r\n  transform: scaleX(0);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.modal.open {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.bx-x {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0.5rem;\r\n  border: 1px solid;\r\n  border-radius: 30px;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.modal-form {\r\n  flex-direction: column;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_getMeal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeal.js */ "./src/modules/getMeal.js");
/* harmony import */ var _modules_renderData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderData.js */ "./src/modules/renderData.js");




const loadFoodData = () => {
  (0,_modules_getMeal_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
    .then((response) => response.json())
    .then((data) => (0,_modules_renderData_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.results));
};

window.onload = loadFoodData();

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getUserComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BN8MvkOs74Ofyu4CfHNx/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserComment);


/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getUserLike = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R1NTK1RCSA5nplnJoZlY/likes');
  const data = await response.json();
  const result = data.sort((a, b) => a.item_id - b.item_id);
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLike);


/***/ }),

/***/ "./src/modules/getMeal.js":
/*!********************************!*\
  !*** ./src/modules/getMeal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getMenuList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9fce9cba21msh261de1d8b793679p16b657jsn889eb7c4c6bd',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  const response = await fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=16', options);
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMenuList);

/***/ }),

/***/ "./src/modules/postComments.js":
/*!*************************************!*\
  !*** ./src/modules/postComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postComment = async (id, name, comment) => {
  const data = {
    item_id: id,
    username: name,
    comment,
  };
  const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BN8MvkOs74Ofyu4CfHNx/comments';
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postUserLike = async (id) => {
  const data = {
    item_id: id,
  };
  const dataToPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R1NTK1RCSA5nplnJoZlY/likes', dataToPost);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postUserLike);

/***/ }),

/***/ "./src/modules/renderData.js":
/*!***********************************!*\
  !*** ./src/modules/renderData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComments.js */ "./src/modules/postComments.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/postLikes.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");





const renderData = async (arr) => {
  const userLike = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const foodList = document.querySelector('.foods');

  arr.forEach((card, id) => {
    foodList.innerHTML += `<div class="food-card br flex">
    <div class="img flex">
      <img class="br" src=${card.thumbnail_url} alt=${card.thumbnail_alt_text}>
    </div>
    <div class="like flex">
      <span class="name">Name:<i class="desc">${card.name}</i>
      </span><i  class='bx bxs-heart'>${userLike[id].likes}</i>
    </div>
    <button class="comment">Comments</button>
    </div>`;

    const like = document.querySelectorAll('.bxs-heart');
    like.forEach((btn, id) => btn.addEventListener('click', () => {
      (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }));

    const commentBtn = document.querySelectorAll('.comment');

    commentBtn.forEach((btn, id) => btn.addEventListener('click', async () => {
      const modalcontent = document.querySelector('.modal');

      // Get and Count comments
      const userComment = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);

      modalcontent.innerHTML = `<i class="bx bx-x"></i>
      <div class="content flex">    
        <img class="br" src=${arr[id].thumbnail_url} alt="">
        <div class="summary">
          <span class="name">Name:<i class="desc">${arr[id].name}</i></span>
          <span class="description">summary:<i class="desc">${arr[id].description}</i></span>
        </div>
      </div>
      <span>Comments (${userComment.length || 0})</span>
      <div class="comments">${userComment.length >= 1
    ? userComment.map((user) => `<p>${user.creation_date} ${user.username} : ${user.comment}</p>`).join(' ') : '<p> "make a comment" </p>'}</div>
      <div class="comment-form">
        <form class="modal-form flex">
          <label for="Name">
            <input class="leader user" name="Name" type="text" placeholder="your name" maxlength="30" required>
          </label>
          <label for="Textarea">
            <input class="leader comment" id="comment"name="textarea" type="text" placeholder="your comment" maxlength="80" required>
          </label>
          <button class="submit" type="submit">Comment</i></button>
        </form>
      </div>`;
      const addComment = document.querySelector('.modal-form');
      addComment.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('.user').value;
        const comment = document.querySelector('#comment').value;
        (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, name, comment);
        (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
        document.querySelector('.modal-form').reset();
      });

      const body = document.querySelector('body');
      const modalFilter = document.querySelector('.modal-filter');
      modalFilter.classList.toggle('open');
      modalcontent.classList.toggle('open');
      body.classList.toggle('overflow');

      const closeBtn = document.querySelector('.bx-x');
      closeBtn.addEventListener('click', () => {
        modalFilter.classList.remove('open');
        modalcontent.classList.remove('open');
        body.classList.toggle('overflow');
      });
    }));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQywyREFBYzs7QUFFOUM7QUFDQTtBQUNBLDhCQUE4Qix1QkFBdUI7QUFDckQ7QUFDQSxvREFBb0QsYUFBYTtBQUNqRSw4REFBOEQsb0JBQW9CO0FBQ2xGO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hELDhCQUE4QjtBQUM5QixzQ0FBc0Msb0JBQW9CLEVBQUUsZUFBZSxJQUFJLGFBQWEsK0NBQStDO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBVztBQUNuQixRQUFRLDJEQUFjO0FBQ3RCO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nZXRDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldE1lYWwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9zdExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZW5kZXJEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogJC1jdXN0b20gUHJvcGVydGllcy0kICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNDJjNmU3O1xcclxcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlMmY4OWM7XFxyXFxuICAtLXRldGlhcnktY29sb3I6ICMwMzE5MjY7XFxyXFxuICAtLXRldGlhcnktY29sb3ItMjogIzc5NzU5NjtcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0yLTE6ICM3OTc1OTY5YztcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0zOiAjZTNmODljOWQ7XFxyXFxufVxcclxcblxcclxcbi8qICQtd2lkdGgtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLVRyYWNrLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1IYW5kbGUtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qICQtQ3NzLVJlc2V0cy0kICovXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBtYXJnaW46IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDFlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5iciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1VdGlsaXR5LUNsYXNzZXMtJCAqL1xcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qICQtTGVhZGVyYm9hcmQtJCAqL1xcclxcbi5uYXYge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZHMge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNS41cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSB7XFxyXFxuICBtYXgtd2lkdGg6IDE3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDAuMnJlbSAwO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLW1vZGFsLSQgKi9cXHJcXG4ubW9kYWwtZmlsdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvci0yLTEpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC44cztcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZpbHRlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZpbHRlci5vcGVuIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4LXgge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwLjVyZW07XFxyXFxuICByaWdodDogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBLGNBQWM7QUFDZDtFQUNFLFdBQVc7QUFDYjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usd0NBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHdDQUF3QztFQUN4QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGNBQWM7QUFDZDtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAkLWN1c3RvbSBQcm9wZXJ0aWVzLSQgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICM0MmM2ZTc7XFxyXFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2UyZjg5YztcXHJcXG4gIC0tdGV0aWFyeS1jb2xvcjogIzAzMTkyNjtcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0yOiAjNzk3NTk2O1xcclxcbiAgLS10ZXRpYXJ5LWNvbG9yLTItMTogIzc5NzU5NjljO1xcclxcbiAgLS10ZXRpYXJ5LWNvbG9yLTM6ICNlM2Y4OWM5ZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC13aWR0aC0kICovXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qICQtVHJhY2stJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLUhhbmRsZS0kICovXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1Dc3MtUmVzZXRzLSQgKi9cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvci0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC4yZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLVV0aWxpdHktQ2xhc3Nlcy0kICovXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1MZWFkZXJib2FyZC0kICovXFxyXFxuLm5hdiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDNyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCk7XFxyXFxufVxcclxcblxcclxcbi5mb29kcyB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWNhcmQge1xcclxcbiAgd2lkdGg6IDE1LjVyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIG1heC13aWR0aDogMTdyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qICQtbW9kYWwtJCAqL1xcclxcbi5tb2RhbC1maWx0ZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yLTItMSk7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjhzO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmlsdGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZmlsdGVyLm9wZW4ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHRyYW5zaXRpb246IDAuN3M7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5vcGVuIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uYngteCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDAuNXJlbTtcXHJcXG4gIHJpZ2h0OiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtZm9ybSB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0TWVudUxpc3QgZnJvbSAnLi9tb2R1bGVzL2dldE1lYWwuanMnO1xuaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9tb2R1bGVzL3JlbmRlckRhdGEuanMnO1xuXG5jb25zdCBsb2FkRm9vZERhdGEgPSAoKSA9PiB7XG4gIGdldE1lbnVMaXN0KClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4gcmVuZGVyRGF0YShkYXRhLnJlc3VsdHMpKTtcbn07XG5cbndpbmRvdy5vbmxvYWQgPSBsb2FkRm9vZERhdGEoKTsiLCJjb25zdCBnZXRVc2VyQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9CTjhNdmtPczc0T2Z5dTRDZkhOeC9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckNvbW1lbnQ7XG4iLCJjb25zdCBnZXRVc2VyTGlrZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvUjFOVEsxUkNTQTVucGxuSm9abFkvbGlrZXMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcmVzdWx0ID0gZGF0YS5zb3J0KChhLCBiKSA9PiBhLml0ZW1faWQgLSBiLml0ZW1faWQpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckxpa2U7XG4iLCJjb25zdCBnZXRNZW51TGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLVJhcGlkQVBJLUtleSc6ICc5ZmNlOWNiYTIxbXNoMjYxZGUxZDhiNzkzNjc5cDE2YjY1N2pzbjg4OWViN2M0YzZiZCcsXG4gICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ3Rhc3R5LnAucmFwaWRhcGkuY29tJyxcbiAgICB9LFxuICB9O1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Rhc3R5LnAucmFwaWRhcGkuY29tL3JlY2lwZXMvbGlzdD9mcm9tPTAmc2l6ZT0xNicsIG9wdGlvbnMpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNZW51TGlzdDsiLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgbmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGl0ZW1faWQ6IGlkLFxuICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgIGNvbW1lbnQsXG4gIH07XG4gIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQk44TXZrT3M3NE9meXU0Q2ZITngvY29tbWVudHMnO1xuICBhd2FpdCBmZXRjaChBUElfVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50OyIsImNvbnN0IHBvc3RVc2VyTGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGl0ZW1faWQ6IGlkLFxuICB9O1xuICBjb25zdCBkYXRhVG9Qb3N0ID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1IxTlRLMVJDU0E1bnBsbkpvWmxZL2xpa2VzJywgZGF0YVRvUG9zdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0VXNlckxpa2U7IiwiaW1wb3J0IHBvc3RDb21tZW50IGZyb20gJy4vcG9zdENvbW1lbnRzLmpzJztcbmltcG9ydCBnZXRVc2VyQ29tbWVudCBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcbmltcG9ydCBwb3N0VXNlckxpa2UgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuaW1wb3J0IGdldFVzZXJMaWtlIGZyb20gJy4vZ2V0TGlrZXMuanMnO1xuXG5jb25zdCByZW5kZXJEYXRhID0gYXN5bmMgKGFycikgPT4ge1xuICBjb25zdCB1c2VyTGlrZSA9IGF3YWl0IGdldFVzZXJMaWtlKCk7XG4gIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2RzJyk7XG5cbiAgYXJyLmZvckVhY2goKGNhcmQsIGlkKSA9PiB7XG4gICAgZm9vZExpc3QuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiZm9vZC1jYXJkIGJyIGZsZXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nIGZsZXhcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJiclwiIHNyYz0ke2NhcmQudGh1bWJuYWlsX3VybH0gYWx0PSR7Y2FyZC50aHVtYm5haWxfYWx0X3RleHR9PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsaWtlIGZsZXhcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPk5hbWU6PGkgY2xhc3M9XCJkZXNjXCI+JHtjYXJkLm5hbWV9PC9pPlxuICAgICAgPC9zcGFuPjxpICBjbGFzcz0nYnggYnhzLWhlYXJ0Jz4ke3VzZXJMaWtlW2lkXS5saWtlc308L2k+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRcIj5Db21tZW50czwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG5cbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ4cy1oZWFydCcpO1xuICAgIGxpa2UuZm9yRWFjaCgoYnRuLCBpZCkgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcG9zdFVzZXJMaWtlKGlkKTtcbiAgICAgIGdldFVzZXJMaWtlKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSkpO1xuXG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50Jyk7XG5cbiAgICBjb21tZW50QnRuLmZvckVhY2goKGJ0biwgaWQpID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG4gICAgICAvLyBHZXQgYW5kIENvdW50IGNvbW1lbnRzXG4gICAgICBjb25zdCB1c2VyQ29tbWVudCA9IGF3YWl0IGdldFVzZXJDb21tZW50KGlkKTtcblxuICAgICAgbW9kYWxjb250ZW50LmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImJ4IGJ4LXhcIj48L2k+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBmbGV4XCI+ICAgIFxuICAgICAgICA8aW1nIGNsYXNzPVwiYnJcIiBzcmM9JHthcnJbaWRdLnRodW1ibmFpbF91cmx9IGFsdD1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VtbWFyeVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPk5hbWU6PGkgY2xhc3M9XCJkZXNjXCI+JHthcnJbaWRdLm5hbWV9PC9pPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+c3VtbWFyeTo8aSBjbGFzcz1cImRlc2NcIj4ke2FycltpZF0uZGVzY3JpcHRpb259PC9pPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuPkNvbW1lbnRzICgke3VzZXJDb21tZW50Lmxlbmd0aCB8fCAwfSk8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHNcIj4ke3VzZXJDb21tZW50Lmxlbmd0aCA+PSAxXG4gICAgPyB1c2VyQ29tbWVudC5tYXAoKHVzZXIpID0+IGA8cD4ke3VzZXIuY3JlYXRpb25fZGF0ZX0gJHt1c2VyLnVzZXJuYW1lfSA6ICR7dXNlci5jb21tZW50fTwvcD5gKS5qb2luKCcgJykgOiAnPHA+IFwibWFrZSBhIGNvbW1lbnRcIiA8L3A+J308L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJtb2RhbC1mb3JtIGZsZXhcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiTmFtZVwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibGVhZGVyIHVzZXJcIiBuYW1lPVwiTmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ5b3VyIG5hbWVcIiBtYXhsZW5ndGg9XCIzMFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIlRleHRhcmVhXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsZWFkZXIgY29tbWVudFwiIGlkPVwiY29tbWVudFwibmFtZT1cInRleHRhcmVhXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgY29tbWVudFwiIG1heGxlbmd0aD1cIjgwXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2k+PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PmA7XG4gICAgICBjb25zdCBhZGRDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm0nKTtcbiAgICAgIGFkZENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50JykudmFsdWU7XG4gICAgICAgIHBvc3RDb21tZW50KGlkLCBuYW1lLCBjb21tZW50KTtcbiAgICAgICAgZ2V0VXNlckNvbW1lbnQoaWQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybScpLnJlc2V0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IG1vZGFsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbHRlcicpO1xuICAgICAgbW9kYWxGaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgbW9kYWxjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3cnKTtcblxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYngteCcpO1xuICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgbW9kYWxjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyZmxvdycpO1xuICAgICAgfSk7XG4gICAgfSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckRhdGE7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9