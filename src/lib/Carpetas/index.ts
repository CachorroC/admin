import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { cache } from 'react';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/carpeta';

export const revalidate = 86400; // revalidate the data at most every hour

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

    const carpetas
      = db.collection<IntCarpeta>(
        'Carpetas'
      );

    return carpetas;
  }
);

export const fetchCarpetas = cache(
  async () => {
    const collection = await carpetasCollection();

    const carpetasRaw = await collection
          .find(
            {}
          )
          .sort(
            {
              numero: -1
            }
          )
          .allowDiskUse()
          .toArray();

    return carpetasRaw;
  }
);

export const getCarpetas = cache(
  async () => {
    const carpetasRaw = await fetchCarpetas();

    const carpetas
    = carpetaConvert.toMonCarpetas(
      carpetasRaw
    );

    return carpetas;
  }
);

export const getCarpetasByllaveProceso = cache(
  async (
    {
      llaveProceso
    }: {
    llaveProceso: string;
  }
  ) => {
    const collection = await carpetasCollection();

    const carpeta = await collection.findOne(
      {
        llaveProceso: llaveProceso
      }
    );

    if ( carpeta ) {
      const newCarpeta
        = carpetaConvert.toMonCarpeta(
          carpeta
        );

      return newCarpeta;
    }

    return null;
  }
);

export const getCarpetaById = cache(
  async (
    {
      _id
    }: { _id: string }
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
  }
);

export const getCarpetabyNumero = cache(
  async (
    numero: number
  ) => {
    const collection = await carpetasCollection();

    const carpeta = await collection.findOne(
      {
        numero: numero
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
  }
);

export const getCarpetaByidProceso = cache(
  async (
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
  }
);
