'use client';
import { useNoteSlider } from '#@/app/context/note-slider-context';
import { monNota } from '#@/lib/types/notas';
import typography from '#@/styles/fonts/typography.module.scss';

export function NotasListButtons({
  notas
}: {
  notas: monNota[];
}) {
  const [
    noteSliderMap,
    setNoteSliderMap
  ] =
    useNoteSlider ();

  return (
    <>
      {notas.map ((nota) => (
        <button
          key={nota._id}
          onClick={() => {
            setNoteSliderMap (
              new Map (
                noteSliderMap.set (
                  nota._id,
                  nota
                )
              )
            );
          }}>
          <span className='material-symbols-outlined'>
            open_in_new
          </span>
          <p className={typography.labelSmall}>
            {nota.nota}
          </p>
        </button>
      ))}
    </>
  );
}
