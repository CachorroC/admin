import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
async function Name(
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
  ).toString();
  return <h3 className={typography.displayMedium}>{nombre}</h3>;
}

export default function PageProcesosllaveProceso(
  {
    params: { llaveProceso },
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  return (
    <Suspense fallback={<h3 className={typography.displayMedium}>Cargando</h3>}>
      <Name llaveProceso={llaveProceso} />
    </Suspense>
  );
}
