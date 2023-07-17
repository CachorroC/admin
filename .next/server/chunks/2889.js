exports.id = 2889;
exports.ids = [2889];
exports.modules = {

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2985);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8998);
/* harmony import */ var _components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1059);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_search_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4195);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3979);
/* harmony import */ var _lib_types_demandados__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3401);
/* __next_internal_client_entry_do_not_use__ Card auto */ 








const Card = ({ path, carpeta, children })=>{
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_4__.useNavigator)();
    const [isOpen, setIsOpen] = (0,_app_modal_context__WEBPACK_IMPORTED_MODULE_3__.useModal)();
    const clickHandler = ()=>{
        setIsNavOpen(false);
        setIsOpen(true);
    };
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const isInProcesos = pathname === path;
    const href = carpeta.llaveProceso ? carpeta.idProceso ? `${path}/${carpeta.llaveProceso}/${carpeta.idProceso}` : `${path}/${carpeta.llaveProceso}` : `${path}`;
    const isActive = pathname === href || pathname === `${path}/${carpeta.llaveProceso}/${carpeta.idProceso}` || pathname === `${path}/${carpeta.llaveProceso}`;
    const juzgado = carpeta.despacho.id.replace(/ /g, "-").toLocaleLowerCase().slice(0, -1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: isActive ? (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive) : (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().notActive),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titleMedium)} ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title)}`,
                    children: (0,_lib_fix__WEBPACK_IMPORTED_MODULE_7__/* .toNameString */ .$M)({
                        nameRaw: new _lib_types_demandados__WEBPACK_IMPORTED_MODULE_8__/* .NombreCompleto */ .e(carpeta.Deudor).Nombre
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().links),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)} ${isActive && (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive)}`,
                            href: `/Carpetas/${carpeta.id}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `material-symbols-outlined ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                                    children: "folder_shared"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),
                                    children: "Perfil del Demandado"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)} ${isActive && (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive)}`,
                            href: `/Procesos/${carpeta.llaveProceso}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `material-symbols-outlined ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                                    children: "badge"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),
                                    children: "Perfil del Demandado"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)} ${isActive && (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive)}`,
                            href: `/Notas/NuevaNota/${carpeta.llaveProceso}`,
                            onClick: ()=>{
                                setIsOpen(true);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `material-symbols-outlined ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                                    children: "add"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),
                                    children: "Agregar nota"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)} ${isActive && (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive)}`,
                            onClick: clickHandler,
                            href: href,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)} material-symbols-outlined`,
                                    children: "file_open"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),
                                    children: "Actuaciones del proceso"
                                })
                            ]
                        })
                    ]
                }),
                children,
                carpeta.Demanda.Radicado && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bodySmall)} ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)}`,
                    children: carpeta.Demanda.Radicado
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: `${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link)} ${isActive && (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().isActive)}`,
                    href: carpeta.despacho.url,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bodySmall)} ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content)}`,
                        children: juzgado.replaceAll("\xe1", "a")
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 8998:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "card_container__Sep0j",
	"isActive": "card_isActive__bZLRI",
	"notActive": "card_notActive__paVdy",
	"cardFront": "card_cardFront__K_HgC",
	"cardBack": "card_cardBack__7XKXq",
	"sub": "card_sub__Bvmmq",
	"date": "card_date__oG6Zh",
	"dummytxt": "card_dummytxt__fMZ8X",
	"title": "card_title__VC_2v",
	"content": "card_content__M1rGJ",
	"links": "card_links__N6A5Q",
	"icon": "card_icon__3ukpg",
	"link": "card_link__bdu9w",
	"tooltiptext": "card_tooltiptext__ExHk0",
	"error": "card_error__qLxRz",
	"linkIsActive": "card_linkIsActive__qOtky"
};


/***/ }),

/***/ 8223:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal_modal__MS70U",
	"wrapper": "modal_wrapper__xPSql",
	"content": "modal_content__ChqFp",
	"animatetop": "modal_animatetop__NRLnH",
	"header": "modal_header__O0ebJ",
	"body": "modal_body__j3Bav",
	"footer": "modal_footer__GLn4y"
};


/***/ }),

/***/ 9082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/card/card-with-carpeta.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Card"];


/***/ })

};
;