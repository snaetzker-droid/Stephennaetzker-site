import { Header, Footer } from '../components/layout/Shell';

export default function Home() {
  return (
    <>
      <Header />
      <main className="sn-home" data-build="v1.2.3-homepage-restoration">
        <section className="hero-approved" aria-label="Following the evidence">
          <div className="hero-sky" aria-hidden="true" />
          <div className="hero-galaxy" aria-hidden="true" />
          <div className="hero-glow hero-glow-a" aria-hidden="true" />
          <div className="hero-glow hero-glow-b" aria-hidden="true" />
          <div className="hero-copy-approved">
            <p className="hero-eyebrow">Following the Evidence</p>
            <div className="hero-polestar" aria-hidden="true"><span>◆</span></div>
            <h1>Wonder Begins<br />With Looking Up.</h1>
            <p className="hero-mission">Philosophy. Service. Teaching. Artificial Intelligence.<br />A lifelong pursuit of truth, guided by curiosity and evidence.</p>
            <div className="hero-actions">
              <a className="hero-btn hero-btn-primary" href="/essays">Begin the Journey →</a>
              <a className="hero-btn" href="/essays">Explore Essays</a>
            </div>
          </div>
          <div className="hero-portrait-wrap" aria-hidden="true">
            <img className="hero-portrait" src="/chloe-hero.png" alt="" />
          </div>
          <a className="hero-scroll" href="#featured-sections" aria-label="Scroll to featured sections">⌄</a>
        </section>

        <section className="sn-feature">
          <p className="sn-eyebrow">Why I Keep Asking Questions</p>
          <h2>The pursuit of truth requires the courage to follow the evidence, even when it leads somewhere unexpected.</h2>
        </section>

        <section id="featured-sections" className="sn-cards" aria-label="Featured sections">
          <article><h3>Essays</h3><p>Philosophy, faith, evidence, AI, leadership, and the human condition.</p></article>
          <article><h3>Resume</h3><p>Military service, education, sales, teaching, communication, and problem solving.</p></article>
          <article><h3>Projects</h3><p>Writing, AI collaboration, learning systems, and exploration.</p></article>
        </section>
      </main>
      <Footer />
    </>
  );
}
