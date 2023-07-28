import 'server-only';
import {
  NextRequest,
  NextResponse
} from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/lib/types/mongodb';
import { notFound } from 'next/navigation';
import { procesosCollection } from '#@/lib/RamaJudicial';
const collection = await procesosCollection();

export async function GET() {
  const procesos = await collection
    .find({})
    .toArray();

  if (!procesos.length) {
    notFound();
  }

  return new NextResponse(
    JSON.stringify(procesos),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}

export async function POST(Request: NextRequest) {
  const incomingRequest = await Request.json();
  const collection = await Collection();

  const outgoingRequest =
    await collection.insertOne(incomingRequest);

  if (outgoingRequest.acknowledged === false) {
    return new NextResponse(
      JSON.stringify({
        Error:
          'server couldnt acknowledge the insert request'
      }),
      {
        status: 500
      }
    );
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
