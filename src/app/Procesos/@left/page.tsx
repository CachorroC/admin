import { Fragment, Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { ListCardCarpetasNFechas } from '#@/components/card/CarpetasCard/list';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchActuaciones, fetchFecha, fetchFechas, getActuaciones } from '#@/lib/Actuaciones';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import { MonCarpeta } from '#@/lib/types/demandados';
import { CardSearchList } from '#@/components/search/CardSearchList';
import CardSkeleton from '#@/components/card/card-skeleton';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { Card } from '#@/components/card/card';
import { ActuacionCardSkeleton } from '#@/components/card/ActuacionesCard/skeleton';
import { NombreComponent } from '#@/components/card/Nombre';
import form from '#@/components/form/form.module.scss';
import { CarpetaCard } from '#@/components/card/CarpetasCard';

async function CardComponent (
  {
    carpeta, index
  }: { carpeta: MonCarpeta; index: number }
) {
  const actuaciones = await getActuaciones(
    {
      idProceso: carpeta.idProceso,
      index    : index
    }
  );

  if ( actuaciones.length === 0 ) {
    return null;
  }

  return (

    <ActuacionCard Actuacion={ actuaciones[ 0 ] } key={carpeta.idProceso}/>

  );
}

async function LeftFechas (
  {
    path, carpetas
  }: { path: string;  carpetas: MonCarpeta[]}
) {
  const fechas = await fetchFechas(
    { carpetas: carpetas }
  );

  return (
    <CardSearchList
      path={path}
      fechas={fechas}
    />
  );
}

export default async function PageProcesosLeft() {
  const carpetasRaw = await getCarpetas();

  const carpetas = [
    ...carpetasRaw
  ].sort(
    (
      a, b
    ) => {
      if ( !a.fecha || a.fecha === undefined ) {
        return 1;
      }

      if ( !b.fecha || b.fecha === undefined ) {
        return -1;
      }

      const x
      =  a.fecha.toISOString();

      const y
      =  b.fecha.toISOString();

      if ( x < y ) {
        return 1;
      }

      if ( x > y ) {
        return -1;
      }

      return 0;
    }
  );

  return (
    <>

      <Suspense fallback={<CardSearchList path={ '/Procesos' } fechas={ carpetas} />}>
        <LeftFechas path={ '/Procesos' } carpetas={ carpetas } />
      </Suspense>

    </>
  );
}
