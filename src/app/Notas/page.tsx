import { getNotas } from '#@/lib/notas';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import note from '#@/components/nota/note.module.scss';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import { DeleteNoteButton, EditNoteButton } from '#@/components/nota/ButtonsNoteHandlers';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { fixFechas } from '#@/lib/fix';
import Link from 'next/link';
import type { Route } from 'next';

async function renderName (
  { llaveProceso }: { llaveProceso: string }
) {
  const carpetas = await getCarpetasByllaveProceso(
    {llaveProceso: llaveProceso}
  );
  const names = carpetas.map(
    (
      carpeta, i, arr
    ) => {
      const { Demandado } = carpeta;
      const { Nombre } = Demandado;
      return Nombre;
    }
  );
  return names.toString();
}
export default async function PageNotas () {
  const notas = await getNotas();
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        <h1 className={typography.displayMedium}>Notas</h1>
      </div>
      <div className={ layout.left }>
        { notas.map(
          (
            Nota, index, arr
          ) => {
            const { _id, llaveProceso, nota, pathname, tareas, fecha } = Nota;
            const name = renderName(
              { llaveProceso: llaveProceso }
            ).then(
              (
                ff
              ) => ff
            );
            return (
              <div className={ note.container }key={ _id.toString() }>
                <div className={ note.note }>
                  <Suspense fallback={<h1 className={typography.headlineMedium}>loading</h1>}>
                    <h1 className={ typography.headlineMedium }>{ name }</h1>
                  </Suspense>
                  <p className={ typography.bodyLarge }>{ `Nota: ${ nota }` }</p>
                  <sub className={typography.labelLarge}>{`Nota del ${fixFechas(
                    fecha
                  ) }` }</sub>
                  <Link className={note.button} href={ pathname as Route } >
                    <span className='material-symbols-outlined'>route</span>
                  </Link>
                  <EditNoteButton nota={ Nota } />
                  <DeleteNoteButton id={ _id } uri={ `${ getBaseUrl() }` } />
                  <div className={ note.tareas }>
                    { tareas.map(
                      (
                        Tarea, i, arrtareas
                      ) => {
                        const { dueDate, tarea, isDone } = Tarea;
                        return (
                          <div className={isDone
                            ? note.tareaIsDone
                            : note.tareaNotDone } key={
                            tarea
                          }>
                            <h3 className={ typography.bodySmall }>{ tarea }</h3>
                            <sub className={typography.labelMedium}>{fixFechas(
                              dueDate
                            ) }</sub>
                            {
                              isDone && (
                                <p className={typography.labelSmall}>Tarea completada</p>
                              )
                            }
                          </div>
                        );
                      }
                    )}
                  </div>

                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}