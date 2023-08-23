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
  const newName = new NombreCompleto(
    deudor 
  );

  const isSegundoNombrePrimerApellido
    = deudor.segundoNombre
    === deudor.primerApellido;

  if ( isSegundoNombrePrimerApellido ) {
    const name = toNameString(
      {
        nameRaw:
        deudor.primerNombre
        + ' '
        + deudor.primerApellido
        + ' '
        + deudor.segundoApellido
      } 
    );

    return (
      <h4
        className={`${ typography.displaySmall } ${ card.title }`}>
        {name}
      </h4>
    );
  }

  const name = toNameString(
    {
      nameRaw:
      deudor.primerNombre
      + ' '
      + deudor.segundoNombre
      + ' '
      + deudor.primerApellido
      + ' '
      + deudor.segundoApellido
    } 
  );

  return (
    <h4
      className={`${ typography.titleLarge } ${ card.title }`}>
      {name}
    </h4>
  );
}
