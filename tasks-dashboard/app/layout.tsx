import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "@/components/Providers";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// next/font carga Roboto con zero layout shift y self-hosted
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto", // lo usamos en theme.ts
  display: "swap",
});

export const metadata: Metadata = {
  title: "Task Dashboard",
  description: "Gestión de tareas con Next.js, MUI, Redux y React Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.variable}>
      <body>
        <Providers>
          {/* AppBar vive en el layout para que sea persistente en toda la app */}
          <AppBar
            position="sticky"
            elevation={0}
            sx={{ borderBottom: "1px solid", borderColor: "divider" }}
          >
            <Toolbar>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                Task Dashboard
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Main content con padding para no quedar debajo del AppBar */}
          <Box
            component="main"
            sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1200, mx: "auto" }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
