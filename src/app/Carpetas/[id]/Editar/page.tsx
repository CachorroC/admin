import { getCarpetaById } from '../../../../lib/Carpetas/index';

export default async function EditarCarpetabyId(
  {
    params
  }: { params: { id: string } }
) {
  const {
    id
  } = params;

  const carpeta = await getCarpetaById(
    {
      id: id
    }
  );
  const str = carpeta ?? id;
  console.log(
    typeof str
  );

  return (
    <>

    </>
  );
};