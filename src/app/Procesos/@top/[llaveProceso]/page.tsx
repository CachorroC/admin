import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import Link from 'next/link';
import card from '#@/components/card/card.module.css';
import { NombreComponent } from '#@/components/card/Nombre';
import { notFound } from 'next/navigation';
import { Route } from 'next';

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
      <NombreComponent key={Carpeta._id} deudor={Carpeta.deudor} />
      <Link
        target={'_blank'}
        href={`/Procesos/${ llaveProceso }` as Route}
        className={card.link}
      >
        <span className='material-symbols-outlined'>
          folder_shared
        </span>
      </Link>
      <CarpetaCard key={Carpeta._id} carpeta={Carpeta}/>
    </>
  );
}
