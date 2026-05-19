import { Suspense } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
import TaskBoard from "@/components/TaskBoard";
import TaskSkeleton from "@/components/TaskSkeleton";

// page.tsx es Server Component — no tiene 'use client'
// Solo arma el shell de la página; la lógica de datos está en TaskBoard
export default function HomePage() {
  return (
    <Box sx={{ position: "relative", minHeight: "80vh" }}>
      {/* Header de la sección */}
      <Box display="flex" mb={1}>
        <Typography variant="h5" component="h2">
          Mis Tareas
        </Typography>
      </Box>

      {/* Suspense — muestra skeleton mientras TaskBoard carga */}
      <Suspense fallback={<TaskSkeleton />}>
        <TaskBoard />
      </Suspense>

      {/* FAB — necesita estado (onClick) así que va en TaskBoard */}
    </Box>
  );
}
