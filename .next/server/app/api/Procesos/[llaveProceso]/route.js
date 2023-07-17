"use strict";
(() => {
var exports = {};
exports.id = 8331;
exports.ids = [8331];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 3245:
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

// NAMESPACE OBJECT: ./src/app/api/Procesos/[llaveProceso]/route.ts
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
// EXTERNAL MODULE: ./src/lib/mongodb.ts
var mongodb = __webpack_require__(8586);
;// CONCATENATED MODULE: ./src/app/api/Procesos/[llaveProceso]/route.ts



async function GET(request, { params }) {
    const llaveProceso = params.llaveProceso;
    const { searchParams } = new URL(request.url);
    const client = await mongodb/* default */.Z;
    const procesos = await client.db("RyS").collection("Procesos").find({}).toArray();
    const delay = searchParams.get("delay");
    const Procesos = procesos.filter((proceso)=>{
        return proceso.llaveProceso === llaveProceso;
    });
    if (delay) {
        await new Promise((resolve)=>{
            return setTimeout(resolve, Number(delay));
        });
    }
    const idProceso = searchParams.get("idProceso");
    if (idProceso) {
        const Procesos = procesos.find((proceso)=>{
            return proceso.idProceso.toString() === idProceso;
        });
        if (!Procesos) {
            const num = parseInt(idProceso);
            const noProc = {
                idProceso: num,
                llaveProceso: params.llaveProceso,
                sujetosProcesales: "no existe"
            };
            return new next_response/* default */.Z(JSON.stringify(noProc), {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        return new next_response/* default */.Z(JSON.stringify(Procesos), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    return new next_response/* default */.Z(JSON.stringify(Procesos), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FProcesos%2F%5BllaveProceso%5D%2Froute&name=app%2Fapi%2FProcesos%2F%5BllaveProceso%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FProcesos%2F%5BllaveProceso%5D%2Froute.ts&appDir=%2Fhome%2Fcachorro_cami%2FProjects%2Fcom%2Frsasesorjuridico%2Fapp%2Fsrc%2Fapp&appPaths=%2Fapi%2FProcesos%2F%5BllaveProceso%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/Procesos/[llaveProceso]/route","pathname":"/api/Procesos/[llaveProceso]","filename":"route","bundlePath":"app/api/Procesos/[llaveProceso]/route"},"resolvedPagePath":"/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/api/Procesos/[llaveProceso]/route.ts","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/Procesos/[llaveProceso]/route"

    

/***/ }),

/***/ 8586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
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

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9336,6917,4124], () => (__webpack_exec__(3245)));
module.exports = __webpack_exports__;

})();