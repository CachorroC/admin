import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import CardSkeleton from '#@/components/card/card-skeleton';
import LinkCardSkeleton from '#@/components/search/link-skeleton';

export default function Loading() {

  return (
    <>
      <CardSkeleton key='a' />
      <CardSkeleton key='b' />
      <CardSkeleton key='c' />
      <CardSkeleton key='d' />
      <CardSkeleton key='e' />
    </>
  );

}
