'use client';
import { Name } from '#@/components/Headings/clientSideName';
import { monNota } from '#@/lib/types/notas';
import styles from './notas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { fixFechas } from '#@/lib/fix';
import { Suspense,
         forwardRef,
         useRef } from 'react';
import { DeleteNoteButton,
         EditNoteButton } from '#@/components/nota/ButtonsNoteHandlers';
import { ButtonSkeleton } from '#@/components/navbar/ButtonSkeleton';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { AccordionRow } from '#@/components/nota/accordion';

export const NotasList = (
  { notas }: {
  notas: monNota[];
} 
) => {
    const linkRef = useRef<Map<any, any>>();

    function getMap() {
        if ( !linkRef.current ) {
          linkRef.current = new Map();
        }

        return linkRef.current;
    }

    function scrollToId(
      notaId: string 
    ) {
        const map = getMap();

        const node = map.get(
          notaId 
        );
        node.scrollIntoView(
          {
            behavior: 'smooth',
            block   : 'nearest',
            inline  : 'center'
          } 
        );
    }

    return (
      <>
        <nav>
          {notas.map(
            (
              nt 
            ) => {
                const {
                  _id, nota 
                } = nt;

                return (
                  <button
                    key={_id}
                    type='button'
                    onClick={() => {
                        return scrollToId(
                          _id 
                        );
                    }}>
                    <span className='material-symbols-outlined'>
                open_in_new
                    </span>
                    <p>{nota}</p>
                  </button>
                );
            } 
          )}
        </nav>

        {notas.map(
          (
            nota, index, arr 
          ) => {
              return (
                <div
                  className={styles.container}
                  key={nota._id}
                  ref={(
                    node 
                  ) => {
                      const map = getMap();

                      if ( node ) {
                        map.set(
                          nota._id,
                          node 
                        );
                      } else {
                        map.delete(
                          nota._id 
                        );
                      }
                  }}>
                  <div className={styles.nota}>
                    <sup className={styles.sup}>{`${
                      index + 1
                    }`}</sup>
                    <p
                      className={`${ typography.bodySmall } ${ styles.textArea }`}>{`Nota: ${ nota.nota }`}</p>
                    <sub
                      className={`${ typography.labelSmall } ${ styles.fecha }`}>
                      {fixFechas(
                        nota.fecha.toString() 
                      )}
                    </sub>
                    <div className={styles.buttonsRow}>
                      <Suspense
                        fallback={<ButtonSkeleton />}>
                        <EditNoteButton nota={nota} />
                      </Suspense>
                      <Suspense
                        fallback={<ButtonSkeleton />}>
                        <DeleteNoteButton
                          id={nota._id}
                        />
                      </Suspense>
                    </div>
                    <div className={styles.tareas}>
                      {nota.tareas.map(
                        (
                          nt 
                        ) => {
                            return (
                              <AccordionRow
                                tarea={nt.tarea}
                                key={nt.tarea}
                                dueDate={nt.dueDate}
                                isDone={nt.isDone}
                              />
                            );
                        } 
                      )}
                    </div>
                  </div>
                </div>
              );
          } 
        )}
      </>
    );
};

export const NotaFRef = forwardRef(
  function NotaFRef(
    props: { nota: monNota; index: number },
    ref
  ) {
      const {
        nota, index 
      } = props;

      return (
        <div
          className={styles.container}
          key={nota._id}>
          <div className={styles.nota}>
            <sup className={styles.sup}>{`${
              index + 1
            }`}</sup>
            <p
              className={`${ typography.bodySmall } ${ styles.textArea }`}>{`Nota: ${ nota.nota }`}</p>
            <sub
              className={`${ typography.labelSmall } ${ styles.fecha }`}>
              {fixFechas(
                nota.fecha.toString() 
              )}
            </sub>
            <div className={styles.buttonsRow}>
              <Suspense
                fallback={<ButtonSkeleton />}>
                <EditNoteButton nota={nota} />
              </Suspense>
              <Suspense
                fallback={<ButtonSkeleton />}>
                <DeleteNoteButton id={nota._id} />
              </Suspense>
            </div>
            <div className={styles.tareas}>
              {nota.tareas.map(
                (
                  nt 
                ) => {
                    return (
                      <AccordionRow
                        tarea={nt.tarea}
                        key={nt.tarea}
                        dueDate={nt.dueDate}
                        isDone={nt.isDone}
                      />
                    );
                } 
              )}
            </div>
          </div>
        </div>
      );
  }
);

export function Form(
  { notas }: {
  notas: monNota[];
} 
) {
    return (
      <form>
        {notas.map(
          (
            nt, i 
          ) => {
              return (
                <NotaFRef
                  key={nt._id}
                  nota={nt}
                  index={i}
                />
              );
          } 
        )}
      </form>
    );
}
