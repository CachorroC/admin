'use client';
import { useRouter } from 'next/navigation';
import navbar from '#@/components/navbar/navbar.module.css';
import Link from 'next/link';
import { useModal } from '#@/app/modal-context';
import { useNavigator } from '#@/app/search-context';
import type { Route } from 'next';
import buttons from '#@/components/Buttons/buttons.module.css';

export const ForwardButton = () => {
  const router = useRouter();

  return (
    <button
      type='button'
      className={navbar.buttonForward}
      onClick={() => {
        router.forward();
      }}>
      <span
        className={`material-symbols-outlined ${ navbar.icon }`}>
        chevron_right
      </span>
      <p className={navbar.ButtonTextHelper}>
        entrar
      </p>
    </button>
  );
};

export const BackwardsButton = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.back();
  };

  return (
    <button
      type='button'
      className={navbar.buttonBackwards}
      onClick={clickHandler}>
      <span
        className={`material-symbols-outlined ${ navbar.icon }`}>
        chevron_left
      </span>
      <p className={navbar.ButtonTextHelper}>
        atras
      </p>
    </button>
  );
};

export const DrawerMenuButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  return (
    <button
      type='button'
      className={navbar.buttonDrawerMenu}
      onClick={() => {
        setIsNavOpen(
          !isNavOpen 
        );
      }}>
      <span
        className={`material-symbols-outlined ${ navbar.icon }`}>
        {isNavOpen
          ? 'close'
          : 'menu'}
      </span>
      <p className={navbar.ButtonTextHelper}>
        {isNavOpen
          ? 'cerrar'
          : 'abrir'}
      </p>
    </button>
  );
};

export const HomeButton = () => {
  const [
    isNavOpen,
    setIsNavOpen
  ]
    = useNavigator();

  return (
    <Link
      href={'/' as Route}
      className={navbar.buttonHome}>
      <span
        className={`material-symbols-outlined ${ navbar.icon }`}>
        home
      </span>
      <p className={navbar.ButtonTextHelper}>
        inicio
      </p>
    </Link>
  );
};

export const ModalButton = () => {
  const [
    isOpen,
    setIsOpen
  ] = useModal();

  return (
    <button
      className={buttons.buttonModal}
      onClick={() => {
        setIsOpen(
          !isOpen 
        );
      }}>
      <span
        className={`material-symbols-outlined ${ navbar.icon }`}>
        box
      </span>
    </button>
  );
};
