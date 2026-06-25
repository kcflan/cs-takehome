import { getUserSummaries } from '@/lib/users';
import { UserSummary } from '@/types/user';
import { NextResponse } from 'next/server';

/**
 *  GET /api/users
 *  Returns a list of all users, in summary form.
 */
export function GET() {
  const users: UserSummary[] = getUserSummaries();
  return NextResponse.json(users);
}
