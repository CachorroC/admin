export function fixFechas (
  fecha: string | null | undefined
) {
  if ( fecha === null ) {
    return 'no hay contenido';
  }
  if ( fecha === undefined ) {
    return 'no se ha definido el contenido';
  }
  const date = new Date(
    fecha
  );
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
    'diciembre',
  ];
  const month = months[ date.getMonth() ];
  const dia = date.getDate();
  const ano = date.getFullYear();
  return dia + ' de ' + month + ' de ' + ano;
}
function trimmer (
  sujetosProcesales: string
) {
  const locateDemandado = sujetosProcesales.search(
    /(demandado|causante)+:(?:\s*?|'\s*?')/gi
  );

  const extractDemandado = sujetosProcesales
    .slice(
      locateDemandado + 10
    )
    .toLocaleLowerCase();

  const trimDemandado = extractDemandado.replace(
    /^\s+|\s+$/gm,
    ''
  );
  const splitDemandado = trimDemandado.split(
    ' '
  );
  const splitDemandadotoUnify = splitDemandado.map(
    (
      nombreOapellido: string, index: number
    ) => {
      if ( index >= 5 ) {
        return '';
      }

      if ( nombreOapellido === '|' ) {
        return '';
      }
      if ( nombreOapellido.includes(
        's.a.s'
      ) ) {
        return '';
      }
      if ( nombreOapellido.includes(
        'sas'
      ) ) {
        return '';
      }
      if ( nombreOapellido.includes(
        '(emplazado)'
      ) ) {
        return '';
      }
      return nombreOapellido.replace(
        /^./,
        (
          str: string
        ) => str.toUpperCase()
      );
    }
  );
  const unifyDemandado = splitDemandadotoUnify.join(
    ' '
  );
  return unifyDemandado;
}
export const fixDemandado = (
  sujetosProcesales: string
) => {

  const mySubString = 'Demandado';

  const count = sujetosProcesales.split(
    mySubString
  ).length - 1;

  if ( count === 1 ) {
    return trimmer(
      sujetosProcesales
    );
  }
  return sujetosProcesales;

};