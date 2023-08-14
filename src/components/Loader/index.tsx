import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import card from '#@/components/card/card.module.css';

export function Loader() {
  return (
    <div className={card.container}>
      <div className={card.notActive}>
        <h1
          className={`${ typography.titleMedium } ${ card.title }`}
        >
          Cargando
        </h1>
        <div className={layout.loader}></div>
      </div>
    </div>
  );
}
