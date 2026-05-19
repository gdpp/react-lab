// ── Enums como const para autocompletado perfecto ──────────────────────────
export const PRIORITIES = ["low", "medium", "high"] as const;
export const STATUSES = ["todo", "in_progress", "done"] as const;

// Union types derivados del const — si cambias el array, el tipo se actualiza solo
export type Priority = (typeof PRIORITIES)[number]; // 'low' | 'medium' | 'high'
export type TaskStatus = (typeof STATUSES)[number]; // 'todo' | 'in_progress' | 'done'

// ── Entidades principales ───────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string; // opcional — no todos tienen avatar
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assigneeId: string;
  createdAt: string; // ISO 8601 — string para serializar fácil en JSON
  dueDate: string; // ISO 8601
}

// ── DTOs — lo que viaja en los requests ────────────────────────────────────
// Para crear: todo menos id y createdAt (el servidor los genera)
export type CreateTaskDto = Omit<Task, "id" | "createdAt">;

// Para editar: todo opcional menos el id (que va en la URL)
export type UpdateTaskDto = Partial<Omit<Task, "id" | "createdAt">>;

// ── Tipos de UI ─────────────────────────────────────────────────────────────
// Lo que Redux guarda en filtersSlice
export interface TaskFilters {
  status: TaskStatus | "all";
  priority: Priority | "all";
  search: string;
}
