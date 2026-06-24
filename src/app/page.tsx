import { UserCard } from '@/components/UserCard';
import { getBaseUrl } from '@/lib/api';
import { User } from '@/types/user';

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
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-zinc-50 p-8 text-center dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">CS - User Directory</h1>
      <p className="mt-1 text-gray-500 dark:text-gray-400">{users.length} users · select one to view their profile</p>
      {users.map((user: User) => (
        <div key={user.id}>
          <UserCard user={user} />
        </div>
      ))}
    </main>
  );
}
