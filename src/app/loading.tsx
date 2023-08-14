import layout from '#@/styles/layout.module.css';
import type { Route } from 'next';
import typography from '#@/styles/fonts/typography.module.css';
import typeface from '#@/styles/fonts/typeface.module.css';
import Link from 'next/link';
import { Loader } from '#@/components/Loader';

export default function Loading() {
  return (
    <div className={layout.body}>
      <div className={layout.name}>
        <h1
          className={`${ typography.titleMedium }  ${ typeface.drawer }`}
        >
          R&S consultoria s.a.s
        </h1>
      </div>
      <div className={layout.left}>
        <Loader /> <Loader /> <Loader />{' '}
        <Loader />
      </div>
    </div>
  );
}
