import 'server-only';
import { cache } from 'react';
const basePort = process.env.PORT ?? '3000';
const baseUrl = process.env.URL ?? 'beta.rsasesorjuridico.com';
const baseEnvironment = process.env.NODE_ENV;

export const getBaseUrl = cache(
  () => {
    const uri = `https://${baseUrl}` ?? `http://localhost:${basePort}`;
    return uri;
  }
);
