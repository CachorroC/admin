import 'server-only';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchActuaciones } from '#@/lib/Actuaciones';
import { sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { NextResponse } from 'next/server';

//? aqui van las peticiones a todas las actuaciones por cada carpeta, es decir, el timer que va a ejecutarser con el for of de las carpetas
export async function GET() {
  const CarpetasMap = new Map<
    string,
    MonCarpeta
  >();

  const carpetas = await getCarpetas();

  const totalCarpetas = carpetas.length;

  for ( const carpeta of carpetas ) {
    CarpetasMap.set(
      carpeta._id, carpeta 
    );

    const indexOfCarpeta
      = carpetas.indexOf(
        carpeta 
      );
    await sleep(
      1000 
    );

    const actuaciones = await fetchActuaciones(
      carpeta.idProceso ?? 1,
      indexOfCarpeta
    );

    if ( actuaciones ) {
      const newCarpeta = {
        ...carpeta,
        fecha: new Date(
          actuaciones[ 0 ].fechaActuacion
        ),
        ultimaActuacion: actuaciones[ 0 ]
      };
      CarpetasMap.set(
        carpeta._id, newCarpeta 
      );
    }
  }

  const CarpetasOutput = Array.from(
    CarpetasMap.values()
  );

  return new NextResponse(
    JSON.stringify(
      CarpetasOutput 
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
