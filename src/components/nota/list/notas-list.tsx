'use client';
import { monNota } from '#@/lib/types/notas';
import { useRef } from 'react';
import { Nota } from '../notas';
import { Card } from '#@/components/card/card';
import { useNoteSlider } from '#@/app/context/note-slider-context';
import typography from '#@/styles/fonts/typography.module.scss';

const notaMap = new Map();
export const  NoteButtonsSlider  = (
  {notas}: {notas: monNota[]}
) => {
  const [
    noteSliderMap,
    setNoteSliderMap
  ] = useNoteSlider();
  function scrollToId (
    notaId: string
  ) {
    const node = noteSliderMap.get(
      notaId
    );
    node.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      }
    );
  }

  return (
    <>

      {
        notas.map(
          (
            nt
          ) => {
            const { _id, nota } = nt;
            return (
              <button key={ _id } onClick={
                () => scrollToId(
                  _id
                )
              }>
                <span className='material-symbols-outlined'>open_in_new</span>
                <p>{nota}</p>
              </button>
            );
          }
        )
      }

    </>
  );
};

export const NotasList = (
  {notas} : {notas: monNota[]}
) => {


  const [
    noteSliderMap,
    setNoteSliderMap
  ] = useNoteSlider();
  notas.forEach(
    (
      nota, i, arr
    ) => {
      const { _id} = nota;
      setNoteSliderMap(
        new Map(
          noteSliderMap.set(
            _id,
            nota
          )
        )
      );
    }
  );
  return (
    <>

      <ul>
        {notas.map(
          (
            nt, i, arr
          ) => (
            <li
              style={{height: '100vh'}}
              key={nt._id}
              ref={
                (
                  node
                ) => {
                  if ( node ) {
                    notaMap.set(
                      nt._id,
                      node
                    );
                    return setNoteSliderMap(
                      new Map(
                        noteSliderMap.set(
                          nt._id,
                          node
                        )
                      )
                    );
                  }
                  notaMap.delete(
                    nt._id
                  );
                  return setNoteSliderMap(
                    new Map(
                      notaMap
                    )
                  );

                }
              }
            >
              <Card name={ nt.nota } path={ '/Notas' }>
                <span className='material-symbols-outlined'>note</span>

              </Card>
            </li>
          )
        )}
      </ul>

    </>
  );
};