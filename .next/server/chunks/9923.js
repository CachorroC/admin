exports.id = 9923;
exports.ids = [9923];
exports.modules = {

/***/ 363:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 550))

/***/ }),

/***/ 8571:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6773));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 877));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 605))

/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5994))

/***/ }),

/***/ 8364:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6212));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2695))

/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InputProceso)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(3979);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/link.js
var next_link = __webpack_require__(2985);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/card/ProcesosCard/procesos.module.scss
var procesos_module = __webpack_require__(6983);
var procesos_module_default = /*#__PURE__*/__webpack_require__.n(procesos_module);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(5152);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
;// CONCATENATED MODULE: ./src/components/card/ProcesosCard/index.tsx





const ProcesoCard = ({ proceso })=>{
    const { idProceso, llaveProceso, sujetosProcesales, despacho, esPrivado } = proceso;
    if (esPrivado) {
        return null;
    }
    const juzgado = despacho ? despacho.replace(/ /g, "-").toLocaleLowerCase().slice(0, -1) : null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (procesos_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (procesos_module_default()).card,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: `${(typography_module_default()).titleLarge} ${(procesos_module_default()).title}`,
                    children: (0,fix/* fixDemandado */.GZ)(sujetosProcesales)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (procesos_module_default()).button,
                    href: `/Procesos/${llaveProceso}/${idProceso}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `material-symbols-outlined ${(procesos_module_default()).icon}`,
                        children: "open_in_new"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `${(typography_module_default()).bodyMedium} ${(procesos_module_default()).content}`,
                    children: despacho
                }),
                juzgado && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: (procesos_module_default()).button,
                    href: `https://ramajudicial.gov.co/web/${juzgado.replaceAll("\xe1", "a")}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (typography_module_default()).bodySmall,
                        children: juzgado.replaceAll("\xe1", "a")
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/modal/index.tsx
var modal = __webpack_require__(5301);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/navigation.js
var navigation = __webpack_require__(9870);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-bcde97e760/0/cache/react-hook-form-npm-7.45.1-9eaaa3061a-3abe1dcf44.zip/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(1426);
;// CONCATENATED MODULE: ./src/app/Procesos/input-proceso.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function InputProceso() {
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (data)=>{
        const Request = await fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${data.llaveProceso}&SoloActivos=false`);
        if (!Request.ok) {
            return (0,navigation.notFound)();
        }
        const Response = await Request.json();
        if (Response.procesos.length === 0) {
            return (0,navigation.notFound)();
        }
        const procesos = Response.procesos;
        alert(procesos);
        return /*#__PURE__*/ jsx_runtime_.jsx(modal["default"], {
            children: procesos.map((proceso)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(ProcesoCard, {
                    proceso: proceso
                }, proceso.idProceso);
            })
        });
    };
    console.log(errors);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                placeholder: "llaveProceso",
                ...register("llaveProceso", {
                    required: true,
                    maxLength: 23
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "submit"
            })
        ]
    });
}


/***/ }),

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   NotaFRef: () => (/* binding */ NotaFRef),
/* harmony export */   NotasList: () => (/* binding */ NotasList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _notas_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8453);
/* harmony import */ var _notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_notas_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3979);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nota_ButtonsNoteHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2888);
/* harmony import */ var _components_navbar_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4511);
/* harmony import */ var _components_nota_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2343);
/* __next_internal_client_entry_do_not_use__ NotasList,NotaFRef,Form auto */ 







const NotasList = ({ notas })=>{
    const linkRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    function getMap() {
        if (!linkRef.current) {
            linkRef.current = new Map();
        }
        return linkRef.current;
    }
    function scrollToId(notaId) {
        const map = getMap();
        const node = map.get(notaId);
        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: notas.map((nt)=>{
                    const { id, nota } = nt;
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "button",
                        onClick: ()=>{
                            return scrollToId(id);
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "material-symbols-outlined",
                                children: "open_in_new"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: nota
                            })
                        ]
                    }, id);
                })
            }),
            notas.map((nota, index, arr)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
                    ref: (node)=>{
                        const map = getMap();
                        if (node) {
                            map.set(nota.id, node);
                        } else {
                            map.delete(nota.id);
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nota),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                                className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sup),
                                children: `${index + 1}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bodySmall)} ${(_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textArea)}`,
                                children: `Nota: ${nota.nota}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                                className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelSmall)} ${(_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fecha)}`,
                                children: (0,_lib_fix__WEBPACK_IMPORTED_MODULE_7__/* .fixFechas */ .H9)(nota.fecha.toString())
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonsRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_3__/* .ButtonSkeleton */ .D, {}),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_ButtonsNoteHandlers__WEBPACK_IMPORTED_MODULE_2__.EditNoteButton, {
                                            nota: nota
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_3__/* .ButtonSkeleton */ .D, {}),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_ButtonsNoteHandlers__WEBPACK_IMPORTED_MODULE_2__.DeleteNoteButton, {
                                            id: nota.id
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tareas),
                                children: nota.tareas.map((nt)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionRow, {
                                        tarea: nt.tarea,
                                        dueDate: nt.dueDate,
                                        isDone: nt.isDone
                                    }, nt.tarea);
                                })
                            })
                        ]
                    })
                }, nota.id);
            })
        ]
    });
};
const NotaFRef = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function NotaFRef(props, ref) {
    const { nota, index } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nota),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                    className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sup),
                    children: `${index + 1}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bodySmall)} ${(_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textArea)}`,
                    children: `Nota: ${nota.nota}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_6___default().labelSmall)} ${(_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fecha)}`,
                    children: (0,_lib_fix__WEBPACK_IMPORTED_MODULE_7__/* .fixFechas */ .H9)(nota.fecha.toString())
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonsRow),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                            fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_3__/* .ButtonSkeleton */ .D, {}),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_ButtonsNoteHandlers__WEBPACK_IMPORTED_MODULE_2__.EditNoteButton, {
                                nota: nota
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
                            fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_3__/* .ButtonSkeleton */ .D, {}),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_ButtonsNoteHandlers__WEBPACK_IMPORTED_MODULE_2__.DeleteNoteButton, {
                                id: nota.id
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_notas_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tareas),
                    children: nota.tareas.map((nt)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nota_accordion__WEBPACK_IMPORTED_MODULE_4__.AccordionRow, {
                            tarea: nt.tarea,
                            dueDate: nt.dueDate,
                            isDone: nt.isDone
                        }, nt.tarea);
                    })
                })
            ]
        })
    }, nota.id);
});
function Form({ notas }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        children: notas.map((nt, i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotaFRef, {
                nota: nt,
                index: i
            }, nt.id);
        })
    });
}


/***/ }),

/***/ 8453:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "notas_container__6_Sl3",
	"form": "notas_form__fYCOM",
	"nota": "notas_nota__5qKSi",
	"sup": "notas_sup__FwqeS",
	"buttonsRow": "notas_buttonsRow__O6iZv",
	"section": "notas_section__sQMwc",
	"label": "notas_label__PlRMh",
	"titleInput": "notas_titleInput__myW0G",
	"submitButton": "notas_submitButton__1KelM",
	"textArea": "notas_textArea__9x_t2",
	"deleteButton": "notas_deleteButton__sN2Zi",
	"addButton": "notas_addButton__c7AK6",
	"HomeButton": "notas_HomeButton__XLyCD",
	"button": "notas_button__uSo9O",
	"buttonDelete": "notas_buttonDelete__7_cH5",
	"buttonEdit": "notas_buttonEdit__qTpja",
	"ButtonTextHelper": "notas_ButtonTextHelper__ggKiR",
	"content": "notas_content__1L_4s",
	"checkboxItem": "notas_checkboxItem__mf4_G",
	"tareas": "notas_tareas__sbOL0",
	"select": "notas_select__YZden",
	"innactive": "notas_innactive__f9_1o",
	"active": "notas_active__Z2r7q",
	"switch": "notas_switch__BCVlB",
	"checkbox": "notas_checkbox__ZW98Y",
	"slider": "notas_slider__qwrqZ"
};


/***/ }),

/***/ 9422:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "notas_container__6_Sl3",
	"form": "notas_form__fYCOM",
	"nota": "notas_nota__5qKSi",
	"sup": "notas_sup__FwqeS",
	"buttonsRow": "notas_buttonsRow__O6iZv",
	"section": "notas_section__sQMwc",
	"label": "notas_label__PlRMh",
	"titleInput": "notas_titleInput__myW0G",
	"submitButton": "notas_submitButton__1KelM",
	"textArea": "notas_textArea__9x_t2",
	"deleteButton": "notas_deleteButton__sN2Zi",
	"addButton": "notas_addButton__c7AK6",
	"HomeButton": "notas_HomeButton__XLyCD",
	"button": "notas_button__uSo9O",
	"buttonDelete": "notas_buttonDelete__7_cH5",
	"buttonEdit": "notas_buttonEdit__qTpja",
	"ButtonTextHelper": "notas_ButtonTextHelper__ggKiR",
	"content": "notas_content__1L_4s",
	"checkboxItem": "notas_checkboxItem__mf4_G",
	"tareas": "notas_tareas__sbOL0",
	"select": "notas_select__YZden",
	"innactive": "notas_innactive__f9_1o",
	"active": "notas_active__Z2r7q",
	"switch": "notas_switch__BCVlB",
	"checkbox": "notas_checkbox__ZW98Y",
	"slider": "notas_slider__qwrqZ"
};


/***/ }),

/***/ 6983:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "procesos_container__xp6mW",
	"card": "procesos_card__BUn70",
	"title": "procesos_title__D6eNz",
	"content": "procesos_content__sqepd",
	"button": "procesos_button__avrUA",
	"icon": "procesos_icon__yRSYI"
};


/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Headings_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2822);
/* harmony import */ var _lib_Carpetas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2601);
/* harmony import */ var _lib_Actuaciones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1193);
/* harmony import */ var _components_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2973);
/* harmony import */ var _components_search_SearchProcesosOutput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3880);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2907);
/* harmony import */ var _components_Loader_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4734);








async function Page() {
    const procesos = await (0,_lib_Carpetas__WEBPACK_IMPORTED_MODULE_2__/* .getCarpetas */ .$u)();
    const fechas = await (0,_lib_Actuaciones__WEBPACK_IMPORTED_MODULE_3__/* .fetchFechas */ .Kh)({
        procesos: procesos
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_index__WEBPACK_IMPORTED_MODULE_7__/* .Loader */ .a, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Headings_title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader_index__WEBPACK_IMPORTED_MODULE_7__/* .Loader */ .a, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_SearchProcesosOutput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                        path: "/Procesos",
                        fechas: fechas
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageProcesosLeft)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
// EXTERNAL MODULE: ./src/components/Loader/index.tsx
var Loader = __webpack_require__(4734);
// EXTERNAL MODULE: ./src/lib/Carpetas/index.ts
var Carpetas = __webpack_require__(2601);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(1695);
// EXTERNAL MODULE: ./src/components/card/CarpetasCard/carpetas.module.scss
var carpetas_module = __webpack_require__(367);
var carpetas_module_default = /*#__PURE__*/__webpack_require__.n(carpetas_module);
// EXTERNAL MODULE: ./src/lib/Actuaciones/index.ts
var Actuaciones = __webpack_require__(1193);
// EXTERNAL MODULE: ./src/components/card/card-with-carpeta.tsx
var card_with_carpeta = __webpack_require__(9082);
;// CONCATENATED MODULE: ./src/components/card/CarpetasCard/list.tsx










const Fecha = async ({ idProceso, index })=>{
    const acts = await (0,Actuaciones/* getActuaciones */.Yp)(idProceso, index);
    if (acts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (carpetas_module_default()).date,
        children: (0,fix/* fixFechas */.H9)(acts[0].fechaActuacion)
    });
};
const DemandaContainer = ({ demanda })=>{
    const { Departamento, Municipio, VencimientoPagare, EntregadeGarantiasAbogado, Radicado, CapitalAdeudado, Proceso, Ubicacion, Juzgado, Obligacion } = demanda;
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.section,
        children: [
            /*#__PURE__*/ _jsx("h1", {
                className: typography.headlineMedium,
                children: Radicado
            }),
            /*#__PURE__*/ _jsx("h2", {
                className: typography.titleMedium,
                children: `${Departamento}: ${Municipio}`
            }),
            VencimientoPagare && /*#__PURE__*/ _jsx("p", {
                className: typography.labelMedium,
                children: fixFechas(VencimientoPagare)
            }),
            EntregadeGarantiasAbogado && /*#__PURE__*/ _jsx("p", {
                className: typography.labelSmall,
                children: fixFechas(EntregadeGarantiasAbogado)
            }),
            CapitalAdeudado && /*#__PURE__*/ _jsx("p", {
                className: typography.labelSmall,
                children: CapitalAdeudado
            })
        ]
    });
};
async function ListCardCarpetasNFechas() {
    const carpetas = await (0,Carpetas/* getCarpetas */.$u)();
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
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: sortedCarpetas.map((carpeta, index, arr)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(card_with_carpeta/* Card */.Z, {
                path: "/Procesos",
                carpeta: carpeta,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                    fallback: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* Loader */.a, {}),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Fecha, {
                        idProceso: carpeta.idProceso,
                        index: index
                    }, carpeta.ultimaActuacion?.idRegActuacion)
                })
            }, carpeta.id);
        })
    });
}

;// CONCATENATED MODULE: ./src/app/Procesos/@left/page.tsx





async function PageProcesosLeft() {
    const carpetas = await (0,Carpetas/* getCarpetas */.$u)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
        fallback: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* Loader */.a, {}),
        children: /*#__PURE__*/ jsx_runtime_.jsx(ListCardCarpetasNFechas, {})
    });
}


/***/ }),

/***/ 2814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageProcesosRight)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/nota/NuevaNota.tsx
var NuevaNota = __webpack_require__(3949);
// EXTERNAL MODULE: ./src/lib/getBaseUrl.ts
var getBaseUrl = __webpack_require__(1635);
// EXTERNAL MODULE: ./src/lib/notas/index.ts
var lib_notas = __webpack_require__(3338);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3140);
;// CONCATENATED MODULE: ./src/components/card/NotasCard/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/card/NotasCard/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["NotasList"];

const e1 = proxy["NotaFRef"];

const e2 = proxy["Form"];

// EXTERNAL MODULE: ./src/lib/Carpetas/index.ts
var Carpetas = __webpack_require__(2601);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
// EXTERNAL MODULE: ./src/components/card/NotasCard/notas.module.scss
var notas_module = __webpack_require__(9422);
var notas_module_default = /*#__PURE__*/__webpack_require__.n(notas_module);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/components/navbar/ButtonSkeleton.tsx
var ButtonSkeleton = __webpack_require__(4758);
;// CONCATENATED MODULE: ./src/components/card/NotasCard/skeleton.tsx




function NotasListSkeleton() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 2
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 3
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 4
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 5
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 6
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 7
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 8
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotaSkeleton, {
                index: 9
            })
        ]
    });
}
function NotaSkeleton({ index }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (notas_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (notas_module_default()).nota,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                    className: (notas_module_default()).sup,
                    children: `${index + 1}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `${(typography_module_default()).bodySmall} ${(notas_module_default()).textArea}`,
                    children: "Nota: ... cargando"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("sub", {
                    className: `${(typography_module_default()).labelSmall} ${(notas_module_default()).fecha}`,
                    children: "... cargando"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (notas_module_default()).buttonsRow,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonSkeleton/* ButtonSkeleton */.D, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ButtonSkeleton/* ButtonSkeleton */.D, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (notas_module_default()).tareas,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "...cargando"
                    })
                })
            ]
        })
    }, index);
}

;// CONCATENATED MODULE: ./src/app/Procesos/@right/page.tsx









async function PageProcesosRight() {
    const notas = await (0,lib_notas/* getNotas */.FB)();
    const procesos = await (0,Carpetas/* getCarpetas */.$u)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NuevaNota/* NewNota */.M, {
                llaveProceso: "Procesos",
                uri: `${(0,getBaseUrl/* getBaseUrl */.S)()}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx(NotasListSkeleton, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    notas: notas
                })
            })
        ]
    });
}


/***/ }),

/***/ 2078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageProcesos)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3140);
;// CONCATENATED MODULE: ./src/app/Procesos/input-proceso.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/Procesos/input-proceso.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const input_proceso = (__default__);
;// CONCATENATED MODULE: ./src/app/Procesos/page.tsx



function PageProcesos() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (typography_module_default()).displayLarge,
                children: "Procesos"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(input_proceso, {})
        ]
    });
}


/***/ })

};
;