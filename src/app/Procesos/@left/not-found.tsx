import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default function NotFound() {
  return (
    <div
      className={layout.left}
      style={{
        backgroundColor: 'var(--error-container)'
      }}
    >
      <h1
        className={typography.displayLarge}
        style={{
          color: 'var(--on-error-container)'
        }}
      >
        ¿Perdido?
      </h1>
      <p
        className={typography.bodyLarge}
        style={{
          color: 'var(--on-error-container)'
        }}
      >
        No pudimos resolver la consulta que
        realizaste. No existe el recurso
      </p>
    </div>
  );
}
