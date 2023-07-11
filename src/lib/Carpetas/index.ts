import { cache } from 'react';
import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { monCarpetaDemandado,
         IntCarpetaDemandado,
         ConvertCarpetas } from '#@/lib/types/demandados';

export const preload = (
  llaveProceso: string 
) => {
    void getCarpetasByllaveProceso(
      { llaveProceso: llaveProceso } 
    );
};

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

      const carpetas
    = db.collection<IntCarpetaDemandado>(
      'Demandados'
    );

      return carpetas;
  } 
);

export const getCarpetas = cache(
  async () => {
      const carpetasMap: monCarpetaDemandado[] = [];
      const collection = await Collection();

      const carpetasRaw = await collection
        .find(
          {} 
        )
        .toArray();

      carpetasRaw.forEach(
        (
          carpeta, index, arr 
        ) => {
            console.log(
              carpeta._id 
            );

            const carpetaToMongo: monCarpetaDemandado = {
              ...carpeta,
              _id: carpeta._id.toString()
            };

            return carpetasMap.push(
              carpetaToMongo 
            );
        } 
      );
      console.log(
        carpetasMap 
      );

      return carpetasMap;
  } 
);

export const getCarpetasByllaveProceso = cache(
  async (
    { llaveProceso }: {
    llaveProceso: string;
  } 
  ) => {
      const carpetas = await getCarpetas();

      const Carpetas = carpetas.filter(
        (
          carpeta 
        ) => {
            return (
              carpeta.llaveProceso === llaveProceso
            );
        }
      );

      return Carpetas;
  }
);

export const getCarpetasByidProceso = cache(
  async (
    { idProceso }: {
    idProceso: number;
  } 
  ) => {
      const carpetas = await getCarpetas();

      const Carpetas = carpetas.filter(
        (
          carpeta 
        ) => {
            return carpeta.idProceso === idProceso;
        }
      );

      return Carpetas;
  }
);

export const getCarpetaById = cache(
  async (
    { _id }: { _id: string } 
  ) => {
      const carpetas = await getCarpetas();

      const Carpetas = carpetas.filter(
        (
          carpeta 
        ) => {
            return carpeta._id === _id;
        }
      );

      return Carpetas;
  }
);

export async function postCarpeta(
  { nota }: {
  nota: IntCarpetaDemandado;
} 
) {
    const collection = await Collection();

    const outgoingRequest
    = await collection.insertOne(
      nota 
    );

    if ( !outgoingRequest.acknowledged ) {
      return new NextResponse(
        null,
        { status: 404 } 
      );
    }

    return new NextResponse(
      JSON.stringify(
        outgoingRequest.insertedId
        + `${ outgoingRequest.acknowledged }`
      ),
      {
        status : 200,
        headers: { 'content-type': 'application/json' }
      }
    );
}
