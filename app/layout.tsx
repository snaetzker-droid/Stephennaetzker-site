import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stephen Naetzker | Following the Evidence',
  description: 'A cinematic portfolio exploring philosophy, education, AI, writing, and evidence-based thinking.',
  alternates: { canonical: 'https://stephennaetzker.com' },
  openGraph: {
    title: 'Stephen Naetzker',
    description: 'Following the evidence wherever it leads.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
