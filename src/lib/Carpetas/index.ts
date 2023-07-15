import { cache } from 'react';
import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { carpetaConvert, IntCarpeta, MonCarpeta } from '../types/demandados';
import { ObjectId } from 'mongodb';

export const preload = (
  llaveProceso: string
) => {
  void getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );
};

export const carpetasCollection = cache(
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

export const getCarpetas = cache(
  async () => {
    const collection = await carpetasCollection();

    const carpetasRaw = await collection.find(
      {}
    ).toArray();

    const carpetas = carpetaConvert.toMonCarpetas(
      carpetasRaw
    );

    return carpetas;
  }
);

export const getCarpetasByllaveProceso = cache(
  async (
    {
      llaveProceso
    }: { llaveProceso: string }
  ) => {
    const carpetas = await getCarpetas();

    const Carpetas = carpetas.filter(
      (
        carpeta
      ) => {
        return carpeta.llaveProceso === llaveProceso;
      }
    );

    return Carpetas;
  }
);

export const getCarpetasByidProceso = cache(
  async (
    {
      idProceso
    }: { idProceso: number }
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
    {
      id
    }: { id: string }
  ) => {
    const carpetas = await getCarpetas();

    const Carpetas = carpetas.find(
      (
        carpeta
      ) => {
        return carpeta.id === id;
      }
    );

    return Carpetas;
  }
);

export async function postCarpeta(
  {
    nota
  }: { nota: IntCarpeta }
) {
  const collection = await carpetasCollection();

  const outgoingRequest = await collection.insertOne(
    nota
  );

  if ( !outgoingRequest.acknowledged ) {
    return new NextResponse(
      null,
      {
        status: 404
      }
    );
  }

  return new NextResponse(
    JSON.stringify(
      outgoingRequest.insertedId + `${ outgoingRequest.acknowledged }`
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
