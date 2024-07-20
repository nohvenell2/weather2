import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather",
  description: "Weather App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="py-8">
        <h1 className="text-3xl font-bold mb-6">날씨 정보</h1>
        <div className="mb-6">
          <Link href="/current" className={`mr-4`}>
            현재 날씨
          </Link>
          <Link href="/hourly" className={`mr-4`}>
            시간별 예보
          </Link>
          <Link href="/daily" className={`mr-4`}>
            일간 예보
          </Link>
        </div>
        {children}
        </main>
      </body>
    </html>
  );
}
