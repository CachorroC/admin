import 'server-only';
import { monNota } from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.css';
import { fixFechas } from '#@/lib/fix';
import { Suspense } from 'react';
import { EditNoteButton,
         DeleteNoteButton } from '#@/components/nota/ButtonsNoteHandlers';
import { AccordionRow } from '#@/components/nota/accordion';
import { ButtonSkeleton } from '../Buttons/ButtonSkeleton';
import typography from '#@/styles/fonts/typography.module.css';
import { getNotas,
         getNotasByllaveProceso } from '#@/lib/notas';
import { Name } from '#@/components/Headings/serverSideName';

export function Nota(
  {
    notaRaw,
    i,
    arr
  }: {
  notaRaw: monNota;
  i: number;
  arr: monNota[];
} 
) {
  const {
    _id, nota, tareas, fecha 
  } = notaRaw;

  return (
    <div
      className={note.container}
      key={_id}>
      <div className={note.nota}>
        <sup className={note.sup}>{`${
          i + 1
        }`}</sup>
        <Name
          key={_id}
          llaveProceso={notaRaw.llaveProceso}
        />
        <p
          className={`${ typography.bodySmall } ${ note.textArea }`}>{`Nota: ${ nota }`}</p>
        <sub
          className={`${ typography.labelSmall } ${ note.textArea }`}>
          {fixFechas(
            fecha.toString() 
          )}
        </sub>
        <div className={note.buttonsRow}>
          <Suspense fallback={<ButtonSkeleton />}>
            <EditNoteButton
              key={_id}
              nota={notaRaw}
            />
          </Suspense>
          <Suspense fallback={<ButtonSkeleton />}>
            <DeleteNoteButton
              key={_id}
              id={_id}
            />
          </Suspense>
        </div>
        <div className={note.tareas}>
          {tareas.map(
            (
              tr 
            ) => {
              return (
                <AccordionRow
                  tarea={tr.tarea}
                  key={tr.tarea}
                  dueDate={tr.dueDate}
                  isDone={tr.isDone}
                />
              );
            } 
          )}
        </div>
      </div>
    </div>
  );
}

export async function Notas(
  {
    llaveProceso
  }: {
  llaveProceso?: string;
} 
) {
  if ( llaveProceso ) {
    const notas = await getNotasByllaveProceso(
      {
        llaveProceso: llaveProceso
      } 
    );

    if ( notas.length === 0 ) {
      const nts = await getNotas();

      const NotasRow = nts.map(
        (
          nota, i, arr 
        ) => {
          return (
            <Nota
              notaRaw={nota}
              i={i}
              arr={arr}
              key={nota._id}
            />
          );
        } 
      );

      return <>{NotasRow}</>;
    }

    const NotasRow = notas.map(
      (
        nota, i, arr 
      ) => {
        return (
          <Nota
            notaRaw={nota}
            i={i}
            arr={arr}
            key={nota._id}
          />
        );
      } 
    );

    return <>{NotasRow}</>;
  }

  const notas = await getNotas();

  const NotasRow = notas.map(
    (
      nota, i, arr 
    ) => {
      return (
        <Nota
          notaRaw={nota}
          i={i}
          arr={arr}
          key={nota._id}
        />
      );
    } 
  );

  return <>{NotasRow}</>;
}
