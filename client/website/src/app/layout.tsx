import { Providers } from "./providers";
import "@/app/globals.css";

import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <MantineProvider>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
