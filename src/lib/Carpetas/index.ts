import { cache } from 'react';
import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import {
  monCarpetaDemandado,
  intCarpetaDemandado,
  Convert,
} from '#@/lib/types/demandados';

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
    if (!client) {
      throw new Error(
        'no hay cliente mongólico'
      );
    }
    const db = client.db(
      'RyS'
    );
    const carpetas = db.collection(
      'Demandados'
    );
    return carpetas;
  }
);

export const getCarpetas = cache(
  async () => {
    const collection = await Collection();
    const carpetasRaw = await collection.find(
      {}
    ).toArray();
    const carpetas1 = JSON.stringify(
      carpetasRaw
    );
    const carps = Convert.toMonCarpetaDemandado(
      carpetas1
    );
    return carps;
  }
);
export const getCarpetasByllaveProceso = cache(
  async (
    { llaveProceso }: { llaveProceso: string }
  ) => {
    const collection = await Collection();
    const carpetasRaw = await collection.find(
      {}
    ).toArray();
    const carpetas = Convert.toMonCarpetaDemandado(
      JSON.stringify(
        carpetasRaw
      )
    );
    const Carpetas = carpetas.filter(
      (
        carpeta
      ) => carpeta.llaveProceso === llaveProceso
    );
    return Carpetas;
  }
);
export const getCarpetaById = cache(
  async (
    { _id }: { _id: string }
  ) => {
    const collection = await Collection();
    const carpetasRaw = await collection.find(
      {}
    ).toArray();
    const carpetas = Convert.toMonCarpetaDemandado(
      JSON.stringify(
        carpetasRaw
      )
    );
    const Carpetas = carpetas.filter(
      (
        carpeta
      ) => carpeta._id === _id
    );
    return Carpetas;
  }
);
export async function postCarpeta(
  { nota }: { nota: intCarpetaDemandado }
) {
  const collection = await Collection();
  const outgoingRequest = await collection.insertOne(
    nota
  );

  if (!outgoingRequest.acknowledged) {
    return new NextResponse(
      null,
      {
        status: 404,
      }
    );
  }
  return new NextResponse(
    JSON.stringify(
      outgoingRequest.insertedId + `${outgoingRequest.acknowledged}`
    ),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
