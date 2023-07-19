'use server';
import { getActuaciones } from '#@/lib/Actuaciones';
import clientPromise from '#@/lib/mongodb';
import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import { cache } from 'react';
import { UltimaActuacion } from '../../types/demandados';
import { ObjectId } from 'mongodb';
import { carpetasCollection } from '#@/lib/Carpetas';

export async function updateCarpeta(
  {
    carpeta 
  }: { carpeta: IntCarpeta } 
) {
  const collection = await carpetasCollection();
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
}
