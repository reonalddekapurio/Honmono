import "./globals.css";
import { BottomNav } from "@/components/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`antialiased pt-18 pb-26 bg-[url('/img/bg.svg')] min-h-screen bg-center bg-no-repeat bg-cover`}
      >
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
