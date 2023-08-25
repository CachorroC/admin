import { NextRequest,
         NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: {
    params: {
      llaveProceso: string;
      idProceso: number;
    };
  }
) {
  const idProceso = context.params.idProceso;

  const llaveProceso = context.params.llaveProceso;

  const {
    searchParams 
  } = new URL(
    request.url 
  );

  try {
    const res = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if ( !res.ok ) {
      throw new Error(
        ` actuaciones not ok, status: ${ res.status } with ${ res.statusText } idProceso: ${ idProceso } => headers: ${ res.headers }`
      );
    }

    const product = await res.json();

    return NextResponse.json(
      {
        product
      } 
    );
  } catch ( error ) {
    if ( error instanceof Error ) {
      console.log(
        `${ idProceso }: error en la conexion network del fetchActuaciones => ${ error.name } : ${ error.message }`
      );
    }
    console.log(
      `${ idProceso }: : error en la conexion network del fetchActuaciones  =>  ${ error }`
    );

    return new NextResponse(
      null, {
        status: 404
      } 
    );
  }
}
