import 'server-only';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { NuevoProceso } from './new-carpeta';
import { getDepartamentos, getDespachos } from '#@/lib/RamaJudicial';
import { NuevaCarpetaProvider } from '#@/hooks/formContext';


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
      return {
        descripcion           : res.descripcion,
        idCatalogoDetalle     : res.idCatalogoDetalle,
        codigo                : res.codigo,
        idCatalogoDetallePadre: res.idCatalogoDetallePadre
      };
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
