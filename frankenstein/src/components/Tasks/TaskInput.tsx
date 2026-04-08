import { useState } from "react";

type TaskInputProps = {
  addTask: (input: string) => void;
};

const TaskInput = ({ addTask }: TaskInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task"
        value={inputValue}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TaskInput;
