import Link from 'next/link';

export default function Home() {
  return (
    <main className="sn-canonical-home" data-build="v1.2.13-hotfix-large-transparent-button-regions">
      <section className="sn-canonical-hero" aria-label="Following the evidence">
        <img className="sn-canonical-bg" src="/canonical-hero.png" alt="" />

        <div className="sn-hot-brand" aria-hidden="true" />
        <nav className="sn-hot-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/essays/the-courage-to-follow-the-evidence">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="sn-button-hotspots" aria-label="Homepage actions">
          <a
            className="sn-click-hotspot sn-click-hotspot-primary"
            href="/essays/the-courage-to-follow-the-evidence"
            aria-label="Begin the Journey"
          >
            <span>Begin the Journey</span>
          </a>
          <a
            className="sn-click-hotspot sn-click-hotspot-secondary"
            href="/essays/the-courage-to-follow-the-evidence"
            aria-label="Explore Essays"
          >
            <span>Explore Essays</span>
          </a>
        </div>

        <div className="sn-canonical-text">
          <p>Following the Evidence</p>
          <h1>Wonder Begins With Looking Up.</h1>
          <p>Philosophy. Service. Teaching. Artificial Intelligence. A lifelong pursuit of truth, guided by curiosity and evidence.</p>
        </div>
      </section>
    </main>
  );
}
