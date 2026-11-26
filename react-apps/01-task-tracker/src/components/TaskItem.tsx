import type { Task } from "../types";

// Concepts: typed props, conditional className, event handlers with arguments
interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={`task-item ${task.done ? "is-done" : ""}`}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span>{task.text}</span>
      </label>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.text}"`}
      >
        ✕
      </button>
    </li>
  );
}
