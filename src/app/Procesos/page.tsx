import { NewNota } from '#@/components/nota/NuevaNota';
import typography from '#@/styles/fonts/typography.module.css';
import { Suspense } from 'react';
import InputProceso from './input-proceso';
import { NotasList } from '#@/components/card/NotasCard';
import { NotasListSkeleton } from '#@/components/card/NotasCard/skeleton';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { getNotas } from '#@/lib/notas';
import form from '#@/components/form/form.module.css';
import { Accordion } from '#@/components/Accordion';
import { CategoryFilterButton } from '#@/components/Buttons/FilteringButtons';

export default async function PageProcesos() {

  return (
    <>
      <h1 className={typography.displayLarge}>
        Procesos
      </h1>
      <CategoryFilterButton />


      <NewNota
        llaveProceso={'Procesos'}
        uri={`${ getBaseUrl() }`}
      />
    </>
  );
}
