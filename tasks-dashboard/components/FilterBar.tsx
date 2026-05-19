"use client";

import { useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useFilters } from "@/hooks/useFilters";
import { PRIORITIES, STATUSES } from "@/types";

const STATUS_LABEL: Record<string, string> = {
  todo: "Por hacer",
  in_progress: "En progreso",
  done: "Completada",
};

const PRIORITY_LABEL: Record<string, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
};

export default function FilterBar() {
  const { filters, setStatus, setPriority, setSearch, resetFilters } =
    useFilters();

  // useCallback evita que se recree la función en cada render
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    [setSearch],
  );

  const hasActiveFilters =
    filters.status !== "all" ||
    filters.priority !== "all" ||
    filters.search !== "";

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      alignItems="center"
      sx={{ mb: 3 }}
      role="search"
      aria-label="Filtros de tareas"
    >
      {/* Búsqueda por texto */}
      <TextField
        id="search-input"
        label="Buscar tarea"
        size="small"
        value={filters.search}
        onChange={handleSearch}
        sx={{ minWidth: 220 }}
        slotProps={{
          input: { "aria-label": "Buscar por título o descripción" },
        }}
      />

      {/* Filtro por status */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="status-label" htmlFor="status-select">
          Estado
        </InputLabel>
        <Select
          labelId="status-label"
          inputProps={{ id: "status-select" }}
          label="Estado"
          value={filters.status}
          onChange={(e) => setStatus(e.target.value as typeof filters.status)}
        >
          <MenuItem value="all">Todos</MenuItem>
          {STATUSES.map((s) => (
            <MenuItem key={s} value={s}>
              {STATUS_LABEL[s]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Filtro por prioridad */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel id="priority-label" htmlFor="priority-select">
          Prioridad
        </InputLabel>
        <Select
          labelId="priority-label"
          inputProps={{ id: "priority-select" }}
          label="Prioridad"
          value={filters.priority}
          onChange={(e) =>
            setPriority(e.target.value as typeof filters.priority)
          }
        >
          <MenuItem value="all">Todas</MenuItem>
          {PRIORITIES.map((p) => (
            <MenuItem key={p} value={p}>
              {PRIORITY_LABEL[p]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Limpiar filtros — solo visible si hay alguno activo */}
      {hasActiveFilters && (
        <Button
          variant="text"
          size="small"
          onClick={resetFilters}
          color="inherit"
          aria-label="Limpiar todos los filtros"
        >
          Limpiar filtros
        </Button>
      )}
    </Box>
  );
}
