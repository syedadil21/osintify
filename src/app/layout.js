import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import NavbarComponent from "@/components/NavbarComponent";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./darkTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osintify",
  description: "Get the details you never knew existed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <NextUIProvider>
            <NavbarComponent/>
            <div><Toaster/></div>
            <ThemeProvider theme={darkTheme}>
              <main className="dark text-foreground bg-background">
                {children}
              </main>
            </ThemeProvider>
          </NextUIProvider>
        </body>
    </html>
  );
}
