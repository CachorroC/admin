import layout from '#@/styles/scss/layout.module.scss';
import typography from '#@/styles/fonts/typography.module.scss';

export default function NotFound() {
  return (
    <div
      className={layout.left}
      style={{ backgroundColor: 'var(--error-container)' }}
    >
      <h1
        className={typography.displayLarge}
        style={{ color: 'var(--on-error-container)' }}
      >
        ¿Perdido?
      </h1>
      <p
        className={typography.bodyLarge}
        style={{ color: 'var(--on-error-container)' }}
      >
        No pudimos resolver la consulta que
        realizaste. No existe el recurso
      </p>
    </div>
  );
}
