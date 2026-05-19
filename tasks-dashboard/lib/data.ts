import type { Task, User } from "@/types";

export const MOCK_USERS: User[] = [
  {
    id: "u1",
    name: "Ana García",
    email: "ana@empresa.com",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "u2",
    name: "Carlos López",
    email: "carlos@empresa.com",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "u3",
    name: "María Torres",
    email: "maria@empresa.com",
    avatarUrl: "https://i.pravatar.cc/150?img=23",
  },
];

export const MOCK_TASKS: Task[] = [
  {
    id: "t1",
    title: "Configurar CI/CD pipeline",
    description:
      "Integrar GitHub Actions con el entorno de staging y producción.",
    status: "done",
    priority: "high",
    assigneeId: "u1",
    createdAt: "2026-04-01T09:00:00.000Z",
    dueDate: "2026-04-15T00:00:00.000Z", // vencida ✅ ya completada
  },
  {
    id: "t2",
    title: "Diseñar componente TaskCard",
    description:
      "Crear el componente reutilizable con MUI siguiendo el design system.",
    status: "in_progress",
    priority: "high",
    assigneeId: "u2",
    createdAt: "2026-05-01T10:00:00.000Z",
    dueDate: "2026-05-20T00:00:00.000Z", // vence mañana 🔥
  },
  {
    id: "t3",
    title: "Escribir tests unitarios del store",
    description: "Cubrir filtersSlice con Jest — reducers y selectores.",
    status: "todo",
    priority: "medium",
    assigneeId: "u1",
    createdAt: "2026-05-05T08:00:00.000Z",
    dueDate: "2026-05-30T00:00:00.000Z",
  },
  {
    id: "t4",
    title: "Optimizar queries de React Query",
    description:
      "Revisar staleTime, caché y estrategia de invalidación por entidad.",
    status: "todo",
    priority: "medium",
    assigneeId: "u3",
    createdAt: "2026-05-06T11:00:00.000Z",
    dueDate: "2026-06-01T00:00:00.000Z",
  },
  {
    id: "t5",
    title: "Implementar modo oscuro",
    description:
      "Agregar toggle de dark/light mode usando ThemeProvider de MUI.",
    status: "todo",
    priority: "low",
    assigneeId: "u2",
    createdAt: "2026-05-07T14:00:00.000Z",
    dueDate: "2026-06-10T00:00:00.000Z",
  },
  {
    id: "t6",
    title: "Revisar accesibilidad del dashboard",
    description:
      "Auditoría con axe DevTools — corregir errores críticos de ARIA.",
    status: "in_progress",
    priority: "high",
    assigneeId: "u3",
    createdAt: "2026-05-10T09:00:00.000Z",
    dueDate: "2026-05-18T00:00:00.000Z", // vencida ⚠️ en progreso
  },
  {
    id: "t7",
    title: "Documentar API Routes",
    description:
      "Agregar JSDoc a todos los endpoints y generar Swagger básico.",
    status: "todo",
    priority: "low",
    assigneeId: "u1",
    createdAt: "2026-05-12T16:00:00.000Z",
    dueDate: "2026-06-15T00:00:00.000Z",
  },
  {
    id: "t8",
    title: "Migrar datos a PostgreSQL",
    description:
      "Reemplazar el mock en memoria por Prisma + PostgreSQL en Railway.",
    status: "todo",
    priority: "high",
    assigneeId: "u2",
    createdAt: "2026-05-13T10:00:00.000Z",
    dueDate: "2026-05-25T00:00:00.000Z",
  },
  {
    id: "t9",
    title: "Code review PR #42",
    description:
      "Revisar implementación de infinite scroll en el listado de tareas.",
    status: "done",
    priority: "medium",
    assigneeId: "u3",
    createdAt: "2026-05-14T11:00:00.000Z",
    dueDate: "2026-05-16T00:00:00.000Z",
  },
  {
    id: "t10",
    title: "Configurar Sentry para error tracking",
    description:
      "Integrar Sentry en Next.js y conectar con el canal de alertas en Slack.",
    status: "in_progress",
    priority: "medium",
    assigneeId: "u1",
    createdAt: "2026-05-15T09:00:00.000Z",
    dueDate: "2026-05-28T00:00:00.000Z",
  },
];
