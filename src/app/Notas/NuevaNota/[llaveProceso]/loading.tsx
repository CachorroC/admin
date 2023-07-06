import card from '#@/components/card/card.module.scss';

export default function Loading() {
    return (
      <div className={card.container}>
        <div className={card.layout}>
          <div className={card.top}>
            <h1 className={card.title}>Cargando</h1>
          </div>
        </div>
      </div>
    );
}
