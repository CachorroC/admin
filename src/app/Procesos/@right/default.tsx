import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default async function DefaultProcesosRight() {
  return (
    <>
      <NewNota llaveProceso={'Procesos'} uri={`${getBaseUrl()}`} />
      <Notas />
    </>
  );
}
