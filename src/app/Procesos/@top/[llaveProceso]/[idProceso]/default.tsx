import { getCarpetaByidProceso,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import Link from 'next/link';
import card from '#@/components/card/card.module.css';
import { NombreComponent } from '#@/components/nombre';
import { notFound } from 'next/navigation';
import { Route } from 'next';
import { Fragment, Suspense } from 'react';
import { Loader } from '#@/components/Loader';

export default async function DefaultProcesosllaveProceso(
  {
    params: {
      llaveProceso, idProceso 
    }
  }: {
  params: {
    llaveProceso: string;
    idProceso: string;
  };
} 
) {
  const Carpeta = await getCarpetaByidProceso(
    {
      idProceso: Number(
        idProceso 
      )
    } 
  );

  return (
    <>
      {Carpeta && (
        <Fragment key={llaveProceso}>
          <Suspense fallback={<Loader />}>
            <NombreComponent
              key={Carpeta._id}
              deudor={Carpeta.deudor}
            />
          </Suspense>

          <CarpetaCard
            key={Carpeta._id}
            carpeta={Carpeta}
          />
        </Fragment>
      )}
    </>
  );
}
