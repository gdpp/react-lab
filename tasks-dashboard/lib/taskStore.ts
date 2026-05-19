import { MOCK_TASKS } from "@/lib/data";
import type { Task, CreateTaskDto, UpdateTaskDto } from "@/types";

// Singleton en memoria — se inicializa con los mocks una sola vez
// cuando Node.js carga el módulo por primera vez
const tasks: Task[] = [...MOCK_TASKS];

// ── Helpers de ID ───────────────────────────────────────────────────────────
const generateId = (): string => `t${Date.now()}`;

// ── Operaciones CRUD ────────────────────────────────────────────────────────

export const taskStore = {
  getAll(filters?: {
    status?: string;
    priority?: string;
    search?: string;
  }): Task[] {
    let result = [...tasks];

    if (filters?.status && filters.status !== "all") {
      result = result.filter((t) => t.status === filters.status);
    }

    if (filters?.priority && filters.priority !== "all") {
      result = result.filter((t) => t.priority === filters.priority);
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q),
      );
    }

    return result;
  },

  getById(id: string): Task | undefined {
    return tasks.find((t) => t.id === id);
  },

  create(dto: CreateTaskDto): Task {
    const newTask: Task = {
      ...dto,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
  },

  update(id: string, dto: UpdateTaskDto): Task | null {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return null;

    // spread del task existente + solo los campos que llegaron en el dto
    tasks[index] = { ...tasks[index], ...dto };
    return tasks[index];
  },

  delete(id: string): boolean {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return false;

    tasks.splice(index, 1);
    return true;
  },
};
