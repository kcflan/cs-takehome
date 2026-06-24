import { UserSummary } from '@/types/user';
import Link from 'next/link';

export const UserCard = ({ user }: { user: UserSummary }) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className="group block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.city}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.company}</p>
    </Link>
  );
};
