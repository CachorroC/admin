import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';
import { newMerger } from '#@/lib/arrayMerger';
import { fixDemandado } from '#@/lib/fix';
import layout from '#@/styles/scss/layout.module.scss';
import { Fragment } from 'react';

export default async function Page (
  {
    params
  }: {
    params: {
    llaveProceso: string;
  }
  }
) {

  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return (
    <div className={ layout.main }>
      <div className={ layout.right }>
        {
          Procesos.map(
            (
              proceso
            ) => {
              const nombre = fixDemandado(
                proceso.sujetosProcesales
              );
              return (
                <Card key={ proceso.idProceso } name={ nombre } path={ '/Procesos' } llaveProceso={ params.llaveProceso } idProceso={ proceso.idProceso }>
                  <p>{nombre}</p>
                </Card>
              );
            }
          )
        }
      </div>
      <div className={ layout.left }>
        {
          carpeta.map(
            (
              crp
            ) => (
              <Fragment key={ crp._id }>
                <h1>{ crp.Demandado.Nombre }</h1>
                <p>{ crp.Carpeta}</p>
              </Fragment>
            )
          )
        }
      </div>
    </div>
  );
}