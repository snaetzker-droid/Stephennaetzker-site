import { Header, Footer } from '../components/layout/Shell';

export default function Home() {
  return (
    <>
      <Header />
      <main className="sn-home" data-build="v1.2.2-homepage-polish">
        <section className="sn-hero" aria-label="Following the evidence">
          <div className="sn-starfield sn-starfield-one" aria-hidden="true" />
          <div className="sn-starfield sn-starfield-two" aria-hidden="true" />
          <div className="sn-milkyway" aria-hidden="true" />
          <div className="sn-orbit sn-orbit-one" aria-hidden="true" />
          <div className="sn-orbit sn-orbit-two" aria-hidden="true" />
          <div className="sn-hero-card">
            <div className="sn-compass" aria-hidden="true">✧</div>
            <p className="sn-eyebrow sn-eyebrow-hero">Following the Evidence</p>
            <h1>Questions worth asking.<br />Answers worth earning.</h1>
            <p className="sn-mission">Philosophy. Service. Teaching. Artificial Intelligence. A lifelong pursuit of truth, guided by curiosity and evidence.</p>
            <div className="sn-actions">
              <a className="sn-button sn-primary" href="/essays">Begin the Journey →</a>
              <a className="sn-button" href="/about">About Stephen</a>
            </div>
          </div>
          <a className="sn-scroll-cue" href="#featured-sections" aria-label="Scroll to featured sections">
            <span>Explore</span>
            <b aria-hidden="true">↓</b>
          </a>
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
