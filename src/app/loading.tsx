import layout from '#@/styles/scss/layout.module.scss';
import navbar from '#@/components/navbar/navbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import CardSkeleton from '#@/components/card/card-skeleton';
export default function Loading() {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1 className={typography.displayMedium}>Cardgando ...</h1>
      </div>

      <div className={layout.left}>
        <CardSkeleton key='0' />
        <CardSkeleton key='1' />
        <CardSkeleton key='2' />
        <CardSkeleton key='3' />
        <CardSkeleton key='4' />
        <CardSkeleton key='5' />
        <CardSkeleton key='6' />
        <CardSkeleton key='7' />
        <CardSkeleton key='8' />
        <CardSkeleton key='9' />
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
