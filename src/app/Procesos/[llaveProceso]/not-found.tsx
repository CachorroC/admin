import typography from '#@/styles/fonts/typography.module.css';

export default function NotFound() {
  return (
    <p
      className={typography.bodyLarge}
      style={{
        color: 'var(--on-error-container)'
      }}>
      No pudimos resolver la consulta que
      realizaste. No existe el recurso
    </p>
  );
}
