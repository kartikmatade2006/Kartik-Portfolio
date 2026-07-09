// Add a new project mark by adding a key to `marks` below, then reference
// that key from the `logo` field of a project in portfolioData.js.

function InsuranceMark({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#141B38" />
      <path
        d="M50 14 L78 24 V48 C78 66 66 79 50 86 C34 79 22 66 22 48 V24 Z"
        stroke="#F2A93B"
        strokeWidth="3.5"
        fill="rgba(242,169,59,0.08)"
      />
      <polyline
        points="32,56 42,46 50,52 62,36 70,42"
        stroke="#4FD1C5"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="70" cy="42" r="3.2" fill="#4FD1C5" />
      <circle cx="50" cy="52" r="3.2" fill="#4FD1C5" />
      <circle cx="42" cy="46" r="3.2" fill="#4FD1C5" />
      <circle cx="32" cy="56" r="3.2" fill="#4FD1C5" />
    </svg>
  );
}

function GenericMark({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="22" fill="#141B38" />
      <rect x="26" y="26" width="48" height="48" rx="10" stroke="#F2A93B" strokeWidth="3.5" />
      <path d="M38 50 L46 58 L64 40" stroke="#4FD1C5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const marks = {
  insurance: InsuranceMark,
  generic: GenericMark,
};

export default function ProjectLogo({ logoKey, className = "w-16 h-16" }) {
  const Mark = marks[logoKey] || marks.generic;
  return <Mark className={className} />;
}
