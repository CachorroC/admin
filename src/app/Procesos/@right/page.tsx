import { getCarpetas } from '#@/lib/Carpetas';
import { Card } from '#@/components/card/card';
import { Metadata } from 'next';
import card from '#@/components/card/card.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { fixFechas } from '#@/lib/fix';
import { ProcesoComponent } from '#@/app/Actuacion/server-components';
import { Fragment, Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { LinkCard } from '#@/components/search/link';

export default async function PageProcesosRight(
  {
    searchParams
  }: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
} 
) {
  const sortSearchParam = searchParams.sort;

  if ( sortSearchParam ) {
    const typeOfSearchparam
      = typeof sortSearchParam;
  }

  const carpetas = await getCarpetas();

  return (
    <>
      {carpetas.map(
        (
          carpeta, index 
        ) => {
          return (
            <Fragment key={carpeta._id}>
              <LinkCard
                path={'/Procesos'}
                carpeta={carpeta}
                key={carpeta._id}
              />
              <Suspense
                fallback={
                  <Loader
                    key={carpeta.llaveProceso}
                  />
                }>
                <ProcesoComponent
                  key={carpeta.llaveProceso}
                  carpeta={carpeta}
                  index={index}
                />
              </Suspense>
              {carpeta.ultimaActuacion && (
                <div className={card.date}>
                  {carpeta.ultimaActuacion
                        .actuacion && (
                    <h5
                      className={` ${ card.actuacion } ${ typography.titleSmall }`}>
                      {
                        carpeta.ultimaActuacion
                              .actuacion
                      }
                    </h5>
                  )}
                  {carpeta.ultimaActuacion
                        .anotacion && (
                    <p
                      className={` ${ card.anotacion } ${ typography.labelSmall }`}>
                      {
                        carpeta.ultimaActuacion
                              .anotacion
                      }
                    </p>
                  )}
                  <sub className={card.fecha}>
                    {`actuacion registrada el: ${ fixFechas(
                      carpeta.ultimaActuacion
                            .fechaActuacion
                    ) }`}
                  </sub>
                </div>
              )}
            </Fragment>
          );
        } 
      )}
    </>
  );
}
