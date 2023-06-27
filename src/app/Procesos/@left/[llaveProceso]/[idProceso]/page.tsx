import { arrayMergerByllaveProceso } from '#@/lib/arrayMerger';
import { getNotasByllaveProceso } from '#@/lib/notas';
import { getProcesosByllaveProceso } from '#@/lib/procesos';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import Name from '#@/components/Headings/nombre';
import { fixFechas } from '#@/lib/fix';
import typography from '#@/styles/fonts/typography.module.scss';
import layout from '#@/styles/scss/layout.module.scss';

export default async function Page({
  params,
}: {
  params: { llaveProceso: string; idProceso: number };
}) {
  const procesos = await getCarpetasByllaveProceso({
    llaveProceso: params.llaveProceso,
  });
  const actuaciones = await getActuacionesByidProceso({
    idProceso: params.idProceso,
  });
  return (
    <>
      {actuaciones.acts &&
        actuaciones.acts.map((
          actuacion, index, arr
        ) => (
          <Card
            key={actuacion.idRegActuacion}
            name={actuacion.actuacion}
            path={'/Procesos'}
            llaveProceso={params.llaveProceso}
            idProceso={params.idProceso}
          >
            <Name helper={fixFechas(actuacion.fechaActuacion)} />
            <p className={typography.bodyMedium}>{actuacion.anotacion}</p>
          </Card>
        ))}
    </>
  );
}
