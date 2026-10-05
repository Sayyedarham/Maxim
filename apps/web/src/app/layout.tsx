import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maxim — Offline-First Python Editor & Autonomous Agent',
  description:
    'A high-performance offline-first browser Python IDE, desktop AI agent with Docker isolation, and scalable cloud backend.',
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
