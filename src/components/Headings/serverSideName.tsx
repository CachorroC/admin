import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { toNameString } from '#@/lib/fix';
import typeface from '#@/styles/fonts/typeface.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export async function Name({ llaveProceso }: { llaveProceso: string }) {
  const proceso = await getCarpetasByllaveProceso({
    llaveProceso: llaveProceso,
  });
  const nombre = proceso.map((p) => p.Demandado.Nombre);
  return (
    <h1 className={`${typeface.navbar} ${typography.displayMedium}`}>
      {toNameString(nombre[0])}
    </h1>
  );
}
