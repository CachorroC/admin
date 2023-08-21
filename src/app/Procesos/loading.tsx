import { Loader } from '#@/components/Loader';
import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';
import CardSkeleton from '#@/components/card/card-skeleton';
import layout from '#@/styles/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function Loading() {
  return (
    <>
      <CardSkeleton key={1} />
      <CardSkeleton key={2} />
      <CardSkeleton key={3} />
      <CardSkeleton key={4} />
      <CardSkeleton key={5} />
      <CardSkeleton key={6} />
      <CardSkeleton key={7} />
      <CardSkeleton key={8} />
    </>
  );
}
