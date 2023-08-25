import { ObjectId } from 'mongodb';
import { fetchActuaciones } from '#@/lib/Actuaciones/index';
import { carpetasCollection,
         getCarpetas } from '#@/lib/Carpetas';
import { MonCarpeta,
         carpetaConvert } from '#@/lib/types/carpeta';
import { sleep } from '#@/lib/fix';

export async function idkyet() {
  const Carpetas = new Map<string, MonCarpeta>();

  const carpetas = await getCarpetas();

  for ( const carpeta of carpetas ) {
    const indexOf = carpetas.indexOf(
      carpeta 
    );

    await sleep(
      1000 
    );

    const actuaciones = await fetchActuaciones(
      carpeta.idProceso
    );
    Carpetas.set(
      carpeta._id, carpeta 
    );

    if ( actuaciones ) {
      const ultimaActuacion = actuaciones[ 0 ];

      const today = new Date();

      const fecha = new Date(
        ultimaActuacion.fechaActuacion
      );

      const newCarpeta = {
        ...carpeta,
        fecha    : fecha,
        lastQuery: today
      };
      Carpetas.set(
        newCarpeta._id, newCarpeta 
      );

      const collection
        = await carpetasCollection();

      const updtCarp
        = await collection.findOneAndUpdate(
          {
            _id: new ObjectId(
              carpeta._id 
            )
          },
          {
            $set: newCarpeta
          },
          {
            upsert        : true,
            returnDocument: 'after'
          }
        );
      console.log(
        updtCarp.ok 
      );

      if ( updtCarp.ok ) {
        const nCarp = updtCarp.value;

        if ( nCarp ) {
          const newnewCarp
            = carpetaConvert.toMonCarpeta(
              nCarp 
            );
          Carpetas.set(
            newnewCarp._id,
            newnewCarp
          );
        }
      }
    }

    continue;
  }

  return Array.from(
    Carpetas.values() 
  );
}
