import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { monNota,
         intNota,
         notaConvert } from '#@/lib/types/notas';
import { cache } from 'react';
import { nota } from '#@/components/form/form.module.css';

export const notasCollection = async () => {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }

  const db = client.db(
    'RyS'
  );

  const notas = db.collection<intNota>(
    'Notas'
  );

  return notas;
};

const Transform = async () => {
  const collection = await notasCollection();

  const notasRaw = await collection
        .find(
          {}
        )
        .toArray();

  const notas = notaConvert.toMonNotas(
    notasRaw
  );

  return notas;
};

export async function getNotas() {
  const notas = await Transform();

  return notas;
}

export async function getNotasByllaveProceso(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) {
  const collection = await notasCollection();

  const Notas = await collection.find(
    {
      llaveProceso: llaveProceso
    }
  )
        .sort(
          {
            fecha: 1
          }
        )
        .toArray();

  const convert = notaConvert.toMonNotas(
    Notas
  );

  return convert;
}

export const getNotaById = cache(
  async (
    {
      _id
    }: { _id: string }
  ) => {
    const notas = await Transform();

    const Notas = notas.filter(
      (
        nota
      ) => {
        return nota._id === _id;
      }
    );

    return Notas;
  }
);
