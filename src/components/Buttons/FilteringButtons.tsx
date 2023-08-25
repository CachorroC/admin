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
    'Terminados',
    'todos'
  ];

  const icons = [
    'integration_instructions',
    'account_balance_wallet',
    'gavel',
    'money_off',
    'group_remove',
    'clear_all'
  ];

  return (
    <>
      {categorias.map(
        (
          categoria, index 
        ) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCategory(
                  categoria 
                );
              }}
              type='button'
              className={
                category === categoria
                  ? styles.active
                  : styles.button
              }>
              <span
                className={`material-symbols-outlined ${ styles.icon }`}>
                {icons[ index ]}
              </span>
              <p className={styles.text}>
                {categoria}
              </p>
            </button>
          );
        } 
      )}
    </>
  );
};
