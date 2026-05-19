"use client";

import { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
// import AddIcon from "@mui/icons-material/Add";
import FilterBar from "@/components/FilterBar";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm"; // se crea en Bloque 7
import { useTasksQuery } from "@/hooks/useTasks";
import { useDeleteTask } from "@/hooks/useTasks";
import type { Task } from "@/types";

export default function TaskBoard() {
  const { data: tasks, isLoading, isError, error } = useTasksQuery();
  const deleteTask = useDeleteTask();

  // null = form cerrado, undefined = nueva tarea, Task = editar tarea existente
  const [formTask, setFormTask] = useState<Task | null | undefined>(null);

  const handleEdit = (task: Task) => setFormTask(task);
  const handleNew = () => setFormTask(undefined);
  const handleClose = () => setFormTask(null);
  const handleDelete = (id: string) => deleteTask.mutate(id);

  if (isLoading) {
    return (
      <Box display="flex" mt={6}>
        <CircularProgress aria-label="Cargando tareas" />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error instanceof Error ? error.message : "Error al cargar las tareas"}
      </Alert>
    );
  }

  return (
    <>
      <FilterBar />

      <TaskList
        tasks={tasks ?? []}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* TaskForm se crea en Bloque 7 — descomenta cuando lo tengas */}
      {formTask !== null && (
        <TaskForm open task={formTask} onClose={handleClose} />
      )}

      {/* FAB para nueva tarea */}
      <Tooltip title="Nueva tarea">
        <Fab
          color="primary"
          aria-label="Nueva tarea"
          onClick={handleNew}
          sx={{ position: "fixed", bottom: 32, right: 32 }}
        >
          {/*<AddIcon />*/}
        </Fab>
      </Tooltip>
    </>
  );
}
