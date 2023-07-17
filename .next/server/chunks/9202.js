exports.id = 9202;
exports.ids = [9202];
exports.modules = {

/***/ 7855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3424);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ Accordion auto */ 


function Accordion({ children }) {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().accordion),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                    onClick: ()=>{
                        return setIsActive(!isActive);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "material-symbols-outlined",
                        children: isActive ? "expand_less" : "expand_more"
                    })
                }),
                isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 3424:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "accordion_content__sZFKQ",
	"isDone": "accordion_isDone__iFbhn",
	"notDone": "accordion_notDone__Da_S1"
};


/***/ }),

/***/ 6856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ CarpetaCard),
  k: () => (/* binding */ DemandaContainer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/card/CarpetasCard/carpetas.module.scss
var carpetas_module = __webpack_require__(367);
var carpetas_module_default = /*#__PURE__*/__webpack_require__.n(carpetas_module);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/link.js
var next_link = __webpack_require__(7875);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(1695);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3140);
;// CONCATENATED MODULE: ./src/components/Accordion/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/Accordion/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Accordion"];

// EXTERNAL MODULE: ./src/components/card/Nombre/index.tsx
var Nombre = __webpack_require__(959);
;// CONCATENATED MODULE: ./src/components/card/CarpetasCard/index.tsx








const NotificacionesContainer = ({ notificaciones })=>{
    const { AutoNotificado, Certimail, Fisico, Tipo } = notificaciones;
    return /*#__PURE__*/ jsx_runtime_.jsx(e0, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: (0,fix/* fixFechas */.H9)(AutoNotificado)
            })
        })
    });
};
const DemandaContainer = ({ demanda })=>{
    const { Departamento, Municipio, VencimientoPagare, EntregadeGarantiasAbogado, Radicado, CapitalAdeudado, Proceso, Ubicacion, Juzgado, Obligacion } = demanda;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (carpetas_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (typography_module_default()).headlineMedium,
                children: Radicado
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (typography_module_default()).titleMedium,
                children: `${Departamento}: ${Municipio}`
            }),
            VencimientoPagare && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (typography_module_default()).labelMedium,
                children: (0,fix/* fixFechas */.H9)(VencimientoPagare)
            }),
            EntregadeGarantiasAbogado && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (typography_module_default()).labelSmall,
                children: (0,fix/* fixFechas */.H9)(EntregadeGarantiasAbogado)
            }),
            CapitalAdeudado && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (typography_module_default()).labelSmall,
                children: CapitalAdeudado
            })
        ]
    });
};
const CarpetaCard = ({ carpeta, children })=>{
    const { llaveProceso, idProceso, Deudor, id, Demanda, ultimaActuacion, Codeudor, Numero, EtapaProcesal, Notificaciones } = carpeta;
    const { Tel, Direccion, Email } = Deudor;
    const path = "/Procesos";
    const href = llaveProceso ? idProceso ? `${path}/${llaveProceso}/${idProceso}` : `${path}/${llaveProceso}` : `${path}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DemandaContainer, {
                demanda: Demanda
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (carpetas_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (carpetas_module_default()).cardInactive,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Nombre/* NombreComponent */.S, {
                            Deudor: carpeta.Deudor
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (carpetas_module_default()).content,
                            children: Direccion ?? "sin direccion"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (carpetas_module_default()).links,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: (carpetas_module_default()).button,
                                    href: href,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `material-symbols-outlined ${(carpetas_module_default()).icon}`,
                                            children: "folder_open"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (carpetas_module_default()).tooltiptext,
                                            children: "Abrir"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                                    children: children
                                }),
                                Tel && Tel.Celular && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: (carpetas_module_default()).button,
                                    href: `tel:${Tel.Celular}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `material-symbols-outlined ${(carpetas_module_default()).icon}`,
                                            children: "phone_iphone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (carpetas_module_default()).tooltiptext,
                                            children: "Numero Celular"
                                        })
                                    ]
                                }),
                                Email && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: (carpetas_module_default()).button,
                                    href: `mailto:${Email}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `material-symbols-outlined ${(carpetas_module_default()).icon}`,
                                            children: "forward_to_inbox"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (carpetas_module_default()).tooltiptext,
                                            children: "Email"
                                        })
                                    ]
                                }),
                                Notificaciones && /*#__PURE__*/ jsx_runtime_.jsx(NotificacionesContainer, {
                                    notificaciones: Notificaciones
                                }),
                                Tel && Tel.Fijo && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: (carpetas_module_default()).button,
                                    href: `tel:${Tel.Fijo}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `material-symbols-outlined ${(carpetas_module_default()).icon}`,
                                            children: "call"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (carpetas_module_default()).tooltiptext,
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


/***/ }),

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ NombreComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_types_demandados__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1352);



function NombreComponent({ Deudor }) {
    const newName = new _lib_types_demandados__WEBPACK_IMPORTED_MODULE_1__/* .NombreCompleto */ .e(Deudor);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default().displayMedium),
        children: newName.Nombre
    });
}


/***/ })

};
;