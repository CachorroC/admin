import 'server-only';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { NuevoProceso } from './new-carpeta';

export default function NuevaCarpetaPage() {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displaySmall}>
          Nueva Carpeta
        </h1>
      </div>
      <div className={layout.left}>
        <NuevoProceso uri={`${getBaseUrl()}`} />
      </div>
    </div>
  );
}
