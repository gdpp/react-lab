// Server Component — no necesita 'use client'
// Next.js ejecuta este código en el servidor en cada request (SSR)
"use server";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { Task } from "@/types";

// ── Helpers ─────────────────────────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

async function getTask(id: string): Promise<Task | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      // next.revalidate: 0 = sin caché, siempre fresco (SSR puro)
      // next.revalidate: 60 = revalida cada 60s (ISR)
      cache: "no-store", // SSR — datos frescos en cada request
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

const STATUS_LABEL: Record<string, string> = {
  todo: "Por hacer",
  in_progress: "En progreso",
  done: "Completada",
};

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

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-MX", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// ── generateMetadata — SSR async ─────────────────────────────────────────────
// Next.js deduplica el fetch — no hace 2 requests aunque getTask
// se llame aquí y en el componente abajo

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const task = await getTask(id);

  return {
    title: task ? `${task.title} | Task Dashboard` : "Tarea no encontrada",
    description: task?.description ?? "",
  };
}

// ── Página ───────────────────────────────────────────────────────────────────

export default async function TaskDetailPage({ params }: Props) {
  const { id } = await params;
  const task = await getTask(id);

  // notFound() lanza un error que Next.js captura y muestra not-found.tsx
  if (!task) notFound();

  return (
    <Box maxWidth={680} mx="auto">
      {/* Botón volver */}
      {/*<Button
        component={Link}
        href="/"
        // startIcon={<ArrowBackIcon />}
        color="inherit"
        sx={{ mb: 2 }}
      >
        Volver al dashboard
      </Button>*/}

      <Paper elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
        {/* Chips de status y priority */}
        <Box display="flex" gap={1} mb={2} flexWrap="wrap">
          <Chip
            label={STATUS_LABEL[task.status]}
            color={STATUS_COLOR[task.status]}
            size="small"
          />
          <Chip
            label={
              task.priority.charAt(0).toUpperCase() + task.priority.slice(1)
            }
            color={PRIORITY_COLOR[task.priority]}
            size="small"
            variant="outlined"
          />
        </Box>

        {/* Título */}
        <Typography variant="h5" fontWeight={600} gutterBottom>
          {task.title}
        </Typography>

        {/* Descripción */}
        <Typography variant="body1" color="text.secondary" paragraph>
          {task.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Metadata de la tarea */}
        <Box display="flex" flexDirection="column" gap={1}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Creada el
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {formatDate(task.createdAt)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              Vence el
            </Typography>
            <Typography
              variant="body2"
              fontWeight={500}
              color={
                task.status !== "done" && new Date(task.dueDate) < new Date()
                  ? "error.main"
                  : "text.primary"
              }
            >
              {formatDate(task.dueDate)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              ID
            </Typography>
            <Typography variant="body2" fontFamily="monospace">
              {task.id}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
