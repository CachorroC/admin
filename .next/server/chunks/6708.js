exports.id = 6708;
exports.ids = [6708];
exports.modules = {

/***/ 3990:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 769, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9550, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4865, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2416, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5840, 23))

/***/ }),

/***/ 7058:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6226, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1059));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4195));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3602));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4882))

/***/ }),

/***/ 4605:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4430))

/***/ }),

/***/ 1203:
/***/ (() => {



/***/ }),

/***/ 2738:
/***/ (() => {



/***/ }),

/***/ 4882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteSliderProvider: () => (/* binding */ NoteSliderProvider),
/* harmony export */   useNoteSlider: () => (/* binding */ useNoteSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ NoteSliderProvider,useNoteSlider auto */ 

const notasMap = new Map();
const NoteSliderContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function NoteSliderProvider({ children }) {
    const [noteSliderMap, setNoteSliderMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoteSliderContext.Provider, {
        value: [
            noteSliderMap,
            setNoteSliderMap
        ],
        children: children
    });
}
function useNoteSlider() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoteSliderContext);
    if (context === undefined) {
        throw new Error("useNoteSlider should be used inside a NoteSliderProvider");
    }
    return context;
}


/***/ }),

/***/ 4430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2015);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Error({ error, reset }) {
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        console.log("logging error:", error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().body),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
                style: {
                    backgroundColor: "var(--error-container)"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().displayLarge),
                        style: {
                            color: "var(--on-error-container)"
                        },
                        children: "Error"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bodyLarge),
                        children: error?.message
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>{
                        return reset();
                    },
                    className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button),
                    children: "Try Again"
                })
            })
        ]
    });
}


/***/ }),

/***/ 1059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalProvider: () => (/* binding */ ModalProvider),
/* harmony export */   useModal: () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ModalProvider,useModal auto */ 

const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContext.Provider, {
        value: [
            isOpen,
            setIsOpen
        ],
        children: children
    });
}
function useModal() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}


/***/ }),

/***/ 3602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteProvider: () => (/* binding */ NoteProvider),
/* harmony export */   useNoter: () => (/* binding */ useNoter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ NoteProvider,useNoter auto */ 

const NoteContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function NoteProvider({ children }) {
    const [isShowing, setIsShowing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoteContext.Provider, {
        value: [
            isShowing,
            setIsShowing
        ],
        children: children
    });
}
function useNoter() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoteContext);
    if (context === null) {
        throw new Error("useModal must be used within NoteProvider");
    }
    return context;
}


/***/ }),

/***/ 4195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelContext: () => (/* binding */ LevelContext),
/* harmony export */   SearchProvider: () => (/* binding */ SearchProvider),
/* harmony export */   useNavigator: () => (/* binding */ useNavigator),
/* harmony export */   useSearch: () => (/* binding */ useSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ LevelContext,SearchProvider,useSearch,useNavigator auto */ 

const SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const NavContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const LevelContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);
function SearchProvider({ children }) {
    const level = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LevelContext);
    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LevelContext.Provider, {
        value: level + 1,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
            value: [
                search,
                setSearch
            ],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavContext.Provider, {
                value: [
                    isNavOpen,
                    setIsNavOpen
                ],
                children: children
            })
        })
    });
}
function useSearch() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);
    if (context === null) {
        throw new Error("useSearch must be used inside a SearchProvider");
    }
    return context;
}
function useNavigator() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NavContext);
    if (context === undefined) {
        throw new Error("useNavigator must be used within a NavProvider");
    }
    return context;
}


/***/ }),

/***/ 6773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Title)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(5152);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(3979);
// EXTERNAL MODULE: ./src/styles/fonts/typeface.module.scss
var typeface_module = __webpack_require__(5962);
var typeface_module_default = /*#__PURE__*/__webpack_require__.n(typeface_module);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
;// CONCATENATED MODULE: ./src/hooks/online-state.tsx
/* __next_internal_client_entry_do_not_use__ useOnlineStatus auto */ 
function useOnlineStatus() {
    const [isOnline, setIsOnline] = (0,react_experimental_.useState)(true);
    (0,react_experimental_.useEffect)(()=>{
        function handleOnline() {
            if ("serviceWorker" in navigator) {
                console.log("CLIENT: service worker registration in progress.");
                navigator.serviceWorker.register("/service-worker.js").then(function() {
                    console.log("CLIENT: service worker registration complete.");
                }, function() {
                    console.log("CLIENT: service worker registration failure.");
                });
            } else {
                console.log("CLIENT: service worker is not supported.");
            }
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    return isOnline;
}

;// CONCATENATED MODULE: ./src/components/Headings/title.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Title({ helper }) {
    const isOnline = useOnlineStatus();
    const today = new Date();
    let day;
    switch(today.getDay()){
        case 0:
            day = "Mimingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day = "Martes";
            break;
        case 3:
            day = "Mi\xe9rcoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "S\xe1bado";
    }
    const days = [
        "mimingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];
    const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre "
    ];
    const txt = helper ? helper : days[today.getDay()] + " " + (0,fix/* fixFechas */.H9)(today.toString());
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: `${(typography_module_default()).titleMedium}  ${(typeface_module_default()).navbar}`,
        children: isOnline ? txt : "offline"
    });
}


/***/ }),

/***/ 4511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ButtonSkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1418);
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


/***/ }),

