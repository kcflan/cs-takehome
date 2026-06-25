import { getFriends, getUserById } from '@/lib/users';
import { UserDetail } from '@/types/user';
import { NextResponse } from 'next/server';

/**
 * GET /api/users/:id
 * Returns a single user's full profile, or 404 if the id is unknown/invalid.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = Number(id);

  if (!Number.isInteger(userId) || userId <= 0) {
    return NextResponse.json({ error: 'Invalid user id' }, { status: 400 });
  }

  const user = getUserById(userId);

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Return the full user profile, plus a list of their friends as summaries.
  const detail: UserDetail = { ...user, friends: getFriends(userId) };

  return NextResponse.json(detail);
}
