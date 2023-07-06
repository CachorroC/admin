'use client';
import card from '#@/components/card/card.module.scss';

export default function Error() {
    return (
      <div className={card.error}>
        <div className={card.layout}>
          <div className={card.top}>
            <h1 className={card.title}>Error</h1>
          </div>
        </div>
      </div>
    );
}
