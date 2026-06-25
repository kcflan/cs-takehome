# User Directory

## Overview

This is a small Next.js app that displays a directory of users and allows a user to to view individual user profiles. User data is mocked and exposed through Next.js API routes. I also implemented the optional friends feature, so each profile includes links to that user's (hardcoded) friends.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4

**Run locally:**

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

---

## What I Built

### User Directory (`/`)

The homepage displays a list of users showing a few key details, including name, username, email, city, and company. Selecting a user navigates to their profile.

### User Profile (`/users/[id]`)

Each profile page displays the user's full information, and a list of friends. Invalid users return a 404 page.

### API Routes

The application exposes two API endpoints:

- `GET /api/users` returns a lightweight list of users sorted by name.
- `GET /api/users/[id]` returns a single user's full profile along with their friends.
  - Returns `400` for invalid IDs.
  - Returns `404` when the user does not exist.

### Friends

Users can have relationships with other users through a `friendIds` field. Friends are displayed on the profile page as clickable cards that navigate directly to the selected friend's profile.

---

## Architecture and Design Decisions

### Shared Data Layer

The API routes are backed by a shared data layer located in `src/lib/users.ts`. Functions such as `getUserSummaries`, `getUserById`, and `getFriends` contain the application's data access logic, which keeps the API handlers simple and provides a single place for user-related functionality.

### API-Driven Data Fetching

Since the exercise specifically called for data to be served through Next.js API routes, the pages fetch their data from those endpoints. This means the UI is consuming the same API contract that an external client would use.

### Separate Summary and Detail Models

The user list and profile page have different data needs, so the API returns two different shapes:

- `UserSummary` for the directory view.
- `User` for the full profile view.

This keeps list responses smaller while allowing profile pages to access all available user information.

### Mock Data

User data is stored as an array in `src/data/users.ts`.

### Friend Relationships

Friends are stored using `friendIds`. When resolving relationships, friendships are treated as mutual, meaning a relationship only needs to be defined once in the seed data. This keeps the mock dataset easier to maintain and avoids duplicate relationship entries.

### Validation and Error Handling

The user detail endpoint validates incoming IDs and returns appropriate HTTP responses for invalid or missing users. The profile page maps missing users to Next.js' built-in 404 handling rather than exposing API errors directly in the UI.

---

## Assumptions

- Mock data is sufficient for the scope of the exercise.
- Friendship is a mutual relationship rather than a follower/following model.
- The dataset is small enough that in-memory lookups and sorting are appropriate.
- The application is read-only; create, update, and delete functionality were not required.
- User relationships are represented as friends rather than a more generic relationship system.
- No authentication, authorization, or persistence requirements were specified.

---

## Challenges

The biggest challenge was getting everything working within the time constraints while adapting to some of the newer Next.js 16 patterns.

A couple of areas that required additional attention:

- Server-side API requests require absolute URLs, which meant deriving the application's base URL when fetching data from Server Components.
- Next.js 16 introduced async versions of APIs such as `params` and `headers()`, so route handlers and pages needed to account for those changes.
- Balancing a clean architecture with the requirement that data be served through API routes rather than accessed directly from the data layer.

---

## What I'd Do Next

Given more time, I'd focus on a few improvements:

- Add automated tests for API routes and user relationship logic.
- Add search and filtering to the directory page.
- Add loading and error states to improve the user experience.
- Move the mock data into a database-backed implementation while keeping the existing API contract intact.
- Add pagination if the user dataset grows significantly.
- Add more CSS styling

Overall, I focused on building a straightforward, maintainable solution that satisfies the requirements while keeping the code organized and easy to extend with a modular design that I prefer.

## Deployment

Open [https://cs-takehome.netlify.app/](https://cs-takehome.netlify.app/) to view the deployed app.
