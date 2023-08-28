import { carpetaConvert } from '#@/lib/types/carpeta';
import { NextRequest,
         NextResponse } from 'next/server';

//? Peticiones a carpetas individuales y a pedir carpeta por llaveProceso
export async function PUT(
  request: NextRequest,
  context: { params: { llaveProceso: string } }
) {
  const json = await request.json();

  const transform = JSON.stringify(
    json 
  );

  const convert
    = carpetaConvert.toIntCarpeta(
      transform 
    );
  console.log(
    convert 
  );

  return new NextResponse(
    JSON.stringify(
      convert 
    ),
    {
      status : 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}
