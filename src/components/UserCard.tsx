import { User } from '@/types/user';
import Link from 'next/link';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <Link
        href={`/users/${user.id}`}
        className="group flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4 transition hover:border-black/20 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
      ></Link>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.address?.city}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.company?.name}</p>
    </div>
  );
};
