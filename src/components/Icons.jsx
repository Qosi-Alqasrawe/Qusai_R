const paths = {
  factory: (
    <>
      <path d="M3 20V9l6 3V9l6 3V5h3v15Z" />
      <path d="M7 20v-3M11 20v-3M15 20v-3" />
    </>
  ),
  chain: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7 6h10M6 8l5 8M18 8l-5 8" />
    </>
  ),
  erp: (
    <>
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="6" rx="1.5" />
      <path d="M14 14h7M14 17h7M14 20h4" />
    </>
  ),
  data: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </>
  ),
  project: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5M8 14h5M8 17h8" />
    </>
  ),
  iso: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6Z" />
      <path d="m8.5 12 2.5 2.5L16 9.5" />
    </>
  ),
  license: (
    <>
      <path d="M6 3h9l4 4v14H6Z" />
      <path d="M15 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 0 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  download: <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" />,
  arrow: <path d="M5 12h14m0 0-6-6m6 6-6 6" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-2 8 5-3 5 3-2-8" />
    </>
  ),
  cap: (
    <>
      <path d="m2 9 10-5 10 5-10 5Z" />
      <path d="M6 11.500V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </>
  ),
}

export default function Icon({ name, size = 22, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      aria-label={title}
    >
      {paths[name]}
    </svg>
  )
}
