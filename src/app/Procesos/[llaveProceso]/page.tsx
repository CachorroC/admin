import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';
import { intProceso } from '#@/lib/types/procesos';
import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import box from '#@/styles/scss/box.module.scss';
import { Name } from '#@/components/Headings/serverSideName';

function DemandadoNameBadge(
  {
    carpeta,
    proceso
  }: {
  carpeta: monCarpetaDemandado;
  proceso?: intProceso;
} 
) {
    const {
      llaveProceso, _id 
    } = carpeta;

    if ( proceso ) {
      return (
        <Fragment
          key={proceso
            ? proceso.idProceso
            : _id}>
          <Name llaveProceso={llaveProceso} />
          <p className={typography.bodySmall}>
            {proceso.despacho}
          </p>
          <CarpetaCard Carpeta={carpeta}>
            {' '}
            <span className='material-symbols-outlined'>
            star
            </span>
          </CarpetaCard>
        </Fragment>
      );
    }

    return (
      <Fragment key={_id}>
        <Name llaveProceso={llaveProceso} />
        <CarpetaCard Carpeta={carpeta}>
          {' '}
          <span className='material-symbols-outlined'>
          star
          </span>
        </CarpetaCard>
      </Fragment>
    );
}

export default async function PageProcesosllaveProceso(
  { params }: {
  params: { llaveProceso: string };
} 
) {
    const Procesos
    = await getConsultaNumeroRadicion(
      { llaveProceso: params.llaveProceso } 
    );

    const Carpetas
    = await getCarpetasByllaveProceso(
      { llaveProceso: params.llaveProceso } 
    );
    const cantidadCarpetas = Carpetas.length;
    const cantidadProcesos = Procesos.length;

    if ( cantidadProcesos === 0 ) {
      return (
        <>
          {Carpetas.map(
            (
              Carpeta 
            ) => {
                return (
                  <DemandadoNameBadge
                    carpeta={Carpeta}
                    key={Carpeta._id}
                  />
                );
            } 
          )}
        </>
      );
    }

    return (
      <>
        {Procesos.map(
          (
            Proceso, i 
          ) => {
              return (
                <DemandadoNameBadge
                  carpeta={Carpetas[ i ]}
                  key={Proceso.idProceso}
                  proceso={Proceso}
                />
              );
          } 
        )}
      </>
    );
}
