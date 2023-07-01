import 'server-only';
import { monNota } from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.scss';
import { inter, raleway } from '#@/styles/fonts/fonts';
import { fixFechas } from '#@/lib/fix';
import { Suspense } from 'react';
import {
  EditNoteButton,
  DeleteNoteButton,
} from '#@/components/nota/ButtonsNoteHandlers';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { AccordionRow } from '#@/components/nota/accordion';
import { ButtonSkeleton } from '../navbar/ButtonSkeleton';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { getNotas, getNotasByllaveProceso } from '#@/lib/notas';
async function Name(
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
  return <h1 className={typography.titleLarge}>{nombre}</h1>;
}

export function Nota(
  { nota }: { nota: monNota }
) {
  return (
    <div className={note.container} key={nota._id}>
      <div className={note.nota}>
        <Name llaveProceso={nota.llaveProceso} />
        <p className={typography.bodySmall}>{`Nota: ${nota.nota}`}</p>
        <sub className={typography.labelSmall}>
          {fixFechas(
            nota.fecha.toString()
          )}
        </sub>
        <div className={note.buttonsRow}>
          <Suspense fallback={<ButtonSkeleton />}>
            <EditNoteButton nota={nota} />
          </Suspense>
          <Suspense fallback={<ButtonSkeleton />}>
            <DeleteNoteButton id={nota._id} uri={`${getBaseUrl()}`} />
          </Suspense>
        </div>
        <div className={note.tareas}>
          {nota.tareas.map(
            (
              nt
            ) => (
              <AccordionRow
                tarea={nt.tarea}
                key={nt.tarea}
                dueDate={nt.dueDate}
                isDone={nt.isDone}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export async function Notas(
  { llaveProceso }: { llaveProceso?: string }
) {
  if (llaveProceso) {
    const notas = await getNotasByllaveProceso(
      { llaveProceso: llaveProceso }
    );
    if (notas.length === 0) {
      const nts = await getNotas();
      const NotasRow = nts.map(
        (
          nota
        ) => (
          <Nota nota={nota} key={nota._id.toString()} />
        )
      );
      return <>{NotasRow}</>;
    }
    const NotasRow = notas.map(
      (
        nota
      ) => (
        <Nota nota={nota} key={nota._id.toString()} />
      )
    );
    return <>{NotasRow}</>;
  }
  const notas = await getNotas();
  const NotasRow = notas.map(
    (
      nota
    ) => (
      <Nota nota={nota} key={nota._id.toString()} />
    )
  );
  return <>{NotasRow}</>;
}
