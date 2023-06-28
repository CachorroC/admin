import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
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
async function Acts (
  { idProceso }: { idProceso: number }
) {
  const actuaciones = await getActuacionesByidProceso(
    {idProceso: idProceso}
  );
  return (
    <>
      {actuaciones.acts && actuaciones.acts.map(
        (
          act, i, arr
        ) => {
          const { actuacion, anotacion,idRegActuacion, llaveProceso, fechaActuacion } = act;
          return (
            <Card key={ idRegActuacion } name={ actuacion } path={ '/NuevaNota' } llaveProceso={ llaveProceso } idProceso={ idProceso }>
              <p className={typography.bodymedium}>{anotacion ?? fechaActuacion}</p>
            </Card>
          );
        }
      )
      }
    </>
  );
}
export default async function PageProcesosllaveProceso(
  {
    params
  }: {
  params: {
    llaveProceso: string;
  };
  }
) {

  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const cantidadCarpetas = Carpetas.length;

  switch (cantidadCarpetas) {
  case 0:
    return (  <Name llaveProceso={params.llaveProceso} />);
  case 1:
    const { idProceso, Demandado,_id  } = Carpetas[0];
    return (
      <>
        <Name llaveProceso={params.llaveProceso} />
        <Card
          key={_id.toString()}
          name={Demandado.Nombre}
          path={'/Procesos'}
          llaveProceso={params.llaveProceso}
          idProceso={idProceso}
        >
          <p>{Demandado.Direccion}</p>
        </Card>

      </>
    );
  case 2:
    return (
      <>
        <Name llaveProceso={params.llaveProceso} />
        {Carpetas.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={params.llaveProceso}
                idProceso={idProceso}
              >
                <p>{Demandado.Direccion}</p>
              </Card>
            );
          }
        )}
      </>
    );

  default:
    return (
      <>
        <Name llaveProceso={params.llaveProceso} />
        {Carpetas.map(
          (
            carp, index, arr
          ) => {
            const { idProceso, Demandado, _id } = carp;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={params.llaveProceso}
                idProceso={idProceso}
              >
                <p>{Demandado.Direccion}</p>
              </Card>
            );
          }
        )}
      </>
    );
  }

}
