import { getActuaciones } from '#@/lib/Actuaciones';
import clientPromise from '#@/lib/mongodb';
import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import { cache } from 'react';
import { UltimaActuacion } from '../../types/demandados';

const Collection = cache(
  async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongólico' 
      );
    }

    const db = client.db(
      'RyS' 
    );

    const carpetas = db.collection<IntCarpeta>(
      'Demandados' 
    );

    return carpetas;
  } 
);

export const updateCarpeta = async (
  {
    carpeta,
    index
  }: {
  carpeta: MonCarpeta;
  index: number;
} 
) => {
  const actuaciones = await getActuaciones(
    carpeta.idProceso,
    index 
  );
  const collection = await Collection();

  if ( actuaciones.length === 0 ) {
    return null;
  }
  console.log(
    actuaciones[ 0 ] 
  );

  const outgoingRequest = await collection.findOneAndReplace(
    {
      _id: carpeta._id
    },
    {
      ...carpeta,
      ultimaActuacion: actuaciones[ 0 ]
    },
    {
      returnDocument: 'after'
    }
  );

  return outgoingRequest;
};

export async function updateCarpetas(
  {
    carpetas 
  }: { carpetas: MonCarpeta[] } 
) {
  const newCarpetas = [];

  for ( let i = 0; i < carpetas.length; i++ ) {
    const carpeta = carpetas[ i ];

    const req = await updateCarpeta(
      {
        carpeta: carpeta,
        index  : i
      } 
    );

    if ( req === null ) {
      newCarpetas.push(
        {
          ...carpeta,
          ultimaActuacion: null
        } 
      );

      continue;
    }
    newCarpetas.push(
      req.value ?? carpeta 
    );
    console.log(
      newCarpetas.length 
    );
  }

  return newCarpetas;
}
