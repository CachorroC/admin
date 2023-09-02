import { getCarpetas } from '#@/lib/Carpetas';
import { fetchActuaciones } from '#@/lib/Actuaciones';
import { sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';
import { NextRequest,
         NextResponse } from 'next/server';

//? aqui van las peticiones a todas las actuaciones por cada carpeta, es decir, el timer que va a ejecutarser con el for of de las carpetas
export async function GET(
  request: NextRequest 
) {
  const {
    searchParams 
  } = new URL(
    request.url 
  );

  const _id = searchParams.get(
    '_id' 
  );

  if ( _id ) {
    return new NextResponse(
      null, {
        status: 404
      } 
    );
  }

  const CarpetasMap = new Map<
    string,
    MonCarpeta
  >();

  const carpetas = await getCarpetas();

  const totalCarpetas = carpetas.length;
  console.log(
    totalCarpetas 
  );

  for ( const carpeta of carpetas ) {
    CarpetasMap.set(
      carpeta._id, carpeta 
    );

    const indexOfCarpeta
      = carpetas.indexOf(
        carpeta 
      );
    console.time(
      indexOfCarpeta.toString() 
    );
    await sleep(
      1000 
    );

    const actuaciones = await fetchActuaciones(
      carpeta.idProceso ?? 1,
      indexOfCarpeta
    );
    console.timeEnd(
      indexOfCarpeta.toString() 
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
