'use client';
import searchbar from '#@/components/search/searchbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
export default function LinkCardSkeleton() {
  return (
    <div className={searchbar.container}>
      <div className={searchbar.notActive}>
        <h1 className={typography.titleMedium}>Cargando </h1>
        <div className={searchbar.section}>
          <sub className={searchbar.date}>00-00-0000</sub>
        </div>

        <div className={searchbar.links}>
          <button
            onClick={() => {
              alert(
                'cargando'
              );
            }}
            className={searchbar.link}
          >
            <span className={`material-symbols-outlined ${searchbar.icon}`}>
              badge
            </span>
          </button>
          <button
            onClick={() => {
              alert(
                'cargando'
              );
            }}
            className={searchbar.link}
          >
            <span className={`material-symbols-outlined ${searchbar.icon}`}>
              add
            </span>
          </button>
          <button
            onClick={() => {
              alert(
                'cargando'
              );
            }}
            className={searchbar.link}
          >
            <span className={`material-symbols-outlined ${searchbar.icon}`}>
              file_open
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
