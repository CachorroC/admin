import layout from '#@/styles/scss/layout.module.scss';
import navbar from '#@/components/navbar/navbar.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import CardSkeleton from '#@/components/card/card-skeleton';

export default function Loading() {
  return (
    <div className={layout.loader}></div>
  );
}
