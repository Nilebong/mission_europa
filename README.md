# Mission Europa

A Vite + React frontend for an interactive Europa mission visualization.

I tried to make the tracking system working but I endup only making up a 3d model.

This workspace contains the client-side app only. It renders a mission dashboard, milestone timeline, and Three.js solar system visualization using the local frontend files in this folder.

# Try it

https://mission-europa.web.app

## Features

- Europa model on hero 
- Milestone timeline and date slider
- Toggle between outer system view and spacecraft-follow camera worked.
- Local `utils/api.js` fallback behavior for missing backend responses

## Requirements

- Node.js 18+ (recommended)
- npm

## Install & run

From the repository root (`c:\Mission_Europa\public`):

```bash
npm install
npm run dev
```

Open the app in your browser at the address Vite prints, typically `http://localhost:5173`.

To build for production:

```bash
npm run build
```

## Project structure

- `index.html` — document shell and app mounting point
- `main.jsx` — React entrypoint
- `App.jsx` — root app shell and component composition
- `components/` — React UI components:
  - `Nav.jsx`
  - `Hero.jsx`
  - `Track.jsx`
  - `SolarSystem.jsx`
  - `About.jsx`
  - `Credit.jsx`
- `data/milestones.js` — mission milestone data
- `tokens.js` — shared color and style tokens
- `utils/api.js` — HTTP client helpers for optional backend data
- `package.json` — frontend dependencies and npm scripts

## Backend notes

This workspace does not include a backend server. The frontend contains a default API URL of `http://localhost:8080/api` in `Track.jsx` and `utils/api.js`, so the app can request trajectory/telemetry data from a separate backend if one exists.

If no backend is available, the frontend still loads and the fallback helpers in `utils/api.js` can provide deterministic local data.

## Tech stack

- React 19
- Vite 5
- Three.js
- @react-three/fiber
- @react-three/drei
- gsap
- lucide-react

## Notes

- The project does not currently contain a `src/` directory; source files live at the workspace root.
- `tokens.js` is part of the repo and should not contain sensitive secrets.
- The current `Track.jsx` implementation requests trajectory data for a target date range anchored around the Europa mission timeline.

## Contribution

Contributions are welcome. To make changes:

1. Fork the repo and create a branch.
2. Update the code or data.
3. Open a pull request with a clear description.




