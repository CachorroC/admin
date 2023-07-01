import Title from '#@/components/Headings/title';
import { getCarpetas } from '#@/lib/Carpetas';
import { fetchFechas } from '#@/lib/Actuaciones';
import Drawer from '#@/components/navbar/drawer';
import SearchOutputList from '#@/components/search/SearchProcesosOutput';
import Header from '#@/components/navbar/Header';

export default async function Page() {
  const procesos = await getCarpetas();
  const fechas = await fetchFechas(
    { procesos: procesos }
  );

  return (
    <Header>
      <Title />
      <Drawer>
        <SearchOutputList path='/Procesos' fechas={fechas} />
      </Drawer>
    </Header>
  );
}
