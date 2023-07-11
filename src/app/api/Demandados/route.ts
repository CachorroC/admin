import 'server-only';
import { NextRequest,
         NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { IntCarpetaDemandado,
         monCarpetaDemandado } from '#@/lib/types/demandados';

const Collection = async () => {
    const client = await clientPromise;

    if ( !client ) {
      throw new Error(
        'no hay cliente mongólico' 
      );
    }

    const db = client.db(
      'RyS' 
    );

    const demandados
    = db.collection<IntCarpetaDemandado>(
      'Demandados'
    );

    return demandados;
};

const carpetas = async () => {
    const carpetasMap: monCarpetaDemandado[] = [];
    const collection = await Collection();

    const carpetasRaw = await collection
      .find(
        {} 
      )
      .toArray();

    carpetasRaw.forEach(
      (
        carpeta, index, arr 
      ) => {
          console.log(
            carpeta._id 
          );

          const carpetaToMongo: monCarpetaDemandado = {
            ...carpeta,
            _id: carpeta._id.toString()
          };

          return carpetasMap.push(
            carpetaToMongo 
          );
      } 
    );
    console.log(
      carpetasMap 
    );

    return carpetasMap;
};

export async function GET(
  Request: NextRequest 
) {
    const carpetasMap: monCarpetaDemandado[] = [];

    const { searchParams } = new URL(
      Request.url 
    );
    const collection = await Collection();

    const carpetasRaw = await collection
      .find(
        {} 
      )
      .toArray();

    carpetasRaw.forEach(
      (
        carpeta, index, arr 
      ) => {
          console.log(
            carpeta._id 
          );

          const carpetaToMongo: monCarpetaDemandado = {
            ...carpeta,
            _id: carpeta._id.toString()
          };

          return carpetasMap.push(
            carpetaToMongo 
          );
      } 
    );

    const llaveProceso = searchParams.get(
      'llaveProceso'
    );

    if ( llaveProceso ) {
      const Demandados = carpetasMap.filter(
        (
          nota 
        ) => {
            return nota.llaveProceso === llaveProceso;
        }
      );

      return new NextResponse(
        JSON.stringify(
          Demandados 
        ),
        {
          status : 200,
          headers: { 'content-type': 'application/json' }
        }
      );
    }

    const _id = searchParams.get(
      '_id' 
    );

    if ( _id ) {
      const Nota = carpetasMap.find(
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
          headers: { 'content-type': 'application/json' }
        }
      );
    }

    return new NextResponse(
      JSON.stringify(
        carpetasMap 
      ),
      {
        status : 200,
        headers: { 'content-type': 'application/json' }
      }
    );
}

export async function POST(
  request: NextRequest 
) {
    const incomingRequest
    = ( await request.json() ) as IntCarpetaDemandado;
    const client = await Collection();

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
        outgoingRequest.insertedId
        + `${ outgoingRequest.acknowledged }`
      ),
      {
        status : 200,
        headers: { 'content-type': 'application/json' }
      }
    );
}

export async function PUT(
  Request: NextRequest 
) {
    const updatedNote
    = ( await Request.json() ) as IntCarpetaDemandado;
    const collection = await Collection();

    const { searchParams } = new URL(
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

      const result
      = await collection.findOneAndUpdate(
        query,
        { $set: updatedNote } 
      );

      if ( result.ok ) {
        return new NextResponse(
          `Successfully updated game with id ${ result.value }`,
          {
            status : 200,
            headers: { 'content-type': 'text/html' }
          }
        );
      }

      return new NextResponse(
        `the result was ${
          result.ok
            ? 'true'
            : 'false'
        } with ${ result.value }`,
        {
          status : 304,
          headers: { 'content-type': 'text/html' }
        }
      );
    }

    return new NextResponse(
      null,
      { status: 304 } 
    );
}

export async function DELETE(
  Request: NextRequest
) {
    const notas = await Collection();

    const { searchParams } = new URL(
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
            headers: { 'content-type': 'application/json' }
          }
        );
      }

      if ( !Result.acknowledged ) {
        return new NextResponse(
          JSON.stringify(
            `error 400 ${ id } not deleted`
          ),
          { status: 400 }
        );
      }

      return new NextResponse(
        JSON.stringify(
          Result 
        ),
        { status: 200 }
      );
    }
}
