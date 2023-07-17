"use strict";
exports.id = 1695;
exports.ids = [1695];
exports.modules = {

/***/ 1695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $M: () => (/* binding */ toNameString),
/* harmony export */   GZ: () => (/* binding */ fixDemandado),
/* harmony export */   H9: () => (/* binding */ fixFechas)
/* harmony export */ });
/* unused harmony export sleep */
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


/***/ })

};
;