import { UserCard } from '@/components/UserCard';
import { getBaseUrl } from '@/lib/api';
import { UserSummary } from '@/types/user';

const fetchUsers = async () => {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/users`);

  if (!res.ok) {
    throw new Error(`Failed to load users (${res.status})`);
  }

  return res.json();
};

export default async function Home() {
  const users = await fetchUsers();

  return (
    <main className="min-h-dvh bg-zinc-50 p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black">CouchSurfing - User Directory</h1>
          <p className="mt-1 text-gray-500">{users.length} users · select one to view their profile</p>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user: UserSummary) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
}
