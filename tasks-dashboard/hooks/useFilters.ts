import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import {
  setStatus,
  setPriority,
  setSearch,
  resetFilters,
} from "@/store/filtersSlice";
import type { TaskFilters } from "@/types";

// ── Hooks tipados base ──────────────────────────────────────────────────────
// Estos reemplazan a useDispatch y useSelector de react-redux en toda la app
// Nunca importes useDispatch/useSelector directo en los componentes

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ── Hook de filtros ─────────────────────────────────────────────────────────
// Encapsula toda la lógica de Redux en un solo lugar
// Los componentes solo llaman a este hook — no saben que existe Redux
export function useFilters() {
  const dispatch = useAppDispatch();

  // Lee el estado actual de los filtros del store
  const filters = useAppSelector((state) => state.filters);

  return {
    // Estado — lo que hay ahora en el store
    filters,

    // Acciones — disparan los reducers del slice
    setStatus: (status: TaskFilters["status"]) => dispatch(setStatus(status)),
    setPriority: (priority: TaskFilters["priority"]) =>
      dispatch(setPriority(priority)),
    setSearch: (search: string) => dispatch(setSearch(search)),
    resetFilters: () => dispatch(resetFilters()),
  };
}
