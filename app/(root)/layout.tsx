import type { Metadata } from "next";

import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "DealHome | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <main className="min-h-screen">
        <Header />
        {children}
      </main>
    </html>
  );
}
