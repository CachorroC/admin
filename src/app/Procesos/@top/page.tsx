import { NewNota } from '#@/components/nota/NuevaNota';
import typography from '#@/styles/fonts/typography.module.css';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { CategoryFilterButton } from '#@/components/Buttons/FilteringButtons';

export default async function PageProcesos() {
  return (
    <>
      <h1 className={typography.displayLarge}>
        Procesos
      </h1>
      <CategoryFilterButton />
    </>
  );
}
