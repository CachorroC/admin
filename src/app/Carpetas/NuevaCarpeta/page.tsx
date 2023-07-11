import 'server-only';
import { NuevoProceso } from '#@/components/card/CarpetasCard/new-carpeta';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function NuevaCarpetaPage() {
    return (
      <div className={layout.left}>
        <h2 className={typography.titleLarge}>
        Nueva carpeta
        </h2>
        <NuevoProceso uri={`${ getBaseUrl() }`} />
      </div>
    );
}
