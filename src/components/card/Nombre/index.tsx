import typography from '#@/styles/fonts/typography.module.scss';
import { Deudor, NombreCompleto } from '#@/lib/types/demandados';

export function NombreComponent(
  {
    Deudor
  }: { Deudor: Deudor }
) {
  const newName = new NombreCompleto(
    Deudor
  );

  return <h4 className={typography.displayMedium}>{newName.Nombre}</h4>;
}
