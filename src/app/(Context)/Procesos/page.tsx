import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { getNotas } from '#@/lib/notas';
import { getProcesos } from '#@/lib/procesos';

export default async function Page () {
  const procesos = await getProcesos();
  const notas = await getNotas();
  const arr = arrayMergerByllaveProceso(
    {
      a: procesos,
      b: notas
    }
  );
  return (
    <div>
      { procesos.map(
        (
          prc
        ) => (
          <div key={ prc.idProceso }>
            <p>{prc.sujetosProcesales}</p>
          </div>
        )
      ) }
      {
        arr.map(
          (
            p
          ) => (
            <div key={ p.llaveProceso }>{
              JSON.stringify(
                p
              )
            }
            <p>{ p.sujetosProcesales }</p>
            <p>{JSON.stringify(
              p.tareas
            )}</p>
            </div>
          )
        )
      }
    </div>
  );
}