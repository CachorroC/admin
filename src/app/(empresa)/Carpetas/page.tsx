import { Card } from '#@/components/card/card';
import { carpetasCollection } from '#@/lib/Carpetas';
import { carpetaConvert } from '#@/lib/types/carpeta';
import layout from '#@/styles/layout.module.scss';
import { Sort } from 'mongodb';

export default async function Page(
  {
    searchParams
  }: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
) {
  const rows = [];

  const collection = await carpetasCollection();

  console.log(
    searchParams
  );

  const carpetas = await collection
        .find(
          {}
        )
        .sort(
 searchParams as Sort
        )
        .toArray();

  return (
    <>
      {carpetas.map(
        (
          carpeta
        ) => {
          const carpetaC
          = carpetaConvert.toMonCarpeta(
            carpeta
          );

          return (
            <Card
              key={ carpetaC._id }
              path={ '/Procesos' }
              carpeta={ carpetaC } >
              <p>{carpeta.llaveProceso}</p>
            </Card>
          );
        }
      )}
    </>
  );
}
