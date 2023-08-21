import card from '#@/components/card/card.module.css';

export default function Loading() {
  return (
    <div className={card.container}>
      <div className={card.notActive}>
        <h1 className={card.title}>Cargando</h1>
      </div>
    </div>
  );
}
