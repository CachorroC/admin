import 'server-only';
import { monNota } from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.scss';
import { inter, raleway } from '#@/styles/fonts/fonts';
import typography from '#@/components/typográficos/typography.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Suspense } from 'react';
import {
  EditNoteButton,
  DeleteNoteButton,
} from '#@/components/nota/ButtonsNoteHandlers';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { AccordionRow } from '#@/components/nota/accordion';
import { getProcesosByllaveProceso } from '#@/lib/getProcesos';
import { ButtonSkeleton } from '../navbar/ButtonSkeleton';
export async function Name(
  { llaveProceso }: { llaveProceso: string }
) {
  const proceso = await getProcesosByllaveProceso(
    {
      llaveProceso: llaveProceso,
    }
  );
  const nombre = proceso.map(
    (
      p
    ) => p.sujetosProcesales
  ).toString();
  return <h1 className={typography.headlineSmall}>{nombre}</h1>;
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

export async function Notas() {
  const request = await fetch(
    `${getBaseUrl()}/api/Notas`
  );
  const notas = (await request.json()) as monNota[];
  const NotasRow = notas.map(
    (
      nota
    ) => <Nota nota={nota} key={nota._id} />
  );
  return <div className={note.row}>{NotasRow}</div>;
}
