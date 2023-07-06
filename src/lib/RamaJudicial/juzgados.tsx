import 'server-only';
import { notFound } from 'next/navigation';
import { intConsultaNumeroRadicacion } from '../types/procesos';
import { fixDemandado } from '../fix';
import { CardCarpeta } from '#@/components/card/cardCarpeta';

export async function JuzgadosByllaveProceso({llaveProceso,}: {
  llaveProceso: string;
}) {
  try {
    const Request = await fetch (
      `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${ llaveProceso }&SoloActivos=false`
    );
    if (!Request.ok) {
      return (
        <CardCarpeta
          name={`${ Request.text () } error`}
          path={'/Procesos'}
          llaveProceso={llaveProceso}>
          {' '}
          <p> Error </p>{' '}
        </CardCarpeta>
      );
    }

    const res =
      (await Request.json ()) as intConsultaNumeroRadicacion;
    if (res.procesos.length === 0) {
      <CardCarpeta
        name={res.parametros.numero}
        path={'/Procesos'}
        llaveProceso={res.parametros.numero}>
        {' '}
        <p> No Hay Procesos </p>{' '}
      </CardCarpeta>;
    }

    const procesos = res.procesos;

    const mapeandoProcesos = procesos.map (
      (Proceso) => {
        const {
          llaveProceso,
          idProceso,
          sujetosProcesales,
          despacho,
        } = Proceso;
        return (
          <CardCarpeta
            key={idProceso}
            name={fixDemandado (sujetosProcesales)}
            path={'/Procesos'}
            llaveProceso={llaveProceso}
            idProceso={idProceso}>
            {' '}
            <p>{despacho}</p>{' '}
            <p>{`idProceso= ${ idProceso }`}</p>{' '}
          </CardCarpeta>
        );
      }
    );
    return <>{mapeandoProcesos}</>;
  }
  catch (err) {
    console.log (err);

    const error = JSON.stringify (err);
    return (
      <CardCarpeta
        name={error}
        path={'/Procesos'}
        llaveProceso={llaveProceso}>
        {' '}
        <p>{error}</p>{' '}
      </CardCarpeta>
    );
  }
}
