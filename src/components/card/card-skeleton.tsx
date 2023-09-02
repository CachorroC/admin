import card from '#@/components/card/card.module.css';
import typography from '#@/styles/fonts/typography.module.css';
import { Loader } from '../Loader';

const  CardSkeleton= () => {
  return (
    <div className={card.container}>
      <div className={ card.card }>
        <div className={ card.section }>
          <sub
            className={`${ typography.labelSmall } ${ card.sub }`}>
            {'Numero'}
          </sub>
          <h1
            className={`${ typography.displayMedium } ${ card.title }`}>
            {'Nombre'}
          </h1>
        </div>
        <div className={card.content}>
          <Loader />
          <p className={typography.bodySmall}>
            {'cargando'}
          </p>
        </div>
        <div className={card.links}>
          <button
            className={card.link}
            type='button'>
            <span
              className={`${ card.icon }  material-symbols-outlined`}>
              {'autorenew'}
            </span>
          </button>
        </div>


      </div>
    </div>
  );
};



export default CardSkeleton;