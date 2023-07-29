
import styles from './procesos.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export const ProcesoCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1
          className={`${ typography.titleLarge } ${ styles.title }`}
        >Cargando</h1>
        <button
          className={ styles.button }
          type='button'
        >
          <span
            className={`material-symbols-outlined ${ styles.icon }`}
          >
            open_in_new
          </span>
        </button>
        <p
          className={`${ typography.bodyMedium } ${ styles.content }`}
        >
          cargando
        </p>

      </div>
    </div>
  );
};