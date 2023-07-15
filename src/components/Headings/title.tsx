'use client';
import typography from '#@/styles/fonts/typography.module.scss';
import { fixFechas } from '#@/lib/fix';
import typeface from '#@/styles/fonts/typeface.module.scss';
import { useOnlineStatus } from '#@/hooks/online-state';

export default function Title(
  {
    helper
  }: { helper?: string }
) {
  const isOnline = useOnlineStatus();
  const today = new Date();
  let day;

  switch ( today.getDay() ) {
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
    'Sabado'
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
    'diciembre '
  ];

  const txt = helper
    ? helper
    :  days[ today.getDay() ] + ' '+ fixFechas(
      today.toString()
    );

  return (
    <h1
      className={`${ typography.titleMedium }  ${ typeface.navbar }` }>
      {isOnline
        ? txt
        : 'offline'}
    </h1>
  );
}
