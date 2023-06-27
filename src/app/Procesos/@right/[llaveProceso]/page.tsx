import { Card } from '#@/components/card/card';
import { getCarpetas, getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {
  getActuacionesByidProceso,
  getConsultaNumeroRadicion,
} from '#@/lib/RamaJudicial';
import { newMerger } from '#@/lib/arrayMerger';
import { fixDemandado, fixFechas } from '#@/lib/fix';
import layout from '#@/styles/scss/layout.module.scss';
import { Fragment } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';
import box from '#@/styles/scss/box.module.scss';
import { IntActuaciones } from '#@/lib/types/procesos';
import { getBaseUrl } from '#@/lib/getBaseUrl';
async function Name({ llaveProceso }: { llaveProceso: string }) {
  const proceso = await getCarpetasByllaveProceso({
    llaveProceso: llaveProceso,
  });
  const nombre = proceso.map((p) => p.Demandado.Nombre).toString();
  return <h3 className={typography.displayMedium}>{nombre}</h3>;
}
async function Acts({ idProceso }: { idProceso: number }) {
  const acts = await fetch(`${getBaseUrl()}/api/Procesos/Actuaciones/${idProceso}`);
  const res = (await acts.json()) as IntActuaciones;

  return (
    <div className={box.container} key={idProceso}>
      <h1 className={typography.titleLarge}>{res.text.message}</h1>
      <p className={typography.bodyMedium}>{res.text.statusCode.toString()}</p>
      {res.acts
        ? (
          <>
            <p>{res.acts[0].actuacion}</p>
            <p>{res.acts[0].anotacion}</p>
            <p>{fixFechas(res.acts[0].fechaActuacion)}</p>
          </>
        )
        : (
          <p>nothing</p>
        )}
    </div>
  );
}

export default async function PageProcesosRightllaveProceso({
  params: { llaveProceso },
}: {
  params: {
    llaveProceso: string;
  };
}) {
  const carpeta = await getCarpetasByllaveProceso({
    llaveProceso: llaveProceso,
  });
  const Procesos = await getConsultaNumeroRadicion({
    llaveProceso: llaveProceso,
  });
  const cantidadProcesos = Procesos.length;
  const cantidadCarpetas = carpeta.length;

  switch (cantidadCarpetas) {
  case 0:
    return null;
  case 1:
    const { idProceso } = Procesos[0];
    return (
      <>
        {carpeta.map((
          prc, i, arr
        ) => (
          <Fragment key={prc._id.toString()}>
            <Acts key={prc.idProceso} idProceso={prc.idProceso} />
            <Card
              key={prc._id.toString()}
              name={prc.Demandado.Nombre}
              llaveProceso={prc.llaveProceso}
              idProceso={prc.idProceso}
              path={'/Procesos'}
            >
              <span className='material-symbols-outlined'>
                  clock_loader_30
              </span>
            </Card>
          </Fragment>
        ))}
      </>
    );
  case 2:
    return null;

  default:
    return null;
  }
}
