'use client';
import { Name } from '#@/components/Headings/clientSideName';
import { monNota } from '#@/lib/types/notas';
import styles from './notas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Suspense } from 'react';
import { DeleteNoteButton, EditNoteButton } from '#@/components/nota/ButtonsNoteHandlers';
import { ButtonSkeleton } from '#@/components/navbar/ButtonSkeleton';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { AccordionRow } from '#@/components/nota/accordion';

export const NotaCard = ( {
  nota,
  nombre, index
}: {
  nota: monNota;
  nombre: string; index: number
  } ) => {
  const notaRef = useRef (null);
  return(
    <div
      className={ styles.container }
      key={ nota._id }>
      <div className={ styles.nota }>
        <sup className={ styles.sup }>{ `${ index + 1
        }` }</sup>
        <Name helper={ nombre } />
        <p className={ `${ typography.bodySmall } ${ styles.textArea }` }>{ `Nota: ${ nota.nota }` }</p>
        <sub className={ `${ typography.labelSmall } ${ styles.fecha }` }>
          { fixFechas ( nota.fecha.toString () ) }
        </sub>
        <div className={ styles.buttonsRow }>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <EditNoteButton nota={ nota } />
          </Suspense>
          <Suspense fallback={ <ButtonSkeleton /> }>
            <DeleteNoteButton
              id={ nota._id }
              uri={ `${ getBaseUrl () }` }
            />
          </Suspense>
        </div>
        <div className={ styles.tareas }>
          { nota.tareas.map ( ( nt ) => (
            <AccordionRow
              tarea={ nt.tarea }
              key={ nt.tarea }
              dueDate={ nt.dueDate }
              isDone={ nt.isDone }
            />
          ) ) }
        </div>
      </div>
    </div> );
};