import 'server-only';
import { NextResponse,
         type NextRequest } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { Collection, ObjectId } from 'mongodb';
import { getCarpetas } from '#@/lib/Carpetas';
import { carpetasCollection } from '#@/lib/Carpetas';
import * as fs from 'fs/promises';
import { IntCarpeta } from '#@/lib/types/carpeta';

//? aqui van las peticiones a todas las carpetas y colleccion carpetas
export async function GET(
  Request: NextRequest 
) {
  const {
    searchParams,
    host,
    hostname,
    pathname
  } = new URL(
    Request.url 
  );

  const collection = await carpetasCollection();

  const carpetas = await collection
        .find(
          {} 
        )
        .toArray();

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
