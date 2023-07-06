import 'server-only';
import { cache } from 'react';
const basePort = process.env.PORT ?? '3000';
const baseUrl = process.env.URL ?? 'beta.rsasesorjuridico.com';
const baseEnvironment = process.env.NODE_ENV;
const hostname =
  process.env.URL ??
  (process.env.NODE_ENV === 'development'
    ? 'beta.rsasesorjuridico.com'
    : 'app.rsasesorjuridico.com');

export const getBaseUrl = cache(
  () => {
    const uri = `https://${hostname}` ?? `http://localhost:${basePort}`;
    console.log(
      uri
    );
    return uri;
  }
);
