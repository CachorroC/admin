import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typeface from '#@/styles/fonts/typeface.module.scss';

export async function Name(
  { llaveProceso }: { llaveProceso: string }
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso,
    }
  );
  const nombre = proceso.map(
    (
      p
    ) => p.Demandado.Nombre
  );
  return <h1 className={typeface.navbar}>{nombre[0]}</h1>;
}
