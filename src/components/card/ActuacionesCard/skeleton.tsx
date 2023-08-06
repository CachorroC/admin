import styles from './actuaciones.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export const ActuacionCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1
          className={`${ typography.titleMedium } ${ styles.title }`}
        >
          Cargando
        </h1>

        <sub
          className={`${ typography.labelSmall } ${ styles.sub }`}
        >
          cargando
        </sub>
        <button
          type='button'
          className={styles.button}
        >
          <span
            className={`material-symbols-outlined ${ styles.icon }`}
          >
            downloading
          </span>
        </button>
        <sup
          className={`${ typography.labelMedium } ${ styles.date }`}
        >
          cargando
        </sup>
      </div>
    </div>
  );
};
