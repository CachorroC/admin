import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default function NotFound() {
  return (
    <div
      className={layout.right}
      style={{
        backgroundColor: 'var(--error-container)'
      }}
    >

      <p
        className={typography.bodyLarge}
        style={{
          color: 'var(--on-error-container)'
        }}
      >
        {'No pudimos resolver la consulta que realizaste. No existe el recurso'}
      </p>
    </div>
  );
}