/***/ 1234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mw: () => (/* binding */ DrawerMenuButton),
/* harmony export */   hA: () => (/* binding */ BackwardsButton),
/* harmony export */   qT: () => (/* binding */ ForwardButton),
/* harmony export */   us: () => (/* binding */ HomeButton)
/* harmony export */ });
/* unused harmony export ModalButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9870);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1418);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2985);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1059);
/* harmony import */ var _app_search_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4195);
/* __next_internal_client_entry_do_not_use__ ForwardButton,BackwardsButton,DrawerMenuButton,HomeButton,ModalButton auto */ 





const ForwardButton = ()=>{
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_4__.useNavigator)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonForward),
        onClick: ()=>{
            router.forward();
            setIsNavOpen(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `material-symbols-outlined ${(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                children: "chevron_right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ButtonTextHelper),
                children: "entrar"
            })
        ]
    });
};
const BackwardsButton = ()=>{
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_4__.useNavigator)();
    const [isOpen, setIsOpen] = (0,_app_modal_context__WEBPACK_IMPORTED_MODULE_3__.useModal)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const clickHandler = ()=>{
        setIsNavOpen(false);
        setIsOpen(false);
        router.back();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonBackwards),
        onClick: clickHandler,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `material-symbols-outlined ${(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                children: "chevron_left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ButtonTextHelper),
                children: "atras"
            })
        ]
    });
};
const DrawerMenuButton = ()=>{
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_4__.useNavigator)();
    if (isNavOpen) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            type: "button",
            className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonDrawerMenu),
            onClick: ()=>{
                return setIsNavOpen(false);
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: `material-symbols-outlined ${(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                    children: "close"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ButtonTextHelper),
                    children: "cerrar"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonDrawerMenu),
        onClick: ()=>{
            return setIsNavOpen(true);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `material-symbols-outlined ${(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                children: "menu"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ButtonTextHelper),
                children: "abrir"
            })
        ]
    });
};
const HomeButton = ()=>{
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_4__.useNavigator)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonHome),
        onClick: ()=>{
            setIsNavOpen(false);
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `material-symbols-outlined ${(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon)}`,
                children: "home"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ButtonTextHelper),
                children: "inicio"
            })
        ]
    });
};
const ModalButton = ()=>{
    const [isOpen, setIsOpen] = useModal();
    return /*#__PURE__*/ _jsx("button", {
        className: navbar.buttonModal,
        onClick: ()=>{
            return setIsOpen(true);
        },
        children: /*#__PURE__*/ _jsx("span", {
            className: `material-symbols-outlined ${navbar.icon}`,
            children: "box"
        })
    });
};


/***/ }),

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2015);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2918);
/* harmony import */ var _components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7526);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1234);
/* harmony import */ var _ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4511);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5962);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Header({ children }) {
    const isDesktop = (0,_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(2);
    const isMobile = (0,_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(0);
    const isBigDesktop = (0,_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(3);
    if (isDesktop || isBigDesktop) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .HomeButton */ .us, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                        className: (_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: "Loading"
                    }),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .BackwardsButton */ .hA, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .ForwardButton */ .qT, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .DrawerMenuButton */ .Mw, {})
            ]
        });
    }
    if (isMobile) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .HomeButton */ .us, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                        className: (_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                        children: "Loading"
                    }),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .DrawerMenuButton */ .Mw, {})
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .HomeButton */ .us, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sub", {
                    className: (_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_7___default().title),
                    children: "Loading"
                }),
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .BackwardsButton */ .hA, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .ForwardButton */ .qT, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_5__/* .ButtonSkeleton */ .D, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .DrawerMenuButton */ .Mw, {})
        ]
    });
}


/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_search_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4195);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1418);
/* harmony import */ var _components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7526);
/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2918);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1234);
/* harmony import */ var _components_Headings_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6773);
/* harmony import */ var _ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4511);
/* __next_internal_client_entry_do_not_use__ default auto */ 








function Drawer({ children }) {
    const isDesktop = (0,_mediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(2);
    const isMobile = (0,_mediaQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(0);
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_1__.useNavigator)();
    if (isNavOpen) {
        if (isMobile) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().drawer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .DrawerMenuButton */ .Mw, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Headings_title__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .ForwardButton */ .qT, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .BackwardsButton */ .hA, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                        fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .HomeButton */ .us, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sidenav),
                        children: children
                    })
                ]
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().drawer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_InputSearchBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_5__/* .DrawerMenuButton */ .Mw, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
                    fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ButtonSkeleton__WEBPACK_IMPORTED_MODULE_7__/* .ButtonSkeleton */ .D, {}),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Headings_title__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_components_navbar_navbar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sidenav),
                    children: children
                })
            ]
        });
    }
    return null;
}


/***/ }),

/***/ 2918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ useMedia)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function useMedia(query) {
    const [matches, setMatches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const mediaQueries = (query)=>{
            let media;
            switch(query){
                case 0:
                    media = "(max-width: 600px)";
                    break;
                case 1:
                    media = "(min-width: 600px) and (max-width: 1200px)";
                    break;
                case 2:
                    media = "(min-width: 1200px) and (max-width: 1920px)";
                    break;
                case 3:
                    media = "(min-width: 1920px)";
                    break;
                default:
                    media = "";
            }
            return media;
        };
        const md = mediaQueries(query);
        function handleMatchMedia() {
            setMatches(true);
        }
        function handleNoMatchMedia() {
            setMatches(false);
        }
        const media = window.matchMedia(md);
        const listener = ()=>{
            return setMatches(media.matches);
        };
        listener();
        media.addEventListener("change", listener);
        return ()=>{
            return media.removeEventListener("change", listener);
        };
    }, [
        matches,
        query
    ]);
    return matches;
}


