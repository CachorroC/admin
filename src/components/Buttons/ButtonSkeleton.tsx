import navbar from '#@/components/navbar/navbar.module.scss';

export const ButtonSkeleton = () => {
  return (
    <button
      className={navbar.button}
      type={'button'}>
      <span className='material-symbols-outlined'>
        cached
      </span>
    </button>
  );
};
