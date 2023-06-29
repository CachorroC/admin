import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';
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
    const { idProceso, Demandado, _id } = Carpetas[ 0 ];
    const { Tel, Direccion, Nombre } = Demandado;
    const { Fijo, Celular } = Tel;
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
          <p>{ Demandado.Direccion }</p>
           {Celular && ( <Link className={card.button} href={ `tel:${ Celular }` }><span className='material-symbols-outlined'>phone_iphone</span></Link>)}
                {Fijo && (<Link className={card.button} href={ `tel:${ Fijo }` }><span className='material-symbols-outlined'>call</span></Link>)}
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
            const { Tel, Direccion, Nombre } = Demandado;
            const { Fijo, Celular } = Tel;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={params.llaveProceso}
                idProceso={idProceso}
              >
                <p>{ Demandado.Direccion }</p>
                {Celular && ( <Link className={card.button} href={ `tel:${ Celular }` }><span className='material-symbols-outlined'>phone_iphone</span></Link>)}
                {Fijo && (<Link className={card.button} href={ `tel:${ Fijo }` }><span className='material-symbols-outlined'>call</span></Link>)}
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
            const { Tel, Direccion, Nombre } = Demandado;
            const { Fijo, Celular } = Tel;
            return (
              <Card
                key={_id.toString()}
                name={Demandado.Nombre}
                path={'/Procesos'}
                llaveProceso={params.llaveProceso}
                idProceso={idProceso}
              >
                <p>{ Demandado.Direccion }</p>
                 {Celular && ( <Link className={card.button} href={ `tel:${ Celular }` }><span className='material-symbols-outlined'>phone_iphone</span></Link>)}
                {Fijo && (<Link className={card.button} href={ `tel:${ Fijo }` }><span className='material-symbols-outlined'>call</span></Link>)}
              </Card>
            );
          }
        )}
      </>
    );
  }

}
