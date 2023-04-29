"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useDraw */ \"(app-client)/./src/hooks/useDraw.ts\");\n/* harmony import */ var _utils_drawLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/drawLine */ \"(app-client)/./src/utils/drawLine.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-color */ \"(app-client)/./node_modules/react-color/es/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"(app-client)/./node_modules/socket.io-client/build/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__.io)(\"http://localhost:3001\");\nfunction Home() {\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"#000\");\n    const { canvasRef , onMouseDown , clear  } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw)(createLine);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var _canvasRef_current;\n        const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n        socket.emit(\"client-ready\");\n        socket.on(\"get-canvas-state\", ()=>{\n            var _canvasRef_current;\n            if (!((_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.toDataURL())) return;\n            socket.emit(\"canvas-state\", canvasRef.current.toDataURL());\n        });\n        socket.on(\"canvas-state-from-server\", (state)=>{\n            console.log(\"i received\");\n        });\n        socket.on(\"draw-line\", (param)=>{\n            let { prevPoint , currentPoint , color  } = param;\n            if (!ctx) return;\n            (0,_utils_drawLine__WEBPACK_IMPORTED_MODULE_2__.drawLine)({\n                prevPoint,\n                currentPoint,\n                ctx,\n                color\n            });\n        });\n        socket.on(\"clear\", clear);\n    }, [\n        canvasRef,\n        clear\n    ]);\n    function createLine(param) {\n        let { prevPoint , currentPoint , ctx  } = param;\n        socket.emit(\"draw-line\", {\n            prevPoint,\n            currentPoint,\n            color\n        });\n        (0,_utils_drawLine__WEBPACK_IMPORTED_MODULE_2__.drawLine)({\n            prevPoint,\n            currentPoint,\n            ctx,\n            color\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-10 pr-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_4__.ChromePicker, {\n                        className: \"mr-4\",\n                        color: color,\n                        onChange: (e)=>setColor(e.hex)\n                    }, void 0, false, {\n                        fileName: \"/media/bidhan/Downloads/mint web/canvas/client/src/app/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>socket.emit(\"clear\"),\n                        className: \"p-2 rounded-md border border-black\",\n                        children: \"CLear Canvas\"\n                    }, void 0, false, {\n                        fileName: \"/media/bidhan/Downloads/mint web/canvas/client/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/bidhan/Downloads/mint web/canvas/client/src/app/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                onMouseDown: onMouseDown,\n                ref: canvasRef,\n                width: 500,\n                height: 500,\n                className: \"border border-black rounded-md\"\n            }, void 0, false, {\n                fileName: \"/media/bidhan/Downloads/mint web/canvas/client/src/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/bidhan/Downloads/mint web/canvas/client/src/app/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 6\n    }, this);\n}\n_s(Home, \"5naD5fxhsLkhLDVUaLXLv/kedLs=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0U7QUFDQTtBQUNIO0FBQ0w7QUFDbkMsTUFBTU0sU0FBU0Qsb0RBQUVBLENBQUM7QUFJSCxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxFQUFDTyxVQUFTLEVBQUNDLFlBQVcsRUFBQ0MsTUFBSyxFQUFDLEdBQUdaLHVEQUFPQSxDQUFDYTtJQUU5Q1gsZ0RBQVNBLENBQUMsSUFBTTtZQUNGUTtRQUFaLE1BQU1JLE1BQU1KLENBQUFBLHFCQUFBQSxVQUFVSyxPQUFPLGNBQWpCTCxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CTSxXQUFXO1FBRTFDVixPQUFPVyxJQUFJLENBQUM7UUFFWlgsT0FBT1ksRUFBRSxDQUFDLG9CQUFtQixJQUFJO2dCQUMxQlI7WUFBTCxJQUFJLEVBQUNBLENBQUFBLHFCQUFBQSxVQUFVSyxPQUFPLGNBQWpCTCxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CUyxjQUFhO1lBQ3JDYixPQUFPVyxJQUFJLENBQUMsZ0JBQWVQLFVBQVVLLE9BQU8sQ0FBQ0ksU0FBUztRQUN4RDtRQUVBYixPQUFPWSxFQUFFLENBQUMsNEJBQTJCLENBQUNFLFFBQWdCO1lBQzFEQyxRQUFRQyxHQUFHLENBQUM7UUFFUjtRQUVBaEIsT0FBT1ksRUFBRSxDQUFDLGFBQWEsU0FBdUQ7Z0JBQXRELEVBQUVLLFVBQVMsRUFBRUMsYUFBWSxFQUFFaEIsTUFBSyxFQUFpQjtZQUN2RSxJQUFJLENBQUNNLEtBQUs7WUFDVmIseURBQVFBLENBQUM7Z0JBQUVzQjtnQkFBV0M7Z0JBQWNWO2dCQUFLTjtZQUFNO1FBQ2pEO1FBRUFGLE9BQU9ZLEVBQUUsQ0FBQyxTQUFRTjtJQUVwQixHQUFHO1FBQUNGO1FBQVVFO0tBQU07SUFHcEIsU0FBU0MsV0FBVyxLQUFzQyxFQUFFO1lBQXhDLEVBQUVVLFVBQVMsRUFBRUMsYUFBWSxFQUFFVixJQUFHLEVBQVEsR0FBdEM7UUFDbEJSLE9BQU9XLElBQUksQ0FBQyxhQUFhO1lBQUVNO1lBQVdDO1lBQWNoQjtRQUFNO1FBQzFEUCx5REFBUUEsQ0FBQztZQUFFc0I7WUFBV0M7WUFBY1Y7WUFBS047UUFBTTtJQUNqRDtJQUVBLHFCQUNHLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ3RCLHFEQUFZQTt3QkFBQ3NCLFdBQVU7d0JBQU9sQixPQUFPQTt3QkFBT21CLFVBQVUsQ0FBQ0MsSUFBS25CLFNBQVNtQixFQUFFQyxHQUFHOzs7Ozs7a0NBQzNFLDhEQUFDQzt3QkFBT0MsTUFBSzt3QkFBU0MsU0FBUyxJQUFLMUIsT0FBT1csSUFBSSxDQUFDO3dCQUFVUyxXQUFVO2tDQUFxQzs7Ozs7Ozs7Ozs7OzBCQUV6Ryw4REFBQ087Z0JBQU90QixhQUFhQTtnQkFBYXVCLEtBQUt4QjtnQkFBV3lCLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtWLFdBQVU7Ozs7Ozs7Ozs7OztBQUszRixDQUFDO0dBN0N1Qm5COztRQUVnQlAsbURBQU9BOzs7S0FGdkJPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRHJhdyB9IGZyb20gXCJAL2hvb2tzL3VzZURyYXdcIlxuaW1wb3J0IHsgZHJhd0xpbmUgfSBmcm9tIFwiQC91dGlscy9kcmF3TGluZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7Q2hyb21lUGlja2VyfSBmcm9tIFwicmVhY3QtY29sb3JcIlxuaW1wb3J0IHtpb30gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIlxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIilcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIiMwMDBcIilcbiAgY29uc3Qge2NhbnZhc1JlZixvbk1vdXNlRG93bixjbGVhcn0gPSB1c2VEcmF3KGNyZWF0ZUxpbmUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdHggPSBjYW52YXNSZWYuY3VycmVudD8uZ2V0Q29udGV4dChcIjJkXCIpXG5cbiAgICBzb2NrZXQuZW1pdChcImNsaWVudC1yZWFkeVwiKVxuXG4gICAgc29ja2V0Lm9uKFwiZ2V0LWNhbnZhcy1zdGF0ZVwiLCgpPT57XG4gICAgICBpZiAoIWNhbnZhc1JlZi5jdXJyZW50Py50b0RhdGFVUkwoKSkgcmV0dXJuXG4gICAgICBzb2NrZXQuZW1pdCgnY2FudmFzLXN0YXRlJyxjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoKSlcbiAgICB9KVxuXG4gICAgc29ja2V0Lm9uKFwiY2FudmFzLXN0YXRlLWZyb20tc2VydmVyXCIsKHN0YXRlOiBzdHJpbmcpPT57XG5jb25zb2xlLmxvZyhcImkgcmVjZWl2ZWRcIik7XG5cbiAgICB9KVxuXG4gICAgc29ja2V0Lm9uKCdkcmF3LWxpbmUnLCAoeyBwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgY29sb3IgfTogRHJhd0xpbmVQcm9wcykgPT4ge1xuICAgICAgaWYgKCFjdHgpIHJldHVybiBcbiAgICAgIGRyYXdMaW5lKHsgcHJldlBvaW50LCBjdXJyZW50UG9pbnQsIGN0eCwgY29sb3IgfSlcbiAgICB9KVxuICBcbiAgICBzb2NrZXQub24oXCJjbGVhclwiLGNsZWFyKVxuICAgXG4gIH0sIFtjYW52YXNSZWYsY2xlYXJdKVxuICBcblxuICBmdW5jdGlvbiBjcmVhdGVMaW5lKHsgcHJldlBvaW50LCBjdXJyZW50UG9pbnQsIGN0eCB9OiBEcmF3KSB7XG4gICAgc29ja2V0LmVtaXQoJ2RyYXctbGluZScsIHsgcHJldlBvaW50LCBjdXJyZW50UG9pbnQsIGNvbG9yIH0pXG4gICAgZHJhd0xpbmUoeyBwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgY3R4LCBjb2xvciB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xMCBwci0xMFwiPlxuICAgICAgPENocm9tZVBpY2tlciBjbGFzc05hbWU9XCJtci00XCIgY29sb3I9e2NvbG9yfSBvbkNoYW5nZT17KGUpPT4gc2V0Q29sb3IoZS5oZXgpfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PiBzb2NrZXQuZW1pdChcImNsZWFyXCIpfSBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWJsYWNrXCI+Q0xlYXIgQ2FudmFzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjYW52YXMgb25Nb3VzZURvd249e29uTW91c2VEb3dufSByZWY9e2NhbnZhc1JlZn0gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZFwiIC8+XG4gICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICBcbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZURyYXciLCJkcmF3TGluZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hyb21lUGlja2VyIiwiaW8iLCJzb2NrZXQiLCJIb21lIiwiY29sb3IiLCJzZXRDb2xvciIsImNhbnZhc1JlZiIsIm9uTW91c2VEb3duIiwiY2xlYXIiLCJjcmVhdGVMaW5lIiwiY3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJlbWl0Iiwib24iLCJ0b0RhdGFVUkwiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImUiLCJoZXgiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNhbnZhcyIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});