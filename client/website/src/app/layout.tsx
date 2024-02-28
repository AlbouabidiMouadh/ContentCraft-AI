import {Providers} from "./providers";
import "@/app/globals.css"

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}