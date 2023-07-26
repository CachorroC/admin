import 'server-only';
import { getCarpetas } from '#@/lib/Carpetas';
import { fixFechas } from '#@/lib/fix';
import type { Demanda,
              IntCarpeta,
              MonCarpeta } from '#@/lib/types/demandados';
import Link from 'next/link';
import { Fragment,
         ReactNode,
         Suspense,
         useEffect,
         useState } from 'react';
import styles from './carpetas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { fetchActuaciones } from '#@/lib/Actuaciones';
import { Loader } from '#@/components/Loader';
import { Card } from '#@/components/card/card-with-carpeta';
import { fetchProceso, getProceso,
         getProcesos } from '#@/lib/RamaJudicial';
import { ProcesoCard } from '../ProcesosCard';
import { NombreComponent } from '../Nombre';

const ProcesosList = async (
  {
    llaveProceso,
    index
  }: {
  llaveProceso: string;
  index: number;
}
) => {
  const procesos = await fetchProceso(
    {
      llaveProceso: llaveProceso,
      index       : index
    }
  );

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
  const acts = await fetchActuaciones(
    {
      idProceso: idProceso,
      index    : index
    }
  );

  if ( acts.length === 0 ) {
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
      if (
        !a.fecha
        || a.fecha
          === undefined
      ) {
        return 1;
      }

      if (
        !b.fecha
        || b.fecha
          === undefined
      ) {
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
                  {
                    carpeta.idProceso.map(
                      (
                        idp
                      ) => {
                        return ( <Fecha
                          key={idp}
                          idProceso={idp}
                          index={index}
                        /> );
                      }
                    )
                  }
                </Suspense>
              </Card>
              <Suspense fallback={<Loader />}>
                <ProcesosList
                  llaveProceso={
                    carpeta.llaveProceso
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
