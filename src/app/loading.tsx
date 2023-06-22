import layout from '#@/styles/scss/layout.module.scss';
import navbar from '#@/components/navbar/navbar.module.scss';
import typeface from '#@/components/typográficos/typeface.module.scss';
export default function Loading() {
  return (
    <div className={layout.header}>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>spin</span>
      </button>
      <sub className={typeface.title}>Loading</sub>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>spin</span>
      </button>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>spin</span>
      </button>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>spin</span>
      </button>
    </div>
  );
}
