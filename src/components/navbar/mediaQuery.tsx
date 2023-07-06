'use client';
import { useEffect, useState } from 'react';

export default function useMedia(
  query: number
) {
  const [
    matches,
    setMatches
  ] = useState (
    false
  );
  useEffect (
    () => {
      const mediaQueries = (
        query: number
      ) => {
        let media;

        switch (query) {
          case 0:
            media = '(max-width: 600px)';
            break;
          case 1:
            media =
            '(min-width: 600px) and (max-width: 1200px)';
            break;
          case 2:
            media =
            '(min-width: 1200px) and (max-width: 1920px)';
            break;
          case 3:
            media = '(min-width: 1920px)';

            break;
          default:
            media = '';
        }
        return media;
      };

      const md = mediaQueries (
        query
      );

      function handleMatchMedia() {
        setMatches (
          true
        );
      }

      function handleNoMatchMedia() {
        setMatches (
          false
        );
      }

      const media = window.matchMedia (
        md
      );

      const listener = () =>
        setMatches (
          media.matches
        );
      listener ();

      media.addEventListener (
        'change',
        listener
      );

      return () =>
        media.removeEventListener (
          'change',
          listener
        );
    },
    [
      matches,
      query
    ]
  );
  return matches;
}
