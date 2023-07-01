import { Card } from '#@/components/card/card';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import Link from 'next/link';
import { Suspense } from 'react';
import { CardCarpeta } from '#@/components/card/cardCarpeta';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
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

export default async function PageProcesosllaveProceso(
  {
    params,
  }: {
  params: {
    llaveProceso: string;
  };
}
) {
  const carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  return (
    <>
      {' '}
      <Suspense
        fallback={<h3 className={typography.displayMedium}>Cargando</h3>}
      >
        <Name llaveProceso={params.llaveProceso} />
      </Suspense>
      {carpetas.map(
        (
          carpeta, index, arr
        ) => {
          const { Demandado, idProceso, _id } = carpeta;
          const { Tel, Direccion, Nombre } = Demandado;
          const { Fijo, Celular } = Tel;
          return (
            <CarpetaCard
              key={ _id } Carpeta={carpeta }            />
          );
        }
      )}
    </>
  );
}
