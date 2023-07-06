import { Card } from '#@/components/card/card';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {getActuacionesByidProceso,
  getConsultaNumeroRadicion,} from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';

async function Acts(
  {
    idProceso 
  }: { idProceso: number }
) {
    const actuaciones = await getActuacionesByidProceso (
      {
        idProceso: idProceso,
      }
    );
    return (
      <>
        {actuaciones.acts &&
        actuaciones.acts.map (
          (
            act, i, arr
          ) => {
              const {
                actuacion,
                anotacion,
                idRegActuacion,
                llaveProceso,
                fechaActuacion,
              } = act;
              return (
                <Card
                  key={idRegActuacion}
                  name={actuacion}
                  path={'/NuevaNota'}
                  llaveProceso={llaveProceso}
                  idProceso={idProceso}>
                  <p className={typography.bodymedium}>
                    {anotacion ?? fechaActuacion}
                  </p>
                </Card>
              );
          }
        )}
      </>
    );
}

export default async function DefaultProcesosLeftllaveProceso(
  {
    params: {
      llaveProceso 
    },
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
    const carpeta = await getCarpetasByllaveProceso (
      {
        llaveProceso: llaveProceso,
      }
    );
    const Procesos = await getConsultaNumeroRadicion (
      {
        llaveProceso: llaveProceso,
      }
    );
    const cantidadProcesos = Procesos.length;

    switch (cantidadProcesos) {
        case 0:
          return (
            <Fragment key={llaveProceso}>
              <h1 className={typography.displayLarge}>Default</h1>
              {carpeta.map (
                (
                  prc, i, arr
                ) => {
                    const {
                      idProceso, _id, Deudor 
                    } = prc;
                    return (
                      <Fragment key={_id}>
                        <h1 className={typography.displayLarge}>Default</h1>
                        <Acts
                          key={idProceso}
                          idProceso={idProceso}
                        />
                        <Card
                          key={_id}
                          name={Deudor.Nombre}
                          llaveProceso={prc.llaveProceso}
                          idProceso={prc.idProceso}
                          path={'/Procesos'}>
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
          const {
            idProceso, sujetosProcesales, despacho 
          } = Procesos[ 0 ];
          return (
            <Suspense fallback={<SearchOutputListSkeleton />}>
              <h1 className={typography.displayLarge}>Default</h1>
              <Acts idProceso={idProceso} />
            </Suspense>
          );
        case 2:
          return (
            <>
              <h1 className={typography.displayLarge}>Default</h1>
              {carpeta.map (
                (
                  carp, index, arr
                ) => {
                    const {
                      idProceso, Deudor, _id 
                    } = carp;
                    return (
                      <Card
                        key={_id}
                        name={Deudor.Nombre}
                        path={'/Procesos'}
                        llaveProceso={llaveProceso}
                        idProceso={idProceso}>
                        <p>{Deudor.Direccion}</p>
                      </Card>
                    );
                }
              )}
            </>
          );

        default:
          return (
            <>
              <h1 className={typography.displayLarge}>Default Default</h1>
              {carpeta.map (
                (
                  carp, index, arr
                ) => {
                    const {
                      idProceso, Deudor, _id 
                    } = carp;
                    return (
                      <Card
                        key={_id}
                        name={Deudor.Nombre}
                        path={'/Procesos'}
                        llaveProceso={llaveProceso}
                        idProceso={idProceso}>
                        <p>{Deudor.Direccion}</p>
                      </Card>
                    );
                }
              )}
            </>
          );
    }
}
