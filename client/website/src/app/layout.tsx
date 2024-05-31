import { Providers } from "./providers";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { roboto_mono, inter, open_sans, poppins, rubik } from "@/utils/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={poppins.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <MantineProvider>{children}</MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
