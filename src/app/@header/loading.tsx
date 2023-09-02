import { Loader } from '#@/components/Loader';
import navbar from '#@/components/navbar/navbar.module.scss';
import layout from '#@/styles/layout.module.scss';

export default function Loading() {
  return (
    <div className={layout.header}>
      <Loader />
    </div>
  );
}
