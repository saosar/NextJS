"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst index = ()=>{\n    _s();\n    //CAMBIO AL ESCRIBIR EN LA BARRA\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    // console.log(userInput)\n    };\n    // CREAR ENCIMA DE OTRO LIST AL DAR CLICK EN Submit\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodoList([\n            userInput,\n            ...todoList\n        ]);\n    };\n    // BORRAR UN ELEMENTO DE LA LISTA\n    const handleDelete = (todo)=>{\n        const updateArr = todoList.filter((todo)=>todoList.indexOf(todoItem) != todoList.indexOf(todo));\n        setTodoList(updateArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next JS Todo List\"\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 62\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{},\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 52\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 32\n                    }, undefined);\n                }) : \"Add an element\"\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(index, \"In0CfmjzHYwZeIgaI5r9wD0TDjs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLFFBQVEsSUFBTTs7SUFFaEIsZ0NBQWdDO0lBQ2hDLE1BQUssQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMxQyxNQUFNSSxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJILGFBQWFFLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQix5QkFBeUI7SUFDN0I7SUFFQSxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVcsZUFBZSxDQUFDTixJQUFNO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCSSxZQUFZO1lBQ1JSO2VBQ0dPO1NBQ047SUFDTDtJQUVBLGlDQUFpQztJQUNqQyxNQUFNRyxlQUFlLENBQUNDLE9BQVM7UUFDM0IsTUFBTUMsWUFBV0wsU0FBU00sTUFBTSxDQUFDRixDQUFBQSxPQUFRSixTQUFTTyxPQUFPLENBQUNDLGFBQWFSLFNBQVNPLE9BQU8sQ0FBQ0g7UUFDeEZILFlBQVlJO0lBQ2hCO0lBR0EscUJBQ0ksOERBQUNJOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O2tDQUNHLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsVUFBVW5COzs7Ozs7b0JBQWU7a0NBQUMsOERBQUNvQjt3QkFBT0MsU0FBU2Q7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFFaEYsOERBQUNlOzBCQUVPakIsU0FBU2tCLE1BQU0sSUFBRyxJQUFJbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDZixNQUFNZ0IsTUFBUTtvQkFDOUMscUJBQU8sOERBQUNDOzs0QkFBY2pCOzBDQUFLLDhEQUFDVztnQ0FBT0MsU0FBUyxDQUFDcEIsSUFBTSxDQUVuRDswQ0FBRzs7Ozs7Ozt1QkFGYXdCOzs7OztnQkFJcEIsS0FDRSxnQkFBZ0I7Ozs7Ozs7Ozs7OztBQU10QztHQS9DTTVCO0FBaUROLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuXG4gICAgLy9DQU1CSU8gQUwgRVNDUklCSVIgRU4gTEEgQkFSUkFcbiAgICBjb25zdFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0VXNlcklucHV0KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VySW5wdXQpXG4gICAgfVxuXG4gICAgLy8gQ1JFQVIgRU5DSU1BIERFIE9UUk8gTElTVCBBTCBEQVIgQ0xJQ0sgRU4gU3VibWl0XG4gICAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0VG9kb0xpc3QoW1xuICAgICAgICAgICAgdXNlcklucHV0LFxuICAgICAgICAgICAgLi4udG9kb0xpc3RcbiAgICAgICAgXSlcbiAgICB9XG5cbiAgICAvLyBCT1JSQVIgVU4gRUxFTUVOVE8gREUgTEEgTElTVEFcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVBcnIgPXRvZG9MaXN0LmZpbHRlcih0b2RvID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpIFxuICAgICAgICBzZXRUb2RvTGlzdCh1cGRhdGVBcnIpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk5leHQgSlMgVG9kbyBMaXN0PC9oMT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49MSA/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH19PkRlbGV0ZTwvYnV0dG9uPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiAnQWRkIGFuIGVsZW1lbnQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlQXJyIiwiZmlsdGVyIiwiaW5kZXhPZiIsInRvZG9JdGVtIiwiZGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJsZW5ndGgiLCJtYXAiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});