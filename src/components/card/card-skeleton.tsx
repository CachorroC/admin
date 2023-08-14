import card from '#@/components/card/card.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default function CardSkeleton() {
  return (
    <div className={card.container}>
      <div className={card.notActive}>
        <h1
          className={`${ typography.titleMedium } ${ card.title }`}
        >
          Nombre
        </h1>
        <p className={card.content}>
          Su contenido se está cargando, espere un
          momento
        </p>
        <div className={card.links}>
          <button
            className={card.link}
            type='button'
          >
            <span
              className={`${ card.icon }  material-symbols-outlined`}
            >
              autorenew
            </span>
          </button>
        </div>
        <div className={card.content}>
          <p className={typography.bodySmall}>
            cargando
          </p>
        </div>
      </div>
    </div>
  );
}
