export function Hero() {
  return (
    <section className="hero" aria-label="Following the evidence">
      <div className="hero-card">
        <div className="compass" aria-hidden="true"><span>✧</span></div>
        <p className="eyebrow">Following the Evidence</p>
        <h1>Questions worth asking.<br/>Answers worth earning.</h1>
        <p className="mission">Philosophy. Service. Teaching. Artificial Intelligence. A lifelong pursuit of truth, guided by curiosity and evidence.</p>
        <div className="actions">
          <a className="button primary" href="/essays">Begin the Journey →</a>
          <a className="button ghost" href="/about">About Stephen</a>
        </div>
      </div>
      <div className="orbital" aria-hidden="true"></div>
    </section>
  );
}
