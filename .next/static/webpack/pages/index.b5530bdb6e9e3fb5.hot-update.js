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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst index = ()=>{\n    _s();\n    //CAMBIO AL ESCRIBIR EN LA BARRA\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        e.preventDefault();\n        setUserInput(e.target.value);\n    // console.log(userInput)\n    };\n    // CREAR ENCIMA DE OTRO LIST AL DAR CLICK EN Submit\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodoList([\n            userInput,\n            ...todoList\n        ]);\n    };\n    setUserInput(\"\");\n    // BORRAR UN ELEMENTO DE LA LISTA\n    const handleDelete = (todo)=>{\n        const updateArr = todoList.filter((todo)=>todoList.indexOf(todoItem) != todoList.indexOf(todo));\n        setTodoList(updateArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next JS Todo List\"\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 80\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.preventDefault();\n                                    handleDelete(todo);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 52\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 32\n                    }, undefined);\n                }) : \"Add an element\"\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(index, \"In0CfmjzHYwZeIgaI5r9wD0TDjs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLFFBQVEsSUFBTTs7SUFFaEIsZ0NBQWdDO0lBQ2hDLE1BQUssQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMxQyxNQUFNSSxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJILGFBQWFFLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQix5QkFBeUI7SUFDN0I7SUFFQSxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVcsZUFBZSxDQUFDTixJQUFNO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCSSxZQUFZO1lBQ1JSO2VBQ0dPO1NBQ047SUFDTDtJQUVBTixhQUFhO0lBRWIsaUNBQWlDO0lBQ2pDLE1BQU1TLGVBQWUsQ0FBQ0MsT0FBUztRQUMzQixNQUFNQyxZQUFXTCxTQUFTTSxNQUFNLENBQUNGLENBQUFBLE9BQVFKLFNBQVNPLE9BQU8sQ0FBQ0MsYUFBYVIsU0FBU08sT0FBTyxDQUFDSDtRQUN4RkgsWUFBWUk7SUFDaEI7SUFHQSxxQkFDSSw4REFBQ0k7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7a0NBQ0csOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPZCxPQUFPTjt3QkFBV3FCLFVBQVVuQjs7Ozs7O29CQUFlO2tDQUFDLDhEQUFDb0I7d0JBQU9DLFNBQVNkO2tDQUFjOzs7Ozs7Ozs7Ozs7MEJBRWxHLDhEQUFDZTswQkFFT2pCLFNBQVNrQixNQUFNLElBQUcsSUFBSWxCLFNBQVNtQixHQUFHLENBQUMsQ0FBQ2YsTUFBTWdCLE1BQVE7b0JBQzlDLHFCQUFPLDhEQUFDQzs7NEJBQWNqQjswQ0FBSyw4REFBQ1c7Z0NBQU9DLFNBQVMsQ0FBQ3BCLElBQU07b0NBQy9DQSxFQUFFQyxjQUFjO29DQUNoQk0sYUFBYUM7Z0NBQ2pCOzBDQUFHOzs7Ozs7O3VCQUhhZ0I7Ozs7O2dCQUtwQixLQUNFLGdCQUFnQjs7Ozs7Ozs7Ozs7O0FBTXRDO0dBbERNNUI7QUFvRE4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG5cbiAgICAvL0NBTUJJTyBBTCBFU0NSSUJJUiBFTiBMQSBCQVJSQVxuICAgIGNvbnN0W3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbnB1dClcbiAgICB9XG5cbiAgICAvLyBDUkVBUiBFTkNJTUEgREUgT1RSTyBMSVNUIEFMIERBUiBDTElDSyBFTiBTdWJtaXRcbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRUb2RvTGlzdChbXG4gICAgICAgICAgICB1c2VySW5wdXQsXG4gICAgICAgICAgICAuLi50b2RvTGlzdFxuICAgICAgICBdKVxuICAgIH1cblxuICAgIHNldFVzZXJJbnB1dCgnJylcbiAgICBcbiAgICAvLyBCT1JSQVIgVU4gRUxFTUVOVE8gREUgTEEgTElTVEFcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVBcnIgPXRvZG9MaXN0LmZpbHRlcih0b2RvID0+IHRvZG9MaXN0LmluZGV4T2YodG9kb0l0ZW0pICE9IHRvZG9MaXN0LmluZGV4T2YodG9kbykpIFxuICAgICAgICBzZXRUb2RvTGlzdCh1cGRhdGVBcnIpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPk5leHQgSlMgVG9kbyBMaXN0PC9oMT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VySW5wdXR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubGVuZ3RoID49MSA/IHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aWR4fT57dG9kb308YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHRvZG8pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5EZWxldGU8L2J1dHRvbj48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogJ0FkZCBhbiBlbGVtZW50J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImluZGV4IiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlRGVsZXRlIiwidG9kbyIsInVwZGF0ZUFyciIsImZpbHRlciIsImluZGV4T2YiLCJ0b2RvSXRlbSIsImRpdiIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});