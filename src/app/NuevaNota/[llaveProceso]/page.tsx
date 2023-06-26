import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
export default function Page(
  { params }: { params: { llaveProceso: string } }
) {
  return <NewNota llaveProceso={params.llaveProceso} uri={`${getBaseUrl()}`} />;
}
