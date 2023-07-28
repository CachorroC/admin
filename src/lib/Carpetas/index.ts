import 'server-only';
import clientPromise from '#@/lib/mongodb';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { IntCarpeta,
         MonCarpeta,
         carpetaConvert } from '../types/demandados';
import { fetchActuaciones, getActuaciones } from '../Actuaciones';

export const carpetasCollection = async () => {
  const client = await clientPromise;

  if ( !client ) {
    throw new Error(
      'no hay cliente mongólico'
    );
  }

  const db = client.db(
    'RyS'
  );

  const carpetas
    = db.collection<IntCarpeta>(
      'Carpetas'
    );

  return carpetas;
};


export async function fetchCarpetas() {
  const collection = await carpetasCollection();

  const carpetasRaw = await collection
        .find(
          {}
        )
        .toArray();

  const carpetas
    = carpetaConvert.toMonCarpetas(
      carpetasRaw
    );

  return carpetas;
}

export async function getCarpetas () {
  const carpetas = await fetchCarpetas();
  const carpetasMAnagementMap: Map<string, MonCarpeta> = new Map();

  for ( const carpeta of carpetas ) {
    carpetasMAnagementMap.set(
      carpeta._id, carpeta
    );

    const index = carpetas.indexOf(
      carpeta
    );

    if ( carpeta.idProceso.length === 0 ) {
      continue;
    }

    if ( carpeta.idProceso.length === 1 ) {

      const actuaciones = await fetchActuaciones(
        {
          idProceso: carpeta.idProceso[ 0 ],
          index    : index
        }
      );

      if ( actuaciones.length === 0 ) {
        continue;
      }
      const ultimaActuacion = actuaciones[ 0 ];

      const newCarpeta: MonCarpeta = {
        ...carpeta,
        fecha: new Date(
          ultimaActuacion.fechaActuacion
        )
      };

      carpetasMAnagementMap.set(
        newCarpeta._id, newCarpeta
      );


    }
    const ultimasActuaciones = [];

    for ( const idp of carpeta.idProceso ) {

      const actuaciones = await fetchActuaciones(
        {
          idProceso: idp,
          index    : index
        }
      );

      if( actuaciones.length === 0 ){
        continue;
      }
      const ultimaActuacion = actuaciones[ 0 ];
      ultimasActuaciones.push(
        ultimaActuacion
      );
    }

    const newCarpeta = {
      ...carpeta,
      ultimasActuaciones: ultimasActuaciones
    };

    carpetasMAnagementMap.set(
      newCarpeta._id, newCarpeta
    );
  }

  return Array.from(
    carpetasMAnagementMap.values()
  );
}

export const getCarpetasByllaveProceso = async (
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) => {
  const carpetas = await getCarpetas();

  const Carpetas = carpetas.find(
    (
      carpeta
    ) => {
      return carpeta.llaveProceso === llaveProceso;
    }
  );

  return Carpetas;
};

export const getCarpetaById = async (
  {
    _id
  }: {
  _id: string;
}
) => {
  const carpetas = await getCarpetas();

  const Carpeta = carpetas.find(
    (
      carpeta
    ) => {
      return carpeta._id === _id;
    }
  );

  if ( !Carpeta ) {
    return null;
  }

  return Carpeta;
};
