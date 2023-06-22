import { ReactNode } from 'react';
import { SearchProvider } from './search-context';
import { ModalProvider } from './modal-context';
import { NoteProvider } from './notes-context';
import layout from '#@/styles/scss/layout.module.scss';


export default function Layout (
  {children,header}: {children: ReactNode; header: ReactNode}
) {
  return (
    <>
      <SearchProvider>
        <ModalProvider>
          <NoteProvider>
            <div className={ layout.container }>
              <header className={ layout.header }>
                {header}
              </header>
              {children}
            </div>
          </NoteProvider>
        </ModalProvider>
      </SearchProvider>
    </>
  );
}