/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ InputSearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9870);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_search_searchbar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(228);
/* harmony import */ var _components_search_searchbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_search_searchbar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_search_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4195);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function InputSearchBar() {
    const [search, setSearch] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_2__.useSearch)();
    const [isNavOpen, setIsNavOpen] = (0,_app_search_context__WEBPACK_IMPORTED_MODULE_2__.useNavigator)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const isHome = pathname === "/" ? true : false;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "text",
        className: (_components_search_searchbar_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input),
        name: "search",
        value: search,
        placeholder: isHome ? "Buscar" : pathname,
        onBeforeInput: ()=>{
            pathname === "/" && setIsNavOpen(true);
        },
        onChange: (input)=>{
            setIsNavOpen(true);
            setSearch(input.target.value);
        }
    });
}


/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchOutputList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/app/search-context.tsx
var search_context = __webpack_require__(4195);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/link.js
var next_link = __webpack_require__(2985);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/navigation.js
var navigation = __webpack_require__(9870);
// EXTERNAL MODULE: ./src/components/search/searchbar.module.scss
var searchbar_module = __webpack_require__(228);
var searchbar_module_default = /*#__PURE__*/__webpack_require__.n(searchbar_module);
// EXTERNAL MODULE: ./src/lib/fix.ts
var fix = __webpack_require__(3979);
// EXTERNAL MODULE: ./src/app/modal-context.tsx
var modal_context = __webpack_require__(1059);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(5152);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
// EXTERNAL MODULE: ./src/lib/types/demandados.ts
var demandados = __webpack_require__(3401);
;// CONCATENATED MODULE: ./src/components/card/Nombre/index.tsx



function NombreComponent({ Deudor }) {
    const newName = new demandados/* NombreCompleto */.e(Deudor);
    return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
        className: (typography_module_default()).displayMedium,
        children: newName.Nombre
    });
}

;// CONCATENATED MODULE: ./src/components/search/link.tsx
/* __next_internal_client_entry_do_not_use__ LinkCard auto */ 








const LinkCard = ({ path, proceso })=>{
    const [isOpen, setIsOpen] = (0,modal_context.useModal)();
    const { Deudor, fecha, llaveProceso, idProceso, id } = proceso;
    const { Id, Direccion, Tel } = Deudor;
    const params = (0,navigation.useParams)();
    const pathname = (0,navigation.usePathname)();
    const [isNavOpen, setIsNavOpen] = (0,search_context.useNavigator)();
    const href = proceso.llaveProceso ? proceso.idProceso ? `${path}/${proceso.llaveProceso}/${proceso.idProceso}` : `${path}/${proceso.llaveProceso}` : path;
    const isActive = pathname === href || pathname === `${path}/${llaveProceso}/${idProceso}` || pathname === `${path}/${llaveProceso}`;
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (searchbar_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: href,
            onClick: ()=>{
                return setIsNavOpen(false);
            },
            className: isActive ? (searchbar_module_default()).isActive : (searchbar_module_default()).notActive,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NombreComponent, {
                    Deudor: Deudor
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("sub", {
                    className: (searchbar_module_default()).date,
                    children: (0,fix/* fixFechas */.H9)(fecha)
                })
            ]
        })
    }, id);
};

;// CONCATENATED MODULE: ./src/components/Headings/clientSideName.tsx
/* __next_internal_client_entry_do_not_use__ Name auto */ 



const Name = ({ helper })=>{
    const pathname = (0,navigation.usePathname)();
    const segment = (0,navigation.useSelectedLayoutSegment)();
    const today = new Date();
    let day;
    switch(today.getDay()){
        case 0:
            day = "Mimingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day = "Martes";
            break;
        case 3:
            day = "Mi\xe9rcoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "S\xe1bado";
    }
    const days = [
        "mimingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];
    const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre "
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: (typography_module_default()).titleMedium,
        children: helper?.toLocaleLowerCase() ?? `${days[today.getDay()]}, ${(0,fix/* fixFechas */.H9)(today.toString())}`
    });
};

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(7640);
;// CONCATENATED MODULE: ./src/components/search/SearchProcesosOutput.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function SearchOutputList({ path, fechas }) {
    const pathname = (0,navigation.usePathname)();
    const [search, setSearch] = (0,search_context.useSearch)();
    const searchLinkRef = (0,react_experimental_.useRef)(null);
    function scrollToId(id) {
        const map = getMap();
        const node = map.get(id);
        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });
        node.focus();
    }
    function getMap() {
        if (!searchLinkRef.current) {
            searchLinkRef.current = new Map();
        }
        return searchLinkRef.current;
    }
    const clickHandler = ()=>{
        setIsNavOpen(false);
    };
    const [isNavOpen, setIsNavOpen] = (0,search_context.useNavigator)();
    const isActive = pathname === path;
    const href = path;
    const rows = [];
    const idk = [
        ...fechas
    ].sort((a, b)=>{
        if (!a.fecha || a.fecha === undefined) {
            return 1;
        }
        if (!b.fecha || b.fecha === undefined) {
            return -1;
        }
        const x = typeof a.fecha === "string" ? a.fecha.toLowerCase() : a.fecha.toISOString();
        const y = typeof b.fecha === "string" ? b.fecha.toLowerCase() : b.fecha.toISOString();
        if (x < y) {
            return 1;
        }
        if (x > y) {
            return -1;
        }
        return 0;
    });
    idk.forEach((proceso, index, array)=>{
        const { idProceso, llaveProceso, Deudor, fecha, id } = proceso;
        const { Id, Tel, Direccion } = Deudor;
        if (Nombre.toLowerCase().indexOf(search.toLowerCase()) === -1) {
            return;
        }
        rows.push(/*#__PURE__*/ jsx_runtime_.jsx(LinkCard, {
            path: path,
            proceso: proceso
        }, id));
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (searchbar_module_default()).container,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: isActive ? (searchbar_module_default()).isActive : (searchbar_module_default()).notActive,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                            helper: path
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (searchbar_module_default()).section,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("sub", {
                                className: (searchbar_module_default()).date,
                                children: (0,fix/* fixFechas */.H9)(new Date().toISOString())
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (searchbar_module_default()).links,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: isActive ? (searchbar_module_default()).linkIsActive : (searchbar_module_default()).link,
                                    onClick: clickHandler,
                                    href: href,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `${(searchbar_module_default()).icon} material-symbols-outlined`,
                                        children: "file_open"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: isActive ? (searchbar_module_default()).linkIsActive : (searchbar_module_default()).link,
                                    href: "/Notas/NuevaNota",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `material-symbols-outlined ${(searchbar_module_default()).icon}`,
                                        children: "add"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            rows
        ]
    });
}


