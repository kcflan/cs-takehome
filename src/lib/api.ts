import { headers } from 'next/headers';

/**
 * Build the absolute origin of the current request.
 *
 * Server Components can't use relative URLs with `fetch`, so we derive the
 * origin from the incoming request headers. This works locally and behind a
 * proxy/host in production without hardcoding a URL.
 */
export async function getBaseUrl(): Promise<string> {
  const headerList = await headers();
  const host = headerList.get('host') ?? `localhost:${process.env.PORT ?? 3000}`;
  const protocol = host.startsWith('localhost') ? 'http' : 'https';

  return `${protocol}://${host}`;
}
