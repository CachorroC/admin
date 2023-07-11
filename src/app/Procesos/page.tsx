import typography from '#@/styles/fonts/typography.module.scss';
import { getNotas } from '#@/lib/notas';
import { NotasList } from '#@/components/card/NotasCard';
import { getCarpetas } from '#@/lib/Carpetas';
import { getBaseUrl } from '#@/lib/getBaseUrl';

export default async function PageProcesos () {
  const carpetas = await getCarpetas ();

  const req = await fetch (
    `${ getBaseUrl () }/api/Demandados/PruebaMapaDemandados`,
    {
      method : 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify (
        carpetas
      )
    }
  );

  const res = await req.json ();

  return (
    <>
      <h1 className={typography.displayLarge}>
        Procesos
      </h1>
      {JSON.stringify (
        res
      )}
    </>
  );
}
