import { NextResponse } from "next/server";
import { taskStore } from "@/lib/taskStore";
import type { UpdateTaskDto } from "@/types";

type RouteParams = { params: Promise<{ id: string }> };
// En Next.js 16 params es una Promise — hay que awaitearlo

// GET /api/tasks/:id
export async function GET(_req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const task = taskStore.getById(id);

    if (!task) {
      return NextResponse.json(
        { message: `Tarea ${id} no encontrada` },
        { status: 404 },
      );
    }

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al obtener la tarea", error },
      { status: 500 },
    );
  }
}

// PATCH /api/tasks/:id
// Body: UpdateTaskDto (todos los campos opcionales)
export async function PATCH(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body: UpdateTaskDto = await req.json();

    const updated = taskStore.update(id, body);

    if (!updated) {
      return NextResponse.json(
        { message: `Tarea ${id} no encontrada` },
        { status: 404 },
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al actualizar la tarea", error },
      { status: 500 },
    );
  }
}

// DELETE /api/tasks/:id
export async function DELETE(_req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const deleted = taskStore.delete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: `Tarea ${id} no encontrada` },
        { status: 404 },
      );
    }

    // 204 No Content — delete exitoso sin body
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error al eliminar la tarea", error },
      { status: 500 },
    );
  }
}
