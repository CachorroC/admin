import 'server-only';
import { Codeudor,
         IntCarpeta,
         MonCarpeta,
         intFecha } from '../types/demandados';
import { monDemandado } from '../types/mongodb';
import { IntActuaciones,
         intActuacion,
         intConsultaActuaciones } from '../types/procesos';
import { carpetasCollection } from '../Carpetas';
import { sleep } from '../fix';

export function wait(
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
  const awaitTime = index * 2000;

  if ( idProceso === 0 || idProceso === 404 ) {
    console.log(
      `idProceso es ${ idProceso }`
    );

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
        cache: 'no-store'
      }
    );

    if ( !request.ok ) {
      console.log(
        `Get Actuaciones request was not ok ${ request.status }`
      );

      return [];
    }
    const res = ( await request.json() ) as intConsultaActuaciones;

    if ( !res.actuaciones ) {
      console.log(
        'Get Actuaciones no tiene actuaciones'
      );

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

    if ( updateCarpeta.modifiedCount >= 1 ) {
      console.log(
        `${ idProceso } was ${ updateCarpeta.acknowledged } with ${ updateCarpeta.modifiedCount } documents modified`
      );
    }

    return res.actuaciones;
  } catch ( err ) {
    console.log(
      err ?? 'error'
    );

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
