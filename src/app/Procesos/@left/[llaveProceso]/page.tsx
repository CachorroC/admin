import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
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
      <Fragment key={ llaveProceso }>
        <h1 className={typography.displayLarge}>Page</h1>
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
      <>
        {carpeta.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Fragment key={ _id.toString() }>

                <Card
                  key={_id.toString()}
                  name={Demandado.Nombre}
                  path={'/Procesos'}
                  llaveProceso={llaveProceso}
                  idProceso={idProceso}
                >
                  <p>{Demandado.Direccion}</p>
                </Card>
                <Acts idProceso={idProceso } />
              </Fragment>
            );
          }
        )}
        <Suspense fallback={ <SearchOutputListSkeleton /> }>
          <h1 className={typography.displayLarge}>Page</h1>
          <Acts idProceso={idProceso} />
        </Suspense>

      </>
    );
  case 2:
    return (
      <>
        <h1 className={typography.displayLarge}>Page</h1>
        {carpeta.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Fragment key={ _id.toString() }>

                <Card
                  key={_id.toString()}
                  name={Demandado.Nombre}
                  path={'/Procesos'}
                  llaveProceso={llaveProceso}
                  idProceso={idProceso}
                >
                  <p>{Demandado.Direccion}</p>
                </Card>
                <Acts idProceso={idProceso } />
              </Fragment>
            );
          }
        )}
      </>
    );

  default:
    return (
      <>
        <h1 className={typography.displayLarge}>Page</h1>
        {carpeta.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Fragment key={_id.toString()}>
                <Card
                  key={_id.toString()}
                  name={Demandado.Nombre}
                  path={'/Procesos'}
                  llaveProceso={llaveProceso}
                  idProceso={idProceso}
                >
                  <p>{Demandado.Direccion}</p>
                </Card>
                <Acts idProceso={idProceso} />
              </Fragment>

            );
          }
        )}
      </>
    );
  }
}
