import { Card } from '#@/components/card/card';
import Modal from '#@/components/modal';

export default function CarpetasPageId (
  {
    params
  }: {params: {id: string}}
) {
  return (
    <Modal>
      <Card name={ params.id } path={ '/Carpetas' } >
        <span className='material-symbols-outlined'>folder</span>
      </Card>
    </Modal>
  );
}