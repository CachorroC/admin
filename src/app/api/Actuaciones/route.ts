import { NextRequest,
         NextResponse } from 'next/server';
import { intConsultaActuaciones } from '../../../lib/types/procesos';
import { sleep } from '#@/lib/fix';
import {  getActuaciones } from '#@/lib/Actuaciones';
import { getCarpetas } from '#@/lib/Carpetas';

export async function GET(
  {
    Request
  }: {
  Request: NextRequest;
} 
) {
  const {
    searchParams 
  } = new URL(
    Request.url 
  );
  console.log(
    Request.url 
  );

  const idProceso = searchParams.get(
    'idProceso' 
  );

  if ( idProceso ) {
    const actuacionesRaw = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      { next: { revalidate: 32000 } }
    );

    if ( !actuacionesRaw.ok ) {
      return new NextResponse(
        null, { status: 404 } 
      );
    }

    const actuaciones
      = ( await actuacionesRaw.json() ) as intConsultaActuaciones;

    return new NextResponse(
      JSON.stringify(
        actuaciones.actuaciones 
      ),
      {
        status : 200,
        headers: { 'content-type': 'application/json' }
      }
    );
  }
  const carpetas = await getCarpetas();
  const newCarpetas = [];

  for (
    let index = 0;
    index < carpetas.length;
    index++
  ) {
    const carpeta = carpetas[ index ];

    for (
      let i = 0;
      i < carpeta.idProceso.length;
      i++
    ) {
      const idp = carpeta.idProceso[ i ];

      const acts = await getActuaciones(
        {
          idProceso: idp,
          index    : index
        } 
      );

      const newCarpeta = {
        ...carpeta,
        ultimaActuacion: acts[ 0 ]
      };
      newCarpetas.push(
        newCarpeta 
      );
    }
  }

  return new NextResponse(
    JSON.stringify(
      newCarpetas 
    ),
    {
      status : 200,
      headers: { 'content-type': 'application/json' }
    }
  );
}
