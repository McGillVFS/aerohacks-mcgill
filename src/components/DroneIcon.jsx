export default function DroneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Center body */}
      <circle cx="12" cy="12" r="2" />
      
      {/* Arms */}
      <line x1="12" y1="12" x2="6" y2="6" />
      <line x1="12" y1="12" x2="18" y2="6" />
      <line x1="12" y1="12" x2="6" y2="18" />
      <line x1="12" y1="12" x2="18" y2="18" />
      
      {/* Propellers */}
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
    </svg>
  );
}