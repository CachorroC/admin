import 'server-only';
import NuevaNota from '#@/app/Notas/NuevaNota/page';
import { Card } from '#@/components/card/card';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Notas } from '#@/components/nota/notas';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import typography from '#@/styles/fonts/typography.module.scss';
import { NotasList } from '#@/components/nota/list';

export default async function PageProcesosRight() {
  return (
    <>
      <NewNota llaveProceso={'Procesos'} uri={`${getBaseUrl()}`} />
      <Notas />

    </>
  );
}
