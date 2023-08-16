'use client';
import searchbar from '#@/components/search/searchbar.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import  form  from '#@/components/form/form.module.css';
import { link, links } from '../card/card.module.css';

export default function LinkCardSkeleton() {
  return (
    <div className={searchbar.container}>
      <div className={searchbar.notActive}>
        <h1 className={typography.titleMedium}>
          Cargando
        </h1>
        <div className={form.section}>
          <sub className={searchbar.date}>
            00-00-0000
          </sub>
        </div>
        <div className={links}>
          <p className={link}>
            <span
              className={`material-symbols-outlined ${ searchbar.icon }`}
            >
              badge
            </span>
          </p>
          <p className={link}>
            <span
              className={`material-symbols-outlined ${ searchbar.icon }`}
            >
              add
            </span>
          </p>
          <p className={link}>
            <span
              className={`material-symbols-outlined ${ searchbar.icon }`}
            >
              file_open
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
