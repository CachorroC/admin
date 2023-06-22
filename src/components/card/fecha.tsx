import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import typography from '#@/components/typográficos/typography.module.scss';

export function Fecha(
  { helper }: { helper: string | null | undefined }
) {
  return <sub className={typography.labelSmall}>{fixFechas(
    helper
  )}</sub>;
}
