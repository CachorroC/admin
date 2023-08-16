import 'server-only';
import { InputSection } from '#@/components/form/InputSection';
import { SelectSection } from '#@/components/form/SelectSection';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NuevoProceso } from '../../sinEspecificar/new-carpeta';
import form from '#@/components/form/form.module.css';
import { getDepartamentos, getDespachos } from '#@/lib/RamaJudicial';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import { notFound } from 'next/navigation';
import Fields from '../../sinEspecificar/fieldArray-juzgados';
import { DeudorFormComponent } from '#@/components/form/deudor-form';

export default async function PageProcesosEditarLeft (
  {
    params
  }: { params: { llaveProceso: string } }
) {

  const carpeta = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  const despachos = await getDespachos();
  const departamentos = await getDepartamentos();

  if ( !departamentos ) {
    return null;
  }

  const descripciones = departamentos.result.map(
    (
      res
    ) => {
      return res.descripcion;
    }
  );

  if ( !carpeta ) {
    notFound();
  }

  return (

    <NuevoProceso carpeta={ carpeta } uri={ `${ getBaseUrl() }` } descripciones={ descripciones} despachos={ despachos } />


  );
}
