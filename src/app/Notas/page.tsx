import { getNotas } from '#@/lib/notas';
import layout from '#@/styles/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { Nota } from '#@/components/nota/notas';

export default async function PageNotas() {
  const notas = await getNotas();

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displayMedium}>
          Notas
        </h1>
      </div>
      <div className={layout.left}>
        {notas.map(
          (
            NotaM, index, arr
          ) => {
            const {
              _id,
              llaveProceso,
              nota,
              pathname,
              tareas,
              fecha
            } = NotaM;

            return (
              <Nota
                notaRaw={NotaM}
                i={index}
                key={_id}
                arr={arr}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