/***/ }),

/***/ 3979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $M: () => (/* binding */ toNameString),
/* harmony export */   GZ: () => (/* binding */ fixDemandado),
/* harmony export */   H9: () => (/* binding */ fixFechas),
/* harmony export */   _v: () => (/* binding */ sleep)
/* harmony export */ });
const sleep = (ms)=>{
    return new Promise((resolve)=>{
        return setTimeout(resolve, ms);
    });
};
function fixFechas(fecha) {
    if (fecha === null) {
        return "no hay fechas: null";
    }
    if (fecha === undefined) {
        return "no se ha definido el contenido";
    }
    const date = new Date(fecha);
    const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
    ];
    const month = months[date.getMonth()];
    const dia = date.getDate();
    const ano = date.getFullYear();
    return dia + " de " + month + " de " + ano;
}
function trimmer(sujetosProcesales) {
    const locateDemandado = sujetosProcesales.search(/(demandado|causante)+:(?:\s*?|'\s*?')/gi);
    const extractDemandado = sujetosProcesales.slice(locateDemandado + 10).toLowerCase();
    const trimDemandado = extractDemandado.replace(/^\s+|\s+$/gm, "");
    const splitDemandado = trimDemandado.split(" ");
    const splitDemandadotoUnify = splitDemandado.map((nombreOapellido, index)=>{
        if (index >= 5) {
            return "";
        }
        if (nombreOapellido === "|") {
            return "";
        }
        if (nombreOapellido.includes("s.a.s")) {
            return "";
        }
        if (nombreOapellido.includes("sas")) {
            return "";
        }
        if (nombreOapellido.includes("(emplazado)")) {
            return "";
        }
        return nombreOapellido.replace(/^./, (str)=>{
            return str.toUpperCase();
        });
    });
    const unifyDemandado = splitDemandadotoUnify.join(" ");
    return unifyDemandado;
}
const fixDemandado = (sujetosProcesales)=>{
    const mySubString = "Demandado";
    const count = sujetosProcesales.split(mySubString).length - 1;
    if (count === 1) {
        return trimmer(sujetosProcesales);
    }
    return sujetosProcesales;
};
const toNameString = ({ nameRaw })=>{
    const str = nameRaw.toLowerCase();
    const arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
};


/***/ }),

