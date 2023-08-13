export function validarArchivo(
  idarchivo 
) {
  debugger;

  var tamanioArchivo = $(
    '#' + idarchivo 
  )
        .get(
          0 
        )
        .files[ 0 ].size;
  var capacidad = convertir * CapacidadActual;
  total
    = ( capacidad - tamanioArchivo ) / convertir;

  var archivo = $(
    '#' + idarchivo 
  )
        .val();
  var nombreExtension
    = archivo.split(
      '\\' 
    )[
          archivo.split(
            '\\' 
          ).length - 1
    ];
  var separador
    = nombreExtension.lastIndexOf(
      '.' 
    );
  var extension = nombreExtension.substring(
    separador + 1
  );
  var nombre = nombreExtension.substring(
    separador,
    -1
  );
  var acepta = GetExtension(
    extension.toUpperCase()
          .toString()
  );

  var caract = new RegExp(
    /^[a-zA-Z0-9\u00E0-\u00FC\-_.\s]*$/g
  );

  if ( caract.test(
    nombre 
  ) == false ) {
    $(
      '#spnmsg' 
    )
          .text(
            'NO se permiten caracteres especiales en el nombre del archivo ($%&..?¿:)'
          )
          .show();

    return false;
  }

  if ( acepta.includes(
    false 
  ) ) {
    $(
      '#spnmsg' 
    )
          .text(
            'La Extensión del archivo no esta permitido'
          )
          .show();

    return false;
  }

  if (
    $(
      '#' + idarchivo 
    )
          .get(
            0 
          ).files[ 0 ].size
    > convertir * ( limite + extender )
  ) {
    $(
      '#spnmsg' 
    )
          .text(
            'El archivo supera los '
          + limite
          + ' MB de capacidad'
          )
          .show();

    return false;
    //Disable Submit Button
  }

  if ( total < 0 ) {
    $(
      '#Adicionar' 
    )
          .show();
    var valor = extender + total;

    if ( total > -10 ) {
      $(
        '#Capacidad' 
      )
            .text(
              valor.toFixed(
                4 
              ) 
            );
    }

    if ( total < -10 ) {
      $(
        '#spnmsg' 
      )
            .text(
              'El archivo sobrepasa la capacidad actual'
            )
            .show();

      return false;
    }

    return true;
  }

  if (
    $(
      '#' + idarchivo 
    )
          .get(
            0 
          ).files[ 0 ].size == 0
  ) {
    $(
      '#spnmsg' 
    )
          .text(
            'El archivo se encuentra dañado' 
          )
          .show();
    $(
      '#' + idarchivo 
    )
          .replaceWith(
            $(
              '#' + idarchivo 
            )
                  .val(
                    '' 
                  )
                  .clone(
                    true 
                  )
          );

    //Disable Submit Button
    return false;
  }

  //Clear and Hide message span
  return true;
  //Enable Submit Button
}
