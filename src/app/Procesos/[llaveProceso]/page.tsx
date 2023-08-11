import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';
import { NombreComponent } from '#@/components/card/Nombre';
import { notFound } from 'next/navigation';

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

  if ( !Carpeta ) {
    notFound();
  }

  return (
    <>
      <NombreComponent deudor={Carpeta.deudor} />
      <Link
        href={`/Carpetas/${ llaveProceso }`}
        className={card.link}
      >
        <span className='material-symbols-outlined'>
          folder_shared
        </span>
      </Link>
      <CarpetaCard carpeta={Carpeta}>
        <span className='material-symbols-outlined'>
          star
        </span>
      </CarpetaCard>
    </>
  );
}
