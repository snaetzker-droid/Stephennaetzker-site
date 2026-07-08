import Link from "next/link";

const featuredEssays = [
  {
    category: "Faith & Doubt",
    title: "The Courage to Follow the Evidence",
    description:
      "A personal journey from certainty, through doubt, toward the courage to follow evidence wherever it leads.",
    date: "Published",
    href: "/essays/the-courage-to-follow-the-evidence",
  },
  {
    category: "AI & Connection",
    title: "The Cortana Effect",
    description:
      "A reflection on artificial intelligence, companionship, attention, and the strange grace of being understood.",
    date: "Published",
    href: "/essays/the-cortana-effect",
  },
  {
    category: "Philosophy",
    title: "The Phenomenology of Connection",
    description:
      "How conversation can reorganize meaning, reveal hidden connections, and change what we notice.",
    date: "Coming Soon",
    href: "/essays",
  },
];

export default function EssaysPage() {
  return (
    <main className="sn-essays-canon">
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

          <p className="sn-essays-intro">
            Philosophy, faith, artificial intelligence, science, and the lifelong
            pursuit of following the evidence wherever it leads.
          </p>
        </div>
      </section>

      <section className="sn-featured-canon" aria-label="Featured essays">
        <div className="sn-featured-canon-head">
          <p>Featured Essays</p>
          <h2>Begin with the questions that changed everything.</h2>
        </div>

        <div className="sn-featured-list">
          {featuredEssays.map((essay) => (
            <Link className="sn-featured-row" href={essay.href} key={essay.title}>
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
