import { CategoryFilterButton } from '#@/components/Buttons/FilteringButtons';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import typography from '#@/styles/fonts/typography.module.css';

export default function Default() {
  return (
    <>
      <h1 className={typography.displayLarge}>
        Procesos
      </h1>
      <CategoryFilterButton />

      <NewNota
        llaveProceso={'Procesos'}
        uri={getBaseUrl()}
      />
    </>
  );
}
