import typography from '#@/styles/fonts/typography.module.css';
import { NombreCompleto,
         Deudor } from '#@/lib/types/carpeta';

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
      {deudor.primerNombre}
    </h4>
  );
}
