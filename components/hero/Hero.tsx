export function Hero() {
  return (
    <section className="hero" aria-label="Following the evidence">
      <div className="hero-copy">
        <p className="eyebrow">Following the Evidence</p>

        <div className="polaris" aria-hidden="true" />

        <h1>
          Wonder
          <br />
          Begins
          <br />
          With
          <br />
          Looking Up.
        </h1>

        <p className="mission">
          Philosophy. Service. Teaching. Artificial Intelligence.
          <br />
          A lifelong pursuit of truth, guided by curiosity and evidence.
        </p>

        <div className="actions">
          <a className="button primary" href="/essays">
            Begin the Journey →
          </a>
          <a className="button ghost" href="/about">
            About Stephen
          </a>
        </div>
      </div>

      <figure className="hero-art">
        <img src="/hero.png.png" alt="" />
      </figure>
    </section>
  );
}
