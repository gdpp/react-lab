import { NextResponse } from "next/server";
import { taskStore } from "@/lib/taskStore";
import type { CreateTaskDto } from "@/types";

// GET /api/tasks
// Query params opcionales: ?status=todo&priority=high&search=ci
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const filters = {
      status: searchParams.get("status") ?? undefined,
      priority: searchParams.get("priority") ?? undefined,
      search: searchParams.get("search") ?? undefined,
    };

    const tasks = taskStore.getAll(filters);

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener las tareas", error },
      { status: 500 },
    );
  }
}

// POST /api/tasks
// Body: CreateTaskDto
export async function POST(req: Request) {
  try {
    const body: CreateTaskDto = await req.json();

    // Validación mínima — en producción usarías zod o yup
    if (!body.title || !body.status || !body.priority) {
      return NextResponse.json(
        { message: "title, status y priority son requeridos" },
        { status: 400 },
      );
    }

    const created = taskStore.create(body);

    return NextResponse.json(created, { status: 201 }); // 201 Created
  } catch (error) {
    return NextResponse.json(
      { message: "Error al crear la tarea", error },
      { status: 500 },
    );
  }
}
