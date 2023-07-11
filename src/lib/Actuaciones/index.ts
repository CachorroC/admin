import 'server-only';
import {Codeudor,
  IntCarpetaDemandado,
  intFecha,
  monCarpetaDemandado} from '../types/demandados';
import { monDemandado } from '../types/mongodb';
import {IntActuaciones,
  intConsultaActuaciones} from '../types/procesos';

export async function getActuaciones(
  idProceso: number
) {
  if (idProceso === 0) {
    return [];
  }

  try {
    const request = await fetch (
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        cache: 'no-store'
      }
    );
    if (!request.ok) {
      return [];
    }

    const res =
      (await request.json ()) as intConsultaActuaciones;
    if (!res.actuaciones) {
      return [];
    }
    return res.actuaciones;
  }
  catch {
    (
      error: { message: string }
    ) => {
      console.log (
        error.message ?? 'error'
      );
    };
    return [];
  }
}

export async function getActuacionesByidProceso(
  {
    idProceso
  }: {
  idProceso: number;
}
) {
  if (idProceso === 0) {
    const response: IntActuaciones = {
      idProceso: idProceso,
      text     : {
        statusCode: 0,
        message:
          'no existe el idProceso de este proceso;'
      }
    };
    return response;
  }

  try {
    const request = await fetch (
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        cache: 'no-store'
      }
    );

    if (!request.ok) {
      const text = await request.text ();

      const response: IntActuaciones = {
        idProceso: idProceso,
        text     : text
          ? JSON.parse (
            text
          )
          : ''
      };
      return response;
    }

    const res =
      (await request.json ()) as intConsultaActuaciones;

    if (res.actuaciones) {
      const response: IntActuaciones = {
        idProceso: idProceso,

        text: {
          statusCode: request.status,
          message   : request.statusText
        },
        acts: res.actuaciones
      };
      return response;
    }

    const text = await request.text ();

    const response: IntActuaciones = {
      idProceso: idProceso,
      text     : JSON.parse (
        text
      )
    };
    return response;
  }
  catch {
    (
      error: { message: string }
    ) => {
      const response: IntActuaciones = {
        idProceso: idProceso,
        text     : {
          message   : error.message ?? 'error',
          statusCode: 0
        }
      };
      return response;
    };
  }

  const response: IntActuaciones = {
    idProceso: idProceso,
    text     : {
      message   : 'error final',
      statusCode: 0
    }
  };
  return response;
}

export async function fetchFechas(
  {
    procesos
  }: {
  procesos: monCarpetaDemandado[];
}
) {
  const fechas: intFecha[] = [];

  for (let p = 0; p < procesos.length; p++) {
    const proceso = procesos[ p ];

    const acts = await getActuaciones (
      proceso.idProceso
    );
    if (acts.length > 0) {
      const fecha = {
        ...proceso,
        fecha: acts[ 0 ].fechaActuacion
      };
      fechas.push (
        fecha
      );
    }

    if (acts.length === 0) {
      const fecha = {
        ...proceso,
        fecha: null
      };
      fechas.push (
        fecha
      );
    }

    if (p + 1 === procesos.length) {
      return fechas;
    }
  }

  if (fechas.length !== procesos.length) {
    return fechas;
  }

  return fechas;
}

export async function fetchFecha(
  {
    proceso
  }: {
  proceso: monCarpetaDemandado;
}
) {
  const acts = await getActuacionesByidProceso (
    {
      idProceso: proceso.idProceso
    }
  );

  if (acts.acts) {
    const fecha: intFecha = {
      ...proceso,
      fecha: acts.acts[ 0 ].fechaActuacion
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

  for (let p = 0; p < idProcesos.length; p++) {
    const proceso = idProcesos[ p ];

    const acts = await getActuaciones (
      proceso
    );
    if (acts.length > 0) {
      lastActuaciones.push (
        acts[ 0 ]
      );
    }
    if (p + 1 === idProcesos.length) {
      return lastActuaciones;
    }
  }
  return lastActuaciones;
}
