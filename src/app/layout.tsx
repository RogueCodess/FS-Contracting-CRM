import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FS-Contracting CRM',
  description: 'CRM prototype',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
