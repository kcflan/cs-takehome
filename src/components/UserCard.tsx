import { User } from '@/types/user';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.address?.city}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.company?.name}</p>
    </div>
  );
};
