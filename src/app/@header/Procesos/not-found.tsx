import Title from '#@/components/Headings/title';
import layout from '#@/styles/layout.module.scss';

export default function NotFound() {
  return (
    <div className={layout.body}>
      <div
        className={layout.name}
        style={{
          backgroundColor:
            'var(--error-container)'
        }}
      >
        <Title helper='perdido' />
        <p
          style={{
            color: 'var(--on-error-container)'
          }}
        >
          No pudimos resolver la consulta que
          realizaste. No existe el recurso
        </p>
      </div>
    </div>
  );
}
