import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';

async function Name({ llaveProceso }: { llaveProceso: string }) {
  const proceso = await getCarpetasByllaveProceso({
    llaveProceso: llaveProceso
  });

  const nombre = proceso
    .map((p) => {
      return p.Deudor.PrimerNombre;
    })
    .toString();

  return <h3 className={typography.displayMedium}>{nombre}</h3>;
}

export default async function DefaultProcesosllaveProceso({
  params: { llaveProceso }
}: {
  params: { llaveProceso: string };
}) {
  const Carpetas = await getCarpetasByllaveProceso({
    llaveProceso: llaveProceso
  });

  return (
    <>
      <p>page</p>
      {Carpetas.map((carpeta, index, arr) => {
        const { _id, ...newCarpeta } = carpeta;

        return (
          <Fragment key={carpeta.id}>
            <Name llaveProceso={llaveProceso} />
            <Link
              href={`/Carpetas/${llaveProceso}`}
              className={card.link}>
              <span className='material-symbols-outlined'>folder_shared</span>
            </Link>
            <CarpetaCard carpeta={newCarpeta}>
              <span className='material-symbols-outlined'>star</span>
            </CarpetaCard>
          </Fragment>
        );
      })}
    </>
  );
}
