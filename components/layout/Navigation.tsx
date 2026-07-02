import Link from 'next/link';

export function Navigation() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Stephen Naetzker home">
        <span className="brand-mark">✦</span>
        <span>Stephen Naetzker</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
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
