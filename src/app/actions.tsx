'use server';

import { revalidateTag } from 'next/cache';

export async function RevalidateTagActuaciones() {
  'use server';
  revalidateTag(
    'actuaciones' 
  );
}

export async function createNewDeudor(
  deudor 
) {
  'use server';

  const user = await prisma.Prisma;
}
