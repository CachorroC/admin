import { Card } from '#@/components/card/card';
import {
  getCarpetasByidProceso,
  getCarpetasByllaveProceso,
} from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { toNameString } from '#@/lib/fix';
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
  return <h3 className={typography.displayMedium}>{toNameString(
    nombre
  )}</h3>;
}

export default async function PageProcesosllaveProceso(
  {
    params,
  }: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
}
) {
  const carpetas = await getCarpetasByidProceso(
    {
      idProceso: params.idProceso,
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
          return <CarpetaCard key={_id} Carpeta={carpeta} />;
        }
      )}
    </>
  );
}
