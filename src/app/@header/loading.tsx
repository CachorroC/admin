import layout from '#@/styles/scss/layout.module.scss';
import navbar from '#@/components/navbar/navbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function Loading() {
  return (
    <div className={layout.header}>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>
          refresh
        </span>
      </button>
      <sub className={typography.displayLarge}>
        Loading
      </sub>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>
          refresh
        </span>
      </button>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>
          refresh
        </span>
      </button>
      <button className={navbar.button}>
        <span className='material-symbols-outlined'>
          refresh
        </span>
      </button>
    </div>
  );
}
