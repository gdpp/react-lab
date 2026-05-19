"use client";

import { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useCreateTask, useUpdateTask } from "@/hooks/useTasks";
import { PRIORITIES, STATUSES } from "@/types";
import type { Task, CreateTaskDto } from "@/types";

// ── Instalar MUI Lab para LoadingButton ─────────────────────────────────────
// npm i @mui/lab

const STATUS_LABEL: Record<string, string> = {
  todo: "Por hacer",
  in_progress: "En progreso",
  done: "Completada",
};

const PRIORITY_LABEL: Record<string, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
};

// ── Tipos ───────────────────────────────────────────────────────────────────

interface TaskFormProps {
  open: boolean;
  task?: Task; // undefined = modo crear, Task = modo editar
  onClose: () => void;
}

// Shape del formulario interno
interface FormState {
  title: string;
  description: string;
  status: Task["status"];
  priority: Task["priority"];
  assigneeId: string;
  dueDate: string;
}

// Errores por campo
type FormErrors = Partial<Record<keyof FormState, string>>;

// ── Valores iniciales ───────────────────────────────────────────────────────

const EMPTY_FORM: FormState = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  assigneeId: "u1",
  dueDate: "",
};

function taskToForm(task: Task): FormState {
  return {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
    assigneeId: task.assigneeId,
    // Convierte ISO a formato yyyy-MM-dd que espera <input type="date">
    dueDate: task.dueDate.split("T")[0],
  };
}

// ── Validación ──────────────────────────────────────────────────────────────

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.title.trim()) {
    errors.title = "El título es requerido";
  } else if (form.title.trim().length < 3) {
    errors.title = "El título debe tener al menos 3 caracteres";
  }

  if (!form.dueDate) {
    errors.dueDate = "La fecha de vencimiento es requerida";
  }

  return errors;
}

// ── Componente ──────────────────────────────────────────────────────────────

export default function TaskForm({ open, task, onClose }: TaskFormProps) {
  const isEditing = !!task;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState<string>("");

  const createTask = useCreateTask();
  const updateTask = useUpdateTask();

  const isPending = createTask.isPending || updateTask.isPending;

  // Cuando el dialog abre, inicializa el form con los datos de la tarea (editar)
  // o limpia todo (crear). useEffect con [open, task] para que se resetee
  // también si el usuario abre editar tarea A, cierra y abre editar tarea B
  useEffect(() => {
    if (open) {
      setForm(task ? taskToForm(task) : EMPTY_FORM);
      setErrors({});
      setApiError("");
    }
  }, [open, task]);

  // ── Handlers ───────────────────────────────────────────────────────────────

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Limpia el error del campo al empezar a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit() {
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const dto: CreateTaskDto = {
      ...form,
      // Convierte yyyy-MM-dd de vuelta a ISO 8601
      dueDate: new Date(form.dueDate).toISOString(),
    };

    try {
      if (isEditing) {
        await updateTask.mutateAsync({ id: task.id, dto });
      } else {
        await createTask.mutateAsync(dto);
      }
      onClose(); // cierra solo si fue exitoso
    } catch (err) {
      setApiError(
        err instanceof Error ? err.message : "Ocurrió un error inesperado",
      );
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <Dialog
      open={open}
      onClose={isPending ? undefined : onClose} // bloquea cierre mientras guarda
      maxWidth="sm"
      fullWidth
      aria-labelledby="task-form-title"
    >
      <DialogTitle id="task-form-title">
        {isEditing ? "Editar tarea" : "Nueva tarea"}
      </DialogTitle>

      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2.5} pt={0.5}>
          {/* Error de API */}
          {apiError && (
            <Alert severity="error" onClose={() => setApiError("")}>
              {apiError}
            </Alert>
          )}

          {/* Título */}
          <TextField
            id="task-title"
            label="Título"
            required
            fullWidth
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            error={!!errors.title}
            helperText={errors.title}
            inputProps={{ "aria-required": true }}
          />

          {/* Descripción */}
          <TextField
            id="task-description"
            label="Descripción"
            fullWidth
            multiline
            rows={3}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />

          {/* Status + Priority en la misma fila */}
          <Box display="flex" gap={2}>
            <FormControl fullWidth size="small">
              <InputLabel id="form-status-label" htmlFor="form-status">
                Estado
              </InputLabel>
              <Select
                labelId="form-status-label"
                inputProps={{ id: "form-status" }}
                label="Estado"
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
              >
                {STATUSES.map((s) => (
                  <MenuItem key={s} value={s}>
                    {STATUS_LABEL[s]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel id="form-priority-label" htmlFor="form-priority">
                Prioridad
              </InputLabel>
              <Select
                labelId="form-priority-label"
                inputProps={{ id: "form-priority" }}
                label="Prioridad"
                value={form.priority}
                onChange={(e) => handleChange("priority", e.target.value)}
              >
                {PRIORITIES.map((p) => (
                  <MenuItem key={p} value={p}>
                    {PRIORITY_LABEL[p]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Fecha de vencimiento */}
          <TextField
            id="task-duedate"
            label="Fecha de vencimiento"
            type="date"
            required
            fullWidth
            value={form.dueDate}
            onChange={(e) => handleChange("dueDate", e.target.value)}
            error={!!errors.dueDate}
            helperText={errors.dueDate}
            InputLabelProps={{ shrink: true }} // evita que el label tape la fecha
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} disabled={isPending} color="inherit">
          Cancelar
        </Button>

        {/* LoadingButton muestra spinner mientras guarda */}
        <Button
          onClick={handleSubmit}
          loading={isPending}
          variant="contained"
          aria-label={isEditing ? "Guardar cambios" : "Crear tarea"}
        >
          {isEditing ? "Guardar cambios" : "Crear tarea"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
