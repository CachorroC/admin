import typography from '#@/styles/fonts/typography.module.css';
import { Loader } from '#@/components/Loader';
import { ButtonSkeleton } from '#@/components/Buttons/ButtonSkeleton';

export default function Loading() {
  return (
    <>
      <h1 className={typography.displayLarge}>
        Cargando
      </h1>
      <ButtonSkeleton key={1} />
      <ButtonSkeleton key={2} />
      <ButtonSkeleton key={3} />
      <ButtonSkeleton key={4} />
      <ButtonSkeleton key={5} />
    </>
  );
}
