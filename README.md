# User Directory

A small Next.js app that lists users and lets you drill into each one's full profile. Built with the App Router and Tailwind CSS. User data is mocked (seeded from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)) and served through internal API routes.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the directory.

## How it works

- **Directory** (`/`) — a server component fetches `/api/users` and renders a grid of `UserCard`s. Each card links to a detail page.
- **Profile** (`/users/[id]`) — fetches `/api/users/[id]` and renders the user's contact, address, and company details. Unknown ids render a 404 via `notFound()`.
- **Data layer** — `src/data/users.ts` holds the mock records. `src/lib/users.ts` projects them to a lightweight summary for the list and looks up full profiles by id.
- **Fetching from server components** — `src/lib/api.ts` derives the request origin from incoming headers so `fetch` works locally and behind a proxy without a hardcoded URL.

## API

| Method | Route             | Description                                              |
| ------ | ----------------- | ------------------------------------------------------- |
| `GET`  | `/api/users`      | List all users as summaries, sorted by name.            |
| `GET`  | `/api/users/[id]` | Full profile for one user. `400` if the id is invalid, `404` if not found. |
