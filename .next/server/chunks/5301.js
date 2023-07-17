"use strict";
exports.id = 5301;
exports.ids = [5301];
exports.modules = {

/***/ 5301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9870);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1059);
/* harmony import */ var _components_modal_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8223);
/* harmony import */ var _components_modal_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navbar_Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1234);
/* __next_internal_client_entry_do_not_use__ default auto */ 







function Modal({ children }) {
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const overlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const wrapper = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isOpen, setIsOpen] = (0,_app_modal_context__WEBPACK_IMPORTED_MODULE_3__.useModal)();
    const onEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsOpen(false);
        router.push(pathname);
    }, [
        router,
        pathname,
        setIsOpen
    ]);
    const onDismiss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsOpen(isOpen ? false : true);
        router.back();
    }, [
        router,
        setIsOpen,
        isOpen
    ]);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) {
                onDismiss();
            }
            if (onEnter) {
                onEnter();
            }
        }
    }, [
        onDismiss,
        onEnter,
        overlay,
        wrapper
    ]);
    const onKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (e.key === "Escape") {
            onDismiss();
        }
        if (e.key === "Enter") {
            onEnter();
        }
    }, [
        onDismiss,
        onEnter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (params) {
            console.log(params);
            setIsOpen(true);
        }
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            setIsOpen(false);
            return document.removeEventListener("keydown", onKeyDown);
        };
    }, [
        onKeyDown,
        setIsOpen,
        params
    ]);
    if (isOpen) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: overlay,
            className: (_components_modal_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modal),
            onClick: ()=>{
                onClick;
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: wrapper,
                className: (_components_modal_modal_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .ForwardButton */ .qT, {}),
                    " ",
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_Buttons__WEBPACK_IMPORTED_MODULE_4__/* .BackwardsButton */ .hA, {})
                ]
            })
        });
    }
}


/***/ })

};
;