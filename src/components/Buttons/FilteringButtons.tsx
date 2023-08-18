'use client';

import { useCategory } from '#@/app/search-context';
import styles from './buttons.module.css';

export const CategoryFilterButton = () => {
  const [
    category,
    setCategory
  ] = useCategory();

  const categorias = [
    'Reintegra',
    'Bancolombia',
    'LiosJuridicos',
    'Insolvencia',
    'todos'
  ];

  return (
    <>{
      categorias.map(
        (
          categoria, index
        ) => {
          return (
            <button key={index} onClick={
              () => {
                setCategory(
                  categoria
                );
              }
            } type='button' className={ category === categoria
              ? styles.active
              : styles.button }>
              <span className={`material-symbols-outlined ${ styles.icon }`}>
          integration_instructions
              </span>
              <p className={styles.text}>{categoria}</p>
            </button>
          );
        }
      )
    }

    <button onClick={
      () => {
        setCategory(
          'Insolvencia'
        );
      }
    } type='button' className={ styles.button }>
      <span className={`material-symbols-outlined ${ styles.icon }`}>
          money_off
      </span>
      <p className={styles.text}>Insolvencia</p>
    </button>
    <button onClick={
      () => {
        setCategory(
          'Bancolombia'
        );
      }
    } type='button' className={ styles.button }>
      <span className={`material-symbols-outlined ${ styles.icon }`}>
          account_balance_wallet
      </span>
      <p className={styles.text}>Bancolombia</p>
    </button>
    <button onClick={
      () => {
        setCategory(
          'LiosJuridicos'
        );
      }
    } type='button' className={ styles.button }>
      <span className={`material-symbols-outlined ${ styles.icon }`}>
          gavel
      </span>
      <p className={styles.text}>Lios Juridicos</p>
    </button>
    <button onClick={
      () => {
        setCategory(
          'todos'
        );
      }
    } type='button' className={ styles.button }>
      <span className={`material-symbols-outlined ${ styles.icon }`}>
clear_all
      </span>
      <p className={styles.text}>Mostrar todo</p>
    </button>
    </>
  );
};