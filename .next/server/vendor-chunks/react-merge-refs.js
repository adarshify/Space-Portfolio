"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-merge-refs";
exports.ids = ["vendor-chunks/react-merge-refs"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-merge-refs/dist/react-merge-refs.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-merge-refs/dist/react-merge-refs.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction mergeRefs(refs) {\n  return function (value) {\n    refs.forEach(function (ref) {\n      if (typeof ref === \"function\") {\n        ref(value);\n      } else if (ref != null) {\n        ref.current = value;\n      }\n    });\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeRefs);\n//# sourceMappingURL=react-merge-refs.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWVyZ2UtcmVmcy9kaXN0L3JlYWN0LW1lcmdlLXJlZnMuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZS1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbWVyZ2UtcmVmcy9kaXN0L3JlYWN0LW1lcmdlLXJlZnMuZXNtLmpzP2FkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWVyZ2VSZWZzKHJlZnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJlZnMuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZih2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlUmVmcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LW1lcmdlLXJlZnMuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-merge-refs/dist/react-merge-refs.esm.js\n");

/***/ })

};
;