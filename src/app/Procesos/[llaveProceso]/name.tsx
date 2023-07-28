'use client';

import { useCarpetaContext } from '#@/app/context/carpeta-context';
import { MonCarpeta } from '#@/lib/types/demandados';

export default function Name (
  {
    carpeta 
  }: { carpeta: MonCarpeta } 
) {
  const [
    contextCarpeta,
    setContextCarpeta
  ] = useCarpetaContext();


}