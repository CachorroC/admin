import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import typography from '#@/styles/fonts/typography.module.scss';
import { Fragment, Suspense } from 'react';
import { getActuacionesByidProceso } from '#@/lib/Actuaciones';
import { Card } from '#@/components/card/card';
import SearchOutputListSkeleton from '#@/components/search/SearchProcesosOutputSkeleton';
import Link from 'next/link';
import card from '#@/components/card/card.module.scss';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import note from '#@/components/nota/note.module.scss';

function DemandadoNameBadge(
  { carpeta }: { carpeta: monCarpetaDemandado }
) {
  const { Demandado, idProceso, llaveProceso, _id } = carpeta;
  const { Tel, Direccion, Id, Nombre, Email } = Demandado;
  const { Celular, Fijo } = Tel;
  return (
    <Fragment key={_id.toString()}>
      <Name llaveProceso={llaveProceso} />
      <div className={note.container}>
        <div className={note.form}>
          <h5 className={typography.headlineSmall}>{Nombre}</h5>
          <p className={typography.bodyMedium}>{Direccion}</p>
          {Celular && (
            <Link className={card.button} href={`tel:${Celular}`}>
              <span className='material-symbols-outlined'>phone_iphone</span>
            </Link>
          )}
          {Fijo && (
            <Link className={card.button} href={`tel:${Fijo}`}>
              <span className='material-symbols-outlined'>call</span>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
}
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
async function Acts(
  { idProceso }: { idProceso: number }
) {
  const actuaciones = await getActuacionesByidProceso(
    { idProceso: idProceso }
  );
  return (
    <>
      {actuaciones.acts &&
        actuaciones.acts.map(
          (
            act, i, arr
          ) => {
            const {
              actuacion,
              anotacion,
              idRegActuacion,
              llaveProceso,
              fechaActuacion,
            } = act;
            return (
              <Card
                key={idRegActuacion}
                name={actuacion}
                path={'/NuevaNota'}
                llaveProceso={llaveProceso}
                idProceso={idProceso}
              >
                <p className={typography.bodymedium}>
                  {anotacion ?? fechaActuacion}
                </p>
              </Card>
            );
          }
        )}
    </>
  );
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
  const Carpetas = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso,
    }
  );
  const cantidadCarpetas = Carpetas.length;
  return (
    <>
      {Carpetas.map(
        (
          Carpeta, i, arr
        ) => (
          <DemandadoNameBadge carpeta={Carpeta} key={Carpeta._id.toString()} />
        )
      )}
    </>
  );
}
