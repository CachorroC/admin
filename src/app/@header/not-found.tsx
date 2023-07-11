import Title from '#@/components/Headings/title';
import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function NotFound() {
  return (
    <div
      className={layout.header}
      style={{
        backgroundColor:
          'var(--surface-container-lowest)'
      }}>
      <h1
        className={typography.displayLarge}
        style={{ color: 'var(--primary)' }}>
        ¿Perdido?
      </h1>
      <p
        className={typography.bodyLarge}
        style={{
          color: 'var(--on-surface-container)'
        }}>
        No pudimos resolver la consulta que
        realizaste. No existe el recurso
      </p>
    </div>
  );
}