/***/ 3401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ carpetaConvert),
/* harmony export */   e: () => (/* binding */ NombreCompleto)
/* harmony export */ });
// To parse this data:
//
//   import { Convert } from "./file";
// Converts JSON strings to/from your types
class carpetaConvert {
    static toIntCarpetas(json) {
        return JSON.parse(json);
    }
    static intCarpetasToJson(value) {
        return JSON.stringify(value);
    }
    static toIntCarpeta(carpeta) {
        const { despacho, nombre, _id, ...newCarpeta } = carpeta;
        return newCarpeta;
    }
    static intCarpetaToJson(value) {
        return JSON.stringify(value);
    }
    static toMonCarpeta(carpeta) {
        const carpetaToString = JSON.stringify(carpeta);
        const carpetaCleanId = JSON.parse(carpetaToString);
        const dsp = carpeta.Demanda.Juzgado.Ejecucion ? carpeta.Demanda.Juzgado.Ejecucion : carpeta.Demanda.Juzgado.Origen;
        const nmb = carpeta.Deudor.SegundoApellido ? carpeta.Deudor.SegundoNombre ? `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.SegundoNombre} ${carpeta.Deudor.PrimerApellido} ${carpeta.Deudor.SegundoApellido}` : `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.PrimerApellido} ${carpeta.Deudor.SegundoApellido}` : `${carpeta.Deudor.PrimerNombre} ${carpeta.Deudor.PrimerApellido}`;
        const fixedCarpeta = {
            ...carpetaCleanId,
            despacho: dsp,
            nombre: nmb
        };
        return fixedCarpeta;
    }
    static toMonCarpetas(carpetas) {
        const newCarpetas = carpetas.map((carpeta)=>{
            return this.toMonCarpeta(carpeta);
        });
        return newCarpetas;
    }
    static toAvaluo(json) {
        return JSON.parse(json);
    }
    static avaluoToJson(value) {
        return JSON.stringify(value);
    }
    static toAdjudicacion(json) {
        return JSON.parse(json);
    }
    static adjudicacionToJson(value) {
        return JSON.stringify(value);
    }
    static toCodeudor(json) {
        return JSON.parse(json);
    }
    static codeudorToJson(value) {
        return JSON.stringify(value);
    }
    static toTel(json) {
        return JSON.parse(json);
    }
    static telToJson(value) {
        return JSON.stringify(value);
    }
    static toDemanda(json) {
        return JSON.parse(json);
    }
    static demandaToJson(value) {
        return JSON.stringify(value);
    }
    static toJuzgado(json) {
        return JSON.parse(json);
    }
    static juzgadoToJson(value) {
        return JSON.stringify(value);
    }
    static toEjecucion(json) {
        return JSON.parse(json);
    }
    static ejecucionToJson(value) {
        return JSON.stringify(value);
    }
    static toObligacion(json) {
        return JSON.parse(json);
    }
    static obligacionToJson(value) {
        return JSON.stringify(value);
    }
    static toProceso(json) {
        return JSON.parse(json);
    }
    static procesoToJson(value) {
        return JSON.stringify(value);
    }
    static toUbicacion(json) {
        return JSON.parse(json);
    }
    static ubicacionToJson(value) {
        return JSON.stringify(value);
    }
    static toDeudor(json) {
        return JSON.parse(json);
    }
    static deudorToJson(value) {
        return JSON.stringify(value);
    }
    static toEtapaProcesal(json) {
        return JSON.parse(json);
    }
    static etapaProcesalToJson(value) {
        return JSON.stringify(value);
    }
    static toEtapaProcesalFecha(json) {
        return JSON.parse(json);
    }
    static etapaProcesalFechaToJson(value) {
        return JSON.stringify(value);
    }
    static toLiquidacion(json) {
        return JSON.parse(json);
    }
    static liquidacionToJson(value) {
        return JSON.stringify(value);
    }
    static toCostas(json) {
        return JSON.parse(json);
    }
    static costasToJson(value) {
        return JSON.stringify(value);
    }
    static toLiquidacionFecha(json) {
        return JSON.parse(json);
    }
    static liquidacionFechaToJson(value) {
        return JSON.stringify(value);
    }
    static toMedidasCautelares(json) {
        return JSON.parse(json);
    }
    static medidasCautelaresToJson(value) {
        return JSON.stringify(value);
    }
    static toMedidasCautelaresFecha(json) {
        return JSON.parse(json);
    }
    static medidasCautelaresFechaToJson(value) {
        return JSON.stringify(value);
    }
    static toOficio(json) {
        return JSON.parse(json);
    }
    static oficioToJson(value) {
        return JSON.stringify(value);
    }
    static toOficios(json) {
        return JSON.parse(json);
    }
    static oficiosToJson(value) {
        return JSON.stringify(value);
    }
    static toNotificaciones(json) {
        return JSON.parse(json);
    }
    static notificacionesToJson(value) {
        return JSON.stringify(value);
    }
    static toThe291(json) {
        return JSON.parse(json);
    }
    static the291ToJson(value) {
        return JSON.stringify(value);
    }
    static toSuspencionProceso(json) {
        return JSON.parse(json);
    }
    static suspencionProcesoToJson(value) {
        return JSON.stringify(value);
    }
    static toTerminacion(json) {
        return JSON.parse(json);
    }
    static terminacionToJson(value) {
        return JSON.stringify(value);
    }
    static toTerminacionFecha(json) {
        return JSON.parse(json);
    }
    static terminacionFechaToJson(value) {
        return JSON.stringify(value);
    }
    static toUltimaActuacion(json) {
        return JSON.parse(json);
    }
    static ultimaActuacionToJson(value) {
        return JSON.stringify(value);
    }
}
class NombreCompleto {
    constructor({ PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido }){
        this.Nombre = SegundoApellido ? SegundoNombre ? `${PrimerNombre} ${SegundoNombre} ${PrimerApellido} ${SegundoApellido}` : `${PrimerNombre} ${PrimerApellido} ${SegundoApellido}` : `${PrimerNombre} ${PrimerApellido}`;
    }
}


/***/ }),

/***/ 423:
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

/***/ 1418:
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

/***/ 228:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "searchbar_container__d3bA5",
	"isActive": "searchbar_isActive__I1sbA",
	"notActive": "searchbar_notActive__Lo5x9",
	"date": "searchbar_date__XXqlJ",
	"input": "searchbar_input__Ha3d0",
	"inputForm": "searchbar_inputForm__1kLN1",
	"icon": "searchbar_icon__ihWEm"
};


/***/ }),

/***/ 5962:
/***/ ((module) => {

// Exports
module.exports = {
	"head1": "typeface_head1__qEgD5",
	"head2": "typeface_head2__I1lyh",
	"name": "typeface_name__Sly1a",
	"sub": "typeface_sub__760P9",
	"navbar": "typeface_navbar__hdvEU",
	"drawer": "typeface_drawer__utSNE"
};


/***/ }),

/***/ 7618:
/***/ ((module) => {

// Exports
module.exports = {
	"head1": "typeface_head1__qEgD5",
	"head2": "typeface_head2__I1lyh",
	"name": "typeface_name__Sly1a",
	"sub": "typeface_sub__760P9",
	"navbar": "typeface_navbar__hdvEU",
	"drawer": "typeface_drawer__utSNE"
};


/***/ }),

/***/ 5152:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "typography_container__PJkGY",
	"displayLarge": "typography_displayLarge__Qb41E",
	"displayMedium": "typography_displayMedium__KdOts",
	"displaySmall": "typography_displaySmall__CcqkJ",
	"headlineLarge": "typography_headlineLarge__ICbhg",
	"headlineMedium": "typography_headlineMedium__pHQpU",
	"headlineSmall": "typography_headlineSmall__mKoCG",
	"bodyLarge": "typography_bodyLarge__T0TLa",
	"bodyMedium": "typography_bodyMedium__Sw0Ek",
	"bodySmall": "typography_bodySmall__HbI8K",
	"labelLarge": "typography_labelLarge__mFJih",
	"labelMedium": "typography_labelMedium__yPzIA",
	"labelSmall": "typography_labelSmall__PigvM",
	"titleLarge": "typography_titleLarge__zsVSD",
	"titleMedium": "typography_titleMedium__DOQW_",
	"titleSmall": "typography_titleSmall__1tf5Q"
};


