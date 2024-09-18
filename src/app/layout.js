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
      <body className="dark bg-gradient-to-r bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200">
        <ChakraProvider>
          {children}
          {/* <Navbar /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
