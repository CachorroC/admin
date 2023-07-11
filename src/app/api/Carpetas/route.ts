import { getActuaciones } from '#@/lib/Actuaciones';
import clientPromise from '#@/lib/mongodb';
import { IntCarpetaDemandado,
         monCarpetaDemandado } from '#@/lib/types/demandados';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { UltimaActuacion } from '../../../lib/types/demandados';

const Collection = async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongólico' 
      );
    }

    const db = client.db(
      'RyS' 
    );

    const demandados
    = db.collection<IntCarpetaDemandado>(
      'Demandados'
    );

    return demandados;
};

export async function GET() {
    const collection = await Collection();

    const carpetas = await collection
      .find(
        {} 
      )
      .toArray();
    console.log(
      carpetas 
    );
    const carpetasMap: monCarpetaDemandado[] = [];
    carpetas.forEach(
      (
        carpeta, index, arr 
      ) => {
          setTimeout(
            async () => {
                const actuaciones = await getActuaciones(
                  carpeta.idProceso
                );

                if ( actuaciones.length >= 1 ) {
                  const carpetaWithActuacion = {
                    ...carpeta,
                    _id            : carpeta._id.toString(),
                    ultimaActuacion: actuaciones[ 0 ]
                  };
                  carpetasMap.push(
                    carpetaWithActuacion 
                  );
                }

                if (
                  carpeta.idProceso === 0
        || carpeta.idProceso === 404
        || actuaciones.length === 0
                ) {
                  const carpetaWithoutActuacion = {
                    ...carpeta,
                    _id            : carpeta._id.toString(),
                    UltimaActuacion: null
                  };
                  carpetasMap.push(
                    carpetaWithoutActuacion 
                  );
                }
            },
            index * 1000 
          );

          if ( index === carpetasMap.length - 1 ) {
            const isLastIteration = true;
          }
      } 
    );

    return new NextResponse(
      JSON.stringify(
        carpetasMap 
      ),
      {
        status : 200,
        headers: { 'content-type': 'application/json' }
      }
    );
}
