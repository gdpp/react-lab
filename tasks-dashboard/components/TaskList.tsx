"use client";

import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import TaskCard from "@/components/TaskCard";
import { MOCK_USERS } from "@/lib/data";
import type { Task } from "@/types";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onEdit, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <Alert severity="info" sx={{ mt: 2 }}>
        No hay tareas que coincidan con los filtros aplicados.
      </Alert>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {tasks.map((task) => (
        <Grid key={task.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <TaskCard
            task={task}
            assignee={MOCK_USERS.find((u) => u.id === task.assigneeId)}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Grid>
      ))}
    </Grid>
  );
}
