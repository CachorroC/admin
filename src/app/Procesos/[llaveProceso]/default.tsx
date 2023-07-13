import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { IntCarpeta, MonCarpeta } from '#@/lib/types/demandados';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';
import { intProceso } from '#@/lib/types/procesos';
import box from '#@/styles/scss/box.module.scss';
import { Name } from '#@/components/Headings/serverSideName';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { Accordion }from '#@/components/Accordion';

function DemandadoNameBadge(
  {
    carpeta,
    proceso
  }: {
  carpeta: MonCarpeta;
  proceso?: intProceso;
}
) {
  const {
    llaveProceso, id
  } = carpeta;

  if ( proceso ) {
    return (
      <Fragment key={proceso
        ? proceso.idProceso
        : id}>
        <Name llaveProceso={ llaveProceso } />
        <Accordion>

          <p className={typography.bodySmall}>{proceso.despacho}</p>
          <ProcesoCard proceso={ proceso } />
          <CarpetaCard carpeta={ carpeta }>
            <span className='material-symbols-outlined'>star</span>
          </CarpetaCard>
        </Accordion>
      </Fragment>
    );
  }

  return (
    <Fragment key={id}>
      <Name llaveProceso={llaveProceso} />
      <Accordion>
        <CarpetaCard carpeta={carpeta}>
          <span className='material-symbols-outlined'>star</span>
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
  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso
    }
  );

  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );

  return (
    <>
      { Carpetas.map(
        (
          carpeta, index, arr
        ) => {
          const proceso = Procesos.find(
            (
              prc
            ) => {
              return prc.idProceso === carpeta.idProceso;
            }
          );

          return (  <DemandadoNameBadge
            carpeta={carpeta}
            key={carpeta.id}
            proceso={proceso}
          /> );
        }
      )}
    </>
  );
}
