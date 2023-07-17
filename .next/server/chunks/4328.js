exports.id = 4328;
exports.ids = [4328];
exports.modules = {

/***/ 4471:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6257, 23))

/***/ }),

/***/ 4967:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "actuaciones_container__F1EUb",
	"card": "actuaciones_card__XLpiK",
	"title": "actuaciones_title__EfZ8d",
	"sub": "actuaciones_sub__gpqwf",
	"date": "actuaciones_date__jlIJI",
	"dummytxt": "actuaciones_dummytxt__yCcsm",
	"content": "actuaciones_content___2ohg",
	"button": "actuaciones_button__tFXzR",
	"icon": "actuaciones_icon__6EtlY"
};


/***/ }),

/***/ 7598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(3140);
module.exports = createProxy("/home/cachorro_cami/Projects/com/rsasesorjuridico/app/.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 7875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(7598);


/***/ }),

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ActuacionCard)
/* harmony export */ });
/* unused harmony export ActuacionesList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1695);
/* harmony import */ var _actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4967);
/* harmony import */ var _actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7875);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);





const ActuacionCard = ({ Actuacion })=>{
    const { idRegActuacion, llaveProceso, consActuacion, fechaActuacion, actuacion, anotacion, fechaInicial, fechaFinal, fechaRegistro, codRegla, conDocumentos, cant } = Actuacion;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titleMedium)} ${(_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title)}`,
                    children: actuacion
                }),
                anotacion && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyMedium),
                    children: anotacion
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().labelSmall)} ${(_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sub)}`,
                    children: `${consActuacion} de ${cant}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/Notas/NuevaNota/${llaveProceso}`,
                    className: (_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `material-symbols-outlined ${(_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)}`,
                        children: "note_add"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().labelMedium)} ${(_actuaciones_module_scss__WEBPACK_IMPORTED_MODULE_2___default().date)}`,
                    children: (0,_lib_fix__WEBPACK_IMPORTED_MODULE_4__/* .fixFechas */ .H9)(fechaActuacion)
                })
            ]
        })
    }, idRegActuacion);
};
const ActuacionesList = ({ Actuaciones })=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: Actuaciones.map((Actuacion, ind, arr)=>{
            const { idRegActuacion } = Actuacion;
            return /*#__PURE__*/ _jsx(ActuacionCard, {
                Actuacion: Actuacion
            }, idRegActuacion);
        })
    });
};


/***/ })

};
;