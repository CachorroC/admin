import { getDespachos } from '#@/lib/RamaJudicial';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NuevoProceso } from '../sinEspecificar/new-carpeta';

export default async function PageNuevoProceso() {
  const despachos = await getDespachos();

  return <NuevoProceso despachos={despachos} />;
}
