type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
};

const TaskItem = ({ task, removeTask, completeTask }: TaskItemProps) => {
  const handleRemove = (id: number) => {
    removeTask(id);
  };
  return (
    <div>
      <span
        style={{
          color: task.completed ? "green" : "black",
          fontWeight: task.completed ? "bold" : "normal",
        }}
      >
        {task.title}
      </span>
      <button onClick={() => completeTask(task.id)}>
        {task.completed ? "COMPLETED!!" : "Complete"}
      </button>
      <button onClick={() => handleRemove(task.id)}>X</button>
    </div>
  );
};

export default TaskItem;
