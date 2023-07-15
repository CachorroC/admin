import typography from '#@/styles/fonts/typography.module.scss';
import { Deudor } from '#@/lib/types/demandados';
import { NombreCompleto } from '#@/lib/types/carpetas';

export function NombreComponent(
  {
    Deudor
  }: { Deudor: Deudor }
) {
  const newName = new NombreCompleto(
    Deudor
  );

  return (
    <p className={typography.bodyMedium}>{newName.Nombre}</p>
  );
}