/***/ }),

/***/ 932:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "typography_container__PJkGY",
	"displayLarge": "typography_displayLarge__Qb41E",
	"displayMedium": "typography_displayMedium__KdOts",
	"displaySmall": "typography_displaySmall__CcqkJ",
	"headlineLarge": "typography_headlineLarge__ICbhg",
	"headlineMedium": "typography_headlineMedium__pHQpU",
	"headlineSmall": "typography_headlineSmall__mKoCG",
	"bodyLarge": "typography_bodyLarge__T0TLa",
	"bodyMedium": "typography_bodyMedium__Sw0Ek",
	"bodySmall": "typography_bodySmall__HbI8K",
	"labelLarge": "typography_labelLarge__mFJih",
	"labelMedium": "typography_labelMedium__yPzIA",
	"labelSmall": "typography_labelSmall__PigvM",
	"titleLarge": "typography_titleLarge__zsVSD",
	"titleMedium": "typography_titleMedium__DOQW_",
	"titleSmall": "typography_titleSmall__1tf5Q"
};


/***/ }),

/***/ 2015:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__4OyV7",
	"right": "layout_right__HWHks",
	"name": "layout_name__PsQBy",
	"left": "layout_left__XoR19",
	"divission": "layout_divission__xcSBD",
	"link": "layout_link__WLqzz",
	"header": "layout_header__gdnBH",
	"sidenav": "layout_sidenav__MlySA",
	"DrawerMenuButton": "layout_DrawerMenuButton__PdMyK",
	"HomeButton": "layout_HomeButton___CbzQ",
	"InputSearchBar": "layout_InputSearchBar__GNMHJ",
	"body": "layout_body__DQqWB",
	"loader": "layout_loader__nDMK2",
	"spin": "layout_spin__gP4yk"
};


/***/ }),

/***/ 3190:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__4OyV7",
	"right": "layout_right__HWHks",
	"name": "layout_name__PsQBy",
	"left": "layout_left__XoR19",
	"divission": "layout_divission__xcSBD",
	"link": "layout_link__WLqzz",
	"header": "layout_header__gdnBH",
	"sidenav": "layout_sidenav__MlySA",
	"DrawerMenuButton": "layout_DrawerMenuButton__PdMyK",
	"HomeButton": "layout_HomeButton___CbzQ",
	"InputSearchBar": "layout_InputSearchBar__GNMHJ",
	"body": "layout_body__DQqWB",
	"loader": "layout_loader__nDMK2",
	"spin": "layout_spin__gP4yk"
};


/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Default)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Headings_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2822);
/* harmony import */ var _components_navbar_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(828);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2907);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4734);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6236);






function Default() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_navbar_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Headings_title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_4__/* .Loader */ .a, {}),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_list__WEBPACK_IMPORTED_MODULE_5__/* .ListDrawer */ .y, {})
            })
        ]
    });
}


/***/ }),

/***/ 6236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ListDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_Carpetas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2601);
/* harmony import */ var _lib_Actuaciones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1193);
/* harmony import */ var _components_search_SearchProcesosOutput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3880);
/* harmony import */ var _components_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2973);





async function ListDrawer() {
    const procesos = await (0,_lib_Carpetas__WEBPACK_IMPORTED_MODULE_1__/* .getCarpetas */ .$u)();
    const fechas = await (0,_lib_Actuaciones__WEBPACK_IMPORTED_MODULE_2__/* .fetchFechas */ .Kh)({
        procesos: procesos
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_drawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_SearchProcesosOutput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            path: "/Procesos",
            fechas: fechas
        })
    });
}


/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultModal)
/* harmony export */ });
function DefaultModal() {
    return null;
}


/***/ }),

