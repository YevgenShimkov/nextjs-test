"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_bandapixels_IPogrammer_lecture_23_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_bandapixels_IPogrammer_lecture_23_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_bandapixels_IPogrammer_lecture_23_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n// adding a new meetup\nvar NewMeetupPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var addMeetupHandleer = function() {\n        var _ref = _asyncToGenerator(_home_bandapixels_IPogrammer_lecture_23_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(enteredMeetupData) {\n            var response, data;\n            return _home_bandapixels_IPogrammer_lecture_23_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/new-meetup\", {\n                            method: \"POST\",\n                            body: JSON.stringify(enteredMeetupData),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                        router.push(\"/\"); // come back on home page\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addMeetupHandleer(enteredMeetupData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Head встановлює title сторінки та її опис\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Add a New Meetup\"\n                    }, void 0, false, {\n                        fileName: \"/home/bandapixels/IPogrammer/lecture-23/pages/new-meetup/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        nema: \"description\",\n                        content: \"Add your own meetups\"\n                    }, void 0, false, {\n                        fileName: \"/home/bandapixels/IPogrammer/lecture-23/pages/new-meetup/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bandapixels/IPogrammer/lecture-23/pages/new-meetup/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onAddMeetup: addMeetupHandleer\n            }, void 0, false, {\n                fileName: \"/home/bandapixels/IPogrammer/lecture-23/pages/new-meetup/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bandapixels/IPogrammer/lecture-23/pages/new-meetup/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage);\nvar _c;\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ0o7QUFDc0M7O0FBRW5FLHNCQUFzQjtBQUN0QixJQUFNSSxhQUFhLEdBQUcsV0FBTTs7SUFDMUIsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBRTFCLElBQU1NLGlCQUFpQjttQkFBRyxzTEFBT0MsaUJBQWlCLEVBQUs7Z0JBRS9DQyxRQUFRLEVBUVJDLElBQUk7Ozs7OytCQVJhQyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7NEJBQzlDQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsaUJBQWlCLENBQUM7NEJBQ3ZDUSxPQUFPLEVBQUU7Z0NBQ1AsY0FBYyxFQUFFLGtCQUFrQjs2QkFDbkM7eUJBQ0YsQ0FBQzs7d0JBTklQLFFBQVEsWUFNWjs7K0JBRWlCQSxRQUFRLENBQUNRLElBQUksRUFBRTs7d0JBQTVCUCxJQUFJLFlBQXdCO3dCQUVsQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULElBQUksQ0FBQyxDQUFDO3dCQUVsQkosTUFBTSxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7Ozs7OztTQUM1Qzt3QkFmS2IsaUJBQWlCLENBQVVDLGlCQUFpQjs7O09BZWpEO0lBRUQ7SUFDQSxxQkFDRSw4REFBQ04sMkNBQVE7OzBCQUNQLDhEQUFDQyxrREFBSTs7a0NBQ0gsOERBQUNrQixPQUFLO2tDQUFDLGtCQUFnQjs7Ozs7NkJBQVE7a0NBQy9CLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLHNCQUFzQjs7Ozs7NkJBQUc7Ozs7OztxQkFDckQ7MEJBQ1AsOERBQUNwQix5RUFBYTtnQkFBQ3FCLFdBQVcsRUFBRWxCLGlCQUFpQjs7Ozs7cUJBQUk7WUFBQSxHQUNuRDs7Ozs7O2FBQVcsQ0FDWDtDQUNIO0dBOUJLRixhQUFhOztRQUNGSixrREFBUzs7O0FBRHBCSSxLQUFBQSxhQUFhO0FBZ0NuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy1tZWV0dXAvaW5kZXguanM/OTU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybSc7XG5cbi8vIGFkZGluZyBhIG5ldyBtZWV0dXBcbmNvbnN0IE5ld01lZXR1cFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGFkZE1lZXR1cEhhbmRsZWVyID0gYXN5bmMgKGVudGVyZWRNZWV0dXBEYXRhKSA9PiB7XG4gICAgLy8g0LLRltC00LHRg9C00LXRgtGB0Y8g0LfQsNC/0YPRgdC6IEFQSSDQtyDQstGW0LTQv9C+0LLRltC00L3QvtGOINCw0LTRgNC10YHRgdC+0Y5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyDQstGW0LTQv9C+0LLRltC00Ywg0L/RltGB0LvRjyDQt9Cw0L/QuNGC0YNcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgcm91dGVyLnB1c2goJy8nKTsgLy8gY29tZSBiYWNrIG9uIGhvbWUgcGFnZVxuICB9O1xuXG4gIC8vIEhlYWQg0LLRgdGC0LDQvdC+0LLQu9GO0ZQgdGl0bGUg0YHRgtC+0YDRltC90LrQuCDRgtCwINGX0Zcg0L7Qv9C40YFcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFkZCBhIE5ldyBNZWV0dXA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuZW1hPSdkZXNjcmlwdGlvbicgY29udGVudD0nQWRkIHlvdXIgb3duIG1lZXR1cHMnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmV3TWVldHVwRm9ybSBvbkFkZE1lZXR1cD17YWRkTWVldHVwSGFuZGxlZXJ9IC8+O1xuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkZyYWdtZW50IiwiSGVhZCIsIk5ld01lZXR1cEZvcm0iLCJOZXdNZWV0dXBQYWdlIiwicm91dGVyIiwiYWRkTWVldHVwSGFuZGxlZXIiLCJlbnRlcmVkTWVldHVwRGF0YSIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwidGl0bGUiLCJtZXRhIiwibmVtYSIsImNvbnRlbnQiLCJvbkFkZE1lZXR1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n");

/***/ })

});