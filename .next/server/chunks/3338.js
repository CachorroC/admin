"use strict";
exports.id = 3338;
exports.ids = [3338];
exports.modules = {

/***/ 3338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FB: () => (/* binding */ getNotas),
/* harmony export */   Sv: () => (/* binding */ getNotasByllaveProceso),
/* harmony export */   kY: () => (/* binding */ getNotaById)
/* harmony export */ });
/* unused harmony export postNota */
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8586);
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3273);
/* harmony import */ var _lib_types_notas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4512);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2907);





const Collection = async ()=>{
    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    if (!client) {
        throw new Error("no hay cliente mong\xf3lico");
    }
    const db = client.db("RyS");
    const notas = db.collection("Notas");
    return notas;
};
const Transform = async ()=>{
    const collection = await Collection();
    const notasRaw = await collection.find({}).toArray();
    const notas = _lib_types_notas__WEBPACK_IMPORTED_MODULE_3__/* .notaConvert */ .w.toMonNotas(notasRaw);
    return notas;
};
async function getNotas() {
    const notas = await Transform();
    return notas;
}
async function getNotasByllaveProceso({ llaveProceso }) {
    const notas = await Transform();
    const Notas = notas.filter((nota)=>{
        return nota.llaveProceso === llaveProceso;
    });
    return Notas;
}
const getNotaById = (0,react__WEBPACK_IMPORTED_MODULE_2__.cache)(async ({ id })=>{
    const notas = await Transform();
    const Notas = notas.filter((nota)=>{
        return nota.id === id;
    });
    return Notas;
});
async function postNota({ nota }) {
    const collection = await Collection();
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