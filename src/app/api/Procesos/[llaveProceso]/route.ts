import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '#@/lib/mongodb';
import { monDemandado } from '#@/lib/types/mongodb';

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { llaveProceso: string };
  }
) {
  const llaveProceso = params.llaveProceso;
  const { searchParams } = new URL(request.url);
  const client = await clientPromise;
  const procesos = (await client
    .db('RyS')
    .collection('Procesos')
    .find({})
    .toArray()) as unknown as monDemandado[];
  const delay = searchParams.get('delay');
  const Procesos = procesos.filter((proceso) => proceso.llaveProceso === llaveProceso);
  if (delay) {
    await new Promise((resolve) => setTimeout(
      resolve,
      Number(delay)
    ));
  }
  const idProceso = searchParams.get('idProceso');
  if (idProceso) {
    const Procesos = procesos.find((proceso) => proceso.idProceso.toString() === idProceso);
    if (!Procesos) {
      const num = parseInt(idProceso);
      const noProc = {
        idProceso: num,
        llaveProceso: params.llaveProceso,
        sujetosProcesales: 'no existe',
      };
      return new NextResponse(
        JSON.stringify(noProc),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
          },
        }
      );
    }
    return new NextResponse(
      JSON.stringify(Procesos),
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  return new NextResponse(
    JSON.stringify(Procesos),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
