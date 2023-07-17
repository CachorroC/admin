exports.id = 6416;
exports.ids = [6416];
exports.modules = {

/***/ 7421:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4202))

/***/ }),

/***/ 2946:
/***/ (() => {



/***/ }),

/***/ 6743:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 877));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 605));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 114));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6773))

/***/ }),

/***/ 1756:
/***/ (() => {



/***/ }),

/***/ 4202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PageProcesosEditarLeft)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
;// CONCATENATED MODULE: ./src/components/card/CarpetasCard/Context/index.tsx


const FormContext = /*#__PURE__*/ (0,react_experimental_.createContext)(null);
function FormProvider({ children }) {
    const [data, setData] = (0,react_experimental_.useState)({});
    const setFormValues = (0,react_experimental_.useCallback)((values)=>{
        setData((prevValues)=>{
            return {
                ...prevValues,
                ...values
            };
        });
    }, []);
    const contextValue = (0,react_experimental_.useMemo)(()=>{
        return {
            data,
            setFormValues
        };
    }, [
        data,
        setFormValues
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(FormContext.Provider, {
        value: contextValue,
        children: children
    });
}
function useFormData() {
    const context = (0,react_experimental_.useContext)(FormContext);
    if (context === null) {
        throw new Error("useSearch must be used inside a SearchProvider");
    }
    return context;
}

// EXTERNAL MODULE: ./src/components/card/CarpetasCard/carpetas.module.scss
var carpetas_module = __webpack_require__(3156);
var carpetas_module_default = /*#__PURE__*/__webpack_require__.n(carpetas_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-bcde97e760/0/cache/react-hook-form-npm-7.45.1-9eaaa3061a-3abe1dcf44.zip/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(1426);
;// CONCATENATED MODULE: ./src/components/card/CarpetasCard/form-Card.tsx





const FormCard = ({ children, currentStep, prevFormStep })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (carpetas_module_default()).formCard,
        children: [
            currentStep < 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    currentStep > 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (carpetas_module_default()).back,
                        onClick: prevFormStep,
                        type: "button",
                        children: "back"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (carpetas_module_default()).steps,
                        children: [
                            "Step ",
                            currentStep + 1,
                            " of 3"
                        ]
                    })
                ]
            }),
            children
        ]
    });
};
const FormCompleted = ()=>{
    const { data } = useFormData();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Thank you for your purchase! \uD83C\uDF89"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: JSON.stringify(data)
            })
        ]
    });
};
const PersonalInfo = ({ formStep, nextFormStep })=>{
    const { setFormValues } = useFormData();
    const { handleSubmit, formState: { errors }, register } = (0,index_esm/* useForm */.cI)({
        defaultValues: {
            email: "admin@example.com"
        }
    });
    const onSubmit = (values)=>{
        setFormValues(values);
        nextFormStep();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: formStep === 0 ? (carpetas_module_default()).showForm : (carpetas_module_default()).hideForm,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Personal Info"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (carpetas_module_default()).formRow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "email",
                                children: "Email"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                id: "email",
                                ...register("email", {
                                    required: true
                                })
                            }),
                            errors.email && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (carpetas_module_default()).errorText,
                                children: "Email is required"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        children: "Next"
                    })
                ]
            })
        ]
    });
};
const ConfirmPurchase = ({ formStep, nextFormStep })=>{
    const { setFormValues } = useFormData();
    const { handleSubmit, formState: { errors }, register } = (0,index_esm/* useForm */.cI)({
        defaultValues: {
            checkbox: false
        }
    });
    const onSubmit = (values)=>{
        setFormValues(values);
        nextFormStep();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: formStep === 2 ? (carpetas_module_default()).showForm : (carpetas_module_default()).hideForm,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Confirm Purchase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (carpetas_module_default()).formRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "checkbox",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "checkbox",
                                        ...register("checkbox", {
                                            required: true
                                        })
                                    }),
                                    "Ready to buy?"
                                ]
                            }),
                            errors.checkbox && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (carpetas_module_default()).errorText,
                                children: "Confirm purchase to proceed"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Next"
                    })
                ]
            })
        ]
    });
};
const BillingInfo = ({ formStep, nextFormStep })=>{
    const { setFormValues } = useFormData();
    const { handleSubmit, formState: { errors }, register } = (0,index_esm/* useForm */.cI)({
        defaultValues: {
            address: "calle 12c # 6 - 21"
        }
    });
    const onSubmit = (values)=>{
        setFormValues(values);
        nextFormStep();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: formStep === 1 ? (carpetas_module_default()).showForm : (carpetas_module_default()).hideForm,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Billing Info"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (carpetas_module_default()).formRow,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "address",
                                children: "Address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "address",
                                id: "address",
                                ...register("address", {
                                    required: true
                                })
                            }),
                            errors.address && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (carpetas_module_default()).errorText,
                                children: "Shipping address is required"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Next"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/Procesos/@left/[llaveProceso]/Editar/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function PageProcesosEditarLeft() {
    const [formStep, setFormStep] = (0,react_experimental_.useState)(0);
    const nextFormStep = ()=>{
        return setFormStep((currentStep)=>{
            return currentStep + 1;
        });
    };
    const prevFormStep = ()=>{
        return setFormStep((currentStep)=>{
            return currentStep - 1;
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(FormProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormCard, {
            currentStep: formStep,
            prevFormStep: prevFormStep,
            children: [
                formStep >= 0 && /*#__PURE__*/ jsx_runtime_.jsx(PersonalInfo, {
                    formStep: formStep,
                    nextFormStep: nextFormStep
                }),
                formStep >= 1 && /*#__PURE__*/ jsx_runtime_.jsx(BillingInfo, {
                    formStep: formStep,
                    nextFormStep: nextFormStep
                }),
                formStep >= 2 && /*#__PURE__*/ jsx_runtime_.jsx(ConfirmPurchase, {
                    formStep: formStep,
                    nextFormStep: nextFormStep
                }),
                formStep > 2 && /*#__PURE__*/ jsx_runtime_.jsx(FormCompleted, {})
            ]
        })
    });
}


/***/ }),

/***/ 3156:
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

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/Procesos/@left/[llaveProceso]/Editar/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultProcesosRight)
/* harmony export */ });
async function DefaultProcesosRight() {
    return null;
}


/***/ }),

/***/ 4078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_notas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3338);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7618);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2__);



async function Page({ params, searchParams }) {
    const llaveProceso = params.llaveProceso;
    const id = searchParams.id;
    const nota = await (0,_lib_notas__WEBPACK_IMPORTED_MODULE_1__/* .getNotaById */ .kY)({
        id: id
    });
    const ntext = nota.map((nt)=>{
        const name = nt.nota;
        return name;
    }).toString();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: `Editar: ${ntext}`
    });
}


/***/ })

};
;