export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
    <body>
    <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </body>
  </html>
  );
}
