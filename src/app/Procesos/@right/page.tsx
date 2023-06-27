import { Card } from '#@/components/card/card';
import typography from '#@/styles/fonts/typography.module.scss';

export default async function PageProcesosRight() {
  return (
    <>
      <Card name={'Procesos'} path={'/Procesos'} icon='folder_open'>
        <h1 className={typography.displayMedium}> Procesos</h1>
      </Card>
      <Card name={'Nueva Nota'} path={'/Demandados/NuevoProceso'} icon='add'>
        <h1 className={typography.displayMedium}>NuevoProceso</h1>
      </Card>
      <Card name={'Demandados'} path={'/Demandados'} icon='person_pin'>
        <h1 className={typography.displayMedium}> Demandados</h1>
      </Card>
    </>
  );
}
