import form from '#@/components/form/form.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';
import { Accordion } from '#@/components/Accordion';
import { InputSection } from '#@/components/form/InputSection';

export function NuevasNotificacionesSection() {
  return (
    <section className={form.section}>
      <h3 className={`${form.title} ${typography.displayMedium}`}>
        Notificaciones
      </h3>

      <h4 className={`${form.title} ${typography.displaySmall}`}>291</h4>
      <Accordion>
        <InputSection
          name={'Notificaciones.291.AportaNotificacion'}
          title={'Aporta notificacion 291'}
          type={'date'}
        />
        <InputSection
          name={'Notificaciones.291.Recibo'}
          title={'Fecha del recibo 291'}
          type={'date'}
        />
        <InputSection
          name={'Notificaciones.291.Resultado'}
          title={'Resultado del 291'}
          type={'date'}
        />
      </Accordion>
      <h4 className={`${form.title} ${typography.displaySmall}`}>292</h4>
      <Accordion>
        <InputSection
          name={'Notificaciones.292.AportaNotificacion'}
          title={'Aporta notificacion 292'}
          type={'date'}
        />
        <InputSection
          name={'Notificaciones.292.Recibo'}
          title={'Fecha del recibo 292'}
          type={'date'}
        />
        <InputSection
          name={'Notificaciones.292.Resultado'}
          title={'Resultado del 292'}
          type={'checkbox'}
        />
      </Accordion>
      <InputSection
        name={'Notificaciones.AutoNotificado'}
        title={'Auto notificado'}
        type={'date'}
      />
      <InputSection
        name={'Notificaciones.Certimail'}
        title={'Certimail'}
        type={'checkbox'}
      />
      <InputSection
        name={'Notificaciones.Fisico'}
        title={'Fisico'}
        type={'checkbox'}
      />
      <InputSection
        name={'Notificaciones.Tipo'}
        title={'Tipo'}
        type={'text'}
      />
    </section>
  );
}
