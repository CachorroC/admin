import { getCarpetas,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { getActuaciones } from '#@/lib/Actuaciones';
import { Fragment, Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { sleep } from '#@/lib/fix';

async function Acts(
  {
    idProceso
  }: {
  idProceso: number;
} 
) {
  const awaitTime = 1000;
  await sleep(
    awaitTime 
  );

  const actuaciones = await getActuaciones(
    {
      idProceso: idProceso,
      index    : 1
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

export async function generateMetadata(
  {
    params
  }: {
  params: { llaveProceso: string };
} 
) {
  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return {
    title: `${ carpeta
      ? carpeta.nombre
      : 'Null' }`
  };
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
            key={Carpeta._id}
            idProceso={Carpeta.idProceso}
          />
        )}
      </Suspense>
    </Fragment>
  );
}
