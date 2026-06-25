import { Avatar } from '@/components/Avatar';
import { UserCard } from '@/components/UserCard';
import { getBaseUrl } from '@/lib/api';
import { UserDetail } from '@/types/user';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const fetchUser = async (id: string): Promise<UserDetail> => {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/users/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to load user (${res.status})`);
  }

  return res.json();
};

const Field = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</dt>
      <dd className="mt-0.5 text-sm text-gray-800">{value}</dd>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="mb-3 text-sm font-semibold text-gray-900">{title}</h2>
    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</dl>
  </section>
);

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await fetchUser(id);

  const street = [user.address?.suite, user.address?.street].filter(Boolean).join(', ');

  return (
    <main className="min-h-dvh bg-zinc-50 p-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="inline-block text-sm text-gray-500 transition hover:text-gray-800">
          ← Back to directory
        </Link>

        <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center gap-4 border-b border-gray-100 p-6">
            <Avatar name={user.name} />
            <div className="min-w-0">
              <h1 className="truncate text-2xl font-semibold tracking-tight text-gray-900">{user.name}</h1>
              <p className="truncate text-gray-500">@{user.username}</p>
              {user.company?.role && (
                <p className="mt-1 truncate text-sm text-gray-500">
                  {user.company.role} · {user.company.name}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6 p-6">
            <Section title="Contact">
              <Field label="Email" value={user.email} />
              <Field label="Phone" value={user.phone} />
              <Field label="Website" value={user.website} />
            </Section>

            <Section title="Address">
              <Field label="Street" value={street} />
              <Field label="City" value={user.address?.city} />
              <Field label="Zip code" value={user.address?.zipcode} />
            </Section>

            <Section title="Company">
              <Field label="Name" value={user.company?.name} />
              <Field label="Role" value={user.company?.role} />
              <Field label="Catchphrase" value={user.company?.catchPhrase} />
            </Section>
          </div>
        </div>

        {user.friends.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-sm font-semibold text-gray-900">Friends · {user.friends.length}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {user.friends.map((friend) => (
                <UserCard key={friend.id} user={friend} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default UserPage;
