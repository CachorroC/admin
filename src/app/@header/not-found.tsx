import Title from '#@/components/Headings/title';
import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import Header from '#@/components/navbar/Header';

export default function NotFound() {
  return (
    <Header>
      <h1
        className={typography.displayLarge}
        style={{
          color: 'var(--primary)'
        }}>
        ¿Perdido?
      </h1>
      <p
        className={typography.bodyLarge}
        style={{
          color: 'var(--on-surface-container)'
        }}>
        {
          'No pudimos resolver la consulta que realizaste. No existe el recurso'
        }
      </p>
    </Header>
  );
}
