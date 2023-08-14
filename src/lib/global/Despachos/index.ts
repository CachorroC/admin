import { Despacho,
         despachosConvert } from '../../types/despachos';

export async function fetchDespachos() {
  const despachos = await fetch(
    'https://www.ramajudicial.gov.co/directorioPortal-portlet/api/jsonws/servicioapidirectorio/get-despacho-distritos.18'
  );

  if ( !despachos.ok ) {
    throw new Error(
      'failed to fetch the despachos'
    );
  }

  const res
    = ( await despachos.json() ) as Despacho[];

  return res;
}
