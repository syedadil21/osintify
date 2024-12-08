import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osintify",
  description: "Get the details you never knew existed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Providers>
            <main className="dark text-foreground bg-background h-[100vh]">
              {children}
            </main>
          </Providers>
        </body>
    </html>
  );
}
