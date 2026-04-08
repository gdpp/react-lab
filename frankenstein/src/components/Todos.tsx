import { useState } from "react";

type Todo = {
  title: string;
  completed: boolean;
};

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue) return;

    const newTodo = {
      title: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const completeTodo = (id: number) => {
    const newTodos: Todo[] = todos.map((item, idx) => {
      if (idx === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((_, idx) => idx !== id);

    setTodos(newTodos);
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
          {todos.length > 0
            ? todos.map((todo, idx) => (
                <li key={idx}>
                  <div>
                    <span
                      style={{
                        color: todo.completed ? "green" : "black",
                        fontWeight: todo.completed ? "bold" : "normal",
                      }}
                    >
                      {todo.title}
                    </span>
                    <button onClick={() => completeTodo(idx)}>Complete</button>
                    <button onClick={() => removeTodo(idx)}>X</button>
                  </div>
                </li>
              ))
            : "Agrega una tarea para comenzar"}
        </ul>
      </div>
    </div>
  );
}

export default Todos;
