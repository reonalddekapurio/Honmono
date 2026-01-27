'use client';

import "./globals.css";
import { BottomNav } from "@/components/layouts";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showBottomNav = !pathname.startsWith('/auth');

  const paddingClasses = showBottomNav ? 'pt-18 pb-26' : '';

  return (
    <html lang="ja">
      <body
        className={`antialiased ${paddingClasses} bg-[url('/img/bg.svg')] bg-center bg-no-repeat bg-cover`}
      >
        {children}
        {showBottomNav && <BottomNav />}
      </body>
    </html>
  );
}
