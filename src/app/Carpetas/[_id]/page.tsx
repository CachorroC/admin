import { Card } from '#@/components/card/card-with-carpeta';
import Modal from '#@/components/modal';
import ModalDialog from '#@/hooks/modal-state';
import { getCarpetaById } from '#@/lib/Carpetas';
import Link from 'next/link';
import typography from '#@/styles/fonts/typography.module.scss';
import layout from '#@/styles/scss/layout.module.scss';
import { NombreComponent } from '#@/components/card/Nombre';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { Loader } from '#@/components/Loader';
import { Fragment, Suspense } from 'react';
import { CarpetaCard } from '#@/components/card/CarpetasCard';
import { ButtonsNuevaCarpeta } from '../NuevaCarpeta/new-carpeta-buttons';
import { NuevoProceso } from '../NuevaCarpeta/new-carpeta';
import { EditProceso } from '../NuevaCarpeta/edit-carpeta';

export default async function CarpetasPageId(
  {
    params
  }: {
  params: { _id: string };
}
) {
  const carpeta = await getCarpetaById(
    { _id: params._id }
  );

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        {carpeta && (
          <NombreComponent
            key={carpeta._id}
            deudor={carpeta.deudor}
          />
        )}
      </div>

      <div className={layout.left}>
        {carpeta && (
          <Fragment key={carpeta._id}>
            <Card
              path={'/Procesos'}
              key={carpeta._id}
              carpeta={carpeta}
            >
              <span className='material-symbols-outlined'>
                folder
              </span>
            </Card>
            <CarpetaCard
              carpeta={carpeta}
              key={carpeta._id}
            >
              <Link
                href={`/Carpetas/${ params._id }/Editar`}
                key={carpeta._id}
                className={layout.button}
              >
                <p
                  className={
                    typography.labelSmall
                  }
                >
                  Editar
                </p>
                <span className='material-symbols-outlined'>
                  bookmark_manager
                </span>
              </Link>
            </CarpetaCard>
            <NuevoProceso
              key={ carpeta._id }
              carpeta={carpeta}
              uri={`${ getBaseUrl() }`}

            />
            <EditProceso uri={`${ getBaseUrl() }`} carpeta={ carpeta} />
          </Fragment>
        )}
      </div>
      <div className={layout.right}>
        <ModalDialog>
          <ButtonsNuevaCarpeta />
        </ModalDialog>
      </div>
    </div>
  );
}
