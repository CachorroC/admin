import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import box from '#@/styles/scss/box.module.scss';

export const Loader = () => {
  return (
    <div className={box.container}>
      <h1 className={typography.labelSmall}>Cargando</h1>
      <div className={layout.loader}></div>
    </div>
  );
};
