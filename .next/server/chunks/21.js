exports.id = 21;
exports.ids = [21];
exports.modules = {

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

/***/ 5820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/components/card/card.module.scss
var card_module = __webpack_require__(423);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
;// CONCATENATED MODULE: ./src/components/card/card-skeleton.tsx



function CardSkeleton() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (card_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (card_module_default()).notActive,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: `${(typography_module_default()).titleMedium} ${(card_module_default()).title}`,
                    children: "cargando"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (card_module_default()).content,
                    children: "Su contenido se est\xe1 cargando, espere un momento"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (card_module_default()).links,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (card_module_default()).link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `${(card_module_default()).icon}  material-symbols-outlined`,
                            children: "autorenew"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/Procesos/@right/loading.tsx


function Loading() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            "+",
            /*#__PURE__*/ jsx_runtime_.jsx(CardSkeleton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CardSkeleton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CardSkeleton, {})
        ]
    });
}


/***/ }),

/***/ 5164:
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default().right),
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
    });
}


/***/ })

};
;