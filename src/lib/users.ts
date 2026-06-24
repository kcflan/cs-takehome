import { users } from '@/data/users';
import type { User, UserSummary } from '@/types/user';

// Project a full user down to the summary shape used by the list endpoint.
function toSummary(user: User): UserSummary {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.address.city,
    company: user.company.name,
  };
}

// Return every user as a lightweight summary, sorted by name.
export function getUserSummaries(): UserSummary[] {
  return users.map(toSummary).sort((a, b) => a.name.localeCompare(b.name));
}

// Return a single full user profile, or `null` if no such id exists.
export function getUserById(id: number): User | null {
  return users.find((user: User) => user.id === id) ?? null;
}
