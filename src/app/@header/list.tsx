import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas, getActuaciones } from '#@/lib/Actuaciones';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Drawer from '#@/components/navbar/drawer';
import { ActuacionCardSkeleton } from '#@/components/card/ActuacionesCard/skeleton';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { NombreComponent } from '#@/components/card/Nombre';
import { Fragment, Suspense } from 'react';
import { CardSearchList } from '#@/components/search/CardSearchList';
import { ActuacionCard } from '#@/components/card/ActuacionesCard';
import { MonCarpeta } from '#@/lib/types/demandados';

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

export async function ListDrawer() {
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
    <Drawer>

      <Suspense fallback={<span>suspense antes de carpetas</span>}>
        { carpetas.map(
          (
            carpeta, index
          ) => {
            return (
              <Fragment key={carpeta._id}>
                <Suspense key={ carpeta.idProceso } fallback={ <ActuacionCardSkeleton /> }>
                  <CardComponent key={carpeta.idProceso} carpeta={carpeta} index={index}/>
                </Suspense>
                <CarpetaCard carpeta={ carpeta } key={ carpeta._id }>
                  <NombreComponent deudor={ carpeta.deudor} />
                </CarpetaCard>
              </Fragment>

            );
          }
        )}
      </Suspense>
      <Suspense fallback={<CardSearchList path={ '/Procesos' } fechas={ carpetas} />}>
        <LeftFechas path={ '/Procesos' } carpetas={ carpetas } />
      </Suspense>
    </Drawer>
  );
}
