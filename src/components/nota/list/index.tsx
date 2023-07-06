'use client';
import Image from 'next/image';
import { useRef } from 'react';

const catList = [
  {
    id: 1,
    imageUrl:
      'https://placekitten.com/250/200?image=1',
  },
  {
    id: 2,
    imageUrl:
      'https://placekitten.com/250/200?image=2',
  },
  {
    id: 3,
    imageUrl:
      'https://placekitten.com/250/200?image=3',
  },
  {
    id: 4,
    imageUrl:
      'https://placekitten.com/250/200?image=4',
  },
  {
    id: 5,
    imageUrl:
      'https://placekitten.com/250/200?image=5',
  },
  {
    id: 6,
    imageUrl:
      'https://placekitten.com/250/200?image=6',
  },
  {
    id: 7,
    imageUrl:
      'https://placekitten.com/250/200?image=7',
  },
  {
    id: 8,
    imageUrl:
      'https://placekitten.com/250/200?image=8',
  },
  {
    id: 9,
    imageUrl:
      'https://placekitten.com/250/200?image=9',
  },
];

export function NotasList() {
  const itemsRef = useRef ();

  function scrollToId(
    itemId: number
  ) {
    const map = getMap ();
    const node = map.get (
      itemId
    );
    node.scrollIntoView (
      {
        behavior: 'smooth',
        block   : 'nearest',
        inline  : 'center',
      }
    );
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map ();
    }
    return itemsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId (
          0
        )}>
          Tom
        </button>
        <button onClick={() => scrollToId (
          5
        )}>
          Maru
        </button>
        <button onClick={() => scrollToId (
          9
        )}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          {catList.map (
            (
              cat
            ) => (
              <li
                key={cat.id}
                ref={(
                  node
                ) => {
                  const map = getMap ();

                  if (node) {
                    return map.set (
                      cat.id,
                      node
                    );
                  }

                  return map.delete (
                    cat.id
                  );
                }}>
                <Image
                  src={cat.imageUrl}
                  width={340}
                  height={340}
                  alt={'Cat #' + cat.id}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
