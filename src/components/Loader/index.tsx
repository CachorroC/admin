import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import card from '#@/components/card/card.module.scss';

export function Loader() {
  return (
    <div className={card.container}>
      <div className={card.notActive}>
        <h1 className={`${typography.titleMedium} ${card.title}`}>Cargando</h1>
        <div className={layout.loader}></div>
      </div>
    </div>
  );
}
