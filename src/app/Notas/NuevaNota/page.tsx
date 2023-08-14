import { Suspense } from 'react';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/scss/layout.module.css';
import { Notas } from '#@/components/nota/notas';

export default function NuevaNota() {
  return (
    <div className={layout.body}>
      <div className={layout.left}>
        <NewNota
          llaveProceso={''}
          uri={`${ getBaseUrl() }`}
        />
      </div>
      <div className={layout.right}>
        <Notas />
      </div>
    </div>
  );
}
