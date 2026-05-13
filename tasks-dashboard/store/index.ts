import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // filtersSlice se agrega en el Bloque 4
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
