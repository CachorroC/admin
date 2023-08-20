import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/layout.module.css';
import { getNotas } from '#@/lib/notas';
import { Notas } from '#@/components/nota/notas';
import Modal from '#@/components/modal';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';

export default function NuevaNotallaveProceso(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  return (
    <Suspense fallback={ <Loader key={params.llaveProceso}/>}>
      <Modal key={params.llaveProceso}>
        <NewNota key={params.llaveProceso}
          llaveProceso={params.llaveProceso}
          uri={`${ getBaseUrl() }`}
        />
      </Modal>
    </Suspense>
  );
}
