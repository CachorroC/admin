import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { fixDemandado, fixFechas } from '#@/lib/fix';
import layout from '#@/styles/scss/layout.module.scss';
import { Fragment } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import box from '#@/styles/scss/box.module.scss';
import { IntActuaciones } from '#@/lib/types/procesos';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas, getNotasByllaveProceso } from '#@/lib/notas';
import { NewNota } from '#@/components/nota/NuevaNota';
import note from '#@/components/nota/note.module.scss';
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
async function Acts(
  { idProceso }: { idProceso: number }
) {
  const acts = await fetch(
    `${getBaseUrl()}/api/Procesos/Actuaciones/${idProceso}`
  );
  const res = (await acts.json()) as IntActuaciones;

  return (
    <div className={box.container} key={idProceso}>
      <h1 className={typography.titleLarge}>{res.text.message}</h1>
      <p className={typography.bodyMedium}>{res.text.statusCode.toString()}</p>
      {res.acts
        ? (
          <>
            <p>{res.acts[0].actuacion}</p>
            <p>{res.acts[0].anotacion}</p>
            <p>{fixFechas(
              res.acts[0].fechaActuacion
            )}</p>
          </>
        )
        : (
          <p>nothing</p>
        )}
    </div>
  );
}

export default async function PageProcesosRightllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const cantidadCarpetas = carpeta.length;
  const notasllaveProceso = await getNotasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const cantidadNotas = notasllaveProceso.length;
  const notas = await getNotas();
  switch (cantidadNotas) {
  case 0:
    return (
      <>
        <NewNota llaveProceso={ params.llaveProceso } uri={ `${ getBaseUrl()}`} />
        {notas.map(
          (
            prc, i, arr
          ) => {
            const { nota, tareas, _id, llaveProceso, pathname } = prc;
            return (
              <Fragment key={_id.toString()}>
                <Card
                  key={_id.toString()}
                  name={nota}
                  llaveProceso={llaveProceso}
                  path={pathname}
                >
                  { tareas.map(
                    (
                      t, i, arr
                    ) => {
                      const { isDone, tarea, dueDate } = t;
                      return (
                        <div key={ i } className={ isDone
                          ? note.tarea
                          : note.tareaDone }>
                          <p className={typography.bodyMedium}>{tarea}</p>
                          <p className={typography.labelMedium}>{fixFechas(
                            dueDate
                          )}</p>
                        </div>
                      );
                    }
                  )}
                  <span className='material-symbols-outlined'>
                  note
                  </span>
                </Card>
              </Fragment>
            );
          }
        )}
      </>
    );
  case 1:
    return (
      <>
        <NewNota llaveProceso={ params.llaveProceso } uri={ `${ getBaseUrl()}`} />
        {notasllaveProceso.map(
          (
            prc, i, arr
          ) => {
            const { nota, tareas, _id, llaveProceso, pathname } = prc;
            return (
              <Fragment key={_id.toString()}>
                <Card
                  key={_id.toString()}
                  name={nota}
                  llaveProceso={llaveProceso}
                  path={pathname}
                >
                  { tareas.map(
                    (
                      t, i, arr
                    ) => {
                      const { isDone, tarea, dueDate } = t;
                      return (
                        <div key={ i } className={ isDone
                          ? note.tarea
                          : note.tareaDone }>
                          <p className={typography.bodyMedium}>{tarea}</p>
                          <p className={typography.labelMedium}>{fixFechas(
                            dueDate
                          )}</p>
                        </div>
                      );
                    }
                  )}
                  <span className='material-symbols-outlined'>
                  note
                  </span>
                </Card>
              </Fragment>
            );
          }
        )}
      </>
    );
  case 2:
    return (   <>
      <NewNota llaveProceso={ params.llaveProceso } uri={ `${ getBaseUrl()}`} />
      {notasllaveProceso.map(
        (
          prc, i, arr
        ) => {
          const { nota, tareas, _id, llaveProceso, pathname } = prc;
          return (
            <Fragment key={_id.toString()}>
              <Card
                key={_id.toString()}
                name={nota}
                llaveProceso={llaveProceso}
                path={pathname}
              >
                { tareas.map(
                  (
                    t, i, arr
                  ) => {
                    const { isDone, tarea, dueDate } = t;
                    return (
                      <div key={ i } className={ isDone
                        ? note.tarea
                        : note.tareaDone }>
                        <p className={typography.bodyMedium}>{tarea}</p>
                        <p className={typography.labelMedium}>{fixFechas(
                          dueDate
                        )}</p>
                      </div>
                    );
                  }
                )}
                <span className='material-symbols-outlined'>
                  note
                </span>
              </Card>
            </Fragment>
          );
        }
      )}
    </>);

  default:
    return (   <>
      <NewNota llaveProceso={ params.llaveProceso } uri={ `${ getBaseUrl()}`} />
      {notasllaveProceso.map(
        (
          prc, i, arr
        ) => {
          const { nota, tareas, _id, llaveProceso, pathname } = prc;
          return (
            <Fragment key={_id.toString()}>
              <Card
                key={_id.toString()}
                name={nota}
                llaveProceso={llaveProceso}
                path={pathname}
              >
                { tareas.map(
                  (
                    t, i, arr
                  ) => {
                    const { isDone, tarea, dueDate } = t;
                    return (
                      <div key={ i } className={ isDone
                        ? note.tarea
                        : note.tareaDone }>
                        <p className={typography.bodyMedium}>{tarea}</p>
                        <p className={typography.labelMedium}>{fixFechas(
                          dueDate
                        )}</p>
                      </div>
                    );
                  }
                )}
                <span className='material-symbols-outlined'>
                  note
                </span>
              </Card>
            </Fragment>
          );
        }
      )}
    </>);
  }
}
