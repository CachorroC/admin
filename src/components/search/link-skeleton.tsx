'use client';
import searchbar from '#@/components/search/searchbar.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default function LinkCardSkeleton() {
  return (
    <div className={searchbar.container}>
      <div className={searchbar.notActive}>
        <h1 className={typography.titleMedium}>
          Cargando
        </h1>
        <div className={searchbar.section}>
          <sub className={searchbar.date}>
            00-00-0000
          </sub>
        </div>
        <div className={searchbar.links}>
          <p className={searchbar.link}>
            <span
              className={`material-symbols-outlined ${ searchbar.icon }`}
            >
              badge
            </span>
          </p>
          <p className={searchbar.link}>
            <span
              className={`material-symbols-outlined ${ searchbar.icon }`}
            >
              add
            </span>
          </p>
          <p className={searchbar.link}>
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
