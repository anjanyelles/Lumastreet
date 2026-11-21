export default function BrandMark({ small = false }) {
  const size = small ? 28 : 34;

  return (
    <svg className="ls-brand-mark" width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <rect x="6" y="3" width="7" height="26" rx="1.5" fill="#F26B1D" />
      <rect x="6" y="22" width="22" height="7" rx="1.5" fill="#4F8FE0" />
    </svg>
  );
}
