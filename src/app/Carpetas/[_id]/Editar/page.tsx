import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getCarpetaById } from '#@/lib/Carpetas/index';
import { NuevoProceso } from '#@/app/Carpetas/NuevaCarpeta/edit-carpeta';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
import { ListCardCarpetasNFechasServer } from '#@/components/card/CarpetasCard/server-list';
import { Loader } from '#@/components/Loader';
import { NombreComponent } from '#@/components/card/Nombre';

export default async function EditarCarpetabyId({
  params
}: {
  params: { _id: string };
}) {
  const { _id } = params;

  const carpeta = await getCarpetaById({
    _id: _id
  });

  if (carpeta) {
    return (
      <div className={layout.body}>
        <div className={layout.name}>
          <NombreComponent
            Deudor={carpeta.Deudor}
          />
        </div>
        <div className={layout.left}>
          <NuevoProceso
            uri={`${getBaseUrl()}`}
            carpeta={carpeta}
          />
        </div>
        <div className={layout.right}>
          <Suspense fallback={<Loader />}>
            <ListCardCarpetasNFechasServer />
          </Suspense>
        </div>
      </div>
    );
  }

  return null;
}
