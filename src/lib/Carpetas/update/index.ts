'use server';
import { getActuaciones } from '#@/lib/Actuaciones';
import clientPromise from '#@/lib/mongodb';
import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import { cache } from 'react';
import { UltimaActuacion } from '../../types/demandados';
import { ObjectId } from 'mongodb';

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
    carpeta 
  }: { carpeta: IntCarpeta } 
) => {
  const collection = await Collection();
  const query = carpeta;

  const update = {
    $set: carpeta
  };

  const options = {
    upsert: true
  };

  const updt = await collection.updateOne(
    query,
    update,
    options 
  );

  return updt;
};
