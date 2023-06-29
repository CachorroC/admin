import searchbar from '#@/components/search/searchbar.module.scss';
import { Name } from '../Headings/clientSideName';
export default function LinkCardSkeleton() {
  return (
    <div className={searchbar.container}>
      <div className={searchbar.notActive}>
        <Name helper='Cargando' />
        <div className={searchbar.link}>
          <span className={`${searchbar.icon} material-symbols-outlined`}>
            file_open
          </span>
        </div>

        <div className={searchbar.section}>
          <sub className={searchbar.date}>00-00-0000</sub>
        </div>

        <div className={searchbar.links}>
          <div className={searchbar.link}>
            <span className={`material-symbols-outlined ${searchbar.icon}`}>
              open_in_new
            </span>
          </div>
          <div className={searchbar.link}>
            <span className={`material-symbols-outlined ${searchbar.icon}`}>
              add
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
