import { getCarpetas,
         getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { getActuaciones } from '#@/lib/Actuaciones';

async function Acts(
                {
                  idProceso,
                  index
                }: {
  idProceso: number;
  index: number;
} 
) {
  const actuaciones = await getActuaciones(
    idProceso,
    index
  );

  return (
    <>
      {actuaciones.map(
        (
          act, i, arr 
        ) => {
          const {
            idRegActuacion 
          } = act;

          return (
            <ActuacionCard
              Actuacion={act}
              key={idRegActuacion}
            />
          );
        } 
      )}
    </>
  );
}

export default async function PageProcesosLeftllaveProceso(
                {
                  params
                }: {
  params: {
    llaveProceso: string;
  };
} 
) {
  const Carpetas
    = await getCarpetasByllaveProceso(
      {
        llaveProceso: params.llaveProceso
      } 
    );

  return (
    <>
      <p>page</p>
      {Carpetas.map(
        (
          carpeta, index 
        ) => {
          return (
            <Acts
              key={carpeta.id}
              index={index}
              idProceso={carpeta.idProceso}
            />
          );
        } 
      )}
    </>
  );
}
