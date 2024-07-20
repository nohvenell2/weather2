import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
        <div className="mb-6">
          <Link href="/" className={`mr-4`}>
            현재 날씨
          </Link>
          <Link href="/hourly" className={`mr-4`}>
            시간 별 예보
          </Link>
          <Link href="/daily" className={`mr-4`}>
            일간 예보
          </Link>
        </div>
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}
