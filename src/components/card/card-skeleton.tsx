import card from '#@/components/card/card.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function CardSkeleton() {
  return (
    <div className={card.container}>
      <div className={card.notActive}>
        <h1
          className={`${typography.titleMedium} ${card.title}`}
        >
          cargando
        </h1>
        <p className={card.content}>
          Su contenido se está cargando, espere un
          momento
        </p>
        <div className={card.links}>
          <button className={card.link}>
            <span
              className={`${card.icon}  material-symbols-outlined`}
            >
              autorenew
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
