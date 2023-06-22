'use client';
import { useEffect, useState } from 'react';
export default function useMedia(
  query: string
) {
  const [
    matches,
    setMatches
  ] = useState(
    false
  );
  useEffect(
    () => {
      function handleMatchMedia() {
        setMatches(
          true
        );
      }
      function handleNoMatchMedia() {
        setMatches(
          false
        );
      }

      const media = window.matchMedia(
        query
      );

      const listener = () => setMatches(
        media.matches
      );
      listener();

      media.addEventListener(
        'change',
        listener
      );

      return () => media.removeEventListener(
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
