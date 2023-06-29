import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { fixFechas } from '#@/lib/fix';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { monNota } from '#@/lib/types/notas';
import { Suspense } from 'react';
import { ButtonSkeleton } from '../navbar/ButtonSkeleton';
import { EditNoteButton, DeleteNoteButton } from '../nota/ButtonsNoteHandlers';
import { AccordionRow } from '../nota/accordion';
import typography from '#@/styles/fonts/typography.module.scss';
import note from '#@/components/nota/note.module.scss';


export async function Name(
  { llaveProceso }: { llaveProceso: string }
) {
  const proceso = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso,
    }
  );
  const nombre = proceso.map(
    (
      p
    ) => p.Demandado.Nombre
  ).toString();
  return <h1 className={typography.headlineSmall}>{nombre}</h1>;
}