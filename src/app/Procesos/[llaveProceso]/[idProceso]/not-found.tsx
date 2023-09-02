import typography from '#@/styles/fonts/typography.module.css';

export default function NotFound() {
  return (
    <div className={typography.bodyLarge}
      style={{
        backgroundColor: 'var(--error-container)',
        color          : 'var(--on-error-container)'
      }}>
      {
        'No pudimos resolver la consulta que realizaste. No existe el recurso'
      }
    </div>
  );
}
