import { Loader } from '#@/components/Loader';
import CardSkeleton from '#@/components/card/card-skeleton';

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
