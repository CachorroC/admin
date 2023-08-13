
export const sleep = (
  ms: number
) => {
  return new Promise(
    (
      resolve
    ) => {
      return setTimeout(
        resolve, ms
      );
    }
  );
};

export function fixMoney(
  {
    valor
  }: {
  valor: number;
}
) {
  const precioEnCop = valor.toLocaleString(
    'es-CO',
    {
      currency: 'COP',
      style   : 'currency'
    }
  );

  return precioEnCop;
}

export function unfixFechas(
  {
    fecha
  }: {
  fecha: string;
}
) {
  let date = new Date(
    fecha
  );

  return date.toLocaleDateString(
    'es-CO'
  );
}

export function fixFechas(
  fecha: Date | string | null | undefined
): string {
  if ( fecha === null ) {
    return 'no hay fechas: null';
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
    'diciembre'
  ];
  const month = months[ date.getMonth() ];
  const dia = date.getDate();
  const ano = date.getFullYear();

  return dia + ' de ' + month + ' de ' + ano;
}

function trimmer(
  sujetosProcesales: string
) {
  const locateDemandado
    = sujetosProcesales.search(
      /(demandado|causante)+:(?:\s*?|'\s*?')/gi
    );

  const extractDemandado = sujetosProcesales
        .slice(
          locateDemandado + 10
        )
        .toLowerCase();

  const trimDemandado = extractDemandado.replace(
    /^\s+|\s+$/gm,
    ''
  );

  const splitDemandado = trimDemandado.split(
    ' '
  );

  const splitDemandadotoUnify
    = splitDemandado.map(
      (
        nombreOapellido: string,
        index: number
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

        if (
          nombreOapellido.includes(
            '(emplazado)'
          )
        ) {
          return '';
        }

        return nombreOapellido.replace(
          /^./,
          (
            str: string
          ) => {
            return str.toUpperCase();
          }
        );
      }
    );

  const unifyDemandado
    = splitDemandadotoUnify.join(
      ' '
    );

  return unifyDemandado;
}

export const fixDemandado = (
  sujetosProcesales: string
): string => {
  const mySubString = 'Demandado';

  const count
    = sujetosProcesales.split(
      mySubString
    ).length
    - 1;

  if ( count === 1 ) {
    return trimmer(
      sujetosProcesales
    );
  }

  return sujetosProcesales;
};

export const toNameString = (
  {
    nameRaw
  }: {
  nameRaw: string;
}
): string => {
  const str = nameRaw.toLowerCase();

  const arr = str.split(
    ' '
  );

  for ( let i = 0; i < arr.length; i++ ) {
    arr[ i ]
      = arr[ i ].charAt(
        0
      )
            .toUpperCase()
      + arr[ i ].slice(
        1
      );
  }

  const str2 = arr.join(
    ' '
  );

  return str2;
};
