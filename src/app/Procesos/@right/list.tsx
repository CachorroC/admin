'use client';

import { MonCarpeta } from '#@/lib/types/carpeta';
import { useState } from 'react';
import { useSyncExternalStore } from 'react';


function subscribe(
  callback: { ( this: Window, ev: Event ): any; ( this: Window, ev: Event ): any; ( this: Window, ev: Event ): any; ( this: Window, ev: Event ): any; }
) {
  window.addEventListener(
    'online', callback
  );
  window.addEventListener(
    'offline', callback
  );

  return () => {
    window.removeEventListener(
      'online', callback
    );
    window.removeEventListener(
      'offline', callback
    );
  };
}

export function getSnapshot() {
  return navigator.onLine;
}

export default function PruebaList(
  {
    carpetas
  }: {carpetas: MonCarpeta[]}
) {

  const isOnline = useSyncExternalStore(
    subscribe, getSnapshot
  );

  const [
    list,
    setList
  ] = useState(
    carpetas
  );

  function handleClick() {
    const nextList = [
      ...list
    ];
    nextList.sort();
    setList(
      nextList
    );
  }

  return (
    <>
      <h1>{isOnline
        ? '✅ Online'
        : '❌ Disconnected'}</h1>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(
          artwork => {
            return (
              <li key={artwork._id}>{artwork.nombre}</li>
            );
          }
        )}
      </ul>
    </>
  );
}
