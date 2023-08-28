import { NextRequest,
         NextResponse } from 'next/server';

//? aqui van todas las peticiones a actuaciones individuales, es decir a cada ruta por ruta de idProceso y tambien van las peticiones a fetchCarpeta by idProceso
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
  /*
  const llaveProceso = context.params.llaveProceso;

  const {
    searchParams
  } = new URL(
    request.url
  ); */

  try {
    const request = await fetch(
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${ idProceso }`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if ( !request.ok ) {
      throw new Error(
        ` actuaciones not ok, status: ${ request.status } with ${ request.statusText } idProceso: ${ idProceso } => headers: ${ request.headers }`
      );
    }

    const product = await request.json();

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
