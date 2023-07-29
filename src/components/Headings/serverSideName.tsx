import 'server-only';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
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
