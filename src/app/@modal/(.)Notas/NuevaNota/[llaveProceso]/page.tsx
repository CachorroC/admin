import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/scss/layout.module.css';
import { getNotas } from '#@/lib/notas';
import { Notas } from '#@/components/nota/notas';
import Modal from '#@/components/modal';

export default function NuevaNotallaveProceso(
  {
    params
  }: {
  params: { llaveProceso: string };
}
) {
  return (
    <Modal>
      <NewNota
        llaveProceso={''}
        uri={`${ getBaseUrl() }`}
      />
    </Modal>
  );
}
