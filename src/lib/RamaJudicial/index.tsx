import { notFound } from 'next/navigation';
import {
  IntActuaciones,
  intConsultaActuaciones,
  intConsultaNumeroRadicacion,
} from '../types/procesos';
import { monDemandado } from '../types/mongodb';
import { cache } from 'react';
import { sleep } from '#@/lib/helper';
import { intFecha, monCarpetaDemandado } from '../types/demandados';
import { Card } from '#@/components/card/card';
import { JuzgadosByllaveProceso } from '#@/lib/RamaJudicial/juzgados';

export const Juzgados = cache(
  async ({ procesos }: { procesos: monCarpetaDemandado[] }) => {
    const rowPrc = [];
    const juzgados = await Promise.all(
      procesos.map(async (proceso, i) => {
        sleep(i * 500);
        rowPrc.push(Request);
        return (
          <JuzgadosByllaveProceso
            key={proceso._id}
            llaveProceso={proceso.llaveProceso}
          />
        );
      })
    );
    return <>{juzgados}</>;
  }
);
export async function getConsultaNumeroRadicion({
  llaveProceso,
}: {
  llaveProceso: string;
}) {
  const Request = await fetch(
    `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=false`
  );
  if (!Request.ok) {
    console.log(Request.text());
    throw new Error('not ok getJuzgadoByllaveProceso');
  }
  const res = (await Request.json()) as intConsultaNumeroRadicacion;
  if (!res.procesos) {
    notFound();
  }
  return res.procesos;
}

export async function getActuacionesByidProceso({
  idProcesos,
}: {
  idProcesos: number[] | undefined;
}) {
  if (!idProcesos || idProcesos.length === 0) {
    throw new Error('error');
  }
  const nMap = idProcesos.map((idProceso, index) => {
    const rows: IntActuaciones[] = [];
    setTimeout(async () => {
      try {
        const request = await fetch(
          `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${idProceso}`,
          { cache: 'no-store' }
        );
        if (!request.ok) {
          const text = await request.text();
          const response: IntActuaciones = {
            idProceso: idProceso,
            text: text ? JSON.parse(text) : '',
          };
          rows.push(response);
          return response;
        }

        const res = (await request.json()) as intConsultaActuaciones;
        if (res.actuaciones) {
          const response: IntActuaciones = {
            idProceso: idProceso,

            text: {
              statusCode: request.status,
              message: request.statusText,
            },
            acts: res.actuaciones,
          };
          rows.push(response);
          return response;
        }
        const text = await request.text();
        const response: IntActuaciones = {
          idProceso: idProceso,
          text: JSON.parse(text),
        };
        rows.push(response);
        return response;
      } catch {
        (error: unknown | any) => {
          const response: IntActuaciones = {
            idProceso: idProceso,
            text: {
              message: error.message ?? 'error',
              statusCode: 0,
            },
          };
          rows.push(response);
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
      rows.push(response);
      return response;
    }, index * 1000);
    return rows;
  });
  return nMap;
}

export async function fetchFechas({
  procesos,
}: {
  procesos: monCarpetaDemandado[];
}) {
  const fechas: intFecha[] = [];
  for (let p = 0; p < procesos.length; p++) {
    const proceso = procesos[p];
    const acts = (
      await getActuacionesByidProceso({ idProcesos: proceso.idProceso })
    ).flat();
    if (acts.acts) {
      const fecha = {
        ...proceso,
        fecha: acts.acts[0].fechaActuacion,
      };
      fechas.push(fecha);
    }
    if (!acts.acts) {
      const fecha = {
        ...proceso,
        fecha: acts.text.message,
      };
      fechas.push(fecha);
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

export async function fetchFecha({
  proceso,
}: {
  proceso: monCarpetaDemandado;
}) {
  const acts = (
    await getActuacionesByidProceso({ idProcesos: proceso.idProceso })
  ).flat();
  if (acts.acts) {
    const fecha: intFecha = {
      ...proceso,
      fecha: acts.acts[0].fechaActuacion,
    };
    return fecha;
  }

  const fecha: intFecha = {
    ...proceso,
    fecha: acts.text.message,
  };
  return fecha;
}
