import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TaskFilters, TaskStatus, Priority } from "@/types";

const initialState: TaskFilters = {
  status: "all",
  priority: "all",
  search: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<TaskFilters["status"]>) {
      state.status = action.payload;
      // ✅ RTK usa immer internamente — puedes mutar state directamente
      // sin necesidad de return { ...state, status: action.payload }
    },

    setPriority(state, action: PayloadAction<TaskFilters["priority"]>) {
      state.priority = action.payload;
    },

    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },

    resetFilters(state) {
      state.status = "all";
      state.priority = "all";
      state.search = "";
    },
  },
});

export const { setStatus, setPriority, setSearch, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
