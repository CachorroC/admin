import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { Collection, ObjectId } from 'mongodb';
import { getCarpetas, getCarpetasNew } from '#@/lib/Carpetas';
import { carpetasCollection } from '#@/lib/Carpetas';
import { IntCarpeta } from '#@/lib/types/demandados';

export async function GET(
  Request: NextRequest
) {
  const {
    searchParams
  } = new URL(
    Request.url
  );
  const carpetas = await getCarpetas();

  const llaveProceso = searchParams.get(
    'llaveProceso'
  );

  if ( llaveProceso ) {
    const Demandados = carpetas.filter(
      (
        carpeta
      ) => {
        return carpeta.llaveProceso === llaveProceso;
      }
    );

    return new NextResponse(
      JSON.stringify(
        Demandados
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  const id = searchParams.get(
    'id'
  );

  if ( id ) {
    const Nota = carpetas.find(
      (
        carpeta
      ) => {
        return carpeta.id === id;
      }
    );

    return new NextResponse(
      JSON.stringify(
        Nota
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new NextResponse(
    JSON.stringify(
      carpetas
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}

export async function POST(
  request: NextRequest
) {
  const incomingRequest = ( await request.json() ) as IntCarpeta;
  const client = await carpetasCollection();

  const outgoingRequest = await client.insertOne(
    incomingRequest
  );

  if ( !outgoingRequest.acknowledged ) {
    throw new Error(
      `${ outgoingRequest.acknowledged }`
    );
  }

  return new NextResponse(
    JSON.stringify(
      outgoingRequest.insertedId + `${ outgoingRequest.acknowledged }`
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}

export async function PUT(
  Request: NextRequest
) {
  const updatedNote = ( await Request.json() ) as IntCarpeta;
  const collection = await carpetasCollection();

  const {
    searchParams
  } = new URL(
    Request.url
  );

  const id = searchParams.get(
    'id'
  );

  if ( id ) {
    const query = {
      _id: new ObjectId(
        id
      )
    };

    const result = await collection.findOneAndUpdate(
      query,
      {
        $set: updatedNote
      }
    );

    if ( result.ok ) {
      return new NextResponse(
        `Successfully updated game with id ${ result.value }`,
        {
          status : 200,
          headers: {
            'content-type': 'text/html'
          }
        }
      );
    }

    return new NextResponse(
      `the result was ${ result.ok
        ? 'true'
        : 'false' } with ${ result.value }`,
      {
        status : 304,
        headers: {
          'content-type': 'text/html'
        }
      }
    );
  }

  return new NextResponse(
    null,
    {
      status: 304
    }
  );
}

export async function DELETE(
  Request: NextRequest
) {
  const notas = await carpetasCollection();

  const {
    searchParams
  } = new URL(
    Request.url
  );

  const id = searchParams.get(
    '_id'
  );

  if ( id ) {
    const query = {
      _id: new ObjectId(
        id
      )
    };

    const Result = await notas.deleteOne(
      query
    );

    if ( Result.acknowledged ) {
      const count = Result.deletedCount;

      const response = {
        isOk        : true,
        deletedCount: count,
        deletedId   : id
      };

      return new NextResponse(
        JSON.stringify(
          response
        ),
        {
          status : 202,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    }

    if ( !Result.acknowledged ) {
      return new NextResponse(
        JSON.stringify(
          `error 400 ${ id } not deleted`
        ),
        {
          status: 400
        }
      );
    }

    return new NextResponse(
      JSON.stringify(
        Result
      ),
      {
        status: 200
      }
    );
  }
}
