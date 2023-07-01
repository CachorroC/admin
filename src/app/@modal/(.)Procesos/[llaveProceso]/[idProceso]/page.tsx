
import { getNotasByllaveProceso } from '#@/lib/notas';
import { getProcesosByllaveProceso } from '#@/lib/procesos';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import { Name } from '#@/components/Headings/clientSideName';
import { fixFechas } from '#@/lib/fix';
import typography from '#@/styles/fonts/typography.module.scss';
import layout from '#@/styles/scss/layout.module.scss';
import Modal from '#@/components/modal';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';

export default async function Page(
  {
    params,
  }: {
  params: { llaveProceso: string; idProceso: number };
}
) {
  const procesos = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const actuaciones = await getActuacionesByidProceso(
    {
      idProceso: params.idProceso,
    }
  );
  return (
    <Modal>
      {actuaciones.acts &&
        actuaciones.acts.map(
          (
            actuacion, index, arr
          ) => (
            <ActuacionCard Actuacion={ actuacion } key={actuacion.idRegActuacion} />
          )
        )}
    </Modal>
  );
}
