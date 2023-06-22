'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { fixFechas } from '#@/lib/fix';
import typeface from '#@/styles/fonts/typeface.module.scss';
import { useNavigator } from '#@/app/(context)/search-context';

export default function Title(
  { helper }: { helper?: string }
) {
  const [
    isNavOpen,
    setIsNavOpen
  ] = useNavigator();

  const segment = useSelectedLayoutSegment();
  const today = new Date();
  let day;
  switch (today.getDay()) {
  case 0:
    day = 'Mimingo';
    break;
  case 1:
    day = 'Lunes';
    break;
  case 2:
    day = 'Martes';
    break;
  case 3:
    day = 'Miércoles';
    break;
  case 4:
    day = 'Jueves';
    break;
  case 5:
    day = 'Viernes';
    break;
  case 6:
    day = 'Sábado';
  }
  const days = [
    'mimingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre ',
  ];
  return (
    <h1 className={isNavOpen
      ? typeface.drawer
      : typeface.navbar}>
      {helper ?? `${days[today.getDay()]}, ${fixFechas(
        today.toString()
      )}`}
    </h1>
  );
}
