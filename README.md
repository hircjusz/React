# React & CSS Learning Repo

Two tracks, kept separate on purpose:

```
React/
├── css-playground/          # Pure HTML + CSS. No build step — open index.html in a browser.
│   ├── 01-landing-page/     # Example: responsive landing page with exercises
│   └── _template/           # Copy this to start a new CSS exercise
│
├── react-apps/              # Each folder is an independent mini React app (Vite + TypeScript).
│   ├── 01-task-tracker/     # Example: state, props, lists, forms, effects
│   └── _template/           # Copy this to start a new React app
│
└── notes/                   # Your own notes / cheat sheets
```

## Starting something new

**CSS exercise**
```bash
cp -r css-playground/_template css-playground/02-my-exercise
# open css-playground/02-my-exercise/index.html in a browser
# (VS Code tip: "Live Server" extension gives auto-reload)
```

**React app**
```bash
cp -r react-apps/_template react-apps/02-my-app
cd react-apps/02-my-app
# change "name" in package.json
npm install
npm run dev        # typecheck anytime with: npm run typecheck
```

## Naming convention
`NN-short-name` (e.g. `03-weather-app`) so folders stay in learning order.

## Ideas for next mini apps
| # | React app | Concepts |
|---|-----------|----------|
| 02 | Counter + theme toggle | `useState`, conditional classes |
| 03 | Weather app | `fetch`, `useEffect`, loading/error states |
| 04 | Multi-page notes app | React Router |
| 05 | Shopping cart | `useReducer`, Context |
| 06 | Quiz game | derived state, timers, cleanup |

| # | CSS exercise | Concepts |
|---|--------------|----------|
| 02 | Pricing cards | Flexbox, hover states |
| 03 | Photo gallery | CSS Grid, `aspect-ratio`, `object-fit` |
| 04 | Animated navbar | transitions, `@keyframes` |
| 05 | Dashboard layout | `grid-template-areas`, container queries |
