"use strict";
(() => {
var exports = {};
exports.id = 2421;
exports.ids = [2421];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/Procesos/Actuaciones/[idProceso]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(3639);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(1340);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3273);
;// CONCATENATED MODULE: ./src/app/api/Procesos/Actuaciones/[idProceso]/route.ts


async function GET(Request, { params }) {
    try {
        const req = await fetch(`https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${params.idProceso}`, {
            mode: "cors"
        });
        if (!req.ok) {
            const text = await Request.text();
            const Response = {
                idProceso: params.idProceso,
                text: text ? JSON.parse(text) : {
                    statusCode: req.status,
                    message: req.statusText
                }
            };
            return new next_response/* default */.Z(JSON.stringify(Response), {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        const res = await req.json();
        if (res.actuaciones) {
            const Response = {
                idProceso: params.idProceso,
                text: {
                    statusCode: req.status,
                    message: req.statusText
                },
                acts: res.actuaciones
            };
            return new next_response/* default */.Z(JSON.stringify(Response), {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        const text = await req.text();
        const Response = {
            idProceso: params.idProceso,
            text: JSON.parse(text)
        };
        return new next_response/* default */.Z(JSON.stringify(Response), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    } catch  {
        (error)=>{
            const Response = {
                idProceso: params.idProceso,
                text: {
                    message: error.message ?? "error",
                    statusCode: 0
                }
            };
            return new next_response/* default */.Z(JSON.stringify(Response), {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            });
        };
    }
    const Response = {
        idProceso: params.idProceso,
        text: {
            message: "error final",
            statusCode: 0
        }
    };
    return new next_response/* default */.Z(JSON.stringify(Response), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FProcesos%2FActuaciones%2F%5BidProceso%5D%2Froute&name=app%2Fapi%2FProcesos%2FActuaciones%2F%5BidProceso%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FProcesos%2FActuaciones%2F%5BidProceso%5D%2Froute.ts&appDir=%2Fhome%2Fcachorro_cami%2FProjects%2Fcom%2Frsasesorjuridico%2Fapp%2Fsrc%2Fapp&appPaths=%2Fapi%2FProcesos%2FActuaciones%2F%5BidProceso%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/Procesos/Actuaciones/[idProceso]/route","pathname":"/api/Procesos/Actuaciones/[idProceso]","filename":"route","bundlePath":"app/api/Procesos/Actuaciones/[idProceso]/route"},"resolvedPagePath":"/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/api/Procesos/Actuaciones/[idProceso]/route.ts","nextConfigOutput":"standalone"}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/Procesos/Actuaciones/[idProceso]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9336,6917,4124], () => (__webpack_exec__(2933)));
module.exports = __webpack_exports__;

})();