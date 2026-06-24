import { User } from '@/types/user';

/**
 * GET /api/users
 *
 * Returns the list of users. Currently backed by the jsonplaceholder demo API;
 * swap this fetch for the real data source when one is available.
 */
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    return Response.json(
      { error: `Upstream request failed (${res.status})` },
      { status: 502 },
    );
  }

  const users: User[] = await res.json();

  return Response.json(users);
}
