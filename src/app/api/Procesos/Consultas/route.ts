export async function consultaDocumento(
  documento: string,
  tipoDocumento: TipoDocumento
) {}

export async function GET(
  Request: NextRequest 
) {
  const requestUrl = new URL(
    Request.url 
  );

  const delay
    = requestUrl.searchParams.get(
      'delay' 
    );

  if ( delay ) {
    await new Promise(
      (
        resolve 
      ) => {
        return setTimeout(
          resolve, Number(
            delay 
          ) 
        );
      } 
    );
  }

  const id = requestUrl.searchParams.get(
    'id' 
  );

  if ( id ) {
    const consulta = await consultaDocumento(
      id 
    );
  }
}
