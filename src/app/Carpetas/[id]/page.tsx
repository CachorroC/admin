
import { Card } from '#@/components/card/card-with-carpeta';
import Modal from '#@/components/modal';
import ModalDialog from '#@/hooks/modal-state';
import { getCarpetaById } from '#@/lib/Carpetas';

export default async function CarpetasPageId (
  {
    params
  }: {params: {id: string}}
) {

  const carpeta = await getCarpetaById(
    {
      id: params.id
    }
  );


  return (
    <>

      <ModalDialog>
        {
          carpeta && (
            <Card  path={ '/Procesos' } carpeta={carpeta} >
              <span className='material-symbols-outlined'>folder</span>
            </Card>
          )
        }

      </ModalDialog>


    </>
  );
}