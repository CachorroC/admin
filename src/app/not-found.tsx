import Heading from '#@/components/typográficos/Heading';
import layout from '#@/styles/scss/layout.module.scss';

export default function NotFound () {
  return (
    <div className={ layout.body }>
      <div
        className={ layout.name }
        style={ { backgroundColor: 'var(--error-container)' } }
      >
        <Heading>¿Perdido?</Heading>

        <p style={ { color: 'var(--on-error-container)' } }>
          No pudimos resolver la consulta que realizaste. No existe el recurso{ ' ' }
        </p>
      </div>
    </div>
  );
}
