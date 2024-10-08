import localFont from "next/font/local";
import "./globals.css";

import { ChakraProvider } from "@chakra-ui/react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Ingenesys Solutions",
  description: "Ingenieria y Tecnologia en Sinergia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="lithg">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