/***/ 4396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6931);
// EXTERNAL MODULE: ./src/styles/css/globals.css
var globals = __webpack_require__(1016);
// EXTERNAL MODULE: ./.yarn/cache/material-symbols-npm-0.9.0-ef2f27ee9a-5597f8ba4c.zip/node_modules/material-symbols/index.css
var material_symbols = __webpack_require__(955);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/script.js
var script = __webpack_require__(3906);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/font/google/target.css?{"path":"src/styles/fonts/fonts.ts","import":"Poiret_One","arguments":[{"weight":"400","variable":"--font-poiret","subsets":["latin","latin-ext"]}],"variableName":"poiret"}
var fonts_ts_import_Poiret_One_arguments_weight_400_variable_font_poiret_subsets_latin_latin_ext_variableName_poiret_ = __webpack_require__(2785);
var fonts_ts_import_Poiret_One_arguments_weight_400_variable_font_poiret_subsets_latin_latin_ext_variableName_poiret_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Poiret_One_arguments_weight_400_variable_font_poiret_subsets_latin_latin_ext_variableName_poiret_);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/font/google/target.css?{"path":"src/styles/fonts/fonts.ts","import":"Raleway","arguments":[{"subsets":["latin"],"variable":"--raleway"}],"variableName":"raleway"}
var fonts_ts_import_Raleway_arguments_subsets_latin_variable_raleway_variableName_raleway_ = __webpack_require__(6964);
var fonts_ts_import_Raleway_arguments_subsets_latin_variable_raleway_variableName_raleway_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Raleway_arguments_subsets_latin_variable_raleway_variableName_raleway_);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/font/google/target.css?{"path":"src/styles/fonts/fonts.ts","import":"Inter","arguments":[{"subsets":["latin-ext","latin"],"variable":"--inter"}],"variableName":"inter"}
var fonts_ts_import_Inter_arguments_subsets_latin_ext_latin_variable_inter_variableName_inter_ = __webpack_require__(7309);
var fonts_ts_import_Inter_arguments_subsets_latin_ext_latin_variable_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Inter_arguments_subsets_latin_ext_latin_variable_inter_variableName_inter_);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/font/google/target.css?{"path":"src/styles/fonts/fonts.ts","import":"Roboto","arguments":[{"subsets":["latin"],"variable":"--roboto","weight":["100","300","400","500","700","900"]}],"variableName":"roboto"}
var fonts_ts_import_Roboto_arguments_subsets_latin_variable_roboto_weight_100_300_400_500_700_900_variableName_roboto_ = __webpack_require__(7180);
var fonts_ts_import_Roboto_arguments_subsets_latin_variable_roboto_weight_100_300_400_500_700_900_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Roboto_arguments_subsets_latin_variable_roboto_weight_100_300_400_500_700_900_variableName_roboto_);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/font/google/target.css?{"path":"src/styles/fonts/fonts.ts","import":"Josefin_Sans","arguments":[{"subsets":["latin"],"variable":"--josefa"}],"variableName":"josefina"}
var fonts_ts_import_Josefin_Sans_arguments_subsets_latin_variable_josefa_variableName_josefina_ = __webpack_require__(5217);
var fonts_ts_import_Josefin_Sans_arguments_subsets_latin_variable_josefa_variableName_josefina_default = /*#__PURE__*/__webpack_require__.n(fonts_ts_import_Josefin_Sans_arguments_subsets_latin_variable_josefa_variableName_josefina_);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(3140);
;// CONCATENATED MODULE: ./src/app/search-context.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/search-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["LevelContext"];

const e1 = proxy["SearchProvider"];

const e2 = proxy["useSearch"];

const e3 = proxy["useNavigator"];

;// CONCATENATED MODULE: ./src/app/modal-context.tsx

const modal_context_proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/modal-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: modal_context_esModule, $$typeof: modal_context_$$typeof } = modal_context_proxy;
const modal_context_default_ = modal_context_proxy.default;

const modal_context_e0 = modal_context_proxy["ModalProvider"];

const modal_context_e1 = modal_context_proxy["useModal"];

;// CONCATENATED MODULE: ./src/app/notes-context.tsx

const notes_context_proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/notes-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: notes_context_esModule, $$typeof: notes_context_$$typeof } = notes_context_proxy;
const notes_context_default_ = notes_context_proxy.default;

const notes_context_e0 = notes_context_proxy["NoteProvider"];

const notes_context_e1 = notes_context_proxy["useNoter"];

// EXTERNAL MODULE: ./src/styles/scss/layout.module.scss
var layout_module = __webpack_require__(3190);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./src/styles/fonts/typography.module.scss
var typography_module = __webpack_require__(932);
var typography_module_default = /*#__PURE__*/__webpack_require__.n(typography_module);
;// CONCATENATED MODULE: ./src/app/context/note-slider-context.tsx

const note_slider_context_proxy = (0,module_proxy.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/context/note-slider-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: note_slider_context_esModule, $$typeof: note_slider_context_$$typeof } = note_slider_context_proxy;
const note_slider_context_default_ = note_slider_context_proxy.default;

const note_slider_context_e0 = note_slider_context_proxy["NoteSliderProvider"];

const note_slider_context_e1 = note_slider_context_proxy["useNoteSlider"];

;// CONCATENATED MODULE: ./src/app/layout.tsx











