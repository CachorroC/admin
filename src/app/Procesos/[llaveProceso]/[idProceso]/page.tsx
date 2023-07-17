import {
  getCarpetasByidProceso,
  getCarpetasByllaveProceso
} from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { Name } from '#@/components/Headings/serverSideName';

export default async function PageProcesosllaveProcesoidProceso({
  params
}: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
}) {
  const carpetas = await getCarpetasByllaveProceso({
    llaveProceso: params.llaveProceso
  });

  return (
    <>
      <Name llaveProceso={params.llaveProceso} />
      {carpetas.map((carpeta) => {
        const { _id, ...newCarpeta } = carpeta;

        return (
          <CarpetaCard
            key={carpeta.id}
            carpeta={newCarpeta}>
            {' '}
            <span className='material-symbols-outlined'>star</span>
          </CarpetaCard>
        );
      })}
    </>
  );
}
