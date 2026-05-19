import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useAppSelector } from "@/hooks/useFilters";
import type { Task, CreateTaskDto, UpdateTaskDto } from "@/types";

// ── Query Keys ──────────────────────────────────────────────────────────────
// Centralizadas aquí — si las escribes inline en cada hook
// es fácil que haya typos y la invalidación no funcione

export const taskKeys = {
  all: () => ["tasks"] as const,
  list: (filters: object) => ["tasks", filters] as const,
  detail: (id: string) => ["tasks", id] as const,
};

// ── useTasksQuery ───────────────────────────────────────────────────────────
// Lee los filtros directo del store de Redux
// Cuando el usuario cambia un filtro, Redux actualiza el estado,
// el componente re-renderiza, filters cambia, la queryKey cambia
// y React Query hace fetch automáticamente con los nuevos filtros

export function useTasksQuery(): UseQueryResult<Task[]> {
  const filters = useAppSelector((state) => state.filters);

  return useQuery({
    queryKey: taskKeys.list(filters), // ← filtros como parte de la key
    queryFn: () => api.getTasks(filters),
    // Si filters no cambia, React Query devuelve caché sin hacer fetch
  });
}

// ── useTaskQuery ────────────────────────────────────────────────────────────
// Para la página de detalle — aunque ahí usamos SSR,
// este hook sirve si necesitas el dato en un Client Component

export function useTaskQuery(id: string): UseQueryResult<Task> {
  return useQuery({
    queryKey: taskKeys.detail(id),
    queryFn: () => api.getTask(id),
    enabled: !!id, // no hace fetch si id es undefined o vacío
  });
}

// ── useCreateTask ───────────────────────────────────────────────────────────

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateTaskDto) => api.createTask(dto),

    onSuccess: () => {
      // Invalida TODAS las queries que empiecen con 'tasks'
      // React Query las refetchea automáticamente en segundo plano
      queryClient.invalidateQueries({ queryKey: taskKeys.all() });
    },

    onError: (error: Error) => {
      console.error("Error al crear tarea:", error.message);
      // En el Bloque 6 conectarás esto a un Snackbar de MUI
    },
  });
}

// ── useUpdateTask ───────────────────────────────────────────────────────────

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateTaskDto }) =>
      api.updateTask(id, dto),

    onSuccess: (updatedTask) => {
      // Actualiza el detalle de esa tarea en caché sin refetch
      queryClient.setQueryData(taskKeys.detail(updatedTask.id), updatedTask);

      // Invalida la lista para que refleje el cambio
      queryClient.invalidateQueries({ queryKey: taskKeys.all() });
    },

    onError: (error: Error) => {
      console.error("Error al actualizar tarea:", error.message);
    },
  });
}

// ── useDeleteTask ───────────────────────────────────────────────────────────

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.deleteTask(id),

    onSuccess: (_data, deletedId) => {
      // Elimina el detalle de esa tarea del caché inmediatamente
      queryClient.removeQueries({ queryKey: taskKeys.detail(deletedId) });

      // Invalida la lista
      queryClient.invalidateQueries({ queryKey: taskKeys.all() });
    },

    onError: (error: Error) => {
      console.error("Error al eliminar tarea:", error.message);
    },
  });
}
