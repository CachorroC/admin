'use client';
import note from '#@/components/nota/note.module.scss';
import {intNota,
  monNota} from '#@/lib/types/notas';
import type { Route } from 'next';
import Link from 'next/link';

export function DeleteNoteButton({
  id,
}: {
  id: string;
}) {
  async function deleteRequestHandler() {
    const Request = await fetch (
      `/api/Notas?_id=${ id }`,
      {
        method: 'DELETE'
      }
    );
    if (!Request.ok) {
      return;
    }

    const Response = await Request.json ();
    alert (
      JSON.stringify ( Response ) 
    );
  }
  return (
    <button
      className={note.buttonDelete}
      onClick={deleteRequestHandler}>
      <span
        className={`material-symbols-outlined ${ note.icon }`}>
        delete
      </span>
    </button>
  );
}

export function AddNoteButton({
  nota,
  uri
}: {
  nota: intNota;
  uri: string;
}) {
  async function addRequestHandler() {
    const Request = await fetch (
      `${ uri }/api/Notas`,
      {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify (nota)
      }
    ).then ((fullfilled) => {
      alert (fullfilled.status);
      return fullfilled;
    });
    if (!Request.ok) {
      return;
    }

    const Response = await Request.json ();
    alert (JSON.stringify (Response));
  }
  return (
    <button
      className={note.buttonAdd}
      onClick={addRequestHandler}>
      <span
        className={`material-symbols-outlined ${ note.icon }`}>
        delete
      </span>
    </button>
  );
}

export function EditNoteButton({
  nota
}: {
  nota: monNota;
}) {
  return (
    <Link
      className={note.buttonEdit}
      href={
        `/Procesos/${ nota.llaveProceso }/Editar?_id=${ nota._id }` as Route
      }>
      <span
        className={`material-symbols-outlined ${ note.icon }`}>
        edit
      </span>
    </Link>
  );
}
