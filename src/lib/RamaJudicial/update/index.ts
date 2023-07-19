import { intProceso } from '#@/lib/types/procesos';
import { procesosCollection } from '#@/lib/RamaJudicial';
import { carpetasCollection } from '#@/lib/Carpetas';

export async function updateProceso(
  {
    proceso,
    index
  }: {
  proceso: intProceso;
  index: number;
} 
) {
  const collection = await procesosCollection();
  const carpetasColl = await carpetasCollection();

  const requestUpdate = await collection.findOneAndUpdate(
    {
      idProceso: proceso.idProceso
    },
    {
      $set: proceso
    },
    {
      returnDocument: 'after',
      upsert        : true
    }
  );

  const carpetaUpdate = await carpetasColl.updateOne(
    {
      llaveProceso: proceso.llaveProceso
    },
    {
      $addToSet: {
        procesos: proceso
      }
    }
  );
  console.log(
    carpetaUpdate.modifiedCount 
  );
  console.log(
    carpetaUpdate.matchedCount 
  );

  return requestUpdate;
}
