import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Filter, Task } from "./types";

// Concepts in this file:
// - useState for UI state (filter), typed with a union type
// - a generic custom hook (useLocalStorage<Task[]>) for persisted state
// - "lifting state up": App owns tasks, children get data + callbacks via props
// - derived state: visibleTasks / remaining are computed, not stored

const FILTERS: Record<Filter, (task: Task) => boolean> = {
  all: () => true,
  active: (task) => !task.done,
  done: (task) => task.done,
};

const INITIAL_TASKS: Task[] = [
  { id: crypto.randomUUID(), text: "Learn JSX", done: true },
  { id: crypto.randomUUID(), text: "Understand props and state", done: false },
  { id: crypto.randomUUID(), text: "Build my own mini app", done: false },
];

export default function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", INITIAL_TASKS);
  const [filter, setFilter] = useState<Filter>("all");

  function addTask(text: string) {
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text, done: false }]);
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function clearDone() {
    setTasks((prev) => prev.filter((task) => !task.done));
  }

  const visibleTasks = tasks.filter(FILTERS[filter]);
  const remaining = tasks.filter((task) => !task.done).length;

  return (
    <main className="app">
      <header className="app-header">
        <h1>Task Tracker</h1>
        <p className="subtitle">
          {remaining === 0 ? "All done 🎉" : `${remaining} task${remaining === 1 ? "" : "s"} left`}
        </p>
      </header>

      <TaskForm onAdd={addTask} />

      <FilterBar
        filters={Object.keys(FILTERS) as Filter[]}
        current={filter}
        onChange={setFilter}
        onClearDone={clearDone}
        hasDone={tasks.some((task) => task.done)}
      />

      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}
