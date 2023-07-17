exports.id = 1386;
exports.ids = [1386];
exports.modules = {

/***/ 2888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNoteButton: () => (/* binding */ AddNoteButton),
/* harmony export */   DeleteNoteButton: () => (/* binding */ DeleteNoteButton),
/* harmony export */   EditNoteButton: () => (/* binding */ EditNoteButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4637);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2985);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ DeleteNoteButton,AddNoteButton,EditNoteButton auto */ 


function DeleteNoteButton({ id }) {
    async function deleteRequestHandler() {
        const Request = await fetch(`/api/Notas?id=${id}`, {
            method: "DELETE"
        });
        if (!Request.ok) {
            return;
        }
        const Response = await Request.json();
        alert(JSON.stringify(Response));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonDelete),
        onClick: deleteRequestHandler,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `material-symbols-outlined ${(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)}`,
            children: "delete"
        })
    });
}
function AddNoteButton({ nota, uri }) {
    async function addRequestHandler() {
        const Request = await fetch(`${uri}/api/Notas`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(nota)
        }).then((fullfilled)=>{
            alert(fullfilled.status);
            return fullfilled;
        });
        if (!Request.ok) {
            return;
        }
        const Response = await Request.json();
        alert(JSON.stringify(Response));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonAdd),
        onClick: addRequestHandler,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `material-symbols-outlined ${(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)}`,
            children: "delete"
        })
    });
}
function EditNoteButton({ nota }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().buttonEdit),
        href: `/Procesos/${nota.llaveProceso}/Editar?id=${nota.id}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `material-symbols-outlined ${(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon)}`,
            children: "edit"
        })
    });
}


/***/ }),

/***/ 2343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccordionRow: () => (/* binding */ AccordionRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_fix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3979);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5762);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4637);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ AccordionRow auto */ 





function AccordionRow({ tarea, dueDate, isDone }) {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().accordion),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                    onClick: ()=>{
                        return setIsActive(!isActive);
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "material-symbols-outlined",
                        children: isActive ? "expand_less" : "expand_more"
                    })
                }),
                isActive && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titleMedium),
                            children: tarea
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: isDone ? (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().innactive) : (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active),
                            children: `fecha de entrega: ${(0,_lib_fix__WEBPACK_IMPORTED_MODULE_5__/* .fixFechas */ .H9)(dueDate.toString())}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `${isDone ? (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().innactive) : (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active)} material-symbols-outlined`,
                            children: isDone ? "assignment_turned_in" : "assignment_late"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 219:
/***/ ((module) => {

// Exports
module.exports = {
	"drawer": "navbar_drawer__2wjUM",
	"menu": "navbar_menu__MMSTs",
	"closed": "navbar_closed__LUXuk",
	"sidenav": "navbar_sidenav__jNxtC",
	"button": "navbar_button__OqVMd",
	"buttonHome": "navbar_buttonHome__nOmmU",
	"buttonDrawerMenu": "navbar_buttonDrawerMenu__R8mbb",
	"buttonBackwards": "navbar_buttonBackwards__1IMlL",
	"buttonForward": "navbar_buttonForward__iuD0L",
	"icon": "navbar_icon___HdLC",
	"ButtonTextHelper": "navbar_ButtonTextHelper__uxmGd",
	"home": "navbar_home__ZVPm2"
};


/***/ }),

/***/ 4758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ButtonSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ButtonSkeleton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "material-symbols-outlined",
            children: "cached"
        })
    });
}


/***/ })

};
;