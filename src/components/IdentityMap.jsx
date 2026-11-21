const nodes = [
  { label: "Workforce", x: 200, y: 52 },
  { label: "Partners", x: 364.5, y: 147 },
  { label: "Customers", x: 364.5, y: 337 },
  { label: "Privileged", x: 200, y: 432 },
  { label: "AI Agents", x: 35.5, y: 337, accent: true },
  { label: "Machines", x: 35.5, y: 147 },
];

export default function IdentityMap() {
  return (
    <svg className="ls-identity-map" viewBox="0 0 520 520" role="img"
      aria-label="One identity fabric connecting workforce, partners, customers, privileged users, machines and AI agents">
      <circle cx="260" cy="260" r="245" fill="none" stroke="#16243B" strokeWidth="1" />
      <circle cx="260" cy="260" r="190" fill="none" stroke="#1E2E48" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="260" cy="260" r="120" fill="none" stroke="#16243B" strokeWidth="1" />
      <path d="M260 260L260 70M260 260L424.5 165M260 260L424.5 355M260 260L260 450M260 260L95.5 355M260 260L95.5 165" stroke="#2A3D5C" strokeWidth="1.2" />
      <path d="M260 260L95.5 355" stroke="#F26B1D" strokeWidth="1.6" />
      <circle cx="260" cy="260" r="62" fill="#0F1E35" stroke="#F26B1D" strokeWidth="1.5" />
      <text x="260" y="255" textAnchor="middle" fontFamily="monospace" fontSize="12" letterSpacing="2" fill="#A9B6C8">ONE</text>
      <text x="260" y="275" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="17" fill="#FFFFFF">Identity</text>
      <g className="ls-map-nodes" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="600" textAnchor="middle">
        {nodes.map((node) => (
          <g key={node.label}>
            <rect x={node.x} y={node.y} width="120" height="36" rx="18"
              fill={node.accent ? "#1F1610" : "#0F1E35"}
              stroke={node.accent ? "#F26B1D" : "#35496B"} />
            <text x={node.x + 60} y={node.y + 23} fill="#E7ECF3">{node.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
