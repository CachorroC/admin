import styles from './notas.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { ButtonSkeleton } from '#@/components/Buttons/ButtonSkeleton';

export function NotasListSkeleton() {
  return (
    <>
      <NotaSkeleton index={1} />
      <NotaSkeleton index={2} />
      <NotaSkeleton index={3} />
      <NotaSkeleton index={4} />
      <NotaSkeleton index={5} />
      <NotaSkeleton index={6} />
      <NotaSkeleton index={7} />
      <NotaSkeleton index={8} />
      <NotaSkeleton index={9} />
    </>
  );
}

export function NotaSkeleton(
  {
    index
  }: {
  index: number;
}
) {
  return (
    <div
      className={styles.container}
      key={index}
    >
      <div className={styles.nota}>
        <sup className={styles.sup}>{`${
          index + 1
        }`}</sup>
        <p
          className={`${ typography.bodySmall } ${ styles.textArea }`}
        >
          Nota: ... cargando
        </p>
        <sub
          className={`${ typography.labelSmall } ${ styles.fecha }`}
        >
          ... cargando
        </sub>
        <div className={styles.buttonsRow}>
          <ButtonSkeleton />
          <ButtonSkeleton />
        </div>
        <div className={styles.tareas}>
          <p>...cargando</p>
        </div>
      </div>
    </div>
  );
}
