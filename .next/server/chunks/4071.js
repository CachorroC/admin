exports.id = 4071;
exports.ids = [4071];
exports.modules = {

/***/ 7478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'075b6298b6b315dcddc49b853bc8d3e8bfd15c2c': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9696)).then(mod => mod["updateCarpeta"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '075b6298b6b315dcddc49b853bc8d3e8bfd15c2c': endpoint.bind(null, '075b6298b6b315dcddc49b853bc8d3e8bfd15c2c'),
}


/***/ }),

/***/ 7505:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1017));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6257, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7855))

/***/ }),

/***/ 1017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NuevoProceso: () => (/* binding */ NuevoProceso)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-bcde97e760/0/cache/react-hook-form-npm-7.45.1-9eaaa3061a-3abe1dcf44.zip/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(1426);
// EXTERNAL MODULE: ./src/components/form/form.module.scss
var form_module = __webpack_require__(3373);
var form_module_default = /*#__PURE__*/__webpack_require__.n(form_module);
// EXTERNAL MODULE: ./src/lib/types/demandados.ts
var demandados = __webpack_require__(3401);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(5152);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/components/Accordion/index.tsx
var Accordion = __webpack_require__(7855);
;// CONCATENATED MODULE: ./src/components/form/InputSection/index.tsx
/* __next_internal_client_entry_do_not_use__ InputSection auto */ 



