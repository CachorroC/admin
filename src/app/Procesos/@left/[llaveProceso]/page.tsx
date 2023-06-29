import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { Fragment, Suspense } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import layout from '#@/styles/scss/layout.module.scss';

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
  const Carpetas = await getCarpetasByllaveProceso(
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
  const cantidadCarpetas =Carpetas.length;

  switch (cantidadCarpetas) {
  case 0:
    return (
      <Fragment key={cantidadProcesos}>
        <h1 className={typography.displayLarge}>Page</h1>
        {Carpetas.map(
          (
            prc, i, arr
          ) => {
            const { idProceso, _id, Demandado } = prc;
            return (
              <Fragment key={_id.toString()}>
                <div className={ layout.section }>
                  <Acts key={idProceso} idProceso={idProceso} />
                </div>
                <Card
                  key={_id.toString()}
                  name={Demandado.Nombre}
                  llaveProceso={prc.llaveProceso}
                  idProceso={prc.idProceso}
                  path={'/Procesos'}
                >
                  <span className='material-symbols-outlined'>
                    {`counter_${cantidadCarpetas}`}
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
      <Fragment key={cantidadProcesos}>
        {Carpetas.map(
          (
            carp, index, arr
          ) => {
            const {  Demandado, _id } = carp;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={llaveProceso}
                idProceso={carp.idProceso}
              >
                <p>{ Demandado.Direccion }</p>
                <span className='material-symbols-outlined'>
                  {`counter_${cantidadCarpetas}`}
                </span>
              </Card>

            );
          }
        )}
        <h1 className={typography.displayLarge} key={cantidadProcesos}>Page</h1>
        <div className={ layout.section }>

          <Acts idProceso={idProceso} />

        </div>

      </Fragment>
    );
  case 2:
    return (
      <Fragment key={cantidadProcesos}>
        <h1 className={typography.displayLarge} key={cantidadProcesos}>Page</h1>
        {Carpetas.map(
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
                > <span className='material-symbols-outlined'>
                    {`counter_${cantidadCarpetas}`}
                  </span>
                  <p>{Demandado.Direccion}</p>
                </Card>
                <div className={ layout.section } >
                  <Acts idProceso={ idProceso } />
                </div>
              </Fragment>
            );
          }
        )}
      </Fragment>
    );

  default:
    return (
      <Fragment key={cantidadProcesos}>
        <h1 className={typography.displayLarge} key={cantidadProcesos}>Page</h1>
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
                  <p>{ Demandado.Direccion }</p>
                  <span className='material-symbols-outlined'>
                    {`counter_${cantidadCarpetas}`}
                  </span>
                </Card>
                <Acts idProceso={idProceso} />
              </Fragment>

            );
          }
        )}
      </Fragment>
    );
  }
}
