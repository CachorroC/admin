import { carpetasCollection } from '#@/lib/Carpetas';
import { notasCollection } from '#@/lib/notas';
import { IntCarpeta,
         carpetaConvert } from '#@/lib/types/carpeta';
import { intNota, monNota } from '#@/lib/types/notas';
import { ObjectId } from 'mongodb';
import { NextRequest,
         NextResponse } from 'next/server';

export async function POST (
  request: NextRequest, context: { params: { llaveProceso: string } }
) {

  const json
    = ( await request.json() ) as intNota;
  console.log(
    json
  );

  const collection = await notasCollection();

  const insertNewNota = await collection.insertOne(
    json
  );

  if ( insertNewNota.acknowledged ) {
    console.log(
      insertNewNota.insertedId
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: { llaveProceso: string } }
) {
  const json
    = ( await request.json() ) as intNota;
  console.log(
    json
  );

  const {
    searchParams
  } = new URL(
    request.url
  );

  const _id = searchParams.get(
    '_id'
  );

  if ( _id ) {
    const query = {
      _id: new ObjectId(
        _id
      )
    };

    const collection = await notasCollection();

    const update
    = await collection.findOneAndUpdate(
      query,
      {
        $set: json
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

    if ( update.value ) {
      return new NextResponse(
        JSON.stringify(
          update.value
        ),
        {
          status : 200,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    }

  }


  const collection = await notasCollection();

  const update
    = await collection.insertOne(
      json
    );

  if ( update.acknowledged) {
    return new NextResponse(
      JSON.stringify(
        update.insertedId
      ),
      {
        status : 201,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new NextResponse(
    null, {
      status: 304
    }
  );
}
