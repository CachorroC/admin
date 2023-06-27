import { Card } from '#@/components/card/card';
import { getCarpetasByllaveProceso } from '#@/lib/Carpetas';
import layout from '#@/styles/scss/layout.module.scss';
import card from '#@/components/card/card.module.scss';
import { ReactNode, Suspense } from 'react';
import { Name } from '#@/components/nota/notas';
import { NewNota } from '#@/components/nota/NuevaNota';
import { getBaseUrl } from '#@/lib/getBaseUrl';
export default async function Layout (
  { params: {llaveProceso}, children, notas }: {
    params: {
      llaveProceso: string
    };

    children: ReactNode; notas: ReactNode  }
) {
  const procesos = await getCarpetasByllaveProceso(
    {
      llaveProceso: llaveProceso
    }
  );
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        <Suspense>
          <Name llaveProceso={ llaveProceso } />
          <NewNota llaveProceso={ llaveProceso } uri={ `${ getBaseUrl() }` } />
        </Suspense>
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
      <div className={ layout.left }>
        {children}
      </div>
      <div className={ layout.right }>
        {notas}
      </div>
    </div>
  );
}