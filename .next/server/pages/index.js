"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = ()=>{\n    // Cambio al escribir en la barra\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        setUserInput(e.target.value);\n    };\n    // Crear encima de otro list al dar click en Submit\n    const [todoList, setTodoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTodoList([\n            userInput,\n            ...todoList\n        ]);\n        setUserInput(\"\");\n    };\n    // Borrar un elemento de la lista\n    const handleDelete = (todo)=>{\n        const updatedArr = todoList.filter((todoItem)=>todoItem !== todo);\n        setTodoList(updatedArr);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Next.js Todo List\"\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: userInput,\n                        placeholder: \"Enter a to do\",\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todoList.length >= 1 ? todoList.map((todo, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDelete(todo),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, idx, true, {\n                        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Add an element\"\n                }, void 0, false, {\n                    fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/soa/0_NEXT/TODO/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFakMsTUFBTUMsUUFBUSxJQUFNO0lBQ2xCLGlDQUFpQztJQUNqQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTUksZUFBZSxDQUFDQyxJQUFNO1FBQzFCRixhQUFhRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxtREFBbUQ7SUFDbkQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVUsZUFBZSxDQUFDTCxJQUFNO1FBQzFCQSxFQUFFTSxjQUFjO1FBQ2hCRixZQUFZO1lBQUNQO2VBQWNNO1NBQVM7UUFDcENMLGFBQWE7SUFDZjtJQUVBLGlDQUFpQztJQUNqQyxNQUFNUyxlQUFlLENBQUNDLE9BQVM7UUFDN0IsTUFBTUMsYUFBYU4sU0FBU08sTUFBTSxDQUFDLENBQUNDLFdBQWFBLGFBQWFIO1FBQzlESixZQUFZSztJQUNkO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O2tDQUNDLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTGQsT0FBT0w7d0JBQ1BvQixhQUFhO3dCQUNiQyxVQUFVbkI7Ozs7OztrQ0FFWiw4REFBQ29CO3dCQUFPQyxTQUFTZjtrQ0FBYzs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ2dCOzBCQUNFbEIsU0FBU21CLE1BQU0sSUFBSSxJQUNsQm5CLFNBQVNvQixHQUFHLENBQUMsQ0FBQ2YsTUFBTWdCLG9CQUNsQiw4REFBQ0M7OzRCQUNFakI7MENBQ0QsOERBQUNXO2dDQUFPQyxTQUFTLElBQU1iLGFBQWFDOzBDQUFPOzs7Ozs7O3VCQUZwQ2dCOzs7O21EQU1YLDhEQUFDRTs4QkFBRTs7Ozs7NkJBQ0o7Ozs7Ozs7Ozs7OztBQUlUO0FBRUEsaUVBQWU5QixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAvLyBDYW1iaW8gYWwgZXNjcmliaXIgZW4gbGEgYmFycmFcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVc2VySW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIC8vIENyZWFyIGVuY2ltYSBkZSBvdHJvIGxpc3QgYWwgZGFyIGNsaWNrIGVuIFN1Ym1pdFxuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VG9kb0xpc3QoW3VzZXJJbnB1dCwgLi4udG9kb0xpc3RdKTtcbiAgICBzZXRVc2VySW5wdXQoJycpO1xuICB9O1xuXG4gIC8vIEJvcnJhciB1biBlbGVtZW50byBkZSBsYSBsaXN0YVxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRBcnIgPSB0b2RvTGlzdC5maWx0ZXIoKHRvZG9JdGVtKSA9PiB0b2RvSXRlbSAhPT0gdG9kbyk7XG4gICAgc2V0VG9kb0xpc3QodXBkYXRlZEFycik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPk5leHQuanMgVG9kbyBMaXN0PC9oMT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0VudGVyIGEgdG8gZG8nfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9MaXN0Lmxlbmd0aCA+PSAxID8gKFxuICAgICAgICAgIHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICB7dG9kb31cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUodG9kbyl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkFkZCBhbiBlbGVtZW50PC9wPlxuICAgICAgICApfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5kZXgiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEZWxldGUiLCJ0b2RvIiwidXBkYXRlZEFyciIsImZpbHRlciIsInRvZG9JdGVtIiwiZGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsImxlbmd0aCIsIm1hcCIsImlkeCIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();