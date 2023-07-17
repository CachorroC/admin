"use strict";
(() => {
var exports = {};
exports.id = 4766;
exports.ids = [4766];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 300:
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

// NAMESPACE OBJECT: ./src/app/api/Carpetas/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(3639);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(1340);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3273);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./src/lib/Carpetas/index.ts
var Carpetas = __webpack_require__(2601);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(5284);
// EXTERNAL MODULE: ./src/lib/mongodb.ts
var mongodb = __webpack_require__(8586);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js
var action_validate = __webpack_require__(5279);
;// CONCATENATED MODULE: ./src/lib/Carpetas/update/index.ts
/* __next_internal_action_entry_do_not_use__ updateCarpeta */ 


const Collection = (0,react_shared_subset.cache)(async ()=>{
    const client = await mongodb/* default */.Z;
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

(0,action_validate/* default */.Z)([
    updateCarpeta
]);
(0,action_proxy/* default */.Z)("075b6298b6b315dcddc49b853bc8d3e8bfd15c2c", null, updateCarpeta);

;// CONCATENATED MODULE: ./src/app/api/Carpetas/route.ts






async function GET(Request) {
    const { searchParams } = new URL(Request.url);
    const carpetas = await (0,Carpetas/* getCarpetas */.$u)();
    const llaveProceso = searchParams.get("llaveProceso");
    if (llaveProceso) {
        const Demandados = carpetas.filter((carpeta)=>{
            return carpeta.llaveProceso === llaveProceso;
        });
        return new next_response/* default */.Z(JSON.stringify(Demandados), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    const _id = searchParams.get("_id");
    if (_id) {
        const Nota = carpetas.find((carpeta)=>{
            return carpeta._id === _id;
        });
        return new next_response/* default */.Z(JSON.stringify(Nota), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    return new next_response/* default */.Z(JSON.stringify(carpetas), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}
async function POST(request) {
    const incomingRequest = await request.json();
    const client = await (0,Carpetas/* carpetasCollection */.J5)();
    const outgoingRequest = await client.insertOne(incomingRequest);
    if (!outgoingRequest.acknowledged) {
        throw new Error(`${outgoingRequest.acknowledged}`);
    }
    return new next_response/* default */.Z(JSON.stringify(outgoingRequest.insertedId + `${outgoingRequest.acknowledged}`), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}
async function PUT(Request) {
    const incomingCarpeta = await Request.json();
    const collection = await (0,Carpetas/* carpetasCollection */.J5)();
    const { searchParams } = new URL(Request.url);
    const _id = searchParams.get("_id");
    if (_id) {
        const updatedCarpeta = {
            ...incomingCarpeta,
            _id: _id
        };
        const result = await updateCarpeta({
            carpeta: updatedCarpeta,
            index: 0
        });
        if (result.ok) {
            return new next_response/* default */.Z(JSON.stringify(result.value), {
                status: 200,
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        return new next_response/* default */.Z(`the result was null  with ${result.value}`, {
            status: 304,
            headers: {
                "content-type": "text/html"
            }
        });
    }
    const insertWithoutId = await collection.insertOne(incomingCarpeta);
    if (insertWithoutId.acknowledged) {
        return new next_response/* default */.Z(JSON.stringify({
            _id: insertWithoutId.insertedId
        }), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    return new next_response/* default */.Z(null, {
        status: 304
    });
}
async function DELETE(Request) {
    const notas = await (0,Carpetas/* carpetasCollection */.J5)();
    const { searchParams } = new URL(Request.url);
    const id = searchParams.get("_id");
    if (id) {
        const query = {
            _id: new external_mongodb_.ObjectId(id)
        };
        const Result = await notas.deleteOne(query);
        if (Result.acknowledged) {
            const count = Result.deletedCount;
            const response = {
                isOk: true,
                deletedCount: count,
                deletedId: id
            };
            return new next_response/* default */.Z(JSON.stringify(response), {
                status: 202,
                headers: {
                    "content-type": "application/json"
                }
            });
        }
        if (!Result.acknowledged) {
            return new next_response/* default */.Z(JSON.stringify(`error 400 ${id} not deleted`), {
                status: 400
            });
        }
        return new next_response/* default */.Z(JSON.stringify(Result), {
            status: 200
        });
    }
}

;// CONCATENATED MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FCarpetas%2Froute&name=app%2Fapi%2FCarpetas%2Froute&pagePath=private-next-app-dir%2Fapi%2FCarpetas%2Froute.ts&appDir=%2Fhome%2Fcachorro_cami%2FProjects%2Fcom%2Frsasesorjuridico%2Fapp%2Fsrc%2Fapp&appPaths=%2Fapi%2FCarpetas%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/Carpetas/route","pathname":"/api/Carpetas","filename":"route","bundlePath":"app/api/Carpetas/route"},"resolvedPagePath":"/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/api/Carpetas/route.ts","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/Carpetas/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9336,2907,6917,4124,7250,2601], () => (__webpack_exec__(300)));
module.exports = __webpack_exports__;

})();