exports.id = 8654;
exports.ids = [8654];
exports.modules = {

/***/ 6212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewNota: () => (/* binding */ NewNota)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1426);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4637);
/* harmony import */ var _components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5762);
/* harmony import */ var _accordion_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_accordion_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ NewNota auto */ 







function NewNota({ llaveProceso, uri }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { register, watch, control, setValue, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)({
        defaultValues: {
            nota: "",
            tareas: [
                {
                    tarea: "",
                    isDone: false,
                    dueDate: new Date().toISOString()
                }
            ]
        },
        mode: "onBlur"
    });
    const { fields, append, remove } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__/* .useFieldArray */ .Dq)({
        name: "tareas",
        control
    });
    const onSubmit = async (data)=>{
        const newData = {
            ...data,
            llaveProceso: llaveProceso,
            pathname: pathname,
            fecha: new Date().toString()
        };
        alert(JSON.stringify(newData));
        const postNewNote = await fetch("/api/Notas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        }).then((fullfilled)=>{
            alert(fullfilled.status);
            return fullfilled;
        });
        const responsePostNewNote = await postNewNote.json();
        alert(responsePostNewNote);
        return responsePostNewNote;
    };
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().form),
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "nota",
                            className: `${(_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label)} ${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleMedium)}`,
                            children: "Nota"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "agregue su nota",
                            id: "nota",
                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().textArea),
                            ...register("nota", {
                                required: true
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                    type: "button",
                    onClick: ()=>{
                        return setIsActive(!isActive);
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "material-symbols-outlined",
                            children: isActive ? "expand_less" : "expand_more"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_5___default().titleSmall),
                            children: "Tareas"
                        })
                    ]
                }),
                isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_accordion_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
                    children: fields.map((field, index)=>{
                        const watchIsDone = watch(`tareas.${index}.isDone`);
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: `tareas.${index}.tarea`,
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Tarea:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "tarea",
                                            ...register(`tareas.${index}.tarea`, {}),
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().textArea),
                                            defaultValue: field.tarea
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
                                    children: [
                                        "2",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: watchIsDone ? "\xa1 tarea completa !" : "\xbf completar tarea ?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
                                            onClick: ()=>{
                                                setValue(`tareas.${index}.isDone`, watchIsDone ? false : true);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "material-symbols-outlined",
                                                children: watchIsDone ? "check_box" : "check_box_outline_blank"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            htmlFor: `tareas.${index}.dueDate`,
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().label),
                                            children: "Para cu\xe1ndo es?:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "date",
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().textArea),
                                            placeholder: `tareas.${index}.dueDate`,
                                            ...register(`tareas.${index}.dueDate`, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().buttonsRow),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().submitButton),
                                            type: "button",
                                            onClick: ()=>{
                                                return remove(index);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "material-symbols-outlined",
                                                children: "remove"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().submitButton),
                                            onClick: ()=>{
                                                return append({
                                                    tarea: "",
                                                    isDone: false,
                                                    dueDate: new Date().toISOString()
                                                });
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "material-symbols-outlined",
                                                children: "add"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, field.id);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().section),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_components_nota_note_module_scss__WEBPACK_IMPORTED_MODULE_4___default().submitButton),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "material-symbols-outlined",
                            children: "send"
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5762:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "accordion_content__U_AhB",
	"isDone": "accordion_isDone__JUfQN",
	"notDone": "accordion_notDone__FwHQF"
};


/***/ }),

/***/ 3949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/nota/NuevaNota.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["NewNota"];


/***/ }),

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2907);


const basePort = process.env.PORT ?? "3000";
const baseUrl = process.env.URL ?? "beta.rsasesorjuridico.com";
const baseEnvironment = "production";
const hostname = process.env.URL ?? ( false ? 0 : "app.rsasesorjuridico.com");
const getBaseUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(()=>{
    const uri = `https://${hostname}` ?? 0;
    console.log(uri);
    return uri;
});


/***/ })

};
;