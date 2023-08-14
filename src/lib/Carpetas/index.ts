import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/carpeta';

export const carpetasCollection = async () => {
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
    = db.collection<IntCarpeta>(
      'Carpetas'
    );

  return carpetas;
};

export async function fetchCarpetas() {
  const collection = await carpetasCollection();

  const carpetasRaw = await collection
    .find(
      {}
    )
    .toArray();

  const carpetas
    = carpetaConvert.toMonCarpetas(
      carpetasRaw
    );

  return carpetas;
}

export async function getCarpetas() {
  const carpetas = await fetchCarpetas();

  return carpetas;
}

export async function getCarpetasByllaveProceso(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
){
  const collection = await carpetasCollection();

  const carpeta = await collection
    .findOne(
      {
        llaveProceso: llaveProceso
      }
    );

  if ( carpeta ) {
    const newCarpeta = carpetaConvert.toMonCarpeta(
      carpeta
    );

    return newCarpeta;
  }

  return null;
};

export const getCarpetaById = async (
  {
    _id
  }: {
  _id: string;
}
) => {
  const collection = await carpetasCollection();

  const Carpeta = await collection.findOne(
    {
      _id: new ObjectId(
        _id
      )
    }
  );

  if ( !Carpeta ) {
    return null;
  }

  const carpeta
    = carpetaConvert.toMonCarpeta(
      Carpeta
    );

  return carpeta;
};

export const getCarpetaByidProceso = async (
  {
    idProceso
  }: {
  idProceso: number;
}
) => {
  const collection = await carpetasCollection();

  const carpeta = await collection.findOne(
    {
      idProceso: idProceso
    }
  );

  if ( !carpeta ) {
    return null;
  }

  const Carpeta
    = carpetaConvert.toMonCarpeta(
      carpeta
    );

  return Carpeta;
};
