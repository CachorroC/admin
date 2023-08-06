import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getCarpetaById } from '#@/lib/Carpetas/index';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { NombreComponent } from '#@/components/card/Nombre';
import { notFound } from 'next/navigation';
import { NuevoProceso } from '../../NuevaCarpeta/new-carpeta';
import { EditProceso } from '../../NuevaCarpeta/edit-carpeta';

export default async function EditarCarpetabyId(
  {
    params
  }: {
  params: { _id: string };
} 
) {
  const {
    _id 
  } = params;

  const carpeta = await getCarpetaById(
    { _id: _id } 
  );

  if ( !carpeta ) {
    notFound();
  }

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <NombreComponent
          deudor={carpeta.deudor}
        />
      </div>
      <div className={layout.left}>
        <EditProceso
          uri={`${ getBaseUrl() }`}
          carpeta={carpeta}
        />
      </div>
    </div>
  );
}
