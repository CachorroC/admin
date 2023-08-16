import { notFound } from 'next/navigation';
import { IntDepartamentos } from '../types/RamaJudicial/departamento';
import { Despacho } from '../types/despachos';

export async function getDepartamentos () {
  try {
    const Request = await fetch(
      'https://procesojudicial.ramajudicial.gov.co/demandaenlinea/Demanda/Departamento'
    );

    if ( !Request.ok ) {
      throw new Error(
        'no pudimos obtener la lista de departamentos disponibles'
      );
    }
    const Respose = ( await Request.json() ) as IntDepartamentos;

    return Respose;
  } catch ( error ) {
    console.log(
      error
    );

    return null;
  }
}



export async function getDespachos () {
  try {

    const Request = await fetch(
      'https://www.ramajudicial.gov.co/directorioPortal-portlet/api/jsonws/servicioapidirectorio/get-despacho-distritos.18'
    );

    if ( !Request.ok ) {
      return [];
    }
    const Response = ( await Request.json() ) as Despacho[];

    return Response;
  } catch ( error ) {
    console.log(
      `error en el despacho: ${ error }`
    );

    return [];
  }
}
