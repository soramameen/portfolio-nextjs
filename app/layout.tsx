export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>
          <div>soramame の記録</div>
        </header>
        {children}
        <footer>2026 soramameen</footer>
      </body>
    </html>
  );
}
