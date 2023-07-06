import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { monNota, intNota, ConvertNotas } from '#@/lib/types/notas';
import { cache } from 'react';

const Collection = async () => {
    const client = await clientPromise;

    if (!client) {
      throw new Error (
        'no hay cliente mongólico'
      );
    }
    const db = client.db (
      'RyS'
    );
    const notas = db.collection (
      'Notas'
    );
    return notas;
};

const Transform = async () => {
    const collection = await Collection ();
    const notasRaw = await collection.find (
      {
      }
    ).toArray ();
    const notasString = JSON.stringify (
      notasRaw
    );
    const notas = ConvertNotas.toMonNota (
      notasString
    );

    return notas;
};

export async function getNotas() {
    const notas = await Transform ();

    return notas;
}

export async function getNotasByllaveProceso(
  {
    llaveProceso,
  }: {
  llaveProceso: string;
}
) {
    const notas = await Transform ();
    const Notas = notas.filter (
      (
        nota
      ) => nota.llaveProceso === llaveProceso
    );
    return Notas;
}
export const getNotaById = cache (
  async (
    {
      _id 
    }: { _id: string }
  ) => {
      const notas = await Transform ();
      const Notas = notas.filter (
        (
          nota
        ) => nota._id === _id
      );
      return Notas;
  }
);

export async function postNota(
  {
    nota 
  }: { nota: intNota }
) {
    const collection = await Collection ();
    const outgoingRequest = await collection.insertOne (
      nota
    );

    if (!outgoingRequest.acknowledged) {
      return new NextResponse (
        null,
        {
          status: 404,
        }
      );
    }
    return new NextResponse (
      JSON.stringify (
        outgoingRequest.insertedId + `${ outgoingRequest.acknowledged }`,
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
}
