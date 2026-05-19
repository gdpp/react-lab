"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import type { Task, User } from "@/types";
import Link from "next/link";

// ── Helpers de color ────────────────────────────────────────────────────────

const PRIORITY_COLOR = {
  high: "error",
  medium: "warning",
  low: "default",
} as const;

const STATUS_COLOR = {
  todo: "default",
  in_progress: "info",
  done: "success",
} as const;

const STATUS_LABEL = {
  todo: "Por hacer",
  in_progress: "En progreso",
  done: "Completada",
} as const;

const PRIORITY_LABEL = {
  high: "Alta",
  medium: "Media",
  low: "Baja",
} as const;

// ── Helpers de fecha ────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function isOverdue(dueDate: string, status: Task["status"]): boolean {
  return status !== "done" && new Date(dueDate) < new Date();
}

// ── Props ───────────────────────────────────────────────────────────────────

interface TaskCardProps {
  task: Task;
  assignee: User | undefined;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

// ── Componente ──────────────────────────────────────────────────────────────

export default function TaskCard({
  task,
  assignee,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const overdue = isOverdue(task.dueDate, task.status);

  return (
    <Card
      role="article"
      aria-label={`Tarea: ${task.title}`}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // Borde rojo sutil si está vencida
        border: overdue ? "1px solid" : "1px solid transparent",
        borderColor: overdue ? "error.light" : "transparent",
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        {/* Status + Priority */}
        <Box display="flex" gap={1} mb={1} flexWrap="wrap">
          <Chip
            label={STATUS_LABEL[task.status]}
            color={STATUS_COLOR[task.status]}
            size="small"
          />
          <Chip
            label={PRIORITY_LABEL[task.priority]}
            color={PRIORITY_COLOR[task.priority]}
            size="small"
            variant="outlined"
          />
          {overdue && (
            <Chip label="Vencida" color="error" size="small" variant="filled" />
          )}
        </Box>

        {/* Título */}
        <Typography
          component={Link}
          href={`/tasks/${task.id}`}
          variant="subtitle1"
          fontWeight={600}
          gutterBottom
          sx={{
            textDecoration: task.status === "done" ? "line-through" : "none",
            color: task.status === "done" ? "text.secondary" : "text.primary",
            "&:hover": { textDecoration: "underline", cursor: "pointer" },
          }}
        >
          {task.title}
        </Typography>

        {/* Descripción */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2, // máximo 2 líneas
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.description}
        </Typography>
      </CardContent>

      {/* Footer: asignado + fecha + acciones */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 1.5 }}>
        <Box>
          <Typography variant="caption" color="text.secondary" display="block">
            {assignee?.name ?? "Sin asignar"}
          </Typography>
          <Typography
            variant="caption"
            color={overdue ? "error.main" : "text.secondary"}
          >
            Vence: {formatDate(task.dueDate)}
          </Typography>
        </Box>

        <Box>
          <Tooltip title="Editar tarea">
            <IconButton
              size="small"
              onClick={() => onEdit(task)}
              aria-label={`Editar tarea ${task.title}`}
            >
              {/*<EditIcon fontSize="small" />*/}
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar tarea">
            <IconButton
              size="small"
              onClick={() => onDelete(task.id)}
              aria-label={`Eliminar tarea ${task.title}`}
              color="error"
            >
              {/*<DeleteIcon fontSize="small" />*/}
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
}
