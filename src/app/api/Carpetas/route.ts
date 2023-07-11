import { getActuaciones } from '#@/lib/Actuaciones';
import { getCarpetas } from '#@/lib/Carpetas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import clientPromise from '#@/lib/mongodb';
import {  IntCarpetaDemandado, monCarpetaDemandado} from '#@/lib/types/demandados';
import { intActuacion } from '#@/lib/types/procesos';
import { NextResponse } from 'next/server';


const Collection = async () => {
  const client = await clientPromise;
  if (!client) {
    throw new Error (
      'no hay cliente mongólico'
    );
  }

  const db = client.db (
    'RyS'
  );

  const demandados =
    db.collection <IntCarpetaDemandado> (
      'Demandados'
    );
  return demandados;
};


export async function GET () {
  const collection = await Collection ();

  const carpetas = await collection
    .find (
      {
      }
    )
    .toArray ();
  console.log (
    carpetas
  );

  const carpetasMap = new Map ();

  const carpetasWithFechaArray: unknown[]  = [];

  const carpetasWithFechaMap = new Map ();


  carpetas.forEach (
    (
      carpeta
    ) => {
      return carpetasMap.set (
        carpeta._id,
        carpeta
      );
    }
  );
  for (const carp of carpetasMap) {
    const [
      _id,
      carpeta
    ] = carp;

    const actuaciones = await getActuaciones (
      carpeta.idProceso
    );
    if (
      carpeta.idProceso === 0 ||
      actuaciones.length === 0
    ) {
      carpetasWithFechaArray.push (
        carpeta
      );
      carpetasWithFechaMap.set (
        _id,
        carpeta
      );
    }

    const carpetaWithActuacion = {
      ...carpeta,
      ultimaActuacion: actuaciones[ 0 ]
    };
    carpetasWithFechaArray.push (
      carpetaWithActuacion
    );
    carpetasWithFechaMap.set (
      _id,
      carpetaWithActuacion
    );

    const updateCarpeta = await collection.findOneAndUpdate (
      {
        _id: _id
      },
      {
        $set: carpetaWithActuacion
      }
    );
    console.log (
      updateCarpeta.value
    );
    updateCarpeta;
  }
  return new NextResponse (
    JSON.stringify (
      carpetasWithFechaArray
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
