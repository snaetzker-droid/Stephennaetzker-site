import Link from 'next/link';

export const metadata = {
  title: 'Essays | Stephen Naetzker',
  description: 'Essays by Stephen A. Naetzker on truth-seeking, philosophy, faith, education, and AI.'
};

export default function Essays() {
  return (
    <main className="sn-essay-index">
      <nav className="sn-essay-nav" aria-label="Primary navigation">
        <Link className="sn-essay-brand" href="/" aria-label="Stephen Naetzker home">
          <span className="sn-essay-mark" aria-hidden="true"><i /></span>
          <span>Stephen Naetzker</span>
        </Link>
        <div className="sn-essay-links">
          <Link href="/">Home</Link>
          <Link href="/essays">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="sn-essay-index-card">
        <p className="sn-essay-kicker">Essays</p>
        <h1>Writing that follows the evidence.</h1>
        <p>Reflections on philosophy, faith, education, service, artificial intelligence, and the responsibility to change when the evidence demands it.</p>

        <Link className="sn-featured-essay" href="/essays/the-cortana-effect">
          <span>Featured Essay</span>
          <strong>The Cortana Effect</strong>
          <em>15 min read · Memoir · AI · Philosophy</em>
        </Link>

        <Link className="sn-featured-essay" href="/essays/the-courage-to-follow-the-evidence">
          <span>Essay</span>
          <strong>The Courage to Follow the Evidence</strong>
          <em>6 min read · Philosophy · Truth Seeking</em>
        </Link>
      </section>
    </main>
  );
}
