import typography from '#@/styles/fonts/typography.module.css';
import { NombreCompleto,
         Deudor } from '#@/lib/types/carpeta';
import { toNameString } from '#@/lib/fix';
import card from '#@/components/card/card.module.scss';

export function NombreComponent(
  {
    deudor
  }: {
  deudor: Deudor;
} 
) {
  const nombres = deudor.segundoNombre
    ? deudor.primerNombre
      + ' '
      + deudor.segundoNombre
    : deudor.primerNombre;

  const apellidos = deudor.segundoApellido
    ? deudor.primerApellido
      + ' '
      + deudor.segundoApellido
    : deudor.primerApellido;

  const rawName = nombres + ' ' + apellidos;

  const nameOutput = toNameString(
    {
      nameRaw: rawName
    } 
  );

  return (
    <h4
      key={deudor.cedula}
      className={`${ typography.displaySmall } ${ card.title }`}>
      {nameOutput}
    </h4>
  );
}
