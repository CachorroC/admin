import { getActuaciones } from '#@/lib/Actuaciones';
import { monCarpetaDemandado } from '#@/lib/types/demandados';
import {
  NextRequest,
  NextResponse
} from 'next/server';

export async function POST(Request: NextRequest) {
  /*   const {
    searchParams
  } = new URL (
    Request.url
  );
 */
  const mapIncomingCarpetas: Map<
    string,
    monCarpetaDemandado
  > = new Map();
  const mapActuacionesByIdCarpeta = new Map();

  const incomingRequest =
    (await Request.json()) as monCarpetaDemandado[];

  incomingRequest.forEach((carpetaIncoming) => {
    return mapIncomingCarpetas.set(
      carpetaIncoming._id,
      carpetaIncoming
    );
  });

  console.log(mapIncomingCarpetas);
  mapIncomingCarpetas.forEach(
    (carpeta, id, mapa) => {
      const { idProceso, llaveProceso, _id } =
        carpeta;

      const actuaciones = getActuaciones(
        idProceso
      ).then((fullfilled) => {
        return mapActuacionesByIdCarpeta.set(
          _id,
          fullfilled
        );
      });

      return actuaciones;
    }
  );
}
/*
export async function GET(
  request: Request
) {}

export async function HEAD(
  request: Request
) {}


export async function PUT(
  request: Request
) {}

export async function DELETE(
  request: Request
) {}

export async function PATCH(
  request: Request
) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(
  request: Request
) {} */
