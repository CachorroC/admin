import { Suspense } from 'react';
import LinkCardSkeleton from './link-skeleton';

export default function SearchOutputListSkeleton() {
  return (
    <>
      <Suspense>
        <LinkCardSkeleton key={1} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={2} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={3} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={4} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={5} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={6} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={7} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={8} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={9} />
      </Suspense>
      <Suspense>
        <LinkCardSkeleton key={0} />
      </Suspense>
    </>
  );
}
