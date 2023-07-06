import 'server-only';
import {NextRequest,
  NextResponse,} from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/lib/types/mongodb';
import { notFound } from 'next/navigation';

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
  const notas = await db.collection (
    'Procesos'
  );
  return notas;
};

export async function GET() {
  const collection = await Collection ();
  const procesos = await collection
    .find (
      {
      }
    )
    .toArray ();

  if (!procesos.length) {
    notFound ();
  }
  return new NextResponse (
    JSON.stringify (
      procesos
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}

export async function POST(
  Request: NextRequest
) {
  const incomingRequest = await Request.json ();
  const collection = await Collection ();
  const outgoingRequest =
    await collection.insertOne (
      incomingRequest
    );

  if (outgoingRequest.acknowledged === false) {
    return new NextResponse (
      JSON.stringify (
        {
          Error:
          'server couldnt acknowledge the insert request',
        }
      ),
      {
        status: 500,
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
        'content-type': 'application/json',
      },
    }
  );
}
