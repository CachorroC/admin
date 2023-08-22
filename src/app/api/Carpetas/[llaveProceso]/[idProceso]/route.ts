import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  context: {
    params: {
      llaveProceso: string;
      idProceso: number;
    };
  }
) {
  const idProceso = context.params.idProceso;

  const llaveProceso
    = context.params.llaveProceso;
}
