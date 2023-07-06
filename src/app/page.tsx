import { Card } from '#@/components/card/card';
import Title from '#@/components/Headings/title';
import layout from '#@/styles/scss/layout.module.scss';
import Link from 'next/link';
import Install from './install';
import navbar from '#@/components/navbar/navbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { getCarpetas } from '#@/lib/Carpetas';
import { Suspense } from 'react';
import type { Route } from 'next';

export default async function Page() {
    const carpetas = await getCarpetas ();
    const lyr = [
      'I met God Just for a minute Sat in His house, took a look around And saw I didn\'t fit in I tried love Gave me something to believe in Planning futures from the start, giving pieces of my heart Just to end up leaving',
      'Am I gonna die trying to find my happy ending ? And will I ever know what it\'s like To be fine without pretending that my',
      'Skin isn\'t crawling, my demons aren\'t calling And tearing me to shreds ? Am I gonna die trying to find my happy ending ? ',
      ' I got high You name it, I\'ve tried it Sure, I\'m sober now And everybody\'s proud But I miss my vices And I tried to be your hero I lent you my voice I was your poster child It was working for a while But it didn\'t fill the void',
      'Am I gonna die trying to find my happy ending?And will I ever know what its likeTo be fine without pretending that my',
    ];
    return (
      <div className={layout.body}>
        <div className={layout.name}>
          <Suspense>
            <Title helper='R&S Asesores Jurídicos' />
          </Suspense>
        </div>

        <div className={layout.left}>
          <Link
            className={layout.link}
            href={'/Procesos' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}> Procesos</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Notas' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>Notas</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/api' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>api</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Notas/NuevaNota' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>Nueva Nota</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Costos' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>Costos</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Contacto' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>Contacto</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/QuienesSomos' as Route}>
            <span className='material-symbols-outlined'>folder_open</span>
            <h1 className={typography.displayMedium}>Quienes Somos</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Demandados/NuevoProceso' as Route}>
            <span className='material-symbols-outlined'>add</span>
            <h1 className={typography.displayMedium}>NuevoProceso</h1>
          </Link>
          <Link
            className={layout.link}
            href={'/Demandados' as Route}>
            <span className='material-symbols-outlined'>person_pin</span>
            <h1 className={typography.displayMedium}> Demandados</h1>
          </Link>
        </div>
      </div>
    );
}