const hostname = process.env.URL ?? "production" === "development" ? "beta.rsasesorjuridico.com" : "app.rsasesorjuridico.com";
const metadata = {
    metadataBase: new URL(`https://${hostname}`),
    title: "R&S Asesor\xeda Jur\xeddica",
    description: "Generated by create next app",
    generator: "R&S Asesor\xeda Jur\xeddica",
    applicationName: "R&S Asesor\xeda Jur\xeddica",
    referrer: "origin-when-cross-origin",
    keywords: [
        "Next.js",
        "React",
        "JavaScript"
    ],
    authors: [
        {
            name: "cam"
        },
        {
            name: "Cachorro Cami",
            url: `https://${hostname}`
        }
    ],
    colorScheme: "light dark",
    themeColor: [
        {
            media: "(prefers-color-scheme: light)",
            color: "#bb152c"
        },
        {
            media: "(prefers-color-scheme: dark)",
            color: "#ab2a64"
        }
    ],
    creator: "Cachorro Cami",
    manifest: `https://${hostname}/manifest.webmanifest`,
    publisher: "CachorroC",
    alternates: {},
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    openGraph: {
        title: "R&S Asesor\xeda Jur\xeddica",
        description: "The React Framework for the Web",
        url: `https://${hostname}`,
        siteName: "Next.js",
        images: [
            {
                url: `https://${hostname}/splash_screens/12.9__iPad_Pro_portrait.png`,
                width: 800,
                height: 600
            },
            {
                url: `https://${hostname}/splash_screens/8.3__iPad_Mini_landscape.png`,
                width: 1800,
                height: 1600,
                alt: "My custom alt"
            }
        ],
        locale: "es-CO",
        type: "website"
    },
    icons: {
        icon: [
            {
                url: "/icons/favicon.png"
            },
            new URL("/favicon.svg", `https://${hostname}`)
        ],
        shortcut: "/safari-pinned-tab.svg",
        apple: "/icons/apple-touch-icon.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/icons/apple-touch-icon-precomposed.png"
        }
    },
    appleWebApp: {
        title: "Apple Web App",
        statusBarStyle: "black-translucent",
        startupImage: [
            "/icons/mstile-310x310.png",
            {
                url: "/icons/android-chrome-512x512.png",
                media: "(device-width: 768px) and (device-height: 1024px)"
            }
        ]
    },
    appLinks: {
        web: {
            url: `https://${hostname}`,
            should_fallback: true
        }
    }
};
function RootLayout({ children, modal, header }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: `${(fonts_ts_import_Poiret_One_arguments_weight_400_variable_font_poiret_subsets_latin_latin_ext_variableName_poiret_default()).variable} ${(fonts_ts_import_Raleway_arguments_subsets_latin_variable_raleway_variableName_raleway_default()).variable} ${(fonts_ts_import_Inter_arguments_subsets_latin_ext_latin_variable_inter_variableName_inter_default()).variable} ${(fonts_ts_import_Roboto_arguments_subsets_latin_variable_roboto_weight_100_300_400_500_700_900_variableName_roboto_default()).variable} ${(fonts_ts_import_Josefin_Sans_arguments_subsets_latin_variable_josefa_variableName_josefina_default()).variable} [ color-scheme: light dark ]`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(note_slider_context_e0, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(modal_context_e0, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(notes_context_e0, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(layout_module_default()).container} ${(typography_module_default()).container}`,
                                    children: [
                                        modal,
                                        " ",
                                        header,
                                        " ",
                                        children
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: "/service-worker.js"
                })
            ]
        })
    });
}


/***/ }),

/***/ 4892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3190);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7618);
/* harmony import */ var _styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4734);





function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().body),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_3___default().titleMedium)}  ${(_styles_fonts_typeface_module_scss__WEBPACK_IMPORTED_MODULE_4___default().drawer)}`,
                    children: "R&S consultoria s.a.s"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_1__/* .Loader */ .a, {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_1__/* .Loader */ .a, {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_1__/* .Loader */ .a, {}),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_1__/* .Loader */ .a, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1555:
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
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default().body),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_1___default().name),
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
        })
    });
}


/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/Headings/title.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3190);
/* harmony import */ var _styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var _styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(423);
/* harmony import */ var _components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1__);




function Loader() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default().notActive),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: `${(_styles_fonts_typography_module_scss__WEBPACK_IMPORTED_MODULE_2___default().titleMedium)} ${(_components_card_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title)}`,
                    children: "Cargando"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_scss_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().loader)
                })
            ]
        })
    });
}


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/navbar/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/navbar/drawer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3140);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/components/search/SearchProcesosOutput.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kh: () => (/* binding */ fetchFechas),
/* harmony export */   Yp: () => (/* binding */ getActuaciones)
/* harmony export */ });
/* unused harmony exports wait, fetchFecha, fetchLastActuaciones */
/* harmony import */ var _Carpetas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2601);


function wait(delay) {
    return new Promise((resolve)=>{
        return setTimeout(resolve, delay);
    });
}
async function getActuaciones(idProceso, index) {
    const awaitTime = index * 500;
    if (idProceso === 0 || idProceso === 404) {
        console.log(`idProceso es ${idProceso}`);
        return [];
    }
    const collection = await (0,_Carpetas__WEBPACK_IMPORTED_MODULE_0__/* .carpetasCollection */ .J5)();
    wait(awaitTime);
    try {
        const request = await fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`, {
            next: {
                revalidate: 32400
            }
        });
        if (!request.ok) {
            console.log(`Get Actuaciones request was not ok ${request.status}`);
            return [];
        }
        const res = await request.json();
        if (!res.actuaciones) {
            console.log("Get Actuaciones no tiene actuaciones");
            return [];
        }
        const ultimaActuacion = res.actuaciones[0];
        const updateCarpeta = await collection.updateOne({
            idProceso: idProceso
        }, {
            $set: {
                ultimaActuacion: ultimaActuacion
            }
        });
        if (updateCarpeta.modifiedCount >= 1) {
            console.log(`${idProceso} was ${updateCarpeta.acknowledged} with ${updateCarpeta.modifiedCount} documents modified`);
        }
        return res.actuaciones;
    } catch (err) {
        console.log(err ?? "error");
        return [];
    }
}
async function fetchFechas({ procesos }) {
    const fechas = [];
    for(let p = 0; p < procesos.length; p++){
        const proceso = procesos[p];
        const fetch1 = await fetchFecha({
            proceso: proceso,
            index: p
        });
        fechas.push(fetch1);
    }
    return fechas;
}
async function fetchFecha({ proceso, index }) {
    const acts = await getActuaciones(proceso.idProceso, index);
    if (acts.length >= 1) {
        const fecha = {
            ...proceso,
            fecha: acts[0].fechaActuacion
        };
        return fecha;
    }
    const fecha = {
        ...proceso,
        fecha: null
    };
    return fecha;
}
async function fetchLastActuaciones({ idProcesos }) {
    const lastActuaciones = [];
    for(let p = 0; p < idProcesos.length; p++){
        const proceso = idProcesos[p];
        const acts = await getActuaciones(proceso, p);
        if (acts.length > 0) {
            lastActuaciones.push(acts[0]);
        }
        if (p + 1 === idProcesos.length) {
            return lastActuaciones;
        }
    }
    return lastActuaciones;
}


/***/ }),

/***/ 1016:
/***/ (() => {



/***/ })

};
;