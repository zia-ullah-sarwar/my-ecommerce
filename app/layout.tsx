import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { AuthContextProvider } from "@/app/context/AuthContext";
import Footer from "./components/Footer";
import ProductCarousel from "@/app/components/ProductCarousel";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {/* <ProductCarousel /> */}
          <div className="container">{children}</div>
        </AuthContextProvider>
        <Footer />
      </body>
    </html>
  );
}
