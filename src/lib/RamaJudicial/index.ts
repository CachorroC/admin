import 'server-only';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion } from '../types/procesos';
import { ObjectId } from 'mongodb';
import { carpetasCollection } from '../Carpetas';
import { wait } from '../Actuaciones';

export async function getConsultaNumeroRadicion({
  llaveProceso
}: {
  llaveProceso: string;
}) {
  const collection = await carpetasCollection();

  const carpetas = await collection
    .find({
      llaveProceso: llaveProceso
    })
    .toArray();

  try {
    const Request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${llaveProceso}&SoloActivos=true`,
      {
        next: {
          revalidate: 32400
        }
      }
    );

    if (!Request.ok) {
      console.log(
        `Get Consulta Numero Radicacion  was not ok ${Request.status}`
      );

      return [];
    }
    const res = (await Request.json()) as intConsultaNumeroRadicacion;

    if (!res.procesos) {
      console.log('Get Procesos in Rama Judicial  no tiene procesos');

      return [];
    }

    const { procesos } = res;

    const mapProcesos = procesos.map(async (proceso) => {
      const carpeta = carpetas.find((carpe) => {
        if (carpe.idProceso === 0 || carpe.idProceso === 404) {
          return carpe.llaveProceso === proceso.llaveProceso;
        }

        return carpe.idProceso === proceso.idProceso;
      });

      if (carpeta) {
        const updateCarpeta = await collection.updateOne(
          {
            _id: carpeta._id
          },
          {
            $set: {
              llaveProceso: proceso.llaveProceso,
              idProceso: proceso.idProceso
            }
          }
        );

        return updateCarpeta.modifiedCount;
      }

      return null;
    });

    Promise.all(mapProcesos).then((values) => {
      console.log(values);
    });

    return res.procesos;
  } catch (err) {
    console.log(err ?? 'error');

    return [];
  }
}
