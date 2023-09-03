import 'server-only';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { NombreComponent } from '../nombre';
import { Suspense } from 'react';
import { Loader } from '../Loader';

export async function Name(
  {
    llaveProceso
  }: {
  llaveProceso: string;
} 
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );

  if ( !proceso ) {
    return null;
  }

  return (
    <Suspense fallback={<Loader />}>
      <NombreComponent
        key={llaveProceso}
        deudor={proceso.deudor}
      />
    </Suspense>
  );
}
