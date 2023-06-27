import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import CardSkeleton from '#@/components/card/card-skeleton';
import LinkCardSkeleton from '#@/components/search/link-skeleton';
export default function Loading() {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h3 className={typography.displayMedium}>Cardgando ...</h3>
      </div>

      <div className={layout.left}>
        <LinkCardSkeleton key='0' />
        <LinkCardSkeleton key='1' />
        <LinkCardSkeleton key='2' />
        <LinkCardSkeleton key='3' />
        <LinkCardSkeleton key='4' />
        <LinkCardSkeleton key='5' />
        <LinkCardSkeleton key='6' />
        <LinkCardSkeleton key='7' />
        <LinkCardSkeleton key='8' />
        <LinkCardSkeleton key='9' />
      </div>
      <div className={layout.right}>
        <CardSkeleton key='a' />
        <CardSkeleton key='b' />
        <CardSkeleton key='c' />
        <CardSkeleton key='d' />
        <CardSkeleton key='e' />
      </div>
    </div>
  );
}
