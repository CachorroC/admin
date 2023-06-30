'use client';
import note from '#@/components/nota/note.module.scss';
import { intNota, monNota } from '#@/lib/types/notas';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function DeleteNoteButton({ id, uri }: { id: string; uri: string }) {
  async function deleteRequestHandler() {
    const Request = await fetch(`${uri}/api/Notas?_id=${id}`, {
      method: 'DELETE',
    });
    if (!Request.ok) {
      return;
    }
    const Response = await Request.json();
    alert(JSON.stringify(Response));
  }

  return (
    <button className={note.deleteButton} onClick={deleteRequestHandler}>
      <span className='material-symbols-outlined'>delete</span>
    </button>
  );
}

export function AddNoteButton({ nota, uri }: { nota: intNota; uri: string }) {
  async function addRequestHandler() {
    const Request = await fetch(`${uri}/api/Notas`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(nota),
    }).then((fullfilled) => {
      alert(fullfilled.status);
      return fullfilled;
    });
    if (!Request.ok) {
      return;
    }
    const Response = await Request.json();
    alert(JSON.stringify(Response));
  }

  return (
    <button className={note.deleteButton} onClick={addRequestHandler}>
      <span className='material-symbols-outlined'>delete</span>
    </button>
  );
}

export function EditNoteButton({ nota }: { nota: monNota }) {
  return (
    <Link
      className={note.editButton}
      href={`/Procesos/${nota.llaveProceso}/Editar?_id=${nota._id}`}
    >
      <span className='material-symbols-outlined'>edit</span>
    </Link>
  );
}
