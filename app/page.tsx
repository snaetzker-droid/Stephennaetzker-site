import Link from 'next/link';

export default function Home() {
  return (
    <main className="sn-canonical-home" data-build="v1.2.24-homepage-stability">
      <section className="sn-canonical-hero" aria-label="Following the evidence">
        <img className="sn-canonical-bg" src="/canonical-hero.png" alt="" />

        <div className="sn-hot-brand" aria-hidden="true" />
        <nav className="sn-hot-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="sn-canonical-text">
          <p className="sn-home-kicker">Following the Evidence</p>
          <h1>Wonder Begins With Looking Up.</h1>
          <p className="sn-home-subtitle">Philosophy. Service. Teaching. Artificial Intelligence. A lifelong pursuit of truth, guided by curiosity and evidence.</p>
          <div className="sn-canonical-actions" aria-label="Homepage actions">
            <Link className="sn-hot-button sn-hot-primary" href="/essays">
              Begin the Journey →
            </Link>
            <Link className="sn-hot-button sn-hot-secondary" href="/about">
              About Stephen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
