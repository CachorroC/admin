import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/carpeta';
import { getBaseUrl } from '../getBaseUrl';

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
    .sort(
      {
        numero: 1
      }
    )
    .toArray();



  return carpetasRaw;
}

export async function getCarpetas() {
  const carpetasRaw = await fetch(
    `${ getBaseUrl() }/api/Carpetas`
  );
  const res = ( await carpetasRaw.json() ) as MonCarpeta[];
  /*
  const carpetas
    = carpetaConvert.toMonCarpetas(
      carpetasRaw
    ); */

  return res;
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

  return Carpeta;
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
