import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavbarTop from "@/components/NavbarTop";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather2",
  description: "Weather App with git",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4">
        <main className="py-8">
        <h1 className="text-3xl font-bold mb-6">날씨</h1>
        <NavbarTop/>
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}
