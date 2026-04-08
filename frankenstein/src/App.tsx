import { useState } from "react";

// Components
import Todos from "./components/Todos";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <section>
      <h1> I'm back baby</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter value here"
        />
        <p>{value}</p>
      </div>
      <hr />
      <Todos />
      <hr />
      <Tasks />
    </section>
  );
}

export default App;
