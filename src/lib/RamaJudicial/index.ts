import { IntDepartamentos } from '../types/RamaJudicial/departamento';

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