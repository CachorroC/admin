import 'server-only';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { toNameString } from '#@/lib/fix';
import typeface from '#@/styles/fonts/typeface.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export async function Name(
  {
    llaveProceso
  }: {
  llaveProceso: string;
}
) {
  const proceso = await getCarpetasByllaveProceso (
    {
      llaveProceso: llaveProceso
    }
  );

  const nombre = proceso.map (
    (
      p
    ) => {
      return p.Deudor.Nombre;
    }
  );

  const isEmptyArray = nombre.length === 0;
  return (
    <h1
      className={`${ typeface.navbar } ${ typography.displayMedium }`}>
      {nombre.map (
        (
          n
        ) => {
          return toNameString (
            {
              nameRaw: n
            }
          );
        }
      )}
    </h1>
  );
}
