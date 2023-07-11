import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import {
  intDemandado,
  monDemandado
} from '../types/mongodb';
import { cache } from 'react';

const Collection = async () => {
  const client = await clientPromise;

  if (!client) {
    throw new Error('no hay cliente mongólico');
  }

  const db = client.db('RyS');

  const procesos = db.collection('Procesos');

  return procesos;
};

export const getProcesos = cache(async () => {
  const collection = await Collection();

  const procesos = (await collection
    .find({})
    .toArray()) as unknown as monDemandado[];

  return procesos;
});

export const getProcesosByllaveProceso = cache(
  async ({
    llaveProceso
  }: {
    llaveProceso: string;
  }) => {
    const collection = await Collection();

    const procesos = (await collection
      .find({})
      .toArray()) as unknown as monDemandado[];

    const Procesos = procesos.filter(
      (proceso) => {
        return (
          proceso.llaveProceso === llaveProceso
        );
      }
    );

    return Procesos;
  }
);

export const getProcesoById = cache(
  async ({ _id }: { _id: string }) => {
    const collection = await Collection();

    const procesos = (await collection
      .find({})
      .toArray()) as unknown as monDemandado[];

    const Procesos = procesos.filter(
      (proceso) => {
        return proceso._id.toString() === _id;
      }
    );

    return Procesos;
  }
);

export async function postProceso({
  proceso
}: {
  proceso: intDemandado;
}) {
  const collection = await Collection();

  const outgoingRequest =
    await collection.insertOne(proceso);

  if (!outgoingRequest.acknowledged) {
    return new NextResponse(null, {
      status: 404
    });
  }

  return new NextResponse(
    JSON.stringify(
      outgoingRequest.insertedId +
        `${outgoingRequest.acknowledged}`
    ),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
