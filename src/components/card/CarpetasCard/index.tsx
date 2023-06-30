
import { monCarpetaDemandado } from '#@/lib/types/demandados';
export const CarpetaCard = (
  { Carpeta }: { Carpeta: monCarpetaDemandado }
) => {
  const { llaveProceso, idProceso, Demandado, Codeudor, _id } = Carpeta;
  const { Nombre, Tel, Direccion, Email } = Demandado;
  const { Fijo, Celular } = Tel;

  
};