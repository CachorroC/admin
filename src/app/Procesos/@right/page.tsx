import 'server-only';
import NuevaNota from '#@/app/Notas/NuevaNota/page';
import { Card } from '#@/components/card/card';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import typography from '#@/styles/fonts/typography.module.scss';

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
      <NotasList notas={notas} />
    </>
  );

}
