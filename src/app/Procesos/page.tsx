import { arrayMergerByllaveProceso, newMerger } from '#@/lib/arrayMerger';
import { getNotas } from '#@/lib/notas';
import { getProcesos } from '#@/lib/procesos';
import Link from 'next/link';
import layout from '#@/styles/scss/layout.module.scss';
import { getCarpetas } from '#@/lib/Carpetas';
import { Card } from '#@/components/card/card';
import { fetchFechas } from '#@/lib/RamaJudicial';
import card from '#@/components/card/card.module.scss';
import { Fragment } from 'react';
import typography from '#@/styles/fonts/typography.module.scss';

export default async function Page () {
  const procesos = await getProcesos();
  const cardsData = await fetchFechas(
    {
      procesos: procesos
    }
  );
  const carpetas = await getCarpetas();

  const merged = newMerger(
    {
      a: carpetas,
      b: cardsData,
    }
  );
  const mergedReverse = newMerger(
    {
      a: cardsData,
      b: carpetas,
    }
  );
  return (
    <>
      <div className={ layout.name }>
        <h1 className={typography.displaySmall}>Procesos</h1>
      </div>
      <div className={ layout.main }>
        <div className={ layout.left }>
          {
            mergedReverse.map(
              (
                m, i, arr
              ) => {
                const nombre = m.sujetosProcesales ?? m.Demandado.Nombre;
                return (
                  <Card key={ m.llaveProceso } name={ nombre } path={ '/Procesos' } llaveProceso={ m.llaveProceso }>
                    <sub>{
                      JSON.stringify(
                        m
                      )}</sub>
                    <p>{ m.fecha }</p>
                    <sup>{`${i+1} de ${arr.length}`}</sup>
                  </Card>
                );
              }
            )
          }
        </div>
        <div className={ layout.right }>
          {
            merged.map(
              (
                m, i, arr
              ) => {
                const nombre = m.sujetosProcesales ?? m.Demandado.Nombre;
                return (
                  <Card key={ m.llaveProceso } name={ nombre } path={ '/Procesos' } llaveProceso={ m.llaveProceso }>
                    <sup>{`${i+1} de ${arr.length}`}</sup>
                    <p>{ m.fecha }</p>
                    <sub>{
                      JSON.stringify(
                        m
                      )}</sub>
                  </Card>
                );
              }
            )
          }
        </div>
      </div>
    </>
  );
}