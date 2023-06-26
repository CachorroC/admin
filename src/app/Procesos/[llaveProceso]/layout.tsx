import { Card } from '#@/components/card/card';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import layout from '#@/styles/scss/layout.module.scss';
import card from '#@/components/card/card.module.scss';
import { ReactNode } from 'react';
export default async function Layout (
  { params, children }: {
    params: {
      llaveProceso: string
    };

children: ReactNode  }
) {
  const procesos = await getCarpetasByllaveProceso(
    {
      llaveProceso: params.llaveProceso
    }
  );
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        { procesos.map(
          (
            proceso, index, array
          ) => {
            const { llaveProceso, idProceso, Demandado, _id } = proceso;
            const {Nombre, Tel, Direccion} = Demandado;
            return (
              <Card key={ _id.toString() } name={ Nombre } path={ '/Procesos' } llaveProceso={ llaveProceso } idProceso={ idProceso }>
                <sub className={ card.sub }>
                  {
                    `${index + 1} de ${array.length}`
                  }
                </sub>
                <sub className={ card.date }>
                  {Direccion}
                </sub>
              </Card>
            );
          }
        )}
      </div>
      <div className={ layout.main }>
        {children}
      </div>
    </div>
  );
}