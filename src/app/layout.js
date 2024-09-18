import Navbar from "@/components/Navbar";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Ingenesys Solutions",
  description: "Ingenieria y tecnologia en sinergia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="dark">
        <ChakraProvider>
          {children}
          <Navbar />
        </ChakraProvider>
      </body>
    </html>
  );
}
