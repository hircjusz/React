# Task Tracker — React exercises

```bash
npm install
npm run dev
```

Read the code first: every file has a comment listing the concepts it shows.
Then extend it, easy → hard.

## Props & state
1. **Counter badge.** Show "3 / 5 done" next to the title. (Derived state — don't add a new `useState`!)
2. **Edit a task.** Double-click a task to turn the text into an input; Enter saves, Escape cancels.
3. **Priority.** Add a `priority` field (low/medium/high) chosen in the form; show a colored dot.

## Lists & derived data
4. **Sort.** Add a dropdown to sort by name, priority, or "done last".
5. **Search.** Add a search box that filters tasks as you type.

## Effects & hooks
6. **Document title.** Use `useEffect` to set `document.title` to "(N) Task Tracker".
7. **Auto-focus.** Use `useRef` to focus the input on page load.
8. **Undo delete.** After deleting, show a toast with "Undo" for 5 seconds (`setTimeout` + cleanup).

## Architecture
9. **useReducer.** Replace the four handler functions in `App.jsx` with a single reducer.
10. **Context.** Move tasks into a `TasksContext` so `TaskItem` doesn't need callbacks passed through `TaskList`.
11. **Drag to reorder.** Use the native HTML Drag and Drop API.

## TypeScript
12. **Union types.** Make `priority` (exercise 3) a `"low" | "medium" | "high"` type and let the compiler catch typos.
13. **Discriminated unions.** Type your reducer actions (exercise 9) as `{ type: "add"; text: string } | { type: "toggle"; id: string } | ...`.
14. Run `npm run typecheck` after each exercise — keep it at zero errors.

## Stretch
15. Add tests with Vitest + React Testing Library.
