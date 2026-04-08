import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  removeTask: (id: number) => void;
  completeTask: (id: number) => void;
};

const TaskList = ({ tasks, removeTask, completeTask }: TaskListProps) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ))
      ) : (
        <h4>Agrega una actividad para comenzar</h4>
      )}
    </>
  );
};

export default TaskList;
