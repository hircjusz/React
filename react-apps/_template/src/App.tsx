import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>New React app</h1>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
    </main>
  );
}
