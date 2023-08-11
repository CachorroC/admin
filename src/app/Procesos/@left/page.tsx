import 'server-only';
import { Fragment, Suspense } from 'react';
import { getCarpetas } from '#@/lib/Carpetas';
import CardSkeleton from '#@/components/card/card-skeleton';
import { FechaActuacionComponent } from '#@/components/ultima-actuacion-component';
import typography from '#@/styles/fonts/typography.module.scss';
import card from '#@/components/card/card.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Card } from '#@/components/card/card';
import { NombreComponent } from '#@/components/card/Nombre';

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
      {carpetas.map(
        (
          carpeta, index
        ) => {
          const segundoNombre
          = carpeta.deudor.segundoNombre ?? ' ';

          const segundoApellido
          = carpeta.deudor.segundoApellido ?? ' ';

          const {
            cedula,
            primerNombre,
            primerApellido,
            email,
            tel,
            direccion
          } = carpeta.deudor;
          const nombre = `${ primerNombre }   ${ segundoNombre }   ${ primerApellido }   ${ segundoApellido }`;

          return (
            <Card path={ '/Procesos' } carpeta={ carpeta } key={ carpeta._id }>
              <NombreComponent deudor={ carpeta.deudor}  key={carpeta._id}/>
              <h1
                className={`${ typography.titleMedium } ${ card.title }`}
              >
                {nombre}
              </h1>
              <sub className={ card.sub }>{ `${ index + 1 } de ${ carpetasRaw.length }` }</sub>


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
              <sub className={ card.date }>
                {`fecha de la ultima actuacion registrada en el servidor: ${ fixFechas(
                  carpeta.fecha
                ) } `}
              </sub>
            </Card>
          );
        }
      )}
    </>
  );
}
