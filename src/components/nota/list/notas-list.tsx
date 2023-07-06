'use client';
import { monNota } from '#@/lib/types/notas';
import { useRef } from 'react';
import { Nota } from '../notas';
import { Card } from '#@/components/card/card';
import { useNoteSlider } from '#@/app/context/note-slider-context';
import typography from '#@/styles/fonts/typography.module.scss';

export const NotasList = (
  {
    notas,
  }: {
  notas: monNota[];
}
) => {
  const linkRef = useRef (
    new Map ()
  );

  function getMap() {
    if (!linkRef.current) {
      // Initialize the Map on first usage.
      linkRef.current = new Map ();
    }
    return linkRef.current;
  }

  function scrollToId(
    notaId: string
  ) {
    const map = getMap ();
    const node = map.get (
      notaId
    );
    node.scrollIntoView (
      {
        behavior: 'smooth',
        block   : 'nearest',
        inline  : 'center',
      }
    );
  }
  return (
    <div
      style={{
        height: '100vh',
      }}>
      <nav>
        {notas.map (
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
                onClick={() => scrollToId (
                  _id
                )}>
                <span className='material-symbols-outlined'>
                open_in_new
                </span>
                <p>{nota}</p>
              </button>
            );
          }
        )}
      </nav>
      <ul>
        {notas.map (
          (nt, i, arr) => (
            <li
              style={{
                height: '100vh',
              }}
              key={nt._id}
              ref={(
                node
              ) => {
                const map = getMap ();

                if (node) {
                  map.set (
                    nt._id,
                    node
                  );
                }
                else {
                  map.delete (
                    nt._id
                  );
                }
              }}>
              <Card
                name={nt.nota}
                path={'/Notas'}>
                <span className='material-symbols-outlined'>
                note
                </span>
              </Card>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
