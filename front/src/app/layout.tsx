import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`antialiased pt-18 bg-[url('/img/bg.svg')] min-h-screen bg-center bg-no-repeat bg-cover`}
      >
        {children}
      </body>
    </html>
  );
}
