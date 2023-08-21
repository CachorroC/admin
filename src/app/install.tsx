'use client';
import { useEffect, useState } from 'react';
import layout from '#@/styles/layout.module.css';
import navbar from '#@/components/navbar/navbar.module.css';
import { installButton } from '#@/styles/globals.css';

export default function Install() {
  const [
    isInstalled,
    setIsInstalled
  ]
    = useState(
      false 
    );
  useEffect(
    () => {
      function handleScroll(
        e: any 
      ) {
        console.log(
          window.scrollX, window.scrollY 
        );
      }
      window.addEventListener(
        'scroll',
        handleScroll
      );

      if ( 'serviceWorker' in navigator ) {
        console.log(
          'CLIENT: service worker registration in progress.'
        );
        navigator.serviceWorker
              .register(
                '/service-worker.js' 
              )
              .then(
                function () {
                  console.log(
                    'CLIENT: service worker registration complete.'
                  );
                },
                function () {
                  console.log(
                    'CLIENT: service worker registration failure.'
                  );
                }
              );
      } else {
        console.log(
          'CLIENT: service worker is not supported.'
        );
      }

      return () => {
        return window.removeEventListener(
          'scroll',
          handleScroll
        );
      };
    }, [
      setIsInstalled
    ] 
  );

  return (
    <button
      className={installButton}
      onClick={() => {
        setIsInstalled(
          isInstalled
            ? false
            : true
        );
      }}
    >
      <span className='material-symbols-outlined'>
        install
      </span>
    </button>
  );
}
