import 'server-only';
import { NextResponse,
         type NextRequest } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { Collection, ObjectId } from 'mongodb';
import { getCarpetas } from '#@/lib/Carpetas';
import { carpetasCollection } from '#@/lib/Carpetas';
import * as fs from 'fs/promises';
import { IntCarpeta } from '#@/lib/types/carpeta';

export async function GET(
  Request: NextRequest
) {
  const {
    searchParams
  } = new URL(
    Request.url
  );
  const collection = await carpetasCollection();

  const carpetas = await collection
        .find(
          {}
        )
        .toArray();

  const onlyJuzgado = searchParams.get(
    'juzgado'
  );

  if ( onlyJuzgado ) {
    const juzgados = carpetas.map(
      (
        carpeta
      ) => {
        const juzgado
        = carpeta.demanda?.juzgado.origen.tipo;

        return juzgado;
      }
    );

    return new NextResponse(
      JSON.stringify(
        juzgados
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json' 
        }
      }
    );
  }

  const llaveProceso = searchParams.get(
    'llaveProceso'
  );

  if ( llaveProceso ) {
    const Demandados = carpetas.filter(
      (
        carpeta
      ) => {
        return (
          carpeta.llaveProceso === llaveProceso
        );
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

  const idProceso = searchParams.get(
    'idProceso'
  );

  if ( idProceso ) {
    const Demandados = carpetas.filter(
      (
        carpeta
      ) => {
        return (
          carpeta.llaveProceso === llaveProceso
        );
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

  const _id = searchParams.get(
    '_id'
  );

  if ( _id ) {
    const Carpeta = carpetas.filter(
      (
        carpeta
      ) => {
        return carpeta._id.toString() === _id;
      }
    );

    return new NextResponse(
      JSON.stringify(
        Carpeta
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

export async function PUT(
  request: NextRequest
) {
  const incomingRequest
    = ( await request.json() ) as IntCarpeta;
  const client = await carpetasCollection();
  fs.mkdir(
    `./src/lib/Carpetas/${ incomingRequest.deudor.cedula }`,
    {
      recursive: true 
    }
  );

  fs.cp(
    './src/lib/global',
    `./src/lib/Carpetas/${ incomingRequest.deudor.cedula }`,
    {
      recursive: true 
    }
  );
  fs.writeFile(
    `./src/lib/Carpetas/${ incomingRequest.deudor.cedula }/carpeta.json`,
    JSON.stringify(
      incomingRequest
    )
  );

  const outgoingRequest
    = await client.findOneAndUpdate(
      {
        'deudor.cedula':
          incomingRequest.deudor.cedula
      },
      {
        $set: incomingRequest 
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

  if ( !outgoingRequest.ok ) {
    throw new Error(
      `${ outgoingRequest.ok }`
    );
  }

  return new NextResponse(
    JSON.stringify(
      outgoingRequest.value
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json' 
      }
    }
  );
}
