import ActionLink from "./ActionLink.jsx";
import BrandMark from "./BrandMark.jsx";

function SectionTitle({ eyebrow, children, className = "" }) {
  return (
    <div className={"ls-section-heading " + className}>
      {eyebrow && <p className="ls-section__eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
    </div>
  );
}

export function MetricsStrip() {
  const metrics = [
    ["[XX]+", "Security engagements delivered"],
    ["[X]M+", "Identities under governance"],
    ["[XX]", "Certified security professionals"],
  ];

  return (
    <section className="ls-stats" id="platforms" aria-label="Experience and platform expertise">
      <div className="ls-container ls-stats__inner">
        <div className="ls-stats__metrics">
          {metrics.map(([value, label]) => (
            <div className="ls-stat" key={label}>
              <p>{value}</p><p>{label}</p>
            </div>
          ))}
        </div>
        <div className="ls-platforms">
          <p>Experience across leading platforms</p>
          <p>SailPoint · Saviynt · Okta · Microsoft Entra · CyberArk · Ping Identity</p>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  ["01", "Senior-led, start to finish", "The architect who scopes your program stays to deliver it. No hand-off to a junior bench."],
  ["02", "Independent advice", "We recommend the platform that fits your environment, not the one with the best resale margin."],
  ["03", "Built for AI-era identity", "Service accounts, API keys, workloads and AI agents governed with the same rigor as people."],
  ["04", "Fixed-scope starting points", "Defined deliverables, timelines and fees — so you know exactly what you're buying."],
];

export function WhySection() {
  return (
    <section className="ls-section ls-why" id="why-lumastreet">
      <div className="ls-container">
        <div className="ls-why__intro">
          <SectionTitle eyebrow="Why Lumastreet">The security partner large firms wish they could be.</SectionTitle>
          <p>Security programs fail when strategy, engineering, testing and compliance live in different hands. We keep them in one team accountable for the outcome.</p>
        </div>
        <div className="ls-reasons">
          {reasons.map(([number, title, description]) => (
            <article className="ls-reason" key={number}>
              <p className="ls-index">{number}</p><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const practiceGroups = [
  {
    label: "BUILD · CORE",
    services: [
      ["iam", "Identity & Access Management", "IAM, IGA, PAM, CIAM and machine identities."],
      ["arch", "Architecture & Zero Trust", "Role-based, least-privilege access by design."],
    ],
  },
  {
    label: "ASSURE",
    services: [
      ["testing", "Assessment & Testing", "Pen testing, vulnerability and control testing."],
      ["appsec", "Application Security", "Secure SDLC, threat modeling, DevSecOps."],
      ["cloud", "Cloud Security", "AWS, Azure and GCP posture and cloud IAM."],
    ],
  },
  {
    label: "GOVERN",
    services: [
      ["risk", "Risk Management", "Risk assessment, vendor risk, vCISO."],
      ["legal", "Legal, Regulatory & Compliance", "Obligation mapping and audit readiness."],
      ["data", "Asset & Data Security", "Classification and sensitive-data access."],
    ],
  },
];

function ServiceGroup({ label, services }) {
  return (
    <article className="ls-service-group ls-card">
      <p className="ls-service-group__label">{label}</p>
      <div className="ls-service-list">
        {services.map(([id, title, description]) => (
          <a className="ls-service-link" id={id} href={"#" + id} key={id}>
            <strong>{title}</strong><span>{description}</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export function PracticeAreas() {
  return (
    <section className="ls-section ls-practice" id="practice-areas">
      <div className="ls-container">
        <div className="ls-practice__heading">
          <SectionTitle eyebrow="Practice areas">Nine practice areas. One identity-first approach.</SectionTitle>
          <a className="ls-text-link" href="#practice-areas">All services <span aria-hidden="true">→</span></a>
        </div>
        <div className="ls-practice-grid">
          {practiceGroups.map((group) => <ServiceGroup key={group.label} {...group} />)}
          <a className="ls-ai-card ls-card" id="ai" href="#ai">
            <p className="ls-service-group__label">Emerging</p>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="5" y="5" width="14" height="14" rx="2" />
              <path d="M9 1.5v3.5M15 1.5v3.5M9 19v3.5M15 19v3.5M1.5 9H5M1.5 15H5M19 9h3.5M19 15h3.5" />
              <path d="M9.5 14.5l1.2-5h2.6l1.2 5M10.2 12.5h3.6" />
            </svg>
            <strong>AI &amp; Emerging Technology Security</strong>
            <span>Govern models, data and autonomous AI agents — aligned to NIST AI RMF and ISO/IEC 42001.</span>
            <span className="ls-text-link">Explore <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
}

const engagements = [
  {
    duration: "3 WEEKS",
    title: "Identity & Risk Posture Assessment",
    description: "A benchmark of your identity, access and security risk posture against NIST CSF 2.0.",
    deliverables: ["Maturity scorecard", "Top-10 risk register", "12-month prioritized roadmap"],
  },
  {
    duration: "6 WEEKS",
    title: "Zero Trust Architecture Blueprint",
    description: "A target design for role-based, least-privilege access across users, applications, data and cloud.",
    deliverables: ["RBAC and privilege model", "Zero-trust reference architecture", "Phased implementation plan"],
  },
  {
    duration: "4 WEEKS · NEW",
    title: "AI Security & Governance Readiness",
    description: "Inventory AI systems and agents, assess model and data risk, and set guardrails aligned to NIST AI RMF.",
    deliverables: ["AI system & agent inventory", "AI risk assessment", "AI governance policy"],
  },
];

export function Engagements() {
  return (
    <section className="ls-section ls-engagements">
      <div className="ls-container">
        <div className="ls-engagements__intro">
          <SectionTitle eyebrow="Signature engagements">Clear scope. Fixed timeline. Real deliverables.</SectionTitle>
          <p>The fastest way to see how we work — each one ends with a roadmap you own, whether or not we do the next phase.</p>
        </div>
        <div className="ls-engagement-grid">
          {engagements.map((item) => (
            <article className="ls-engagement-card ls-card" key={item.title}>
              <span className="ls-duration">{item.duration}</span>
              <h3>{item.title}</h3><p>{item.description}</p>
              <ul>{item.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
              <a href="#briefing">Request scope <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const deliverySteps = [
  ["01", "Assess", "Inventory identities, entitlements and controls; score maturity and risk.", "scorecard & risk register"],
  ["02", "Design", "Target architecture, platform selection and a phased business case.", "architecture & roadmap"],
  ["03", "Implement", "Engineer, integrate and migrate — including legacy IDM retirement.", "production platform"],
  ["04", "Operate", "Managed identity operations, app onboarding and continuous tuning.", "SLAs & quarterly reviews"],
];

export function DeliverySteps() {
  return (
    <section className="ls-section ls-delivery">
      <div className="ls-container">
        <SectionTitle eyebrow="How we deliver">From current state to continuously governed</SectionTitle>
        <div className="ls-delivery-grid">
          {deliverySteps.map(([number, title, description, result]) => (
            <article className="ls-delivery-step" key={number}>
              <p className="ls-index">{number}</p><h3>{title}</h3><p>{description}</p>
              <p className="ls-delivery-step__result"><strong>You get:</strong> {result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const intelligenceItems = [
  ["ADVISORY", "[Advisory title — e.g. an identity-related KEV entry and what to patch]", "[One-line summary of impact and recommended action.]"],
  ["RESEARCH", "[Research title — e.g. governing AI agents as first-class identities]", "[One-line summary of the finding.]"],
  ["PLAYBOOK", "[Playbook title — e.g. retiring a legacy IDM in 90 days]", "[One-line summary of what the reader will learn.]"],
];

export function IntelligenceSection() {
  return (
    <section className="ls-section ls-intelligence" id="intelligence">
      <div className="ls-container">
        <div className="ls-intelligence__heading">
          <SectionTitle eyebrow="Identity intelligence">What identity leaders are reading</SectionTitle>
          <a className="ls-text-link" href="#intelligence">All intelligence <span aria-hidden="true">→</span></a>
        </div>
        <div className="ls-intelligence-grid">
          {intelligenceItems.map(([type, title, description]) => (
            <a className="ls-intelligence-card ls-card" href="#intelligence" key={type}>
              <div className="ls-intelligence-card__meta"><span>{type}</span><span>[DATE]</span></div>
              <h3>{title}</h3><p>{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = ["Financial services", "Healthcare", "Public sector", "Manufacturing", "Retail", "Technology"];

export function IndustriesSection() {
  return (
    <section className="ls-section ls-industries" id="industries">
      <div className="ls-container ls-industries__inner">
        <SectionTitle eyebrow="Industries">Identity programs for regulated industries</SectionTitle>
        <div className="ls-industries-grid">
          {industries.map((industry) => <a href="#briefing" key={industry}>{industry} <span aria-hidden="true">→</span></a>)}
        </div>
      </div>
    </section>
  );
}

export function BriefingCTA() {
  return (
    <section className="ls-section ls-cta" id="briefing">
      <div className="ls-container ls-cta__inner">
        <h2>Start with a 30-minute security briefing.</h2>
        <p>Meet a senior architect, walk through your environment and leave with three concrete next steps — no slideware.</p>
        <div className="ls-actions ls-cta__actions">
          <ActionLink href="#briefing">Book a consultation</ActionLink>
          <ActionLink variant="secondary" href="#briefing">Chat with an architect</ActionLink>
        </div>
      </div>
    </section>
  );
}

const footerGroups = [
  {
    title: "Practice areas",
    links: [["Identity & Access", "#iam"], ["Zero Trust Architecture", "#arch"], ["Assessment & Testing", "#testing"], ["Application Security", "#appsec"], ["Cloud Security", "#cloud"], ["Risk & Compliance", "#risk"], ["AI Security", "#ai"]],
  },
  {
    title: "Company",
    links: [["About", "#why-lumastreet"], ["Partners", "#platforms"], ["Intelligence", "#intelligence"], ["Careers", "#briefing"], ["Contact", "#briefing"]],
  },
];

export function SiteFooter() {
  return (
    <footer className="ls-footer">
      <div className="ls-container ls-footer__main">
        <div className="ls-footer__about">
          <div className="ls-footer__brand"><BrandMark small /><strong>Lumastreet</strong></div>
          <p>Identity-first cybersecurity — architecture, testing, cloud, application and AI security, with the governance to prove it.</p>
        </div>
        <div className="ls-footer__links">
          {footerGroups.map((group) => (
            <div className="ls-footer__group" key={group.title}>
              <span>{group.title}</span>
              {group.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            </div>
          ))}
          <div className="ls-footer__group">
            <span>Reach us</span><span>[EMAIL]</span><span>[PHONE]</span><span>[CITY, STATE]</span>
          </div>
        </div>
      </div>
      <div className="ls-container ls-footer__bottom">
        <span>© 2026 Lumastreet, Inc. All rights reserved.</span>
        <span>[Privacy] · [Terms] · [Certification badge]</span>
      </div>
    </footer>
  );
}
