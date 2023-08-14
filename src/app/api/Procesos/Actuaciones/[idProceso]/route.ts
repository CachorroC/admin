import 'server-only';
import { NextRequest,
         NextResponse } from 'next/server';
import { IntActuaciones,
         intConsultaActuaciones } from '#@/lib/types/procesos';

export async function GET(
  Request: NextRequest,
  {
    params
  }: { params: { idProceso: number } }
) {
  try {
    const req = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ params.idProceso }`
    );

    if ( !req.ok ) {
      const text = await req.text();

      const Response: IntActuaciones = {
        idProceso: params.idProceso,
        text     : text
          ? JSON.parse(
            text
          )
          : {
              statusCode: req.status,
              message   : req.statusText
            }
      };

      return new NextResponse(
        JSON.stringify(
          Response
        ),
        {
          status : 200,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    }

    const res
      = ( await req.json() ) as intConsultaActuaciones;

    if ( res.actuaciones ) {
      const Response: IntActuaciones = {
        idProceso: params.idProceso,
        text     : {
          statusCode: req.status,
          message   : req.statusText
        },
        acts: res.actuaciones
      };

      return new NextResponse(
        JSON.stringify(
          Response
        ),
        {
          status : 200,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    }
    const text = await req.text();

    const Response: IntActuaciones = {
      idProceso: params.idProceso,
      text     : JSON.parse(
        text
      )
    };

    return new NextResponse(
      JSON.stringify(
        Response
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  } catch {
    (
      error: unknown | any
    ) => {
      const Response: IntActuaciones = {
        idProceso: params.idProceso,
        text     : {
          message   : error.message ?? 'error',
          statusCode: 0
        }
      };

      return new NextResponse(
        JSON.stringify(
          Response
        ),
        {
          status : 200,
          headers: {
            'content-type': 'application/json'
          }
        }
      );
    };
  }

  const Response: IntActuaciones = {
    idProceso: params.idProceso,
    text     : {
      message   : 'error final',
      statusCode: 0
    }
  };

  return new NextResponse(
    JSON.stringify(
      Response
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
