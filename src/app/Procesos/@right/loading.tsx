import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import CardSkeleton from '#@/components/card/card-skeleton';
import LinkCardSkeleton from '#@/components/search/link-skeleton';
import { getBaseUrl } from '#@/lib/getBaseUrl';
import { NewNota } from '#@/components/nota/NuevaNota';
import { Loader } from '#@/components/Loader';

export default function Loading() {
    return (
      <>
        <NewNota
          llaveProceso={'Procesos'}
          uri={`${ getBaseUrl() }`}
        />
        <Loader />
        <Loader />
        <Loader />
      </>
    );
}
