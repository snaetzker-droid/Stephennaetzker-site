import Link from "next/link";

const essays = [
  {
    category: "Faith & Doubt",
    title: "The Courage to Follow the Evidence",
    description:
      "A personal journey from unquestioned belief to the liberating pursuit of truth.",
    date: "June 25, 2026",
    image: "/essay-path.jpg",
    href: "/essays/the-courage-to-follow-the-evidence",
  },
  {
    category: "Curiosity & Wonder",
    title: "Why I Changed My Mind",
    description:
      "On humility, open-mindedness, and the willingness to revise what we once believed.",
    date: "Coming Soon",
    image: "/essay-telescope.jpg",
    href: "/essays",
  },
  {
    category: "Existence & Meaning",
    title: "Existential Dread and Connection",
    description:
      "How confronting the unknown can lead us to deeper empathy and purpose.",
    date: "Coming Soon",
    image: "/essay-maze.jpg",
    href: "/essays",
  },
];

export default function EssaysPage() {
  return (
    <main className="sn-essays-canon">
      <nav className="sn-essays-topnav" aria-label="Main navigation">
        <Link className="sn-essays-brand" href="/">
          <span className="sn-essays-mark" aria-hidden="true">✶</span>
          <span>Stephen Naetzker</span>
        </Link>

        <div className="sn-essays-links">
          <Link href="/">Home</Link>
          <Link className="active" href="/essays">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Résumé</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <section className="sn-essays-hero" aria-label="Essays">
        <img
          className="sn-essays-hero-img"
          src="/essays-hero-canon.png"
          alt=""
          aria-hidden="true"
        />

        <div className="sn-essays-hero-copy">
          <p className="sn-essays-kicker">Essays</p>
          <h1>
            Exploring Truth.
            <br />
            Challenging Assumptions.
            <br />
            Sharing the Journey.
          </h1>

          <div className="sn-essays-divider" aria-hidden="true">
            <span />
            <i>✶</i>
            <span />
          </div>

          <p className="sn-essays-intro">
            A collection of reflections on faith, evidence, consciousness,
            and the human pursuit of understanding.
          </p>
        </div>
      </section>

      <section className="sn-featured-canon" aria-label="Featured essays">
        <div className="sn-featured-canon-head">
          <h2>Featured Essays</h2>
          <Link href="/essays/all">View All Essays <span aria-hidden="true">→</span></Link>
        </div>

        <div className="sn-featured-list">
          {essays.map((essay) => (
            <Link className="sn-featured-row" href={essay.href} key={essay.title}>
              <img src={essay.image} alt="" />
              <div className="sn-featured-copy">
                <p>{essay.category}</p>
                <h3>{essay.title}</h3>
                <span>{essay.description}</span>
              </div>
              <time>{essay.date}</time>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
