import { UserSummary } from '@/types/user';
import Link from 'next/link';
import { Avatar } from './Avatar';

export const UserCard = ({ user }: { user: UserSummary }) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <Avatar name={user.name} />
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="truncate text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="mt-4 space-y-1.5 text-sm text-gray-600">
        <p className="truncate">{user.email}</p>
        <p className="truncate">{user.city}</p>
        <p className="truncate">{user.company}</p>
      </div>
    </Link>
  );
};
