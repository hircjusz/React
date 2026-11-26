import { useState, type FormEvent } from "react";

// Concepts: controlled input, typed form events, calling a parent callback
interface TaskFormProps {
  onAdd: (text: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="What needs doing?"
        aria-label="New task"
      />
      <button type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}
