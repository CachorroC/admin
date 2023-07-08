import typography from '#@/styles/fonts/typography.module.scss';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';

export default function PageProcesos() {
  return (
    <>
      <h1 className={typography.displayLarge}>
        Procesos
      </h1>
    </>
  );
}
