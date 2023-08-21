import typography from '#@/styles/fonts/typography.module.css';
import { Loader } from '#@/components/Loader';

export default function Loading() {
  return (
    <h1 className={typography.displayLarge}>
      Cargando
    </h1>
  );
}
