import {getCarpetasByidProceso,
  getCarpetasByllaveProceso} from '#@/lib/Carpetas';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { Name } from '#@/components/Headings/serverSideName';

export default async function PageProcesosllaveProcesoidProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
    idProceso: number;
  };
}
) {
  const carpetas =
    await getCarpetasByllaveProceso (
      {
        llaveProceso: params.llaveProceso
      }
    );
  return (
    <>
      <Name llaveProceso={params.llaveProceso} />
      {carpetas.map (
        (
          carpeta
        ) => {
          const {
            _id
          } = carpeta;
          return (
            <CarpetaCard
              key={_id}
              Carpeta={carpeta}
            > <span className='material-symbols-outlined'>star</span>
            </CarpetaCard >
          );
        }
      )}
    </>
  );
}
