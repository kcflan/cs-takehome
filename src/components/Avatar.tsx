const COLORS = [
  'bg-rose-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-sky-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-fuchsia-500',
];

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  const first = parts[0][0];
  const last = parts.at(-1)?.[0] ?? '';
  return (first + last).toUpperCase();
};

export const Avatar = ({ name }: { name: string }) => {
  const colorIndex = [...name].reduce((total, char) => total + (char.codePointAt(0) ?? 0), 0) % COLORS.length;

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${COLORS[colorIndex]}`}
    >
      {getInitials(name)}
    </div>
  );
};
