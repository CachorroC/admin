import 'server-only';
import { notFound } from 'next/navigation';
import { IntActuaciones,
         intConsultaActuaciones,
         intConsultaNumeroRadicacion } from '../types/procesos';
import { monDemandado } from '../types/mongodb';
import { cache } from 'react';
import { sleep } from '#@/lib/helper';
import { intFecha, IntCarpeta, MonCarpeta } from '../types/demandados';

export async function getConsultaNumeroRadicion(
  {
    llaveProceso
  }: {
  llaveProceso: string;
} 
) {
  const Request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
  );

  if ( !Request.ok ) {
    console.log(
      Request.text() 
    );

    return [];
  }
  const res = ( await Request.json() ) as intConsultaNumeroRadicacion;

  if ( !res.procesos ) {
    notFound();
  }

  return res.procesos;
}
