'use client';

import { useCategory } from '#@/app/search-context';
import styles from './buttons.module.css';

export const CategoryFilterButton = () => {
  const [
    category,
    setCategory
  ] = useCategory();

  return (
    <div className={ styles.buttonsRow }>
      <button onClick={
        () => {
          setCategory(
            'Reintegra'
          );
        }
      } type='button' className={ styles.button }>
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          integration_instructions
        </span>
        <p className={styles.text}>Reintegra</p>
      </button>
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
    </div>
  );
};