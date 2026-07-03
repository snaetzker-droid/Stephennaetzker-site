import Link from 'next/link';
import type { ReactNode } from 'react';

export function Header() {
  return (
    <header className="sn-header">
      <Link className="sn-brand" href="/" aria-label="Stephen Naetzker home">
        <span className="sn-mark" aria-hidden="true"><i /></span>
        <span>Stephen Naetzker</span>
      </Link>
      <nav className="sn-nav" aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/essays">Essays</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="sn-footer">
      <strong>Following the Evidence</strong>
      <span>© 2026 Stephen Naetzker</span>
      <span className="sn-build">v1.2.7 homepage layout polish</span>
    </footer>
  );
}

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="sn-page">
        <h1>{title}</h1>
        <section className="sn-panel">{children}</section>
      </main>
      <Footer />
    </>
  );
}
