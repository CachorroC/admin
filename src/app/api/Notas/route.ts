import 'server-only';
import { NextRequest,
         NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/lib/types/mongodb';
import { notaConvert,
         intNota } from '#@/lib/types/notas';
import { ObjectId } from 'mongodb';
import { cache } from 'react';

const notasCollection = cache(
  async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongólico' 
      );
    }

    const db = client.db(
      'RyS' 
    );

    const notas = db.collection<intNota>(
      'Notas' 
    );

    return notas;
  } 
);

const Transform = cache(
  async () => {
    const collection = await notasCollection();

    const notasRaw = await collection
          .find(
            {} 
          )
          .toArray();

    const notas = notaConvert.toMonNotas(
      notasRaw 
    );

    return notas;
  } 
);

export async function GET(
  Request: NextRequest 
) {
  const {
    searchParams 
  } = new URL(
    Request.url 
  );

  const notas = await Transform();

  if ( !notas.length ) {
    throw new Error(
      'no hay entradas en mongo' 
    );
  }

  const llaveProceso = searchParams.get(
    'llaveProceso'
  );

  if ( llaveProceso ) {
    const Notas = notas.filter(
      (
        nota 
      ) => {
        return nota.llaveProceso === llaveProceso;
      } 
    );

    return new NextResponse(
      JSON.stringify(
        Notas 
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  const _id = searchParams.get(
    '_id' 
  );

  if ( _id ) {
    const Nota = notas.find(
      (
        nota 
      ) => {
        return nota._id === _id;
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
      notas 
    ), {
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
  const incomingRequest = await request.json();

  const collection = await notasCollection();

  const outgoingRequest
    = await collection.insertOne(
      incomingRequest 
    );

  if ( !outgoingRequest.acknowledged ) {
    return new NextResponse(
      null, {
        status: 404
      } 
    );
  }

  return new NextResponse(
    JSON.stringify(
      outgoingRequest.insertedId
        + `${ outgoingRequest.acknowledged }`
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
  const collection = await notasCollection();

  const updatedNote = await Request.json();

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

    const result = await collection.updateOne(
      query,
      {
        $set: updatedNote
      }
    );

    if ( result.acknowledged ) {
      return new NextResponse(
        `Successfully updated game with id ${ id }`,
        {
          status : 200,
          headers: {
            'content-type': 'text/html'
          }
        }
      );
    }

    return new NextResponse(
      `the result was ${
        result.acknowledged
          ? 'true'
          : 'false'
      } with ${ result.modifiedCount.toString() }`,
      {
        status : 200,
        headers: {
          'content-type': 'text/html'
        }
      }
    );
  }

  return new NextResponse(
    null, {
      status: 404
    } 
  );
}

export async function DELETE(
  Request: NextRequest
) {
  const notas = await notasCollection();

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
