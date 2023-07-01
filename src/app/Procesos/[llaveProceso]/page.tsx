import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { getConsultaNumeroRadicion } from '#@/lib/RamaJudicial';
import { intProceso } from '#@/lib/types/procesos';
import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';

function DemandadoNameBadge(
  {
    carpeta,
    proceso,
  }: {
  carpeta: monCarpetaDemandado;
  proceso?: intProceso;
}
) {
  const { llaveProceso, _id } = carpeta;
  if (proceso) {

    return (
      <Fragment key={proceso
        ? proceso.idProceso
        : _id.toString()}>
        <Name llaveProceso={llaveProceso} />
        <p className={typography.bodySmall}>{proceso.despacho}</p>



        <CarpetaCard Carpeta={carpeta} />
      </Fragment>
    );
  }
  return (
    <Fragment key={_id.toString()}>
      <Name llaveProceso={llaveProceso} />
      <CarpetaCard Carpeta={carpeta} />
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
  const Procesos = await getConsultaNumeroRadicion(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const merged = arrayMergerByllaveProceso(
    {
      a: Procesos,
      b: Carpetas,
    }
  );
  const cantidadCarpetas = Carpetas.length;
  return (
    <>
      {Carpetas.map(
        (
          Carpeta, i
        ) => (
          <Fragment key={Carpeta._id.toString()}>
            {Procesos.map(
              (
                Proceso, i
              ) => (
                <DemandadoNameBadge
                  carpeta={Carpeta}
                  key={Proceso.idProceso}
                  proceso={Proceso}
                />
              )
            ) }
            <DemandadoNameBadge
              carpeta={Carpeta}
              key={Carpeta._id.toString()}

            />
          </Fragment>
        )
      ) }
      <p className={typography.bodyMedium}>{JSON.stringify(
        merged
      )}</p>
    </>
  );
}
