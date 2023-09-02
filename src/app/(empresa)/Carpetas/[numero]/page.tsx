import { NuevoProceso } from '#@/app/Procesos/sinEspecificar/new-carpeta';
import { Card } from '#@/components/card/card';
import { getCarpetabyNumero } from '#@/lib/Carpetas';
import { getDespachos } from '#@/lib/RamaJudicial';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { notFound } from 'next/navigation';
import typography from '#@/styles/fonts/typography.module.css';
import layout from '#@/styles/layout.module.scss';

export default async function PageCarpetaNumero(
  {
    params
  }: {
  params: { numero: string };
} 
) {
  const carpeta = await getCarpetabyNumero(
    Number(
      params.numero 
    )
  );

  const despachos = await getDespachos();

  if ( !carpeta ) {
    return (
      <NuevoProceso
        key={params.numero}
        despachos={despachos}
      />
    );
  }

  return (
    <NuevoProceso
      key={params.numero}
      carpeta={carpeta}
      despachos={despachos}
    />
  );
}
