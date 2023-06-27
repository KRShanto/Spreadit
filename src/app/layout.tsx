import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title: "Spreadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-slate-900 pt-12 text-xl text-slate-300 antialiased">

        <main className="container mx-auto h-full max-w-7xl pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
