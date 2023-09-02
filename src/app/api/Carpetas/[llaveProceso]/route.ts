import { carpetasCollection } from '#@/lib/Carpetas';
import { IntCarpeta,
         carpetaConvert } from '#@/lib/types/carpeta';
import { NextRequest,
         NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  context: { params: { llaveProceso: string } }
) {
  const json
    = ( await request.json() ) as IntCarpeta;
  console.log(
    json 
  );

  const collection = await carpetasCollection();

  const update
    = await collection.findOneAndUpdate(
      {
        llaveProceso:
          json.llaveProceso
          ?? context.params.llaveProceso
      },
      {
        $set: json
      },
      {
        upsert        : true,
        returnDocument: 'after'
      }
    );

  if ( update.value ) {
    return new NextResponse(
      JSON.stringify(
        update.value 
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }

  return new NextResponse(
    null, {
      status: 304
    } 
  );
}
