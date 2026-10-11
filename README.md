# Birthday Surprise

A React birthday-themed mini game and celebration experience for Zakia Nishat. Play through photo-based levels, view the final game results, and open the birthday celebration, live age counter, and memory gallery.

## Requirements

- Node.js and npm

## Run locally

Install the project dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Deploy to Vercel without GitHub

The `vercel.json` configuration sends direct route visits back to the React app, so routes such as `/l9` and `/l10` work when refreshed.

From the project folder, install dependencies and sign in to Vercel:

```bash
npm install
npx vercel login
```

Create a Vercel preview deployment from your local project:

```bash
npx vercel
```

When it is ready, deploy to production:

```bash
npx vercel --prod
```

This deploys from your local folder using the Vercel CLI; it does not require connecting or deploying through GitHub.

## Game flow

1. Open the home page and continue to the game rules.
2. Select **Start game** to begin the timed game.
3. Play through the photo levels. Your score and game statistics are shared between pages.
4. View the completion time, score, wrong steps, total steps, and accuracy on the congratulations page.
5. Continue to the birthday page to open the celebration, live age counter, or photo memory gallery.

The celebration modal includes animated fireworks and a spoken “Happy Birthday, Nishat!” greeting using the browser's speech synthesis. Audio requires browser speech synthesis support.

## Photo gallery

The memory gallery displays 100 tiles using image files found in `src/ZN/L1/`. The tiles repeat the available images to fill the gallery. Add or replace supported image files in that folder to change the photos used by the gallery.

## Tech stack

- React 18
- Vite
- React Router
- Tailwind CSS and daisyUI
