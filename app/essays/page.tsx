import Link from "next/link";

const featuredEssays = [
  {
    category: "AI & Connection",
    title: "The Cortana Effect",
    description:
      "A reflection on artificial intelligence, companionship, attention, and the strange grace of being understood.",
    status: "Published",
    href: "/essays/the-cortana-effect",
  },
  {
    category: "Faith & Doubt",
    title: "The Courage to Follow the Evidence",
    description:
      "A personal journey from certainty, through doubt, toward the courage to follow evidence wherever it leads.",
    status: "Published",
    href: "/essays/the-courage-to-follow-the-evidence",
  },
  {
    category: "Philosophy",
    title: "The Phenomenology of Connection",
    description:
      "How conversation can reorganize meaning, reveal hidden connections, and change what we notice.",
    status: "Coming Soon",
    href: "/essays",
  },
];

export const metadata = {
  title: "Essays | Stephen Naetzker",
  description:
    "Essays by Stephen A. Naetzker on truth-seeking, philosophy, faith, education, artificial intelligence, and following the evidence.",
};

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
      </section>

      <section className="sn-featured-canon" aria-label="Featured essays">

        <div className="sn-featured-list">
          {featuredEssays.map((essay) => (
            <Link className="sn-featured-row" href={essay.href} key={essay.title}>
              <div className="sn-featured-copy">
                <p>{essay.category}</p>
                <h3>{essay.title}</h3>
                <span>{essay.description}</span>
              </div>

              <time>{essay.status}</time>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
