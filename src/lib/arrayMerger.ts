import { intConsultaNumeroRadicacion } from './types/procesos';
import {intProceso,
  intActuacion,
  IntActuaciones,} from '#@/lib/types/procesos';
import { monDemandado } from './types/mongodb';
import { monNota } from '#@/lib/types/notas';
import { monCarpetaDemandado } from './types/demandados';
import { intFecha } from '#@/lib/types/demandados';

export function arrayMergerByidProceso({
  a,
  b,
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
}) {
  const map = new Map ();
  a.forEach ((item) =>
    map.set (
      item.idProceso,
      item
    ));
  b.forEach ((item) =>
    map.set (
      item.idProceso,
      {
        ...map.get (item.idProceso),
        ...item,
      }
    ));

  const mergedArr = Array.from (map.values ());
  console.log (JSON.stringify (mergedArr));
  return mergedArr;
}

export function arrayMergerByllaveProceso({
  a,
  b,
}: {
  a: intProceso[];
  b: monCarpetaDemandado[];
}) {
  const map = new Map ();
  a.forEach ((item) =>
    map.set (
      item.llaveProceso,
      item
    ));
  b.forEach ((item) =>
    map.set (
      item.llaveProceso,
      {
        ...map.get (item.llaveProceso),
        ...item,
      }
    ));

  const mergedArr = Array.from (map.values ());
  console.log (JSON.stringify (mergedArr));
  return mergedArr;
}
