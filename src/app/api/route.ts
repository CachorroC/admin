import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/RamaJudicial';
import { newMerger } from '#@/lib/arrayMerger';
import { getProcesos } from '#@/lib/procesos';
import { NextResponse } from 'next/server';

export async function GET () {

  const procesos = await getProcesos();
  const fechas = await fetchFechas(
    {
      procesos: procesos
    }
  );
  const carpetas = await getCarpetas();
  const merged = newMerger(
    {
      a: carpetas,
      b: fechas,
    }
  );
  const mergedReverse = newMerger(
    {
      a: fechas,
      b: carpetas,
    }
  );
  const body = {
    ...merged,

  };
  return new NextResponse(
    JSON.stringify(
      mergedReverse
    ),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      }
    }
  );


}