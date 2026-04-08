import { useState, useEffect } from "react";

// Components
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (value: string) => {
    if (!value) return;

    const newTask = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const completeTask = (id: number) => {
    const newTasks: Task[] = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const removeTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  useEffect(() => {
    return () => {};
  }, [tasks]);

  return (
    <div>
      <TaskInput addTask={addTask} />
      <div>
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default Tasks;
