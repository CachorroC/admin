import 'server-only';
import { cache } from 'react';
import { headers } from 'next/dist/client/components/headers';
const basePort = process.env.PORT ?? '3000';
const baseEnvironment = process.env.NODE_ENV;

export const getBaseUrl = cache(
  () => {
    const headersList = headers();
    const uri = process.env.URL
      ?? headersList.get(
        'Host'
      ) ?? `localhost:${ basePort }`;
    return `https://${ uri }`;
  }
);
