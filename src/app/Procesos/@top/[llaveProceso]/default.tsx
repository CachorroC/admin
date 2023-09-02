import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import Link from 'next/link';
import card from '#@/components/card/card.module.css';
import { NombreComponent } from '#@/components/nombre';
import { notFound } from 'next/navigation';
import { Route } from 'next';
import { Fragment } from 'react';

export default async function DefaultProcesosllaveProceso(
  {
    params: {
      llaveProceso
    }
  }: {
  params: { llaveProceso: string };
}
) {
  const Carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  return (
    <>
      { Carpeta && (
        <Fragment key={ llaveProceso }>
          <NombreComponent
            key={ Carpeta._id }
            deudor={ Carpeta.deudor } />

          <CarpetaCard
            key={ Carpeta._id }
            carpeta={ Carpeta } />
        </Fragment>
      )}
    </>
  );
}
