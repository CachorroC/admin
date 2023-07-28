import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Drawer from '#@/components/navbar/drawer';

export async function ListDrawer() {
  const carpetas = await getCarpetas();

  const fechas = await fetchFechas(
    { carpetas: carpetas } 
  );

  return (
    <Drawer>
      <SearchOutputList
        path='/Procesos'
        fechas={fechas}
      />
    </Drawer>
  );
}
