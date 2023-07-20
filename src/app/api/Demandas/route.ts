import { carpetasCollection } from '#@/lib/Carpetas';
import { NextResponse } from 'next/server';

export async function GET() {
  const collection = await carpetasCollection();
  const carpetas = await collection
    .find({})
    .toArray();

  return new NextResponse(
    JSON.stringify(carpetas),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