const InputSection = ({ name, rls, title, type })=>{
    const rules = rls ?? {
        required: false
    };
    const { register, control } = (0,index_esm/* useFormContext */.Gc)();
    const { field, fieldState, formState } = (0,index_esm/* useController */.bc)({
        name,
        control,
        rules
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: `${(form_module_default()).label} ${(typography_module_default()).titleLarge}`,
                htmlFor: field.name,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ...field,
                className: (form_module_default()).textArea,
                type: type,
                placeholder: field.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: fieldState.isTouched && "Touched"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: fieldState.error && "error"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.submitCount && formState.submitCount
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: fieldState.isDirty && "Dirty"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: fieldState.invalid ? "invalid" : "valid"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.isSubmitted ? "submitted" : "not submitted"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.isSubmitting ? "submitting" : "submitted"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.isSubmitSuccessful ? "submit successful" : "not submit successful"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.isLoading ? "loading" : "loaded"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: formState.errors && JSON.stringify(formState.errors)
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nuevo-deudor.tsx





function NuevoDeudorSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Deudor"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.PrimerNombre",
                        title: "Nombre del deudor",
                        type: "text",
                        rls: {
                            required: true
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.SegundoNombre",
                        title: "segundo nombre",
                        type: "text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.PrimerApellido",
                        title: "Apellido del deudor",
                        type: "text",
                        rls: {
                            required: true
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.SegundoApellido",
                        title: "Segundo apellido",
                        type: "text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.Id",
                        title: "Cedula del deudor",
                        type: "number",
                        rls: {
                            required: true
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.Email",
                        title: "Correo electr\xf3nico",
                        type: "text",
                        rls: {
                            required: false,
                            pattern: /^\S+@\S+$/i
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.Tel.Fijo",
                        title: "Telefono fijo",
                        type: "tel",
                        rls: {
                            required: false,
                            maxLength: 10
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.Tel.Celular",
                        title: "Telefono celular",
                        type: "tel",
                        rls: {
                            required: false,
                            maxLength: 10
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Deudor.Direccion",
                        title: "Direccion de residencia o trabajo",
                        type: "text"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nueva-demanda.tsx
/* __next_internal_client_entry_do_not_use__ NuevaDemandaSection auto */ 




function NuevaDemandaSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Demanda"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "Demanda.Departamento",
                                className: (form_module_default()).label,
                                children: "Departamento:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                className: (form_module_default()).textArea,
                                ...register("Demanda.Departamento", {
                                    required: false
                                }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Amazonas",
                                        children: "Amazonas"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Vichada",
                                        children: "Vichada"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Meta",
                                        children: " Meta"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Caquet\xe1",
                                        children: "Caquet\xe1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Guain\xeda",
                                        children: "Guain\xeda"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Antioquia",
                                        children: "Antioquia"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Vaup\xe9s",
                                        children: "Vaup\xe9s"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Guaviare",
                                        children: "Guaviare"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Choc\xf3",
                                        children: "Choc\xf3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Casanare",
                                        children: "Casanare"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Nari\xf1o",
                                        children: "Nari\xf1o"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Santander",
                                        children: "Santander"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Cauca",
                                        children: "Cauca"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Bol\xedvar",
                                        children: "Bol\xedvar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "C\xf3rdoba",
                                        children: "C\xf3rdoba"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Putumayo",
                                        children: "Putumayo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Arauca",
                                        children: "Arauca"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Tolima",
                                        children: "Tolima"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Boyac\xe1",
                                        children: "Boyac\xe1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Magdalena",
                                        children: "Magdalena"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Cesar",
                                        children: "Cesar"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "CUNDINAMARCA",
                                        children: "Cundinamarca"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Valle del Cauca",
                                        children: "Valle del Cauca"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Norte de Santander",
                                        children: "Norte de Santander"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "La Guajira",
                                        children: "La Guajira"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Huila",
                                        children: "Huila"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Sucre",
                                        children: "Sucre"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Caldas",
                                        children: "Caldas"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Risaralda",
                                        children: "Risaralda"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Atl\xe1ntico",
                                        children: "Atl\xe1ntico"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Quind\xedo",
                                        children: "Quind\xedo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Bogot\xe1, Distrito Capital",
                                        children: "Bogot\xe1, Distrito Capital"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "San Andr\xe9s y Providencia",
                                        children: "San Andr\xe9s y Providencia"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Municipio",
                                children: "Municipio"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Municipio",
                                ...register("Demanda.Municipio", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.VencimientoPagare",
                                children: "Fecha del Vencimiento del Pagar\xe9"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Demanda.VencimientoPagar\xe9",
                                ...register("Demanda.VencimientoPagare", {
                                    required: false,
                                    valueAsDate: true
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.EntregaGarantiasAbogado",
                                children: "Fecha de Entrega Garantias a la Abogada"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Demanda.EntregaGarantiasAbogado",
                                ...register("Demanda.EntregadeGarantiasAbogado", {
                                    valueAsDate: true,
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Radicado",
                                children: "Radicado n\xfamero:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Radicado",
                                ...register("Demanda.Radicado", {
                                    required: false,
                                    pattern: /\d\d\d\d\s+-\s+\d\d\d\d\d/gi
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.CapitalAdeudado",
                                children: "Capital Adeudado"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "number",
                                placeholder: "Demanda.CapitalAdeudado",
                                ...register("Demanda.CapitalAdeudado", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Proceso.tipo",
                                children: "Tipo de proceso"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                ...register("Demanda.Proceso.Tipo", {
                                    required: false
                                }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "HIPOTECARIO",
                                        children: "HIPOTECARIO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "PRENDARIO",
                                        children: "PRENDARIO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "SINGULAR",
                                        children: "SINGULAR"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Ubicacion.Juzgado",
                                children: "Ubicacion del juzgado"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Ubicacion.Juzgado",
                                ...register("Demanda.Ubicacion.Juzgado", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Demanda.Juzgado.Origen.id",
                                        children: "Nombre del Juzgado de origen"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "text",
                                        placeholder: "Juzgado de Origen",
                                        ...register("Demanda.Juzgado.Origen.id", {
                                            required: false
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Demanda.Juzgado.Origen.url",
                                        children: "Link para el juzgado de origen"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "text",
                                        placeholder: "Link del juzgado",
                                        ...register("Demanda.Juzgado.Origen.url", {
                                            required: false
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Demanda.Juzgado.Ejecucion.id",
                                        children: "Nombre del Juzgado de ejecucion"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "text",
                                        placeholder: "Juzgado de ejecucion",
                                        ...register("Demanda.Juzgado.Ejecucion.id", {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Demanda.Juzgado.Ejecucion.url",
                                        children: "Link para el juzgado de ejecucion"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "text",
                                        placeholder: "Link del juzgado",
                                        ...register("Demanda.Juzgado.Ejecucion.url", {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Obligacion.0",
                                children: "Obligacion 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Obligacion.0",
                                ...register("Demanda.Obligacion.0", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Obligacion.1",
                                children: "Obligacion 1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Obligacion.1",
                                ...register("Demanda.Obligacion.1", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Demanda.Obligacion.2",
                                children: "Obligacion 2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Demanda.Obligacion.2",
                                ...register("Demanda.Obligacion.2", {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nueva-etapaProcesal.tsx
/* __next_internal_client_entry_do_not_use__ NuevaEtapaProcesalSection auto */ 




function NuevaEtapaProcesalSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Etapa Procesal"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "EtapaProcesal.Etapa",
                                children: "Etapa Procesal"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "EtapaProcesal.Etapa",
                                ...register("EtapaProcesal.Etapa", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "EtapaProcesal.Fecha.MandamientodePago",
                                children: "Mandamiento de Pago"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "datetime",
                                placeholder: "EtapaProcesal.Fecha.MandamientodePago",
                                ...register("EtapaProcesal.Fecha.MandamientodePago", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "EtapaProcesal.Fecha.PresentacionDemanda",
                                children: "Mandamiento de Pago"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "datetime",
                                placeholder: "EtapaProcesal.Fecha.PresentacionDemanda",
                                ...register("EtapaProcesal.Fecha.PresentacionDemanda", {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nueva-liquidacion.tsx
/* __next_internal_client_entry_do_not_use__ NuevaLiquidacionSection auto */ 




function NuevaLiquidacionSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Liquidacion"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Liquidacion.Fecha.Aprobacion",
                                children: "Fecha de aprobacion de la liquidacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Liquidacion.Fecha.Aprobacion",
                                ...register("Liquidacion.Fecha.Aprobacion", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Liquidacion.Fecha.Presentacion",
                                children: "Fecha de presentacion de liquidacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Liquidacion.Fecha.Presentacion",
                                ...register("Liquidacion.Fecha.Presentacion", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Liquidacion.Fecha.Solicitud",
                                children: "Fecha de Solicitud de la liquidacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Liquidacion.Fecha.Solicitud",
                                ...register("Liquidacion.Fecha.Solicitud", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                        children: "Costas"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Liquidacion.Costas.FechaAprobacion",
                                        children: "Fecha de Aprobacion"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "date",
                                        placeholder: "Liquidacion.Costas.FechaAprobacion",
                                        ...register("Liquidacion.Costas.FechaAprobacion", {})
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "Liquidacion.Costas.Valor",
                                        children: "Valor"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "number",
                                        placeholder: "Liquidacion.Costas.Valor",
                                        ...register("Liquidacion.Costas.Valor", {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Liquidacion.Fecha.Sentencia",
                                children: "Fecha de sentencia de la Liquidacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Liquidacion.Fecha.Sentencia",
                                ...register("Liquidacion.Fecha.Sentencia", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Liquidacion.ValorCredito",
                                children: "Valor del cr\xe9dito"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "number",
                                placeholder: "Liquidacion.ValorCredito",
                                ...register("Liquidacion.ValorCredito", {})
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nuevas-medidasCautelares.tsx
/* __next_internal_client_entry_do_not_use__ NuevasMedidasCautelaresSection auto */ 





function NuevasMedidasCautelaresSection() {
    const { register, control } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Medidas Cautelares"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "MedidasCautelares.Bienes",
                                children: "Bienes de las medidas cautelares"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "MedidasCautelares.Bienes",
                                ...register("MedidasCautelares.Bienes", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "MedidasCautelares.MedidaSolicitada",
                                children: "Medida solicitada"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "MedidasCautelares.MedidaSolicitada",
                                ...register("MedidasCautelares.MedidaSolicitada", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "MedidasCautelares.Extra",
                                children: "Comentarios e informacion adicional"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "MedidasCautelares.Extra",
                                ...register("MedidasCautelares.Extra", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "MedidasCautelares.PlacaoNumeroMatricula",
                                children: "Placa o n\xfamero de matr\xedcula"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "MedidasCautelares.PlacaoNumeroMatricula",
                                ...register("MedidasCautelares.PlacaoNumeroMatricula", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "MedidasCautelares.DescripcionMedida",
                                children: "Descripci\xf3n de la medida cautelar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "MedidasCautelares.DescripcionMedida",
                                ...register("MedidasCautelares.DescripcionMedida", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                                children: "Fechas"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "MedidasCautelares.Fecha.Captura",
                                        children: "Fecha de la captura"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "date",
                                        placeholder: "MedidasCautelares.Fecha.Captura",
                                        ...register("MedidasCautelares.Fecha.Captura", {
                                            required: false
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "MedidasCautelares.Fecha.Secuestro",
                                        children: "Fecha del secuestro"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "date",
                                        placeholder: "MedidasCautelares.Fecha.Secuestro",
                                        ...register("MedidasCautelares.Fecha.Secuestro", {
                                            required: false
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                                className: (form_module_default()).section,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        className: (form_module_default()).label,
                                        htmlFor: "MedidasCautelares.Fecha.DecretoSecuestrooCaptura",
                                        children: "Fecha decreto secuestro o captura"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        className: (form_module_default()).textArea,
                                        type: "date",
                                        placeholder: "MedidasCautelares.Fecha.DecretoSecuestrooCaptura",
                                        ...register("MedidasCautelares.Fecha.DecretoSecuestrooCaptura", {
                                            required: false
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "MedidasCautelares.Fecha.SolicitudCapturaoSecuestro",
                                type: "date",
                                title: "Fecha de solicitud de  captura o secuestro"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                                children: "Oficios"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "MedidasCautelares.Oficios.FechaRetiro",
                                type: "date",
                                title: "Fecha de retiro de las medidas Cautelares"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "MedidasCautelares.FechaRadicacion",
                        type: "text",
                        title: "Fecha de radicacion de las medidas cautelares"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "MedidasCautelares.RespuestaEmbargo",
                        type: "checkbox",
                        title: "Respuesta del embargo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "MedidasCautelares.FechaOrdena",
                        type: "date",
                        title: "Fecha Ordena"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                                children: "Oficio"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "MedidasCautelares.Oficio.Fecha",
                                type: "date",
                                title: "Fecha del oficio"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "MedidasCautelares.Oficio.Numero",
                                type: "number",
                                title: "Oficio Numero"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nuevo-avaluo.tsx
/* __next_internal_client_entry_do_not_use__ NuevoAvaluoSection auto */ 





function NuevoAvaluoSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                children: "Avaluo"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Avaluo.Adjudicacion.Fecha",
                        title: "Fecha de adjudicaci\xf3n del avaluo",
                        type: "date"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Avaluo.Remate.Fecha",
                        title: "Fecha del remate",
                        type: "date"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Avaluo.Valor",
                        title: "Valor del avaluo",
                        type: "number"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nuevo-codeudor.tsx





function NuevoCodeudorSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displaySmall}`,
                children: "Codeudor"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Codeudor.Id",
                        title: "Codeudor.Id",
                        type: "number"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Codeudor.Nombre",
                        title: "Codeudor.Nombre",
                        type: "text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Codeudor.Tel.Fijo",
                        title: "Telefono Fijo",
                        type: "tel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                        name: "Codeudor.Tel.Celular",
                        title: "Telefono celular",
                        type: "tel"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nuevas-notificaciones.tsx


function NuevasNotificacionesSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nueva-suspencionProceso.tsx





function NuevaSuspencionProcesoSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Suspencion del Proceso"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "SuspencionProceso.TerminoSuspencion",
                                children: "T\xe9rmino de la suspenci\xf3n"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "SuspencionProceso.TerminoSuspencion",
                                ...register("SuspencionProceso.TerminoSuspencion", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "SuspencionProceso.Fecha",
                                children: "Fecha de la suspencion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "SuspencionProceso.Fecha",
                                ...register("SuspencionProceso.Fecha", {
                                    required: false
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/nueva-terminacion.tsx
/* __next_internal_client_entry_do_not_use__ NuevaTerminacionSection auto */ 




function NuevaTerminacionSection() {
    const { register } = (0,index_esm/* useFormContext */.Gc)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (form_module_default()).section,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: `${(form_module_default()).title} ${(typography_module_default()).displayMedium}`,
                children: "Terminacion"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Accordion.Accordion, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Terminacion.Causal",
                                children: "Causal de Terminacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "text",
                                placeholder: "Terminacion.Causal",
                                ...register("Terminacion.Causal", {
                                    required: false
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (form_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (form_module_default()).label,
                                htmlFor: "Terminacion.Fecha",
                                children: "Fecha de la Terminacion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (form_module_default()).textArea,
                                type: "date",
                                placeholder: "Terminacion.Fecha",
                                ...register("Terminacion.Fecha", {
                                    required: false
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(3979);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/client/app-call-server.js
var app_call_server = __webpack_require__(2608);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(9788);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js
var action_client_wrapper = __webpack_require__(5547);
;// CONCATENATED MODULE: ./src/lib/Carpetas/update/index.ts



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ updateCarpeta */ 

var updateCarpeta = (0,action_client_wrapper/* default */.Z)("075b6298b6b315dcddc49b853bc8d3e8bfd15c2c");


;// CONCATENATED MODULE: ./src/app/Carpetas/NuevaCarpeta/new-carpeta.tsx
/* __next_internal_client_entry_do_not_use__ NuevoProceso auto */ 

















const defaultValues = {
    Numero: 501,
    Demanda: {
        Departamento: "CUNDINAMARCA",
        Municipio: "Bogot\xe1",
        Radicado: "2023 - 00000",
        Proceso: {
            Tipo: "PRENDARIO"
        },
        Juzgado: {
            Origen: {
                id: "001 Cm",
                url: "https://app.rsasesorjuridico.com"
            }
        },
        Ubicacion: {
            Juzgado: "Juzgados Carrera d\xe9cima"
        }
    },
    Deudor: {
        PrimerNombre: "Pepito",
        PrimerApellido: "Perez"
    },
    idProceso: 0,
    llaveProceso: "00000000000000000000000"
};
function NuevoProceso({ uri, carpeta }) {
    const [values, setValues] = (0,react_experimental_.useState)(defaultValues);
    if (carpeta) {
        const givenCarpeta = demandados/* carpetaConvert */.U.toIntCarpeta(carpeta);
        setValues(givenCarpeta);
    }
    const methods = (0,index_esm/* useForm */.cI)({
        defaultValues: values
    });
    const { register, handleSubmit, formState, control } = methods;
    const onSubmit = async (data)=>{
        alert(JSON.stringify(formState.dirtyFields));
        alert(JSON.stringify(data));
        await (0,fix/* sleep */._v)(2000);
        const updated = await updateCarpeta({
            carpeta: data
        });
        alert(`updated count: ${updated.matchedCount}`);
        alert(`modified count: ${updated.modifiedCount}`);
        alert(`updated count: ${updated.upsertedCount}`);
        alert(`updated count: ${updated.upsertedId}`);
        /*   const postNewNote = await fetch(
      `${ uri }/api/Carpetas${ carpeta && `?_id=${ carpeta._id }` }`,
      {
        method : 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(
          formState.dirtyFields
        )
      }
    );

 */ alert(JSON.stringify(data.Deudor.PrimerNombre));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FormProvider */.RV, {
            ...methods,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (form_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: (form_module_default()).form,
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                className: (form_module_default()).section,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: (form_module_default()).textArea,
                                    type: "submit"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "Numero",
                                title: "Carpeta numero",
                                type: "number",
                                rls: {
                                    required: true
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "idProceso",
                                title: "idProceso",
                                type: "number",
                                rls: {
                                    required: true
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputSection, {
                                name: "llaveProceso",
                                title: "Expediente judicial",
                                type: "text",
                                rls: {
                                    required: true,
                                    minLength: 23
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevoDeudorSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevoCodeudorSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevaDemandaSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevasNotificacionesSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevasMedidasCautelaresSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevaEtapaProcesalSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevoAvaluoSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevaSuspencionProcesoSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevaTerminacionSection, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NuevaLiquidacionSection, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                        children: JSON.stringify(formState, null, 2)
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 3373:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "form_container__QogyO",
	"form": "form_form__jakRN",
	"nota": "form_nota__sXvWB",
	"buttonsRow": "form_buttonsRow__Xyz_U",
	"section": "form_section__1u572",
	"label": "form_label__NL344",
	"titleInput": "form_titleInput__1yrJ2",
	"title": "form_title__Omi_I",
	"submitButton": "form_submitButton__CX9ez",
	"textArea": "form_textArea__4FWG1",
	"editButton": "form_editButton__xQ9Px",
	"deleteButton": "form_deleteButton__74_F5",
	"addButton": "form_addButton__GUGj8",
	"HomeButton": "form_HomeButton__8qnEA",
	"button": "form_button__0zy1n",
	"ButtonTextHelper": "form_ButtonTextHelper__J7_sU",
	"content": "form_content__GxsV6",
	"checkboxItem": "form_checkboxItem__sS5Mx",
	"tareas": "form_tareas__rKZCG",
	"select": "form_select__fXIZp",
	"innactive": "form_innactive__pasCA",
	"active": "form_active___uT_w",
	"switch": "form_switch__H_f0T",
	"checkbox": "form_checkbox__3Hd8a",
	"slider": "form_slider__VG6If"
};


/***/ }),

/***/ 1330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/Carpetas/NuevaCarpeta/new-carpeta.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["NuevoProceso"];


/***/ }),

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateCarpeta: () => (/* binding */ updateCarpeta)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8185);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7414);
/* __next_internal_action_entry_do_not_use__ updateCarpeta */ 


const Collection = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async ()=>{
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__["default"];
    if (!client) {
        throw new Error("no hay cliente mong\xf3lico");
    }
    const db = client.db("RyS");
    const carpetas = db.collection("Demandados");
    return carpetas;
});
const updateCarpeta = async ({ carpeta })=>{
    const collection = await Collection();
    const query = carpeta;
    const update = {
        $set: carpeta
    };
    const options = {
        upsert: true
    };
    const updt = await collection.updateOne(query, update, options);
    return updt;
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__["default"])([
    updateCarpeta
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("075b6298b6b315dcddc49b853bc8d3e8bfd15c2c", null, updateCarpeta);


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


/***/ }),

/***/ 4161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


const uri = process.env.MONGODB_URI || "mongodb+srv://cachorro_cami:Tengo1amo@cluster0.ffbyjzl.mongodb.net/?retryWrites=true&w=majority";
const options = {};
let client;
let clientPromise;
if (false) {} else {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);
    clientPromise = client.connect();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ })

};
;