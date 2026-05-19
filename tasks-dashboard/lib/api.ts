import type { Task, CreateTaskDto, UpdateTaskDto, TaskFilters } from "@/types";

// Base URL — en desarrollo apunta a localhost, en producción a tu dominio
const BASE_URL = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";

// ── Helper interno ──────────────────────────────────────────────────────────
// Centraliza el manejo de errores HTTP — si el servidor devuelve 4xx/5xx
// fetch NO lanza error por default, hay que chequearlo manualmente

async function http<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    // Intenta leer el mensaje de error del body
    const error = await res
      .json()
      .catch(() => ({ message: "Error desconocido" }));
    throw new Error(error.message ?? `HTTP ${res.status}`);
  }

  // 204 No Content (DELETE) no tiene body — evita error al parsear JSON vacío
  if (res.status === 204) return null as T;

  return res.json();
}

// ── Funciones de API ────────────────────────────────────────────────────────
// Una función por operación — tipadas de entrada y salida
// Los hooks de React Query las llaman internamente

export const api = {
  // Convierte el objeto de filtros a query string limpio
  // { status: 'all', search: '' } → '' (omite los vacíos)
  getTasks(filters?: Partial<TaskFilters>): Promise<Task[]> {
    const params = new URLSearchParams();

    if (filters?.status && filters.status !== "all") {
      params.set("status", filters.status);
    }
    if (filters?.priority && filters.priority !== "all") {
      params.set("priority", filters.priority);
    }
    if (filters?.search?.trim()) {
      params.set("search", filters.search.trim());
    }

    const query = params.toString();
    return http<Task[]>(`/api/tasks${query ? `?${query}` : ""}`);
  },

  getTask(id: string): Promise<Task> {
    return http<Task>(`/api/tasks/${id}`);
  },

  createTask(dto: CreateTaskDto): Promise<Task> {
    return http<Task>("/api/tasks", {
      method: "POST",
      body: JSON.stringify(dto),
    });
  },

  updateTask(id: string, dto: UpdateTaskDto): Promise<Task> {
    return http<Task>(`/api/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(dto),
    });
  },

  deleteTask(id: string): Promise<null> {
    return http<null>(`/api/tasks/${id}`, { method: "DELETE" });
  },
};
