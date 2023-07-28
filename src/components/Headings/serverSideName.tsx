import 'server-only';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { toNameString } from '#@/lib/fix';
import typeface from '#@/styles/fonts/typeface.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { NombreComponent } from '../card/Nombre';

export async function Name(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) {
  const proceso = await getCarpetasByllaveProceso(
    { llaveProceso: llaveProceso }
  );

  if ( !proceso ) {
    return null;
  }

  return (
    <NombreComponent deudor={ proceso.deudor } />
  );
}
