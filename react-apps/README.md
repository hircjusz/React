# React mini apps

Each folder is a standalone Vite + React + TypeScript project with its own `package.json`.

```bash
cd 01-task-tracker
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # run the TypeScript compiler (tsc) — reports type errors
npm run build      # tsc, then production build into dist/
```

Note: `npm run dev` does **not** type-check (Vite only strips types for speed).
Run `npm run typecheck` — or `npx tsc --watch` in a second terminal — to see type errors.
VS Code also shows them inline as you type.

New app: `cp -r _template 02-my-app`, rename `"name"` in its `package.json`, then `npm install`.
