import 'server-only';
import { Codeudor,
         IntCarpeta,
         MonCarpeta,
         intFecha } from '../types/demandados';
import { monDemandado } from '../types/mongodb';
import { IntActuaciones, intConsultaActuaciones } from '../types/procesos';
import { carpetasCollection } from '../Carpetas';

function wait(
  delay: number 
) {
  return new Promise(
    (
      resolve 
    ) => {
      return setTimeout(
        resolve,
        delay 
      );
    } 
  );
}

export async function getActuaciones(
  idProceso: number, index: number 
) {
  console.log(
    index 
  );
  const awaitTime = index * 1000;
  console.log(
    'awaited' 
  );

  if ( idProceso === 0 || idProceso === 404 ) {
    return [];
  }
  const collection = await carpetasCollection();
  wait(
    awaitTime 
  );

  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        next: {
          revalidate: 32400
        }
      }
    );

    if ( !request.ok ) {
      return [];
    }
    const res = ( await request.json() ) as intConsultaActuaciones;

    if ( !res.actuaciones ) {
      return [];
    }
    const ultimaActuacion = res.actuaciones[ 0 ];

    const updateCarpeta = await collection.updateOne(
      {
        idProceso: idProceso
      },
      {
        $set: {
          ultimaActuacion: ultimaActuacion
        }
      }
    );
    console.log(
      `${ idProceso } was ${ updateCarpeta.acknowledged } with ${ updateCarpeta.modifiedCount } documents modified`
    );

    return res.actuaciones;
  } catch {
    (
      error: { message: string } 
    ) => {
      console.log(
        error.message ?? 'error' 
      );
    };

    return [];
  }
}

export async function fetchFechas(
  {
    procesos 
  }: { procesos: MonCarpeta[] } 
) {
  const fechas: intFecha[] = [];

  for ( let p = 0; p < procesos.length; p++ ) {
    const proceso = procesos[ p ];

    const fetch = await fetchFecha(
      {
        proceso: proceso,
        index  : p
      } 
    );
    fechas.push(
      fetch 
    );
  }

  return fechas;
}

export async function fetchFecha(
  {
    proceso,
    index
  }: {
  proceso: MonCarpeta;
  index: number;
} 
) {
  const acts = await getActuaciones(
    proceso.idProceso,
    index 
  );

  if ( acts.length >= 1 ) {
    const fecha: intFecha = {
      ...proceso,
      fecha: acts[ 0 ].fechaActuacion
    };

    return fecha;
  }

  const fecha: intFecha = {
    ...proceso,
    fecha: null
  };

  return fecha;
}

export async function fetchLastActuaciones(
  {
    idProcesos
  }: {
  idProcesos: number[];
} 
) {
  const lastActuaciones = [];

  for ( let p = 0; p < idProcesos.length; p++ ) {
    const proceso = idProcesos[ p ];

    const acts = await getActuaciones(
      proceso,
      p 
    );

    if ( acts.length > 0 ) {
      lastActuaciones.push(
        acts[ 0 ] 
      );
    }

    if ( p + 1 === idProcesos.length ) {
      return lastActuaciones;
    }
  }

  return lastActuaciones;
}
