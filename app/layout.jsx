import "./globals.css";
import ThemeRegistry from "../theme/ThemeRegistry";
import "@fontsource/roboto";
import SessionProviders from "../providers/SessionProviders";

export const Metadata = {
  title: "Parte por producción",
  description: "App creada por Avalora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <SessionProviders>
        <ThemeRegistry>
          <body>{children}</body>
        </ThemeRegistry>
      </SessionProviders>
    </html>
  );
}
