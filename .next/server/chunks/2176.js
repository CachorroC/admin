exports.id = 2176;
exports.ids = [2176];
exports.modules = {

/***/ 6743:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 877));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 605));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 114));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6773))

/***/ }),

/***/ 367:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "carpetas_container__djJty",
	"card": "carpetas_card__bYGnF",
	"cardInactive": "carpetas_cardInactive__g8m1V",
	"cardActive": "carpetas_cardActive__hNwQB",
	"links": "carpetas_links__ALctN",
	"button": "carpetas_button__0xAFT",
	"title": "carpetas_title__lrzSb",
	"tooltiptext": "carpetas_tooltiptext__QoXA5",
	"icon": "carpetas_icon__wIxcy",
	"content": "carpetas_content__0Q6OG",
	"sub": "carpetas_sub__5XN2p",
	"date": "carpetas_date__BsXrC",
	"dummytxt": "carpetas_dummytxt__FhVJ4"
};


/***/ }),

/***/ 3680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ListCardCarpetasNFechasServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_types_demandados__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1352);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1695);
/* harmony import */ var _carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(367);
/* harmony import */ var _carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2907);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4734);
/* harmony import */ var _lib_Actuaciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1193);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6856);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7875);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_Carpetas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2601);
/* harmony import */ var _Nombre__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(959);












async function Fecha({ idProceso, index }) {
    const actuaciones = await (0,_lib_Actuaciones__WEBPACK_IMPORTED_MODULE_3__/* .getActuaciones */ .Yp)(idProceso, index);
    if (idProceso === 0 || actuaciones.length === 0) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().date),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_9___default().labelSmall),
            children: (0,_lib_fix__WEBPACK_IMPORTED_MODULE_10__/* .fixFechas */ .H9)(actuaciones[0].fechaActuacion)
        })
    });
}
async function ListCardCarpetasNFechasServer() {
    const carpetas = await (0,_lib_Carpetas__WEBPACK_IMPORTED_MODULE_6__/* .getCarpetas */ .$u)();
    const sortedCarpetas = [
        ...carpetas
    ].sort((a, b)=>{
        if (!a.ultimaActuacion || a.ultimaActuacion.fechaActuacion === undefined) {
            return 1;
        }
        if (!b.ultimaActuacion || b.ultimaActuacion.fechaActuacion === undefined) {
            return -1;
        }
        const x = a.ultimaActuacion.fechaActuacion;
        const y = b.ultimaActuacion.fechaActuacion;
        if (x < y) {
            return 1;
        }
        if (x > y) {
            return -1;
        }
        return 0;
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: sortedCarpetas.map((carpeta, index, arr)=>{
            const newName = new _lib_types_demandados__WEBPACK_IMPORTED_MODULE_11__/* .NombreCompleto */ .e({
                PrimerNombre: carpeta.Deudor.PrimerNombre,
                PrimerApellido: carpeta.Deudor.PrimerApellido,
                SegundoNombre: carpeta.Deudor.SegundoNombre,
                SegundoApellido: carpeta.Deudor.SegundoApellido
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CarpetaCard, {
                Carpeta: carpeta,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: newName.Nombre
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .a, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fecha, {
                            idProceso: carpeta.idProceso,
                            index: index
                        })
                    })
                ]
            }, carpeta.id);
        })
    });
}
const CarpetaCard = async ({ Carpeta, children })=>{
    const { llaveProceso, idProceso, Deudor, id, Demanda } = Carpeta;
    const { Tel, Direccion, Email } = Deudor;
    const path = "/Procesos";
    const href = llaveProceso ? idProceso ? `${path}/${llaveProceso}/${idProceso}` : `${path}/${llaveProceso}` : `${path}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(___WEBPACK_IMPORTED_MODULE_4__/* .DemandaContainer */ .k, {
                demanda: Demanda
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cardInactive),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Nombre__WEBPACK_IMPORTED_MODULE_7__/* .NombreComponent */ .S, {
                            Deudor: Deudor
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                            children: Direccion ?? "sin direccion"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().links),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                                    href: href,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `material-symbols-outlined ${(_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)}`,
                                            children: "folder_open"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltiptext),
                                            children: "Abrir"
                                        })
                                    ]
                                }),
                                children,
                                Tel && Tel.Celular && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                                    href: `tel:${Tel.Celular}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `material-symbols-outlined ${(_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)}`,
                                            children: "phone_iphone"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltiptext),
                                            children: "Numero Celular"
                                        })
                                    ]
                                }),
                                Email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                                    href: `mailto:${Email}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `material-symbols-outlined ${(_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)}`,
                                            children: "forward_to_inbox"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltiptext),
                                            children: "Email"
                                        })
                                    ]
                                }),
                                Tel && Tel.Fijo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button),
                                    href: `tel:${Tel.Fijo}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: `material-symbols-outlined ${(_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().icon)}`,
                                            children: "call"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_carpetas_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltiptext),
                                            children: "Numero Fijo"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }, id)
        ]
    }, id);
};


/***/ })

};
;