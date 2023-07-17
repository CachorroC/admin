"use strict";
(() => {
var exports = {};
exports.id = 5817;
exports.ids = [5817];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7001:
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

// NAMESPACE OBJECT: ./src/app/api/Notas/route.ts
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
// EXTERNAL MODULE: ./src/lib/mongodb.ts
var mongodb = __webpack_require__(8586);
// EXTERNAL MODULE: ./src/lib/types/notas.ts
var types_notas = __webpack_require__(4512);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(2907);
;// CONCATENATED MODULE: ./src/app/api/Notas/route.ts






const Collection = (0,react_shared_subset.cache)(async ()=>{
    const client = await mongodb/* default */.Z;
    if (!client) {
        throw new Error("no hay cliente mong\xf3lico");
    }
    const db = client.db("RyS");
    const notas = db.collection("Notas");
    return notas;
});
const Transform = (0,react_shared_subset.cache)(async ()=>{
    const collection = await Collection();
    const notasRaw = await collection.find({}).toArray();
    const notas = types_notas/* notaConvert */.w.toMonNotas(notasRaw);
    return notas;
});
async function GET(Request) {
    const { searchParams } = new URL(Request.url);
    const notas = await Transform();
    if (!notas.length) {
        throw new Error("no hay entradas en mongo");
    }
    const llaveProceso = searchParams.get("llaveProceso");
    if (llaveProceso) {
        const Notas = notas.filter((nota)=>{
            return nota.llaveProceso === llaveProceso;
        });
        return new next_response/* default */.Z(JSON.stringify(Notas), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    const id = searchParams.get("id");
    if (id) {
        const Nota = notas.find((nota)=>{
            return nota.id === id;
        });
        return new next_response/* default */.Z(JSON.stringify(Nota), {
            status: 200,
            headers: {
                "content-type": "application/json"
            }
        });
    }
    return new next_response/* default */.Z(JSON.stringify(notas), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}
async function POST(request) {
    const incomingRequest = await request.json();
    const collection = await Collection();
    const outgoingRequest = await collection.insertOne(incomingRequest);
    if (!outgoingRequest.acknowledged) {
        return new next_response/* default */.Z(null, {
            status: 404
        });
    }
    return new next_response/* default */.Z(JSON.stringify(outgoingRequest.insertedId + `${outgoingRequest.acknowledged}`), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}
async function PUT(Request) {
    const collection = await Collection();
    const updatedNote = await Request.json();
    const { searchParams } = new URL(Request.url);
    const id = searchParams.get("id");
    if (id) {
        const query = {
            _id: new external_mongodb_.ObjectId(id)
        };
        const result = await collection.updateOne(query, {
            $set: updatedNote
        });
        if (result.acknowledged) {
            return new next_response/* default */.Z(`Successfully updated game with id ${id}`, {
                status: 200,
                headers: {
                    "content-type": "text/html"
                }
            });
        }
        return new next_response/* default */.Z(`the result was ${result.acknowledged ? "true" : "false"} with ${result.modifiedCount.toString()}`, {
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        });
    }
    return new next_response/* default */.Z(null, {
        status: 404
    });
}
async function DELETE(Request) {
    const notas = await Collection();
    const { searchParams } = new URL(Request.url);
    const id = searchParams.get("id");
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

;// CONCATENATED MODULE: ./.yarn/__virtual__/next-virtual-1dfcec4073/0/cache/next-npm-13.4.9-5c37513773-7adb9919dc.zip/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FNotas%2Froute&name=app%2Fapi%2FNotas%2Froute&pagePath=private-next-app-dir%2Fapi%2FNotas%2Froute.ts&appDir=%2Fhome%2Fcachorro_cami%2FProjects%2Fcom%2Frsasesorjuridico%2Fapp%2Fsrc%2Fapp&appPaths=%2Fapi%2FNotas%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/Notas/route","pathname":"/api/Notas","filename":"route","bundlePath":"app/api/Notas/route"},"resolvedPagePath":"/home/cachorro_cami/Projects/com/rsasesorjuridico/app/src/app/api/Notas/route.ts","nextConfigOutput":"standalone"}
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

    const originalPathname = "/api/Notas/route"

    

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


/***/ }),

/***/ 4512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ notaConvert)
/* harmony export */ });
class notaConvert {
    static toMonNotas(notas) {
        const newNotas = notas.map((nota)=>{
            return this.toMonNota(nota);
        });
        return newNotas;
    }
    static monNotasToJson(value) {
        return JSON.stringify(value);
    }
    static toMonNota(nota) {
        const newNota = {
            ...nota,
            _id: nota._id,
            id: nota._id.toString()
        };
        return newNota;
    }
    static monNotaToJson(value) {
        return JSON.stringify(value);
    }
    static toTarea(json) {
        return JSON.parse(json);
    }
    static tareaToJson(value) {
        return JSON.stringify(value);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9336,2907,6917,4124], () => (__webpack_exec__(7001)));
module.exports = __webpack_exports__;

})();