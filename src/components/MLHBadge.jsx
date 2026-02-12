export default function MLHBadge() {
  return (
    <a
      id="mlh-trust-badge"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        maxWidth: "100px",
        minWidth: "60px",
        position: "fixed",
        left: "10px",
        top: 0,
        width: "10%",
        zIndex: 10000,
      }}
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
        alt="Major League Hacking 2026 Hackathon Season"
        style={{ width: "100%" }}
      />
    </a>
  );
}
