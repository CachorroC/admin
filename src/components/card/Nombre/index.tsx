import typography from '#@/styles/fonts/typography.module.scss';
import { NombreCompleto,
         Deudor } from '#@/lib/types/demandados';

export function NombreComponent(
  {
    deudor
  }: {
  deudor: Deudor;
}
) {
  const newName = new NombreCompleto(
    deudor
  );

  return (
    <h4 className={typography.displaySmall}>
      {newName.Nombre}
    </h4>
  );
}
