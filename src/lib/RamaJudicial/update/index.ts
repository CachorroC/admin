import { intProceso } from '#@/lib/types/procesos';
import { carpetasCollection } from '#@/lib/Carpetas';

export async function updateProceso({
  proceso,
  index
}: {
  proceso: intProceso;
  index: number;
}) {
  const collection = await carpetasCollection();

  const requestUpdate =
    await collection.findOneAndUpdate(
      {
        idProceso: {
          $all: [proceso.idProceso]
        }
      },
      {
        $addToSet: {
          procesos: proceso
        }
      },
      {
        returnDocument: 'after',
        upsert: true
      }
    );

  return requestUpdate;
}
