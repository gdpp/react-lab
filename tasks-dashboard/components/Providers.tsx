"use client";

import { ReactNode, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useServerInsertedHTML } from "next/navigation";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { store } from "@/store";
import theme from "@/lib/theme";

// Crea el cache de Emotion con key 'mui'
function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}

export default function Providers({ children }: { children: ReactNode }) {
  const [emotionCache] = useState(() => {
    const cache = createEmotionCache();
    // Necesario para capturar estilos durante SSR
    cache.compat = true;
    return cache;
  });

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  // Inyecta los estilos de Emotion en el <head> durante SSR
  useServerInsertedHTML(() => {
    const names = Object.keys(emotionCache.inserted);
    if (!names.length) return null;

    let styles = "";
    for (const name of names) {
      if (emotionCache.inserted[name] !== true) {
        styles += emotionCache.inserted[name];
      }
    }

    return (
      <style
        data-emotion={`${emotionCache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ReduxProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
