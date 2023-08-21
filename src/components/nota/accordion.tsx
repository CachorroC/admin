'use client';
import { useState } from 'react';
import { fixFechas } from '#@/lib/fix';
import accordion from './accordion.module.css';
import typeface from '#@/components/typográficos/typeface.module.css';
import note from '#@/components/nota/note.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { Accordion } from '#@/components/Accordion';

export function AccordionRow(
  {
    tarea,
    dueDate,
    isDone
  }: {
  tarea: string;
  dueDate: string;
  isDone: boolean;
} 
) {
  const [
    isActive,
    setIsActive
  ] = useState(
    false 
  );

  return (
    <Accordion>
      <>
        <button
          className={accordion.button}
          onClick={() => {
            return setIsActive(
              !isActive 
            );
          }}
        >
          <span className='material-symbols-outlined'>
            {isActive
              ? 'expand_less'
              : 'expand_more'}
          </span>
        </button>
        {isActive && (
          <div className={accordion.content}>
            <h1
              className={typography.titleMedium}
            >
              {tarea}
            </h1>
            <p
              className={
                isDone
                  ? note.innactive
                  : note.active
              }
            >
              {`fecha de entrega: ${ fixFechas(
                dueDate.toString()
              ) }`}
            </p>
            <span
              className={`${
                isDone
                  ? note.innactive
                  : note.active
              } material-symbols-outlined`}
            >
              {isDone
                ? 'assignment_turned_in'
                : 'assignment_late'}
            </span>
          </div>
        )}
      </>
    </Accordion>
  );
}
