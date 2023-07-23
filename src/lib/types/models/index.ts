import fs from 'fs/promises';
import { ClassDemanda } from './demanda';
import { carpetasCollection } from '#@/lib/Carpetas';
import { ObjectId } from 'mongodb';
import
{ IntCarpeta,
  TipoProceso } from '../demandados';
import { getProceso } from '#@/lib/RamaJudicial';



const fixingTheMess = mess.map(
  async (
    messito 
  ) => {
    const idProcesos: number[] = [];

    if ( messito.llaveProceso ) {
      const procesos = await getProceso(
        {
          llaveProceso: messito.llaveProceso
        } 
      );
      procesos.forEach(
        (
          proceso 
        ) => {
          idProcesos.push(
            proceso.idProceso 
          );
        } 
      );
    }

    const nwcrp = {
      ...messito,
      idProceso   : idProcesos,
      fechaIngreso: new Date()
    };

    return nwcrp;
  }
);


fs.writeFile(
  'newCarpetas.json',
  JSON.stringify(
    fixingTheMess 
  ) 
);