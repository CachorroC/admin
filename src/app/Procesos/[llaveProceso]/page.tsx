import { getCarpetas,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Fragment, Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { sleep } from '#@/lib/fix';
import { MonCarpeta } from '#@/lib/types/carpeta';

async function Acts(
  {
    carpeta
  }: {
  carpeta: MonCarpeta;
} 
) {
  const actuaciones = await getActuaciones(
    {
      carpeta: carpeta,
      index  : 1
    } 
  );

  return (
    <>
      {actuaciones
        && actuaciones.map(
          (
            act, i, arr 
          ) => {
            const {
              idRegActuacion 
            } = act;

            return (
              <ActuacionCard
                act={act}
                key={i}
              />
            );
          } 
        )}
    </>
  );
}

export default async function PageProcesosLeftllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
} 
) {
  const Carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  if ( !Carpeta ) {
    return null;
  }

  return (
    <Fragment key={params.llaveProceso}>
      <p>Page Left llaveProceso</p>

      <Suspense
        fallback={<Loader key={Carpeta._id} />}>
        {Carpeta.idProceso && (
          <Acts
            key={Carpeta.idProceso}
            carpeta={Carpeta}
          />
        )}
      </Suspense>
    </Fragment>
  );
}
