import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/layout.module.css';
import { getNotas } from '#@/lib/notas';
import { Notas } from '#@/components/nota/notas';

export default function NuevaNotallaveProceso(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  return (
    <div className={layout.body}>
      <div className={layout.left}>
        <NewNota
          key={params.llaveProceso}
          llaveProceso={params.llaveProceso}
          uri={`${ getBaseUrl() }`}
        />
      </div>
      <div className={layout.right}>
        <Notas
          key={params.llaveProceso}
          llaveProceso={params.llaveProceso}
        />
      </div>
    </div>
  );
}
