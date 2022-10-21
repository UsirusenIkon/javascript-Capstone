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
___CSS_LOADER_EXPORT___.push([module.id, "/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #42c6e7;\r\n  --secondary-color: #e2f89c;\r\n  --tetiary-color: #031926;\r\n  --tetiary-color-2: #797596;\r\n  --tetiary-color-2-1: #7975969c;\r\n  --tetiary-color-3: #e3f89c9d;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--tetiary-color-2);\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--tetiary-color);\r\n}\r\n\r\nimg {\r\n  width: 10rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n  margin: 1rem 0;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.01);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.br {\r\n  border-radius: 1rem;\r\n  margin: 0.1rem auto;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\n.nav {\r\n  padding: 1rem;\r\n  justify-content: space-around;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\nh1 {\r\n  margin: 3rem auto;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--secondary-color);\r\n  width: max-content;\r\n  filter: drop-shadow(1px 1px 1px);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\n.foods {\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  justify-content: center;\r\n}\r\n\r\n.food-card {\r\n  width: 15.5rem;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n}\r\n\r\n.img {\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.summary {\r\n  max-width: 17rem;\r\n}\r\n\r\n.desc {\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leader {\r\n  width: 100%;\r\n  height: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  margin: 0.2rem 0;\r\n  height: 2rem;\r\n}\r\n\r\n/* $-modal-$ */\r\n.modal-filter {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--tetiary-color-2-1);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.8s;\r\n  overflow: scroll;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.modal-filter::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.modal-filter.open {\r\n  opacity: 1;\r\n  pointer-events: visible;\r\n}\r\n\r\n.modal {\r\n  border-radius: 1rem;\r\n  position: relative;\r\n  padding: 1.5rem;\r\n  width: max-content;\r\n  transition: 0.7s;\r\n  transform: scaleX(0);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.modal.open {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.bx-x {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0.5rem;\r\n  border: 1px solid;\r\n  border-radius: 30px;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.modal-form {\r\n  flex-direction: column;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,0BAA0B;AAC1B;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,0BAA0B;EAC1B,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA,cAAc;AACd;EACE,WAAW;AACb;;AAEA,cAAc;AACd;EACE,sCAAsC;AACxC;;AAEA,eAAe;AACf;EACE,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qDAAqD;AACvD;;AAEA;EACE,wCAAwC;EACxC,4CAA4C;AAC9C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,sCAAsC;EACtC,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA,wBAAwB;AACxB;EACE,aAAa;AACf;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,wCAAwC;EACxC,kBAAkB;EAClB,gCAAgC;EAChC,kDAAkD;EAClD,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,8BAA8B;EAC9B,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA,cAAc;AACd;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,0CAA0C;EAC1C,UAAU;EACV,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,wCAAwC;AAC1C;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,sCAAsC;EACtC,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,kBAAkB;AACpB","sourcesContent":["/* $-custom Properties-$ */\r\n:root {\r\n  --primary-color: #42c6e7;\r\n  --secondary-color: #e2f89c;\r\n  --tetiary-color: #031926;\r\n  --tetiary-color-2: #797596;\r\n  --tetiary-color-2-1: #7975969c;\r\n  --tetiary-color-3: #e3f89c9d;\r\n}\r\n\r\n/* $-width-$ */\r\nhtml::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\n/* $-Track-$ */\r\nhtml::-webkit-scrollbar-track {\r\n  background-color: var(--tetiary-color);\r\n}\r\n\r\n/* $-Handle-$ */\r\nhtml::-webkit-scrollbar-thumb {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 8px;\r\n}\r\n\r\n/* $-Css-Resets-$ */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--tetiary-color-2);\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n.overflow {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  margin: 0 0.5rem;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--tetiary-color);\r\n}\r\n\r\nimg {\r\n  width: 10rem;\r\n}\r\n\r\nbutton {\r\n  padding: 0.2em 1em;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-weight: 700;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n  margin: 1rem 0;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--primary-color);\r\n  transform: scale(1.01);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.br {\r\n  border-radius: 1rem;\r\n  margin: 0.1rem auto;\r\n}\r\n\r\n/* $-Utility-Classes-$ */\r\n.flex {\r\n  display: flex;\r\n}\r\n\r\n/* $-Leaderboard-$ */\r\n.nav {\r\n  padding: 1rem;\r\n  justify-content: space-around;\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\nh1 {\r\n  margin: 3rem auto;\r\n  padding: 0.5rem;\r\n  border-radius: 1rem;\r\n  background-color: var(--secondary-color);\r\n  width: max-content;\r\n  filter: drop-shadow(1px 1px 1px);\r\n  /* stylelint-disable-next-line csstree/validator */\r\n  font-size: clamp(1.5rem, 5vw, 2rem);\r\n}\r\n\r\n.foods {\r\n  padding: 1rem;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n  justify-content: center;\r\n}\r\n\r\n.food-card {\r\n  width: 15.5rem;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem;\r\n}\r\n\r\n.img {\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.summary {\r\n  max-width: 17rem;\r\n}\r\n\r\n.desc {\r\n  font-weight: bold;\r\n}\r\n\r\n.like {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.leader {\r\n  width: 100%;\r\n  height: 1.5rem;\r\n}\r\n\r\n.comment {\r\n  margin: 0.2rem 0;\r\n  height: 2rem;\r\n}\r\n\r\n/* $-modal-$ */\r\n.modal-filter {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--tetiary-color-2-1);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: 0.8s;\r\n  overflow: scroll;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.modal-filter::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.modal-filter.open {\r\n  opacity: 1;\r\n  pointer-events: visible;\r\n}\r\n\r\n.modal {\r\n  border-radius: 1rem;\r\n  position: relative;\r\n  padding: 1.5rem;\r\n  width: max-content;\r\n  transition: 0.7s;\r\n  transform: scaleX(0);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.modal.open {\r\n  transform: scaleX(1);\r\n}\r\n\r\n.bx-x {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 0.5rem;\r\n  border: 1px solid;\r\n  border-radius: 30px;\r\n  background-color: var(--tetiary-color);\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.modal-form {\r\n  flex-direction: column;\r\n}\r\n\r\n.name {\r\n  display: block;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--secondary-color);\r\n  padding: 1rem 0;\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_renderFood_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderFood.js */ "./src/modules/renderFood.js");


// import renderData from './modules/renderData.js';


const loadFoodData = async () => {
  const data = _modules_getMeal_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  (0,_modules_renderFood_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.result);
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
  !*** ./src/modules/renderFood.js ***!
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
  const mealCount = document.createElement('meal-count');
  const mealItem = document.querySelector('.meal-item');

  mealCount.innerHTML = `<a class="meal-count" href="#">Meal (${arr.length})</a>`;
  mealItem.appendChild(mealCount);

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
          <span class="description">summary:<i class="desc">${arr[id].description || 'This taste of this meal will leave you in ecstasy'}</i></span>
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
      const modalFilter = document.querySelector('.modal-filter');
      const addComment = document.querySelector('.modal-form');

      addComment.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('.user').value;
        const comment = document.querySelector('#comment').value;
        (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, name, comment);
        (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
        document.querySelector('.modal-form').reset();
        modalFilter.classList.remove('open');
        modalcontent.classList.remove('open');
      });

      modalFilter.classList.toggle('open');
      modalcontent.classList.toggle('open');

      const closeBtn = document.querySelector('.bx-x');
      closeBtn.addEventListener('click', () => {
        modalFilter.classList.remove('open');
        modalcontent.classList.remove('open');
      });
    }));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFood);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0MsbUJBQW1CO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx5REFBWTtBQUNsQixNQUFNLHdEQUFXO0FBQ2pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDJEQUFjOztBQUU5QztBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDtBQUNBLG9EQUFvRCxhQUFhO0FBQ2pFLDhEQUE4RCwyRUFBMkU7QUFDekk7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQsOEJBQThCO0FBQzlCLHNDQUFzQyxvQkFBb0IsRUFBRSxlQUFlLElBQUksYUFBYSwrQ0FBK0M7QUFDM0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFXO0FBQ25CLFFBQVEsMkRBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dldExpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nZXRNZWFsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qICQtY3VzdG9tIFByb3BlcnRpZXMtJCAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzQyYzZlNztcXHJcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZTJmODljO1xcclxcbiAgLS10ZXRpYXJ5LWNvbG9yOiAjMDMxOTI2O1xcclxcbiAgLS10ZXRpYXJ5LWNvbG9yLTI6ICM3OTc1OTY7XFxyXFxuICAtLXRldGlhcnktY29sb3ItMi0xOiAjNzk3NTk2OWM7XFxyXFxuICAtLXRldGlhcnktY29sb3ItMzogI2UzZjg5YzlkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLXdpZHRoLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1UcmFjay0kICovXFxyXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qICQtSGFuZGxlLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLUNzcy1SZXNldHMtJCAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yLTIpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5vdmVyZmxvdyB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBtYXJnaW46IDAgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAuMmVtIDFlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5iciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1VdGlsaXR5LUNsYXNzZXMtJCAqL1xcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qICQtTGVhZGVyYm9hcmQtJCAqL1xcclxcbi5uYXYge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHgpO1xcclxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGNzc3RyZWUvdmFsaWRhdG9yICovXFxyXFxuICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNXZ3LCAycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2RzIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2FyZCB7XFxyXFxuICB3aWR0aDogMTUuNXJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZyB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgbWF4LXdpZHRoOiAxN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2Mge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgbWFyZ2luOiAwLjJyZW0gMDtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1tb2RhbC0kICovXFxyXFxuLm1vZGFsLWZpbHRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3ItMi0xKTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuOHM7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgcGFkZGluZy10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1maWx0ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1maWx0ZXIub3BlbiB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgdHJhbnNpdGlvbjogMC43cztcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLm9wZW4ge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblxcclxcbi5ieC14IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMC41cmVtO1xcclxcbiAgcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1mb3JtIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBMEI7QUFDMUI7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsY0FBYztBQUNkO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBLGVBQWU7QUFDZjtFQUNFLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7QUFDZjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtEQUFrRDtFQUNsRCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0Qyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogJC1jdXN0b20gUHJvcGVydGllcy0kICovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjNDJjNmU3O1xcclxcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNlMmY4OWM7XFxyXFxuICAtLXRldGlhcnktY29sb3I6ICMwMzE5MjY7XFxyXFxuICAtLXRldGlhcnktY29sb3ItMjogIzc5NzU5NjtcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0yLTE6ICM3OTc1OTY5YztcXHJcXG4gIC0tdGV0aWFyeS1jb2xvci0zOiAjZTNmODljOWQ7XFxyXFxufVxcclxcblxcclxcbi8qICQtd2lkdGgtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLVRyYWNrLSQgKi9cXHJcXG5odG1sOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXRpYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1IYW5kbGUtJCAqL1xcclxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qICQtQ3NzLVJlc2V0cy0kICovXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3ItMik7XFxyXFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJmbG93IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgcGFkZGluZzogMC4yZW0gMWVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRldGlhcnktY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBtYXJnaW46IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLVV0aWxpdHktQ2xhc3Nlcy0kICovXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLyogJC1MZWFkZXJib2FyZC0kICovXFxyXFxuLm5hdiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW46IDNyZW0gYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDFweCk7XFxyXFxuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzdHJlZS92YWxpZGF0b3IgKi9cXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA1dncsIDJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZHMge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkIHtcXHJcXG4gIHdpZHRoOiAxNS41cmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSB7XFxyXFxuICBtYXgtd2lkdGg6IDE3cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Uge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBtYXJnaW46IDAuMnJlbSAwO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAkLW1vZGFsLSQgKi9cXHJcXG4ubW9kYWwtZmlsdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvci0yLTEpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC44cztcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZpbHRlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZpbHRlci5vcGVuIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwub3BlbiB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ4LXgge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwLjVyZW07XFxyXFxuICByaWdodDogMC41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV0aWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldE1lbnVMaXN0IGZyb20gJy4vbW9kdWxlcy9nZXRNZWFsLmpzJztcbmltcG9ydCByZW5kZXJEYXRhIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJEYXRhLmpzJztcblxuY29uc3QgbG9hZEZvb2REYXRhID0gKCkgPT4ge1xuICBnZXRNZW51TGlzdCgpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHJlbmRlckRhdGEoZGF0YS5yZXN1bHRzKSk7XG59O1xuXG53aW5kb3cub25sb2FkID0gbG9hZEZvb2REYXRhKCk7IiwiY29uc3QgZ2V0VXNlckNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQk44TXZrT3M3NE9meXU0Q2ZITngvY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJDb21tZW50O1xuIiwiY29uc3QgZ2V0VXNlckxpa2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1IxTlRLMVJDU0E1bnBsbkpvWmxZL2xpa2VzJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHJlc3VsdCA9IGRhdGEuc29ydCgoYSwgYikgPT4gYS5pdGVtX2lkIC0gYi5pdGVtX2lkKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJMaWtlO1xuIiwiY29uc3QgZ2V0TWVudUxpc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1SYXBpZEFQSS1LZXknOiAnOWZjZTljYmEyMW1zaDI2MWRlMWQ4Yjc5MzY3OXAxNmI2NTdqc244ODllYjdjNGM2YmQnLFxuICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICd0YXN0eS5wLnJhcGlkYXBpLmNvbScsXG4gICAgfSxcbiAgfTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90YXN0eS5wLnJhcGlkYXBpLmNvbS9yZWNpcGVzL2xpc3Q/ZnJvbT0wJnNpemU9MTYnLCBvcHRpb25zKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVudUxpc3Q7IiwiY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaWQsIG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgICB1c2VybmFtZTogbmFtZSxcbiAgICBjb21tZW50LFxuICB9O1xuICBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0JOOE12a09zNzRPZnl1NENmSE54L2NvbW1lbnRzJztcbiAgYXdhaXQgZmV0Y2goQVBJX1VSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudDsiLCJjb25zdCBwb3N0VXNlckxpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfTtcbiAgY29uc3QgZGF0YVRvUG9zdCA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH07XG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9SMU5USzFSQ1NBNW5wbG5Kb1psWS9saWtlcycsIGRhdGFUb1Bvc3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdFVzZXJMaWtlOyIsImltcG9ydCBwb3N0Q29tbWVudCBmcm9tICcuL3Bvc3RDb21tZW50cy5qcyc7XG5pbXBvcnQgZ2V0VXNlckNvbW1lbnQgZnJvbSAnLi9nZXRDb21tZW50cy5qcyc7XG5pbXBvcnQgcG9zdFVzZXJMaWtlIGZyb20gJy4vcG9zdExpa2VzLmpzJztcbmltcG9ydCBnZXRVc2VyTGlrZSBmcm9tICcuL2dldExpa2VzLmpzJztcblxuY29uc3QgcmVuZGVyRGF0YSA9IGFzeW5jIChhcnIpID0+IHtcbiAgY29uc3QgdXNlckxpa2UgPSBhd2FpdCBnZXRVc2VyTGlrZSgpO1xuICBjb25zdCBmb29kTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kcycpO1xuICBjb25zdCBtZWFsQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZWFsLWNvdW50Jyk7XG4gIGNvbnN0IG1lYWxJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwtaXRlbScpO1xuXG4gIG1lYWxDb3VudC5pbm5lckhUTUwgPSBgPGEgY2xhc3M9XCJtZWFsLWNvdW50XCIgaHJlZj1cIiNcIj5NZWFsICgke2Fyci5sZW5ndGh9KTwvYT5gO1xuICBtZWFsSXRlbS5hcHBlbmRDaGlsZChtZWFsQ291bnQpO1xuXG4gIGFyci5mb3JFYWNoKChjYXJkLCBpZCkgPT4ge1xuICAgIGZvb2RMaXN0LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImZvb2QtY2FyZCBiciBmbGV4XCI+XG4gICAgPGRpdiBjbGFzcz1cImltZyBmbGV4XCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYnJcIiBzcmM9JHtjYXJkLnRodW1ibmFpbF91cmx9IGFsdD0ke2NhcmQudGh1bWJuYWlsX2FsdF90ZXh0fT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibGlrZSBmbGV4XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5OYW1lOjxpIGNsYXNzPVwiZGVzY1wiPiR7Y2FyZC5uYW1lfTwvaT5cbiAgICAgIDwvc3Bhbj48aSAgY2xhc3M9J2J4IGJ4cy1oZWFydCc+JHt1c2VyTGlrZVtpZF0ubGlrZXN9PC9pPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50XCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgY29uc3QgbGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ieHMtaGVhcnQnKTtcbiAgICBsaWtlLmZvckVhY2goKGJ0biwgaWQpID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHBvc3RVc2VyTGlrZShpZCk7XG4gICAgICBnZXRVc2VyTGlrZSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudCcpO1xuXG4gICAgY29tbWVudEJ0bi5mb3JFYWNoKChidG4sIGlkKSA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb2RhbGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcblxuICAgICAgLy8gR2V0IGFuZCBDb3VudCBjb21tZW50c1xuICAgICAgY29uc3QgdXNlckNvbW1lbnQgPSBhd2FpdCBnZXRVc2VyQ29tbWVudChpZCk7XG5cbiAgICAgIG1vZGFsY29udGVudC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJieCBieC14XCI+PC9pPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgZmxleFwiPiAgICBcbiAgICAgICAgPGltZyBjbGFzcz1cImJyXCIgc3JjPSR7YXJyW2lkXS50aHVtYm5haWxfdXJsfSBhbHQ9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5OYW1lOjxpIGNsYXNzPVwiZGVzY1wiPiR7YXJyW2lkXS5uYW1lfTwvaT48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPnN1bW1hcnk6PGkgY2xhc3M9XCJkZXNjXCI+JHthcnJbaWRdLmRlc2NyaXB0aW9uIHx8ICdUaGlzIHRhc3RlIG9mIHRoaXMgbWVhbCB3aWxsIGxlYXZlIHlvdSBpbiBlY3N0YXN5J308L2k+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4+Q29tbWVudHMgKCR7dXNlckNvbW1lbnQubGVuZ3RoIHx8IDB9KTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPiR7dXNlckNvbW1lbnQubGVuZ3RoID49IDFcbiAgICA/IHVzZXJDb21tZW50Lm1hcCgodXNlcikgPT4gYDxwPiR7dXNlci5jcmVhdGlvbl9kYXRlfSAke3VzZXIudXNlcm5hbWV9IDogJHt1c2VyLmNvbW1lbnR9PC9wPmApLmpvaW4oJyAnKSA6ICc8cD4gXCJtYWtlIGEgY29tbWVudFwiIDwvcD4nfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsLWZvcm0gZmxleFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJOYW1lXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsZWFkZXIgdXNlclwiIG5hbWU9XCJOYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInlvdXIgbmFtZVwiIG1heGxlbmd0aD1cIjMwXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiVGV4dGFyZWFcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImxlYWRlciBjb21tZW50XCIgaWQ9XCJjb21tZW50XCJuYW1lPVwidGV4dGFyZWFcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwieW91ciBjb21tZW50XCIgbWF4bGVuZ3RoPVwiODBcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvaT48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+YDtcbiAgICAgIGNvbnN0IG1vZGFsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZpbHRlcicpO1xuICAgICAgY29uc3QgYWRkQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtJyk7XG5cbiAgICAgIGFkZENvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXInKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50JykudmFsdWU7XG4gICAgICAgIHBvc3RDb21tZW50KGlkLCBuYW1lLCBjb21tZW50KTtcbiAgICAgICAgZ2V0VXNlckNvbW1lbnQoaWQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybScpLnJlc2V0KCk7XG4gICAgICAgIG1vZGFsRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgICAgbW9kYWxjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH0pO1xuXG4gICAgICBtb2RhbEZpbHRlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICBtb2RhbGNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ieC14Jyk7XG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxGaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICBtb2RhbGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgfSk7XG4gICAgfSkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckRhdGE7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

