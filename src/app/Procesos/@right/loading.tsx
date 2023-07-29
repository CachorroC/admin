import { ProcesoCardSkeleton } from '#@/components/card/ProcesosCard/skeleton';

export default function Loading() {
  return (
    <>
      <ProcesoCardSkeleton key={0} />
      <ProcesoCardSkeleton key={1} />
      <ProcesoCardSkeleton key={2} />
    </>
  );
}
