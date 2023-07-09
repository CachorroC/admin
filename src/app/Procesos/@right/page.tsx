import 'server-only';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';

export default async function PageProcesosRight() {
  const notas = await getNotas ();
  return (
    <>
      <NewNota
        llaveProceso={'Procesos'}
        uri={`${ getBaseUrl () }`}
      />
      <NotasList notas={notas} />
      <Notas />
    </>
  );
}
