import ActionLink from "./ActionLink.jsx";
import IdentityMap from "./IdentityMap.jsx";

export default function HeroSection() {
  return (
    <section className="ls-hero" aria-labelledby="ls-hero-title">
      <div className="ls-container ls-hero__inner">
        <div className="ls-hero-copy">
          <p className="ls-eyebrow">Identity-first cybersecurity</p>
          <h1 id="ls-hero-title">Every identity governed.<br /><span>Every access earned.</span></h1>
          <p className="ls-hero-copy__description">
            Lumastreet secures organizations from the identity layer out — zero-trust architecture,
            security testing, cloud and application security, AI governance, and the risk and
            compliance work to prove it.
          </p>
          <div className="ls-actions">
            <ActionLink href="#briefing">Book a consultation</ActionLink>
            <ActionLink variant="secondary" href="#practice-areas">Explore capabilities</ActionLink>
          </div>
        </div>
        <div className="ls-hero-visual" aria-label="Identity governance diagram">
          <IdentityMap />
          <div className="ls-visual-chip ls-visual-chip--top" aria-hidden="true">
            <span className="ls-chip-dot" />
            <span><strong>IDENTITY FABRIC</strong><small>Every access, one control plane</small></span>
          </div>
          <div className="ls-visual-chip ls-visual-chip--bottom" aria-hidden="true">
            <span className="ls-chip-check">✓</span><span>Policy verified</span><span className="ls-chip-live">LIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
