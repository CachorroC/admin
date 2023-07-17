"use strict";
exports.id = 5670;
exports.ids = [5670];
exports.modules = {

/***/ 5547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _appcallserver = __webpack_require__(2608);
function _default(id) {
    // Since we're using the Edge build of Flight client for SSR [1], here we need to
    // also use the same Edge build to create the reference. For the client bundle,
    // we use the default and let Webpack to resolve it to the correct version.
    // 1: https://github.com/vercel/next.js/blob/16eb80b0b0be13f04a6407943664b5efd8f3d7d0/packages/next/src/server/app-render/use-flight-response.tsx#L24-L26
    const { createServerReference  } = typeof window === "undefined" ? __webpack_require__(5927) : __webpack_require__(7597);
    return createServerReference(id, _appcallserver.callServer);
}

//# sourceMappingURL=action-client-wrapper.js.map

/***/ }),

/***/ 9788:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return createActionProxy;
    }
});
function createActionProxy(id, bound, action, originalAction) {
    function bindImpl(_, ...boundArgs) {
        const currentAction = this;
        const newAction = async function(...args) {
            if (originalAction) {
                return originalAction(newAction.$$bound.concat(args));
            } else {
                // In this case we're calling the user-defined action directly.
                return currentAction(...newAction.$$bound, ...args);
            }
        };
        for (const key of [
            "$$typeof",
            "$$id",
            "$$FORM_ACTION"
        ]){
            // @ts-ignore
            newAction[key] = currentAction[key];
        }
        // Rebind args
        newAction.$$bound = (currentAction.$$bound || []).concat(boundArgs);
        // Assign bind method
        newAction.bind = bindImpl.bind(newAction);
        return newAction;
    }
    action.$$typeof = Symbol.for("react.server.reference");
    action.$$id = id;
    action.$$bound = bound;
    action.bind = bindImpl.bind(action);
}

//# sourceMappingURL=action-proxy.js.map

/***/ }),

/***/ 8185:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return createActionProxy;
    }
}));
function createActionProxy(id, bound, action, originalAction) {
    function bindImpl(_, ...boundArgs) {
        const currentAction = this;
        const newAction = async function(...args) {
            if (originalAction) {
                return originalAction(newAction.$$bound.concat(args));
            } else {
                // In this case we're calling the user-defined action directly.
                return currentAction(...newAction.$$bound, ...args);
            }
        };
        for (const key of [
            "$$typeof",
            "$$id",
            "$$FORM_ACTION"
        ]){
            // @ts-ignore
            newAction[key] = currentAction[key];
        }
        // Rebind args
        newAction.$$bound = (currentAction.$$bound || []).concat(boundArgs);
        // Assign bind method
        newAction.bind = bindImpl.bind(newAction);
        return newAction;
    }
    action.$$typeof = Symbol.for("react.server.reference");
    action.$$id = id;
    action.$$bound = bound;
    action.bind = bindImpl.bind(action);
} //# sourceMappingURL=action-proxy.js.map


/***/ }),

/***/ 7414:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
}));
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== "function") {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.`);
        }
    }
} //# sourceMappingURL=action-validate.js.map


/***/ }),

/***/ 7598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(3140);
module.exports = createProxy("/home/cachorro_cami/Projects/com/rsasesorjuridico/app/.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 7875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(7598);


/***/ })

};
;