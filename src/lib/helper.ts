import { getBaseUrl } from '#@/lib/getBaseUrl';
import { intUri } from '../lib/types/mongodb';

export const sleep = (
  ms: number
) =>
  new Promise(
    (
      resolve
    ) => setTimeout(
      resolve,
      ms
    )
  );

export const uri = async () => {
  const composeduri = await fetch(
    `${getBaseUrl}/api`
  );
  if (!composeduri.ok) {
    throw new Error(
      'no pudimos pedir la uri'
    );
  }
  const res = (await composeduri.json()) as intUri;
  return res;
};
