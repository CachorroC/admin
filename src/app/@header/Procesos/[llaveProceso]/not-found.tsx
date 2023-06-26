import Nombre from '#@/components/Headings/nombre';
import layout from '#@/styles/scss/layout.module.scss';
import Name from '#@/components/Headings/nombre';

export default function NotFound () {
  return (
    <div className={ layout.body }>
      <div className={ layout.name }>
        <Name helper="¿Perdido?"/>

        <p className='text-sm'>
          No pudimos resolver la consulta que realizaste. No existe el recurso{ ' ' }
        </p>
      </div>
    </div>
  );
}
