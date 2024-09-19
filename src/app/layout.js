import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Ingenesys Solutions",
  description: "Ingenieria y Tecnologia en Sinergia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="dark ">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
