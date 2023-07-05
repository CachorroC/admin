import { getNotas } from '#@/lib/notas';
import { NoteButtonsSlider } from '#@/components/nota/list/notas-list';

export default async function PageProcesos () {
  const notas = await getNotas();
  return (
    <>
      <NoteButtonsSlider notas={ notas } />
    </>
  );
}
