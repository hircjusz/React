import type { Filter } from "../types";

// Concepts: rendering buttons from data, "active" state passed down as a prop
interface FilterBarProps {
  filters: Filter[];
  current: Filter;
  onChange: (filter: Filter) => void;
  onClearDone: () => void;
  hasDone: boolean;
}

export default function FilterBar({ filters, current, onChange, onClearDone, hasDone }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filters" role="group" aria-label="Filter tasks">
        {filters.map((name) => (
          <button
            key={name}
            className={name === current ? "active" : ""}
            aria-pressed={name === current}
            onClick={() => onChange(name)}
          >
            {name}
          </button>
        ))}
      </div>
      {hasDone && (
        <button className="link-btn" onClick={onClearDone}>
          Clear completed
        </button>
      )}
    </div>
  );
}
