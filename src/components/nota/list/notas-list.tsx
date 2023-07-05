'use client';
import { monNota } from '#@/lib/types/notas';
import { useRef } from 'react';
import { Nota } from '../notas';
import { Card } from '#@/components/card/card';


export const NotasList = (
  {notas} : {notas: monNota[]}
) => {
  const notasRef = useRef();
  const notasMap = new Map();
  notas.forEach(
    (
      nota, i, arr
    ) => {
      const { _id} = nota;
      notasMap.set(
        _id,
        nota
      );
    }
  );
  function scrollToId (
    notaId : string
  ) {
    const node = notasMap.get(
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
      <nav>
        {
          notas.map(
            (
              nt
            ) => {
              const { _id } = nt;
              return (
                <button key={ _id } onClick={
                  () => scrollToId(
                    _id
                  )
                }>
                  <span className='material-symbols-outlined'>open_in_new</span>
                </button>
              );
            }
          )
        }
      </nav>
      <div>
        <ul>
          {notas.map(
            (
              cat, i, arr
            ) => (
              <li
                key={cat._id}
                ref={
                  (
                    node
                  ) => {
                    if (node) {
                      return notasMap.set(
                        cat._id,
                        node
                      );
                    }

                    return notasMap.delete(
                      cat._id
                    );

                  }
                }
              >
                <Card name={ cat.nota } path={ '/Notas' }>
                  <span className='material-symbols-outlined'>note</span>

                </Card>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};