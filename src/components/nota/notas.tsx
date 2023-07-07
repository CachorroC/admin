import 'server-only';
import { monNota } from '#@/lib/types/notas';
import note from '#@/components/nota/note.module.scss';
import {inter,
  raleway} from '#@/styles/fonts/fonts';
import { fixFechas } from '#@/lib/fix';
import { Suspense } from 'react';
import {EditNoteButton,
  DeleteNoteButton} from '#@/components/nota/ButtonsNoteHandlers';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { AccordionRow } from '#@/components/nota/accordion';
import { ButtonSkeleton } from '../navbar/ButtonSkeleton';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import {getNotas,
  getNotasByllaveProceso} from '#@/lib/notas';
import accordion from './accordion.module.scss';
import { Name } from '#@/components/Headings/serverSideName';

export function Nota({
  notaRaw,
  i,
  arr
}: {
  notaRaw: monNota;
  i: number;
  arr: monNota[];
}) {
  return (
    <div
      className={note.container}
      key={notaRaw._id}>
      <div className={note.nota}>
        <sup className={note.sup}>{`${
          i + 1
        }`}</sup>
        <Name
          llaveProceso={notaRaw.llaveProceso}
        />
        <p
          className={`${ typography.bodySmall } ${ note.textArea }`}>{`Nota: ${ notaRaw.nota }`}</p>
        <sub
          className={`${ typography.labelSmall } ${ note.fecha }`}>
          {fixFechas (notaRaw.fecha.toString ())}
        </sub>
        <div className={note.buttonsRow}>
          <Suspense fallback={<ButtonSkeleton />}>
            <EditNoteButton nota={notaRaw} />
          </Suspense>
          <Suspense fallback={<ButtonSkeleton />}>
            <DeleteNoteButton
              id={notaRaw._id}
            />
          </Suspense>
        </div>
        <div className={note.tareas}>
          {notaRaw.tareas.map ((nt) => (
            <AccordionRow
              tarea={nt.tarea}
              key={nt.tarea}
              dueDate={nt.dueDate}
              isDone={nt.isDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function Notas({
  llaveProceso
}: {
  llaveProceso?: string;
}) {
  if (llaveProceso) {
    const notas = await getNotasByllaveProceso ({
      llaveProceso: llaveProceso
    });
    if (notas.length === 0) {
      const nts = await getNotas ();

      const NotasRow = nts.map ((nota, i, arr) => (
        <Nota
          notaRaw={nota}
          i={i}
          arr={arr}
          key={nota._id}
        />
      ));
      return <>{NotasRow}</>;
    }

    const NotasRow = notas.map ((nota, i, arr) => (
      <Nota
        notaRaw={nota}
        i={i}
        arr={arr}
        key={nota._id}
      />
    ));
    return <>{NotasRow}</>;
  }

  const notas = await getNotas ();

  const NotasRow = notas.map ((nota, i, arr) => (
    <Nota
      notaRaw={nota}
      i={i}
      arr={arr}
      key={nota._id}
    />
  ));
  return <>{NotasRow}</>;
}
