'use client';
import { useRouter } from 'next/navigation';
import navbar from '#@/components/navbar/navbar.module.scss';
import Link from 'next/link';
import { useModal } from '#@/app/modal-context';
import { useNavigator } from '#@/app/search-context';

export const ForwardButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const router = useRouter();
  return (
    <button
      type='button'
      className={navbar.buttonForward}
      onClick={() => {
        router.forward();
        setIsNavOpen(
          false
        );
      }}
    >
      <span className={`material-symbols-outlined ${navbar.icon}`}>
        chevron_right
      </span>
      <p className={navbar.ButtonTextHelper}>entrar</p>
    </button>
  );
};
export const BackwardsButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();
  const [
    isOpen,
    setIsOpen
  ] = useModal();
  const router = useRouter();
  const clickHandler = () => {
    setIsNavOpen(
      false
    );
    setIsOpen(
      false
    );
    router.back();
  };
  return (
    <button
      type='button'
      className={navbar.buttonBackwards}
      onClick={clickHandler}
    >
      <span className={`material-symbols-outlined ${navbar.icon}`}>
        chevron_left
      </span>
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
        className={navbar.buttonDrawerMenu}
        onClick={() => setIsNavOpen(
          false
        )}
      >
        <span className={`material-symbols-outlined ${navbar.icon}`}>
          close
        </span>
        <p className={navbar.ButtonTextHelper}>cerrar</p>
      </button>
    );
  }
  return (
    <button
      type='button'
      className={navbar.buttonDrawerMenu}
      onClick={() => setIsNavOpen(
        true
      )}
    >
      <span className={`material-symbols-outlined ${navbar.icon}`}>menu</span>
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
      className={navbar.buttonHome}
      onClick={() => {
        setIsNavOpen(
          false
        );
      }}
    >
      <span className={`material-symbols-outlined ${navbar.icon}`}>home</span>
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
    <button className={navbar.buttonModal} onClick={() => setIsOpen(
      true
    )}>
      <span className={`material-symbols-outlined ${navbar.icon}`}>box</span>
    </button>
  );
};
