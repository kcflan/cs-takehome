import { getUserSummaries } from '@/lib/users';
import { UserSummary } from '@/types/user';
import { NextResponse } from 'next/server';

export function GET() {
  const users: UserSummary[] = getUserSummaries();
  return NextResponse.json(users);
}
