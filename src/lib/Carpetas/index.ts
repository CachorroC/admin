import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/demandados';
import { fetchActuaciones, getActuaciones } from '../Actuaciones';

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

export async function getCarpetas () {
  const carpetas = await fetchCarpetas();

  return carpetas;
}

export const getCarpetasByllaveProceso = async (
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) => {
  const carpetas = await getCarpetas();

  const Carpetas = carpetas.find(
    (
      carpeta
    ) => {
      return carpeta.llaveProceso === llaveProceso;
    }
  );

  return Carpetas;
};

export const getCarpetaById = async (
  {
    _id
  }: {
  _id: string;
}
) => {
  const carpetas = await getCarpetas();

  const Carpeta = carpetas.find(
    (
      carpeta
    ) => {
      return carpeta._id === _id;
    }
  );

  if ( !Carpeta ) {
    return null;
  }

  return Carpeta;
};
