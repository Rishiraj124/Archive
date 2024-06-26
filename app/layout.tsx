export const runtime = 'edge';
import '@tabler/core/dist/css/tabler.min.css';
import '../styles/index.scss';
export const metadata = {
  title: 'Welcome to fathers-club',
  description: 'Generated by create-nx-workspace',
  manifest: './manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
