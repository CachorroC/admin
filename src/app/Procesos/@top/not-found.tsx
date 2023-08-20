import layout from '#@/styles/layout.module.css';
import typography from '#@/styles/fonts/typography.module.css';

export default function NotFound() {
  return (

    <h1
      className={typography.displayLarge}
      style={{
        color: 'var(--on-error-container)'
      }}
    >
          {'¿Perdido?'}
    </h1>
  );
}
