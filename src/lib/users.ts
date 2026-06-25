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

// Return a user's friends as summaries, sorted by name.
// Friendship is treated as bidirectional: another user is a friend of `id` if that
// user lists `id` in its `friendIds`, OR `id`'s own user lists them. This means
// each edge only has to be authored once in the seed data, on either side of the friendship.
export function getFriends(id: number): UserSummary[] {
  const own = getUserById(id)?.friendIds ?? [];

  // I wouldn't do this in production code, but for this small project it's fine to just filter the entire user list.
  return users
    .filter((user: User) => user.id !== id && (own.includes(user.id) || user.friendIds.includes(id)))
    .map(toSummary)
    .sort((a, b) => a.name.localeCompare(b.name));
}
