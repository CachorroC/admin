import { cache } from 'react';
import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { IntCarpetaDemandado } from '../types/demandados';
import {monCarpetaDemandado,
  intCarpetaDemandado,
  ConvertCarpetas} from '#@/lib/types/demandados';

export const preload = (
  llaveProceso: string
) => {
  void getCarpetasByllaveProceso (
    {
      llaveProceso: llaveProceso
    }
  );
};

const Collection = cache (
  async () => {
    const client = await clientPromise;
    if (!client) {
      throw new Error (
        'no hay cliente mongólico'
      );
    }

    const db = client.db (
      'RyS'
    );

    const carpetas = db.collection <IntCarpetaDemandado> (
      'Demandados'
    );
    return carpetas;
  }
);

const Transform = async () => {
  const carpetasMap = new Map ();

  const collection = await Collection ();

  const carpetasRaw = await collection
    .find (
      {
      }
    )
    .toArray ();

  carpetasRaw.forEach (
    (
      carpeta, index, arr
    ) => {
      return carpetasMap.set (
        carpeta._id,
        carpeta
      );
    }
  );
  console.log (
    carpetasMap
  );
  return carpetasMap;
};

export const getCarpetas = cache (
  async () => {
    const carpetas = await Transform ();
    return carpetas;
  }
);

export const getCarpetasByllaveProceso = cache (
  async (
    {
      llaveProceso
    }: {
    llaveProceso: string;
  }
  ) => {
    const collection = await Collection ();

    const carpetasRaw = await collection
      .find (
        {
        }
      )
      .toArray ();

    const carpetas =
      ConvertCarpetas.toMonCarpetaDemandado (
        JSON.stringify (
          carpetasRaw
        )
      );

    const Carpetas = carpetas.filter (
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

export const getCarpetasByidProceso = cache (
  async (
    {
      idProceso
    }: {
    idProceso: number;
  }
  ) => {
    const collection = await Collection ();

    const carpetasRaw = await collection
      .find (
        {
        }
      )
      .toArray ();

    const carpetas =
      ConvertCarpetas.toMonCarpetaDemandado (
        JSON.stringify (
          carpetasRaw
        )
      );

    const Carpetas = carpetas.filter (
      (
        carpeta
      ) => {
        return carpeta.idProceso === idProceso;
      }
    );
    return Carpetas;
  }
);

export const getCarpetaById = cache (
  async (
    {
      _id
    }: { _id: string }
  ) => {
    const collection = await Collection ();

    const carpetasRaw = await collection
      .find (
        {
        }
      )
      .toArray ();

    const carpetas = carpetasRaw as unknown as monCarpetaDemandado[];

    const Carpetas = carpetas.filter (
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
  {
    nota
  }: {
  nota: intCarpetaDemandado;
}
) {
  const collection = await Collection ();

  const outgoingRequest =
    await collection.insertOne (
      nota
    );
  if (!outgoingRequest.acknowledged) {
    return new NextResponse (
      null,
      {
        status: 404
      }
    );
  }

  return new NextResponse (
    JSON.stringify (
      outgoingRequest.insertedId +
        `${ outgoingRequest.acknowledged }`
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
