import { NextRequest,
         NextResponse } from 'next/server';

export async function GET(
  request: NextRequest 
) {
  const {
    host, searchParams, hostname, port 
  }
    = new URL(
      request.url 
    );

  const sharedName = searchParams.get(
    'name' 
  );

  const sharedLink = searchParams.get(
    'link' 
  );

  const newBookmark = {
    name: sharedName,
    link: sharedLink
  };

  return new NextResponse(
    JSON.stringify(
      newBookmark 
    ),
    {
      status : 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
