import ActionLink from "./ActionLink.jsx";
import BrandMark from "./BrandMark.jsx";

const navigation = [
  ["Services", "#practice-areas"],
  ["Industries", "#industries"],
  ["Intelligence", "#intelligence"],
  ["Partners", "#platforms"],
  ["About", "#why-lumastreet"],
];

export default function SiteHeader() {
  return (
    <header className="ls-header">
      <div className="ls-header__inner">
        <a className="ls-brand" href="#top" aria-label="Lumastreet home">
          <BrandMark />
          <span className="ls-brand__text">
            <strong>Lumastreet</strong>
            <span>IDENTITY SECURITY</span>
          </span>
        </a>
        <nav className="ls-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <ActionLink className="ls-nav__cta" href="#briefing">Book a consultation</ActionLink>
        </nav>
      </div>
    </header>
  );
}
