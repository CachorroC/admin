import { Card } from '#@/components/card/card-with-carpeta';
import Modal from '#@/components/modal';
import ModalDialog from '#@/hooks/modal-state';
import { getCarpetaById } from '#@/lib/Carpetas';
import Link from 'next/link';
import typography from '#@/styles/fonts/typography.module.scss';
import layout from '#@/styles/scss/layout.module.scss';

export default async function CarpetasPageId(
  {
    params
  }: {
  params: { _id: string };
} 
) {
  const carpeta = await getCarpetaById(
    {
      _id: params._id
    } 
  );

  return (
    <>
      <Link
        href={`/Carpetas/${ params._id }/Editar`}
        className={layout.button}>
        <p className={typography.labelSmall}>Editar</p>
        <span className='material-symbols-outlined'>bookmark_manager</span>
      </Link>
      <ModalDialog>
        {carpeta && (
          <Card
            path={'/Procesos'}
            carpeta={carpeta}>
            <span className='material-symbols-outlined'>folder</span>
          </Card>
        )}
      </ModalDialog>
    </>
  );
}
