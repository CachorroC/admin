import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { IntCarpeta,
         MonCarpeta } from '#@/lib/types/demandados';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { fetchProceso,
         getProceso } from '#@/lib/RamaJudicial';
import { intProceso } from '#@/lib/types/procesos';
import box from '#@/styles/scss/box.module.scss';
import { Name } from '#@/components/Headings/serverSideName';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { Accordion } from '#@/components/Accordion';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';

function DemandadoNameBadge(
                {
                  carpeta,
                  proceso
                }: {
  carpeta: MonCarpeta;
  proceso?: intProceso;
} 
) {
  if ( proceso ) {
    return (
      <Fragment
        key={
          proceso
            ? proceso.idProceso
            : carpeta._id
        }
      >
        <Name
          llaveProceso={carpeta.llaveProceso}
        />
        <Accordion>
          <p className={typography.bodySmall}>
            {proceso.despacho}
          </p>
          <ProcesoCard proceso={proceso} />
          <CarpetaCard carpeta={carpeta}>
            <span className='material-symbols-outlined'>
              star
            </span>
          </CarpetaCard>
        </Accordion>
      </Fragment>
    );
  }

  return (
    <Fragment key={carpeta._id}>
      <Name llaveProceso={carpeta.llaveProceso} />
      <Accordion>
        <CarpetaCard carpeta={carpeta}>
          <span className='material-symbols-outlined'>
            star
          </span>
        </CarpetaCard>
      </Accordion>
    </Fragment>
  );
}

export default async function PageProcesosllaveProceso(
                {
                  params
                }: {
  params: { llaveProceso: string };
} 
) {
  const Procesos = await getProceso(
    {
      llaveProceso: params.llaveProceso
    } 
  );

  const Carpetas
    = await getCarpetasByllaveProceso(
      {
        llaveProceso: params.llaveProceso
      } 
    );

  return (
    <>
      <p>default</p>
      {Carpetas.map(
        (
          carpeta, index, arr 
        ) => {
          const proceso = Procesos.find(
            (
              prc 
            ) => {
              return (
                prc.idProceso === carpeta.idProceso
              );
            } 
          );

          return (
            <Fragment key={carpeta._id}>
              <DemandadoNameBadge
                carpeta={carpeta}
                key={carpeta._id}
                proceso={proceso}
              />
              <Link
                href={`/Carpetas/${ carpeta.llaveProceso }`}
                className={card.link}
              >
                <span className='material-symbols-outlined'>
                folder_shared
                </span>
              </Link>
            </Fragment>
          );
        } 
      )}
    </>
  );
}
