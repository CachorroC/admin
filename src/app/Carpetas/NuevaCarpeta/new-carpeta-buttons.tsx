'use client';
import { useNuevaCarpetaContext } from '#@/hooks/formContext';

export const ButtonsNuevaCarpeta = () => {
  const [
    map,
    setMap
  ] = useNuevaCarpetaContext();

  function scrollToId(
    name: string 
  ) {
    const node = map.get(
      name 
    );
    node.scrollIntoView(
      {
        behavior: 'smooth',
        block   : 'nearest',
        inline  : 'center'
      } 
    );
  }

  return (
    <nav>
      <button
        onClick={() => {
          return scrollToId(
            'Numero' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'idProceso' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'llaveProceso' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'EtapaProcesal.Etapa' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'EtapaProcesal.Fecha.MandamientodePago' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'EtapaProcesal.Fecha.PresentacionDemanda' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Terminacion.Causal' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Terminacion.Fecha.AutoTerminacion' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Terminacion.Fecha.RadicacionMemorial' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Bienes' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.medidaSolicitada' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Extra' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.PlacaoNumeroMatricula' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.DescripcionMedida' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Fecha.Captura' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Fecha.Secuestro' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Fecha.DecretoSecuestrooCaptura' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'MedidasCautelares.Fecha.SolicitudCapturaoSecuestro'
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.291.AportaNotificacion' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.291.Recibo' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.291.Resultado' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.292.AportaNotificacion' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.292.Recibo' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.292.Resultado' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.AutoNotificado' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.Certimail' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.Fisico' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Notificaciones.Tipo' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Avaluo.Adjudicacion.Fecha' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Avaluo.Remate.Fecha' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Avaluo.Valor' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Codeudor.Id' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Codeudor.Nombre' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Codeudor.Tel.Fijo' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Codeudor.Tel.Celular' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.PrimerNombre' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.SegundoNombre' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.PrimerApellido' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.SegundoApellido' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.Id' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.Email' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.Tel.Fijo' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.Tel.Celular' 
          );
        }}></button>
      <button
        onClick={() => {
          return scrollToId(
            'Deudor.Direccion' 
          );
        }}></button>
    </nav>
  );
};
