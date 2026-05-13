"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/lib/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
/*
 */

// QueryClient se crea con useState para que cada usuario
// tenga su propia instancia — evita compartir caché entre requests en SSR
export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60, // 1 min antes de considerar datos stale
            refetchOnWindowFocus: false, // evita refetch al cambiar de tab
            retry: 1, // 1 reintento en caso de error
          },
        },
      }),
  );

  return (
    // AppRouterCacheProvider es el wrapper oficial de MUI para App Router
    // Evita el flash de estilos sin server-side injection
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* reset CSS de MUI */}
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}
