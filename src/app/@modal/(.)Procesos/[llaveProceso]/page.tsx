import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import Modal from '#@/components/modal';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { ProcesoCard } from '#@/components/card/ProcesosCard';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

export default async function Page(
  {
    params,
  }: {
  params: { llaveProceso: string };
}
) {
  const procesos = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  return (
    <Modal>
      {procesos.map(
        (
          carpeta, i, arr
        ) => (
          <CarpetaCard key={carpeta._id} Carpeta={carpeta} />
        )
      )}
    </Modal>
  );
}
