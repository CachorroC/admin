import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { newMerger } from '#@/lib/arrayMerger';
import { fixDemandado, fixFechas } from '#@/lib/fix';
import layout from '#@/styles/scss/layout.module.scss';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import box from '#@/styles/scss/box.module.scss';
import { IntActuaciones } from '#@/lib/types/procesos';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
async function Name(
  { llaveProceso }: { llaveProceso: string }
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso,
    }
  );
  const nombre = proceso.map(
    (
      p
    ) => p.Demandado.Nombre
  ).toString();
  return <h3 className={typography.displayMedium}>{nombre}</h3>;
}
async function Acts (
  { idProceso }: { idProceso: number } 
) {
  const actuaciones = await getActuacionesByidProceso(
    {idProceso: idProceso}
  );
  return (
    <>
      {actuaciones.acts && actuaciones.acts.map(
        (
          act, i, arr
        ) => {
          const { actuacion, anotacion,idRegActuacion, llaveProceso, fechaActuacion } = act;
          return (
            <Card key={ idRegActuacion } name={ actuacion } path={ '/NuevaNota' } llaveProceso={ llaveProceso } idProceso={ idProceso }>
              <p className={typography.bodymedium}>{anotacion ?? fechaActuacion}</p>
            </Card>
          );
        }
      )
      }
    </>
  );
}

export default async function PageProcesosLeftllaveProceso(
  {
    params: { llaveProceso },
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso,
    }
  );
  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: llaveProceso,
    }
  );
  const cantidadProcesos = Procesos.length;
  const cantidadCarpetas = carpeta.length;

  switch (cantidadProcesos) {
  case 0:
    return (
      <Fragment key={llaveProceso}>
        {carpeta.map(
          (
            prc, i, arr
          ) => {
            const { idProceso, _id, Demandado } = prc;
            return (
              <Fragment key={_id.toString()}>
                <Acts key={idProceso} idProceso={idProceso} />
                <Card
                  key={_id.toString()}
                  name={Demandado.Nombre}
                  llaveProceso={prc.llaveProceso}
                  idProceso={prc.idProceso}
                  path={'/Procesos'}
                >
                  <span className='material-symbols-outlined'>
                    clock_loader_30
                  </span>
                </Card>
              </Fragment>
            );
          }
        )}
      </Fragment>
    );
  case 1:
    const { idProceso, sujetosProcesales, despacho } = Procesos[0];
    return (
      <Suspense fallback={<SearchOutputListSkeleton />}>
        <Acts idProceso={idProceso} />
      </Suspense>
    );
  case 2:
    return (
      <>
        {carpeta.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={llaveProceso}
                idProceso={idProceso}
              >
                <p>{Demandado.Direccion}</p>
              </Card>
            );
          }
        )}
      </>
    );

  default:
    return (
      <>
        {carpeta.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={llaveProceso}
                idProceso={idProceso}
              >
                <p>{Demandado.Direccion}</p>
              </Card>
            );
          }
        )}
      </>
    );
  }
}
