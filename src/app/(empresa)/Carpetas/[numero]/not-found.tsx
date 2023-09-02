import Link from 'next/link';
import { headers } from 'next/headers';
import type { Route } from 'next';

export default async function NotFound() {
  const headersList = headers();

  const domain = headersList.get(
    'host'
  );


  return (
    <div>
      <h2>Not Found: {JSON.stringify(
        domain
      )}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href={'/'as Route}>all posts</Link>
      </p>
    </div>
  );
}