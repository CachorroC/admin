import card from '#@/components/card/card.module.scss';
import { ReactNode } from 'react';
export default function CardSkeleton({ children }: { children?: ReactNode }) {
  return (
    <div className={card.container}>
      <div className={card.layout}>
        <div className={card.top}>
          <h2 className={card.title}>cargando</h2>
        </div>
        {children ?? (
          <p className={card.content}>
            Su contenido se está cargando, espere un momento
          </p>
        )}

        <div className={card.bottom}>
          <button className={card.link}>
            <span className={`${card.icon}  material-symbols-outlined`}>
              autorenew
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
