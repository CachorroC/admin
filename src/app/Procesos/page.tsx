import typography from '#@/styles/fonts/typography.module.scss';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';
import { getCarpetas } from '#@/lib/Carpetas';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default async function PageProcesos() {
    return (
      <>
        <h1 className={typography.displayLarge}>
        Procesos
        </h1>
      </>
    );
}
