import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="site-name">soramame の記録</div>
        </header>
        {children}
        <footer>2026 soramameen</footer>
      </body>
    </html>
  );
}
