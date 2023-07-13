import 'server-only';
import { notFound } from 'next/navigation';
import { IntActuaciones,
         intConsultaActuaciones,
         intConsultaNumeroRadicacion } from '../types/procesos';
import { monDemandado } from '../types/mongodb';
import { cache } from 'react';
import { sleep } from '#@/lib/helper';
import { intFecha, IntCarpeta, MonCarpeta } from '../types/demandados';
import { JuzgadosByllaveProceso } from '#@/lib/RamaJudicial/juzgados';

export const Juzgados = cache(
  async (
    {
      procesos
    }: { procesos: MonCarpeta[] }
  ) => {
    const rowPrc = [];

    const juzgados = await Promise.all(
      procesos.map(
        async (
          proceso, i
        ) => {
          sleep(
            i * 500
          );
          rowPrc.push(
            Request
          );

          return (
            <JuzgadosByllaveProceso
              key={proceso.id}
              llaveProceso={proceso.llaveProceso}
            />
          );
        }
      )
    );

    return <>{juzgados}</>;
  }
);

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
