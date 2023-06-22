'use client';
import { useRouter } from 'next/navigation';
import navbar from '#@/components/navbar/navbar.module.scss';
import { useNavigator } from '#@/app/search-context';
import Link from 'next/link';
import { useModal } from '#@/app/modal-context';

export const ForwardButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const router = useRouter();
  return (
    <button
      type='button'
      className={navbar.ForwardButton}
      onClick={() => {
        router.forward();
        setIsNavOpen(
          false
        );
      }}
    >
      <span className='material-symbols-outlined'>redo</span>
      <p className={navbar.ButtonTextHelper}>entrar</p>
    </button>
  );
};
export const BackwardsButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const router = useRouter();
  return (
    <button
      type='button'
      className={navbar.BackwardsButton}
      onClick={() => {
        setIsNavOpen(
          false
        );
        router.back();
      }}
    >
      <span className='material-symbols-outlined'>undo</span>
      <p className={navbar.ButtonTextHelper}>atras</p>
    </button>
  );
};
export const DrawerMenuButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();

  if (isNavOpen) {
    return (
      <button
        type='button'
        className={navbar.DrawerMenuButton}
        onClick={() => setIsNavOpen(
          false
        )}
      >
        <span className='material-symbols-outlined'>close</span>
        <p className={navbar.ButtonTextHelper}>cerrar</p>
      </button>
    );
  }
  return (
    <button
      type='button'
      className={navbar.DrawerMenuButton}
      onClick={() => setIsNavOpen(
        true
      )}
    >
      <span className='material-symbols-outlined'>menu</span>
      <p className={navbar.ButtonTextHelper}>abrir</p>
    </button>
  );
};

export const HomeButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  return (
    <Link
      href={'/'}
      className={navbar.HomeButton}
      onClick={() => {
        setIsNavOpen(
          false
        );
      }}
    >
      <span className='material-symbols-outlined'>home</span>
      <p className={navbar.ButtonTextHelper}>inicio</p>
    </Link>
  );
};
export const ModalButton = () => {
  const [
    isOpen,
    setIsOpen
  ] = useModal();
  return (
    <button className={navbar.ModalButton} onClick={() => setIsOpen(
      true
    )}>
      <span className='material-symbols-outlined'>box</span>
    </button>
  );
};
