import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { getProcesosByllaveProceso } from '#@/lib/procesos';

export default async function Page (
  { params }: { params: { llaveProceso: string;  idProceso: number } }
) {
  const procesos = await getProcesosByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const notas = await getNotasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const united = arrayMergerByllaveProceso(
    {
      a: notas,
      b: procesos
    }
  );
  return (
    <>
      { procesos.map(
        (
          prc
        ) => (
          <p key={prc.idProceso}>{JSON.stringify(
            prc
          )}</p>
        )
      ) }
      { notas.map(
        (
          prc
        ) => (
          <p key={prc._id}>{JSON.stringify(
            prc
          )}</p>
        )
      ) }
      { united.map(
        (
          prc
        ) => (
          <p key={prc._id}>{JSON.stringify(
            prc
          )}</p>
        )
      ) }

    </>
  );
}