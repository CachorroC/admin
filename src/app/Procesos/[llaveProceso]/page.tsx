import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import note from '#@/components/nota/note.module.scss';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

function DemandadoNameBadge(
  { carpeta }: { carpeta: monCarpetaDemandado }
) {
  const {  llaveProceso, _id } = carpeta;
  return (
    <Fragment key={_id.toString()}>
      <Name llaveProceso={ llaveProceso } />
      <CarpetaCard Carpeta={ carpeta } />
    </Fragment>
  );
}
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
  );
  return <h3 className={typography.displayMedium}>{nombre[0]}</h3>;
}
export default async function PageProcesosllaveProceso(
  {
    params,
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const cantidadCarpetas = Carpetas.length;
  return (
    <>
      {
        Carpetas.map(
          (
            Carpeta
          ) => (
            <DemandadoNameBadge carpeta={Carpeta} key={Carpeta._id.toString()} />
          )
        )
      }
    </>
  );
}
