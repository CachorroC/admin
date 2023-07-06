'use client';
import { useState } from 'react';
import { fixFechas } from '#@/lib/fix';
import accordion from './accordion.module.scss';
import typeface from '#@/components/typográficos/typeface.module.scss';
import note from '#@/components/nota/note.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export function AccordionRow(
  {
    tarea,
    dueDate,
    isDone,
  }: {
  tarea: string;
  dueDate: string;
  isDone: boolean;
}
) {
  const [
    isActive,
    setIsActive
  ] = useState (
    false
  );
  return (
    <div className={accordion.accordion}>
      <div className={accordion.item}>
        <button
          className={accordion.title}
          onClick={() => setIsActive (
            !isActive
          )}>
          <span className='material-symbols-outlined'>
            {isActive
              ? 'expand_less'
              : 'expand_more'}
          </span>
        </button>
        {isActive && (
          <div className={accordion.content}>
            <h1
              className={typography.titleMedium}>
              {tarea}
            </h1>
            <p
              className={
                isDone
                  ? note.innactive
                  : note.active
              }>
              {`fecha de entrega: ${ fixFechas (
                dueDate.toString ()
              ) }`}
            </p>
            <span
              className={`${
                isDone
                  ? note.innactive
                  : note.active
              } material-symbols-outlined`}>
              {isDone
                ? 'assignment_turned_in'
                : 'assignment_late'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
