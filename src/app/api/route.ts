import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  Request: NextRequest
) {
    const {
      host, searchParams, hostname, port 
    } = new URL (
      Request.url
    );
    return new NextResponse (
      JSON.stringify (
        {
          host        : host,
          searchParams: searchParams,
          port        : port,
          hostname    : hostname,
        }
      ),
      {
        status : 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    );
}
