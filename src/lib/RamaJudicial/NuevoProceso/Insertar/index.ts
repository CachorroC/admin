import { InsertarDemandaPostResponse } from '#@/lib/types/RamaJudicial/insertar-demanda';

export default async function insertarDemandaatRamaJudicial() {
  const formData = new FormData();

  try {
    const Request = await fetch(
      'https://procesojudicial.ramajudicial.gov.co/demandaenlinea/Demanda/Insertar',
      {
        method: 'POST',
        body  : formData
      }
    );

    if ( !Request.ok ) {
      throw new Error(
        'Hubo un error al hacer el Post de la formData en insertar demanda'
      );
    }

    const Result
      = ( await Request.json() ) as InsertarDemandaPostResponse;

    return Result;
  } catch ( error ) {
    console.log(
      `Hubo un error en la funcion insertarDemandaRamaJudicial al hacer el Post de la formData en insertar demanda y el error registra: ${ error } `
    );

    return null;
  }
}
