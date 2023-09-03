import { Suspense } from 'react';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/layout.module.css';
import { Notas } from '#@/components/nota/notas';

export default function NuevaNota(
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
        />
      </div>
      <div className={layout.right}>
        <Notas />
      </div>
    </div>
  );
}
