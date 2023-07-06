import 'server-only';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NotasList } from '#@/components/nota/list/notas-list';
import { getNotas } from '#@/lib/notas';

export default async function PageProcesosRight() {
  const notas = await getNotas ();
  return (
    <>

      <NewNota
        llaveProceso={'Procesos'}
        uri={`${ getBaseUrl () }`}
      />
      <Notas />
      <NotasList notas={ notas } />
    </>
  );
}
