"use strict";
exports.id = 2601;
exports.ids = [2601];
exports.modules = {

/***/ 2601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $u: () => (/* binding */ getCarpetas),
/* harmony export */   J5: () => (/* binding */ carpetasCollection),
/* harmony export */   ZM: () => (/* binding */ getCarpetasByllaveProceso),
/* harmony export */   qO: () => (/* binding */ getCarpetaById)
/* harmony export */ });
/* unused harmony exports preload, getCarpetasByidProceso, postCarpeta */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2907);
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8586);
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3273);
/* harmony import */ var _lib_types_demandados__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1352);





const preload = (llaveProceso)=>{
    void getCarpetasByllaveProceso({
        llaveProceso: llaveProceso
    });
};
const carpetasCollection = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ()=>{
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    if (!client) {
        throw new Error("no hay cliente mong\xf3lico");
    }
    const db = client.db("RyS");
    const carpetas = db.collection("Demandados");
    return carpetas;
});
const getCarpetas = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ()=>{
    const collection = await carpetasCollection();
    const carpetasRaw = await collection.find({}).toArray();
    const carpetas = _lib_types_demandados__WEBPACK_IMPORTED_MODULE_3__/* .carpetaConvert */ .U.toMonCarpetas(carpetasRaw);
    return carpetas;
});
const getCarpetasByllaveProceso = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ({ llaveProceso })=>{
    const carpetas = await getCarpetas();
    const Carpetas = carpetas.filter((carpeta)=>{
        return carpeta.llaveProceso === llaveProceso;
    });
    return Carpetas;
});
const getCarpetasByidProceso = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ({ idProceso })=>{
    const carpetas = await getCarpetas();
    const Carpetas = carpetas.filter((carpeta)=>{
        return carpeta.idProceso === idProceso;
    });
    return Carpetas;
});
const getCarpetaById = (0,react__WEBPACK_IMPORTED_MODULE_0__.cache)(async ({ id })=>{
    const carpetas = await getCarpetas();
    const Carpetas = carpetas.find((carpeta)=>{
        return carpeta.id === id;
    });
    return Carpetas;
});
async function postCarpeta({ nota }) {
    const collection = await carpetasCollection();
    const outgoingRequest = await collection.insertOne(nota);
    if (!outgoingRequest.acknowledged) {
        return new NextResponse(null, {
            status: 404
        });
    }
    return new NextResponse(JSON.stringify(outgoingRequest.insertedId + `${outgoingRequest.acknowledged}`), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}


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

/***/ 1352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;