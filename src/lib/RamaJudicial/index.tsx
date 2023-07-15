'use server';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion } from '../types/procesos';

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
