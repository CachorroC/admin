import typography from '#@/styles/fonts/typography.module.css';
import {intDeudor } from '#@/lib/types/carpeta';
import card from '#@/components/card/card.module.scss';

export function NombreComponent(
  {
    deudor
  }: {
  deudor: intDeudor;
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


  return (
    <h4
      key={deudor.cedula}
      className={`${ typography.displayMedium } ${ card.title }`}>
      {rawName}
    </h4>
  );
}
