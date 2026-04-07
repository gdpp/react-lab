import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue) return;

    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task"
        value={inputValue}
      />
      <button onClick={addTodo}>Add</button>
      <div>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
