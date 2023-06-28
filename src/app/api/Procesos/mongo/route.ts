import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request
) {
  const client = await clientPromise;
  if (!client) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }
  const db = client.db(
    'RyS'
  );
  const procesosCollection = await db.collection(
    'Procesos'
  );
  try {
    const proceso = await request.json();
    const result = await procesosCollection.insertOne(
      proceso
    );

    if (!result.acknowledged) {
      return new NextResponse(
        null,
        {
          status: 400,
        }
      );
    }
    return new NextResponse(
      JSON.stringify(
        JSON.stringify(
          result.insertedId
        )
      ),
      {
        status: 200,
      }
    );
  }
  catch (error) {
    return new NextResponse(
      JSON.stringify(
        error
      ),
      {
        status: 505,
      }
    );
  }
}
