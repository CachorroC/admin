import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { monNota, idk, intNota } from '#@/lib/types/notas';

const Collection = async () => {
  const client = await clientPromise;
  if (!client) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }
  const db = client.db(
    'RyS'
  );
  const notas = db.collection(
    'Notas'
  );
  return notas;
};

export async function getNotas() {
  const collection = await Collection();
  const notas = (await collection.find(
    {}
  ).toArray()) as unknown as monNota[];
  return notas;
}

export async function getNotasByllaveProceso(
  {
    llaveProceso,
  }: {
  llaveProceso: string;
}
) {
  const collection = await Collection();
  const notas = (await collection.find(
    {}
  ).toArray()) as unknown as monNota[];
  const Notas = notas.filter(
    (
      nota
    ) => nota.llaveProceso === llaveProceso
  );
  return Notas;
}
export const getNotaById = async (
  { _id }: { _id: string }
) => {
  const collection = await Collection();
  const notas = (await collection.find(
    {}
  ).toArray()) as unknown as monNota[];
  const Notas = notas.filter(
    (
      nota
    ) => nota._id === _id
  );
  return Notas;
};

export async function postNota(
  { nota }: { nota: intNota }
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
