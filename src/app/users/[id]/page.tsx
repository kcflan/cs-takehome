const fetchUser = async (id: string) => {
  const res = await fetch(`/api/users/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to load user (${res.status})`);
  }

  return res.json();
};

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const user = await fetchUser(id);

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">{user.name}</h1>
      <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.address?.city}</p>
      <p className="text-gray-600 dark:text-gray-400">{user.company?.name}</p>
    </div>
  );
};

export default UserPage;
