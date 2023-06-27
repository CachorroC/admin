import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { monCarpetaDemandado, intCarpetaDemandado } from '../types/demandados';
const Collection = async () => {
  const client = await clientPromise;
  if (!client) {
    throw new Error('no hay cliente mongólico');
  }
  const db = client.db('RyS');
  const notas = db.collection('Demandados');
  return notas;
};

export async function getCarpetas() {
  const collection = await Collection();
  const carpetasRaw = await collection.find({}).toArray();
  const carpetas1 = JSON.stringify(carpetasRaw);
  const carpetas = JSON.parse(carpetas1) as monCarpetaDemandado[];
  return carpetas;
}

export async function getCarpetasByllaveProceso({
  llaveProceso,
}: {
  llaveProceso: string;
}) {
  const collection = await Collection();
  const carpetas = (await collection
    .find({})
    .toArray()) as unknown as monCarpetaDemandado[];
  const Carpetas = carpetas.filter(
    (carpeta) => carpeta.llaveProceso === llaveProceso
  );
  return Carpetas;
}
export async function getCarpetaById({ _id }: { _id: string }) {
  const collection = await Collection();
  const notas = (await collection
    .find({})
    .toArray()) as unknown as monCarpetaDemandado[];
  const Notas = notas.filter((nota) => nota._id === _id);
  return Notas;
}

export async function postCarpeta({ nota }: { nota: intCarpetaDemandado }) {
  const collection = await Collection();
  const outgoingRequest = await collection.insertOne(nota);

  if (!outgoingRequest.acknowledged) {
    return new NextResponse(null, {
      status: 404,
    });
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
