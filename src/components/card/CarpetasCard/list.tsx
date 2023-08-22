import 'server-only';
import { getCarpetas } from '#@/lib/Carpetas';
import { fixFechas, sleep } from '#@/lib/fix';
import { Fragment,
         ReactNode,
         Suspense,
         useEffect,
         useState } from 'react';
import styles from './carpetas.module.css';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Loader } from '#@/components/Loader';
import { Card } from '#@/components/card/card';
import { ProcesoCard } from '../ProcesosCard';
import { NombreComponent } from '../Nombre';
import { getProceso } from '#@/lib/Procesos';

const ProcesosList = async (
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index: number;
}
) => {
  const procesos = await getProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

  if ( !procesos ) {
    return null;
  }

  /*

  const llavesProceso = carpetas.map(
    (
      carpeta
    ) => {
      return carpeta.llaveProceso;
    }
  );

  const procesosRaw = await getProcesos(
    {
      llavesProceso: llavesProceso
    }
  );

  const procesos = Array.from(
    procesosRaw.values()
  );
 */
  return (
    <Fragment key={llaveProceso}>
      {procesos.map(
        (
          proceso
        ) => {
          return (
            <ProcesoCard
              proceso={proceso}
              key={proceso.idProceso}
            />
          );
        }
      )}
    </Fragment>
  );
};

const Fecha = async (
  {
    idProceso,
    index
  }: {
  idProceso: number;
  index: number;
}
) => {
  const awaitTime = index > 200
    ? index/2 * 1000
    : index * 1000;
  await sleep(
    awaitTime
  );

  const acts = await getActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( !acts ) {
    return null;
  }

  return (
    <div className={styles.date}>
      {`ultima actuacion: ${ fixFechas(
        acts[ 0 ].fechaActuacion
      ) }`}
    </div>
  );
};

export async function ListCardCarpetasNFechas() {
  const carpetas = await getCarpetas();

  const sortedCarpetas = [
    ...carpetas
  ].sort(
    (
      a, b
    ) => {
      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }

      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }

      const x = a.fecha;

      const y = b.fecha;

      if ( x < y ) {
        return 1;
      }

      if ( x > y ) {
        return -1;
      }

      return 0;
    }
  );

  return (
    <>
      {sortedCarpetas.map(
        (
          carpeta, index, arr
        ) => {
          return (
            <Fragment key={carpeta._id}>
              <Card
                key={carpeta._id}
                path={'/Procesos'}
                carpeta={carpeta}
              >
                <NombreComponent
                  deudor={carpeta.deudor}
                  key={carpeta._id}
                />
                <Suspense fallback={<Loader />}>
                  <Fecha
                    key={carpeta.idProceso}
                    idProceso={carpeta.idProceso}
                    index={index}
                  />
                </Suspense>
              </Card>
              <Suspense fallback={<Loader />}>
                <ProcesosList
                  llaveProceso={
                    carpeta.llaveProceso ?? ''
                  }
                  key={carpeta.llaveProceso}
                  index={index}
                />
              </Suspense>
            </Fragment>
          );
        }
      )}
    </>
  );
}
