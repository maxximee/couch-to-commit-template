# Couch to Commit: starter app

The app you build in **Couch to Commit**, a course by Pilot in Command on shipping a real app with an AI agent and checking every change it makes. By the Checkride at the end of the course it is live on the internet and takes test-mode payments. Here it is one page, a pricing page and a footer.

## Make your copy

1. Choose **Use this template**, then **Create a new repository**. Private is fine. Your copy holds your history and your mistakes.
2. Clone your copy, install, and start it:

   ```bash
   git clone https://github.com/YOUR-NAME/YOUR-REPO.git
   cd YOUR-REPO
   npm install
   npm run dev
   ```

3. Open http://localhost:5173. You should see "Your app starts here."

You need Node.js 22 or newer and Git. If `npm install` fails, read the first error, not the last: it is usually a Node version that is too old. If your shell sets `NODE_ENV=production`, `npm install` skips the build tools; run `NODE_ENV=development npm install` instead.

## What is in it

- [React Router](https://reactrouter.com) in framework mode, with server rendering
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript in strict mode
- Settings for [Netlify](https://www.netlify.com), which the course deploys to in module 4

Pages live in `app/routes`, and `app/routes.ts` lists them. The layout and the footer are in `app/root.tsx`.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the app at http://localhost:5173 and reloads on save |
| `npm run build` | Builds the app for production into `build/` |
| `npm run typecheck` | Checks the types |

Tests, linting and CI arrive in module 3, when the course adds them one at a time.

## Licence

MIT. Copy it, change it, ship it.
