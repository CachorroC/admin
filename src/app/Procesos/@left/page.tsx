import 'server-only';
import { Fragment, Suspense } from 'react';
import { getCarpetas } from '#@/lib/Carpetas';
import CardSkeleton from '#@/components/card/card-skeleton';
import { FechaActuacionComponent } from '#@/components/ultima-actuacion-component';

/*
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
} */

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
      const x = a.fecha.toISOString();
      const y = b.fecha.toISOString();

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
      {/* <Suspense fallback={<CardSearchList path={ '/Procesos' } fechas={ carpetas} />}>
        <LeftFechas path={ '/Procesos' } carpetas={ carpetas } />
      </Suspense> */}
      {carpetas.map(
        (
          carpeta, index
        ) => {
          return (
            <div key={ carpeta._id }>
              <h1>{carpeta.deudor.primerNombre + carpeta.deudor.primerApellido}</h1>

              <Suspense
                key={carpeta._id}
                fallback={<CardSkeleton />}
              >
                <FechaActuacionComponent
                  key={carpeta._id}
                  carpeta={carpeta}
                  index={index}
                />
              </Suspense>
            </div>

          );
        }
      )}
    </>
  );
}
