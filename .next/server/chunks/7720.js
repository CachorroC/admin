exports.id = 7720;
exports.ids = [7720];
exports.modules = {

/***/ 1281:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 347))

/***/ }),

/***/ 347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2015);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Error({ error, reset }) {
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.log("logging error:", error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().body),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
                style: {
                    backgroundColor: "var(--error-container)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().displayLarge),
                        style: {
                            color: "var(--on-error-container)"
                        },
                        children: "Error"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyLarge),
                        children: error?.message
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>{
                        return reset();
                    },
                    className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
                    children: "Try Again"
                })
            })
        ]
    });
}


/***/ }),

/***/ 7442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/Procesos/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutProcesos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3190);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);



function LayoutProcesos({ children, right, left }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().body),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),
                children: left
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
                children: right
            })
        ]
    });
}


/***/ }),

/***/ 3246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3190);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default().body),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default().name),
            style: {
                backgroundColor: "var(--error-container)"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default().displayLarge),
                    style: {
                        color: "var(--on-error-container)"
                    },
                    children: "\xbfPerdido?"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bodyLarge),
                    style: {
                        color: "var(--on-error-container)"
                    },
                    children: "No pudimos resolver la consulta que realizaste. No existe el recurso"
                })
            ]
        })
    });
}


/***/ })

};
;