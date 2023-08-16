import 'server-only';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { Suspense } from 'react';
import { Loader } from '#@/components/Loader';
import { NuevoProceso } from './new-carpeta';
import { InputSection } from '#@/components/form/InputSection';
import { SelectSection } from '#@/components/form/SelectSection';
import { getDepartamentos, getDespachos } from '#@/lib/RamaJudicial';
import form from '#@/components/form/form.module.css';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';
import Fields from './fieldArray-juzgados';
import { notFound } from 'next/navigation';
import { Despacho } from '#@/lib/types/despachos';
import { DeudorFormComponent } from '#@/components/form/deudor-form';


export default async function NuevaCarpetaPage () {
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

  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displaySmall}>
          Nueva Carpeta
        </h1>
      </div>
      <div className={ layout.left }>
        <NuevaCarpetaProvider>
          <NuevoProceso uri={ `${ getBaseUrl() }` } descripciones={ descripciones} despachos={ despachos } />
        </NuevaCarpetaProvider>
      </div>
    </div>
  );
}
