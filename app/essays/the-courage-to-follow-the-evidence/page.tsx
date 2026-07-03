import Link from 'next/link';

export const metadata = {
  title: 'The Courage to Follow the Evidence | Stephen Naetzker',
  description: 'Stephen A. Naetzker reflects on faith, doubt, intellectual honesty, and following the evidence wherever it leads.'
};

export default function TheCourageToFollowTheEvidence() {
  return (
    <main className="sn-essay-page">
      <nav className="sn-essay-nav" aria-label="Primary navigation">
        <Link className="sn-essay-brand" href="/" aria-label="Stephen Naetzker home">
          <span className="sn-essay-mark" aria-hidden="true"><i /></span>
          <span>Stephen Naetzker</span>
        </Link>
        <div className="sn-essay-links">
          <Link href="/">Home</Link>
          <Link href="/essays/the-courage-to-follow-the-evidence">Essays</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <article className="sn-essay-article">
        <p className="sn-essay-kicker">Essay · Philosophy · Truth Seeking</p>
        <h1>The Courage to Follow the Evidence</h1>
        <p className="sn-essay-meta">By Stephen A. Naetzker · 6 min read</p>

        <section className="sn-essay-body">
          <p>I was eleven years old when I first became afraid of hell.</p>

          <p>A friend invited me to church, and I remember hearing the youth pastor explain that anyone who didn’t have Jesus in their heart risked eternal punishment. For an eleven-year-old, the decision seemed obvious.</p>

          <p><strong>So I prayed the prayer.</strong></p>

          <p>At first, it was fear that brought me to Christianity.</p>

          <p>Later, it was curiosity that kept me there.</p>

          <p>My best friend and I immersed ourselves in Scripture. We debated theology and philosophy, challenged one another’s arguments, and tried to become people who could defend what we believed. I admired his grandfather, whose command of the Bible and quiet confidence represented the kind of wisdom I hoped to develop myself.</p>

          <p>Looking back, I realize what I loved most wasn’t certainty.</p>

          <p>It was the search for truth.</p>

          <p><strong>That desire has remained the most consistent thread throughout my life.</strong></p>

          <p>As I became more serious about understanding my faith, I also became more willing to ask difficult questions. Within the tradition I grew up in, I had been taught that the Bible was infallible, inerrant, and perfect. I accepted those claims without much hesitation because they came from people I trusted.</p>

          <p>At the same time, I took seriously Jesus&apos; invitation to <em>“Seek and you will find; knock and the door will be opened to you.”</em> If truth had nothing to fear from honest inquiry, then asking difficult questions wasn&apos;t an act of rebellion.</p>

          <p>It was an act of faith.</p>

          <p>Years later, while studying philosophy and reading the work of biblical scholars, I encountered a very different picture. Questions about the transmission of biblical manuscripts, textual variants, and authorship challenged assumptions I had never seriously examined.</p>

          <p><strong>Whether those scholars were ultimately correct wasn&apos;t what mattered most. What mattered was realizing that beliefs I had accepted without question deserved to be examined.</strong></p>

          <p>Once I accepted that responsibility, there was no returning to the comfort of untested certainty.</p>

          <p>I remember sitting alone wondering whether I had just lost my faith or whether I had simply become more honest with myself. At the time, those two possibilities felt almost indistinguishable.</p>

          <p>I wasn&apos;t trying to lose my faith.</p>

          <p>I was trying to be honest about what I believed.</p>

          <p>I don&apos;t see that period of my life as a rejection of truth. I see it as a commitment to follow the evidence, even when it led somewhere I hadn&apos;t expected.</p>

          <p>Losing my faith was raw and painful.</p>

          <p>I&apos;m reminded of reading <em>The Case for Faith</em> by Lee Strobel while deployed to Iraq during Operation Iraqi Freedom.</p>

          <p>In its introduction, Strobel interviews Charles Templeton, once a close friend and contemporary of Billy Graham. Templeton had lost his Christian faith years earlier because he could not reconcile belief in a loving God with the reality of suffering.</p>

          <p>One moment has stayed with me ever since.</p>

          <p>Templeton described seeing a photograph in <em>Life</em> magazine of a woman in Northern Africa holding her dead child after a devastating drought. He recalled asking:</p>

          <blockquote>
            <p>“I don&apos;t control the rain. You don&apos;t control the rain. But He does…”</p>
          </blockquote>

          <p><strong>I never saw the photograph myself, but I didn&apos;t need to. Templeton&apos;s description alone was enough to make the scene unforgettable.</strong></p>

          <p>Later in the interview, despite his doubts, Templeton became emotional and quietly admitted:</p>

          <blockquote>
            <p>“I miss Jesus.”</p>
          </blockquote>

          <p>I understood exactly what he meant.</p>

          <p>I no longer see that chapter of my life as a story about losing faith.</p>

          <p><strong>I see it as a story about accepting responsibility for my own beliefs—and following the evidence wherever it leads.</strong></p>

          <p>Following the evidence didn&apos;t guarantee that I would always reach the right conclusions, but it taught me that truth is worth pursuing, even when the journey is costly.</p>

          <hr />

          <blockquote className="sn-final-quote">
            <p>If my beliefs are ever wrong again, I hope I have the courage to change them.</p>
          </blockquote>
        </section>

        <div className="sn-essay-footer-actions">
          <Link href="/">Return Home</Link>
          <Link href="/essays">All Essays</Link>
        </div>
      </article>
    </main>
  );
}
