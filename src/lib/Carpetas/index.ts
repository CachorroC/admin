import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/carpeta';
import { cache } from 'react';

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

export const getCarpetas= cache(
  async() => {
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
);

export const  getCarpetasByllaveProceso= cache(
  async(
    {
      llaveProceso
    }: {
  llaveProceso: string;
}
  ) => {
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
  }
);

export const getCarpetaById = cache(
  async (
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