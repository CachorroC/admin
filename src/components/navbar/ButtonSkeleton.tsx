import navbar from '#@/components/navbar/navbar.module.scss';

export function ButtonSkeleton() {
  return (
    <button className={navbar.button}>
      {' '}
      <span className='material-symbols-outlined'>
        {' '}
        cached{' '}
      </span>{' '}
    </button>
  );
}
