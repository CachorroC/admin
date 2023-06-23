import { notFound } from 'next/navigation';
import { IntActuaciones, intConsultaActuaciones, intConsultaNumeroRadicacion } from '../types/procesos';
import { monDemandado, intFecha } from '../types/mongodb';

export async function getConsultaNumeroRadicion (
  {
    llaveProceso
  }: { llaveProceso: string }
) {

  const Request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
  );
  if ( !Request.ok ) {
    console.log(
      Request.text()
    );
    throw new Error(
      'not ok getJuzgadoByllaveProceso'
    );
  }
  const res = ( await Request.json() ) as intConsultaNumeroRadicacion;
  if ( !res.procesos ) {
    notFound();
  }
  return res.procesos;
}

export async function getActuacionesByidProceso (
  { idProceso }: { idProceso: number }
) {
  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      { cache: 'no-store' }
    );
    if ( !request.ok ) {
      const text = await request.text();
      const response: IntActuaciones = {
        idProceso: idProceso,
        text: text
          ? JSON.parse(
            text
          )
          : '',
      };
      return response;
    }

    const res = ( await request.json() ) as intConsultaActuaciones;
    if ( res.actuaciones ) {
      const response: IntActuaciones = {
        idProceso: idProceso,

        text: {
          statusCode: request.status,
          message: request.statusText,
        },
        acts: res.actuaciones,
      };
      return response;
    }
    const text = await request.text();
    const response: IntActuaciones = {
      idProceso: idProceso,
      text: JSON.parse(
        text
      ),
    };
    return response;
  }
  catch {
    (
      error: unknown | any
    ) => {
      const response: IntActuaciones = {
        idProceso: idProceso,
        text: {
          message: error.message ?? 'error',
          statusCode: 0,
        },
      };
      return response;
    };
  }
  const response: IntActuaciones = {
    idProceso: idProceso,
    text: {
      message: 'error final',
      statusCode: 0,
    },
  };
  return response;
}

export async function fetchFechas (
  { procesos }: { procesos: monDemandado[] }
) {
  const fechas: intFecha[] = [];
  for ( let p = 0; p < procesos.length; p++ ) {
    const proceso = procesos[ p ];
    const acts = await getActuacionesByidProceso(
      { idProceso: proceso.idProceso }
    );
    if ( acts.acts ) {
      const fecha = {
        ...proceso,
        fecha: acts.acts[ 0 ].fechaActuacion,
      };
      fechas.push(
        fecha
      );
    }
    if ( !acts.acts ) {
      const fecha = {
        ...proceso,
        fecha: acts.text.message,
      };
      fechas.push(
        fecha
      );
    }
    if ( p + 1 === procesos.length ) {
      return fechas;
    }
  }
  if ( fechas.length !== procesos.length ) {
    return fechas;
  }
  return fechas;
}

export async function fetchFecha (
  { proceso }: { proceso: monDemandado }
) {
  const acts = await getActuacionesByidProceso(
    { idProceso: proceso.idProceso }
  );
  if ( acts.acts ) {
    const fecha: intFecha = {
      ...proceso,
      fecha: acts.acts[ 0 ].fechaActuacion,
    };
    return fecha;
  }

  const fecha: intFecha = {
    ...proceso,
    fecha: acts.text.message,
  };
  return fecha;
}
