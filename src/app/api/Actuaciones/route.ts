import { NextRequest } from 'next/server';

export async function GET (
                {
                  Request
                }: { Request: NextRequest }
) {
  const {
    searchParams
  } = new URL(
    Request.url
  );

  const idProceso = searchParams.get(
    'idProceso'
  );

  if ( idProceso ) {

  }
}