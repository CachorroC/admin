import { Card } from '#@/components/card/card';
import {
  getCarpetasByidProceso,
  getCarpetasByllaveProceso,
} from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { toNameString } from '#@/lib/fix';
import { Name } from '#@/components/Headings/serverSideName';

export default async function PageProcesosllaveProcesoidProceso({
  params,
}: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
}) {
  const carpetas = await getCarpetasByidProceso({
    idProceso: params.idProceso,
  });
  return (
    <>
      <Name llaveProceso={params.llaveProceso} />
      {carpetas.map((carpeta, index, arr) => {
        const { Demandado, idProceso, _id } = carpeta;
        const { Tel, Direccion, Nombre } = Demandado;
        const { Fijo, Celular } = Tel;
        return <CarpetaCard key={_id} Carpeta={carpeta} />;
      })}
    </>
  );
}
