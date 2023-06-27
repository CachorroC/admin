import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { ObjectId } from 'mongodb';

const Collection = async () => {
  const client = await clientPromise;
  if (!client) {
    throw new Error('no hay cliente mongólico');
  }
  const db = client.db('RyS');
  const notas = db.collection('Demandados');
  return notas;
};

export async function GET(Request: NextRequest) {
  const { searchParams } = new URL(Request.url);
  const collection = await Collection();
  const notas = await collection.find({}).toArray();
  if (!notas.length) {
    throw new Error('no hay entradas en mongo');
  }
  const llaveProceso = searchParams.get('llaveProceso');
  if (llaveProceso) {
    const Demandados = notas.filter((nota) => nota.llaveProceso === llaveProceso);
    return new NextResponse(
      JSON.stringify(Demandados),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }

  const _id = searchParams.get('_id');
  if (_id) {
    const Nota = notas.find((nota) => nota._id.toString() === _id);
    return new NextResponse(
      JSON.stringify(Nota),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  return new NextResponse(
    JSON.stringify(notas),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const incomingRequest = await request.json();
  const client = await Collection();
  const outgoingRequest = await client.insertOne(incomingRequest);

  if (!outgoingRequest.acknowledged) {
    return new NextResponse(
      null,
      {
        status: 404,
      }
    );
  }
  return new NextResponse(
    JSON.stringify(outgoingRequest.insertedId + `${outgoingRequest.acknowledged}`),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}

export async function PUT(Request: NextRequest) {
  const updatedNote = await Request.json();
  const notas = await Collection();

  const { searchParams } = new URL(Request.url);
  const id = searchParams.get('id');
  if (id) {
    const query = {
      _id: new ObjectId(id),
    };
    const result = await notas.updateOne(
      query,
      { $set: updatedNote }
    );
    if (result.acknowledged) {
      return new NextResponse(
        `Successfully updated game with id ${id}`,
        {
          status: 200,
          headers: { 'content-type': 'text/html' },
        }
      );
    }
    return new NextResponse(
      `the result was ${
        result.acknowledged
          ? 'true'
          : 'false'
      } with ${result.modifiedCount.toString()}`,
      {
        status: 200,
        headers: {
          'content-type': 'text/html',
        },
      }
    );
  }
  return new NextResponse(
    null,
    {
      status: 404,
    }
  );
}

export async function DELETE(Request: NextRequest) {
  const notas = await Collection();
  const { searchParams } = new URL(Request.url);
  const id = searchParams.get('_id');
  if (id) {
    const query = {
      _id: new ObjectId(id),
    };
    const Result = await notas.deleteOne(query);
    if (Result.acknowledged) {
      const count = Result.deletedCount;
      const response = {
        isOk: true,
        deletedCount: count,
        deletedId: id,
      };
      return new NextResponse(
        JSON.stringify(response),
        {
          status: 202,
          headers: {
            'content-type': 'application/json',
          },
        }
      );
    }
    if (!Result.acknowledged) {
      return new NextResponse(
        JSON.stringify(`error 400 ${id} not deleted`),
        {
          status: 400,
        }
      );
    }
    return new NextResponse(
      JSON.stringify(Result),
      {
        status: 200,
      }
    );
  }
}
