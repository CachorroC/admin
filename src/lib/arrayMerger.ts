import { intConsultaNumeroRadicacion } from './types/procesos';
import { intProceso,
         intActuacion,
         IntActuaciones } from '#@/lib/types/procesos';
import { monDemandado } from './types/mongodb';
import { monNota } from '#@/lib/types/notas';
import { IntCarpeta,
         MonCarpeta,
         UltimaActuacion } from './types/demandados';
import { intFecha } from '#@/lib/types/demandados';

export function arrayMergerByidProceso(
                {
                  a,
                  b
                }: {
  a:
    | intProceso[]
    | IntActuaciones[]
    | monDemandado[]
    | intFecha[];
  b:
    | intProceso[]
    | IntActuaciones[]
    | monDemandado[]
    | intFecha[];
} 
) {
  const map = new Map();
  a.forEach(
    (
      item 
    ) => {
      return map.set(
        item.idProceso,
        item 
      );
    } 
  );
  b.forEach(
    (
      item 
    ) => {
      return map.set(
        item.idProceso,
        {
          ...map.get(
            item.idProceso 
          ),
          ...item
        } 
      );
    } 
  );

  const mergedArr = Array.from(
    map.values() 
  );
  console.log(
    JSON.stringify(
      mergedArr 
    ) 
  );

  return mergedArr;
}

export function arrayMergerByllaveProceso(
                {
                  carpetas,
                  actuaciones
                }: {
  carpetas: MonCarpeta[];
  actuaciones: intActuacion[];
} 
) {
  const map = new Map();
  carpetas.forEach(
    (
      carpeta 
    ) => {
      return map.set(
        carpeta._id,
        carpeta 
      );
    } 
  );

  for ( const crp of map ) {
    const [
      _id,
      carpeta
    ] = crp;

    const {
      llaveProceso 
    } = carpeta;

    const actsByMap = actuaciones.filter(
      (
        actuacion 
      ) => {
        return (
          actuacion.llaveProceso === llaveProceso
        );
      }
    );
    map.set(
      _id,
      {
        ...carpeta,
        UltimaActuacion: actsByMap
      } 
    );
  }

  const mergedArr = Array.from(
    map.values() 
  );
  console.log(
    JSON.stringify(
      mergedArr 
    ) 
  );

  return mergedArr;
}
