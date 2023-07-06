import typography from '#@/styles/fonts/typography.module.scss';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/nota/list/notas-list';

export default async function PageProcesos() {
  const notas = await getNotas ();
  return (
    <>
      {' '}
      <h1 className={typography.displayLarge}>
        {' '}
        Procesos{' '}
      </h1>{' '}
      <NotasList notas={notas} />{' '}
    </>
  );
}
