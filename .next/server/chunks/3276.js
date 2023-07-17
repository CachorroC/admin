"use strict";
exports.id = 3276;
exports.ids = [3276];
exports.modules = {

/***/ 1192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Name)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Carpetas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2601);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1695);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7618);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);






async function Name({ llaveProceso }) {
    const proceso = await (0,_lib_Carpetas__WEBPACK_IMPORTED_MODULE_1__/* .getCarpetasByllaveProceso */ .ZM)({
        llaveProceso: llaveProceso
    });
    const nombre = proceso.map((p)=>{
        return p.Deudor.PrimerNombre;
    });
    const isEmptyArray = nombre.length === 0;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: `${(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2___default().navbar)} ${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().displayMedium)}`,
        children: nombre.map((n)=>{
            return (0,_lib_fix__WEBPACK_IMPORTED_MODULE_4__/* .toNameString */ .$M)({
                nameRaw: n
            });
        })
    });
}


/***/ }),

/***/ 3276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ Nota),
  H: () => (/* binding */ Notas)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/nota/note.module.scss
var note_module = __webpack_require__(3178);
var note_module_default = /*#__PURE__*/__webpack_require__.n(note_module);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(1695);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3140);
;// CONCATENATED MODULE: ./src/components/nota/ButtonsNoteHandlers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/nota/ButtonsNoteHandlers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["DeleteNoteButton"];

const e1 = proxy["AddNoteButton"];

const e2 = proxy["EditNoteButton"];

;// CONCATENATED MODULE: ./src/components/nota/accordion.tsx

const accordion_proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/nota/accordion.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: accordion_esModule, $$typeof: accordion_$$typeof } = accordion_proxy;
const accordion_default_ = accordion_proxy.default;

const accordion_e0 = accordion_proxy["AccordionRow"];

// EXTERNAL MODULE: ./src/components/navbar/ButtonSkeleton.tsx
var ButtonSkeleton = __webpack_require__(4758);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/lib/notas/index.ts
var lib_notas = __webpack_require__(3338);
// EXTERNAL MODULE: ./src/components/Headings/serverSideName.tsx
var serverSideName = __webpack_require__(1192);
;// CONCATENATED MODULE: ./src/components/nota/notas.tsx











function Nota({ notaRaw, i, arr }) {
    const { id, nota, tareas, fecha } = notaRaw;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (note_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (note_module_default()).nota,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("sup", {
                    className: (note_module_default()).sup,
                    children: `${i + 1}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(serverSideName/* Name */.V, {
                    llaveProceso: notaRaw.llaveProceso
                }, id),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `${(typography_module_default()).bodySmall} ${(note_module_default()).textArea}`,
                    children: `Nota: ${nota}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("sub", {
                    className: `${(typography_module_default()).labelSmall} ${(note_module_default()).fecha}`,
                    children: (0,fix/* fixFechas */.H9)(fecha.toString())
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (note_module_default()).buttonsRow,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                            fallback: /*#__PURE__*/ jsx_runtime_.jsx(ButtonSkeleton/* ButtonSkeleton */.D, {}),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                                nota: notaRaw
                            }, id)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                            fallback: /*#__PURE__*/ jsx_runtime_.jsx(ButtonSkeleton/* ButtonSkeleton */.D, {}),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                                id: id
                            }, id)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (note_module_default()).tareas,
                    children: tareas.map((tr)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(accordion_e0, {
                            tarea: tr.tarea,
                            dueDate: tr.dueDate,
                            isDone: tr.isDone
                        }, tr.tarea);
                    })
                })
            ]
        })
    }, id);
}
async function Notas({ llaveProceso }) {
    if (llaveProceso) {
        const notas = await (0,lib_notas/* getNotasByllaveProceso */.Sv)({
            llaveProceso: llaveProceso
        });
        if (notas.length === 0) {
            const nts = await (0,lib_notas/* getNotas */.FB)();
            const NotasRow = nts.map((nota, i, arr)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(Nota, {
                    notaRaw: nota,
                    i: i,
                    arr: arr
                }, nota.id);
            });
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: NotasRow
            });
        }
        const NotasRow = notas.map((nota, i, arr)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(Nota, {
                notaRaw: nota,
                i: i,
                arr: arr
            }, nota.id);
        });
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: NotasRow
        });
    }
    const notas = await (0,lib_notas/* getNotas */.FB)();
    const NotasRow = notas.map((nota, i, arr)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Nota, {
            notaRaw: nota,
            i: i,
            arr: arr
        }, nota.id);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: NotasRow
    });
}


/***/ })

};
;