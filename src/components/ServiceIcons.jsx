const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function SocialIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H10l-4 3.5v-3.5H5.5C4.67 15 4 14.33 4 13.5v-8z" />
      <path
        d="M12 9.3c.55-1.1 2.6-1.1 2.6.5 0 1.1-1.1 1.9-2.6 3.2-1.5-1.3-2.6-2.1-2.6-3.2 0-1.6 2.05-1.6 2.6-.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function AdsIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LocalIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function WebIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
      <line x1="3.5" y1="9.2" x2="20.5" y2="9.2" />
      <circle cx="6.3" cy="7.1" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.3" cy="7.1" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BrandIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.5 19.5l.9-4L15.5 5.4l3.1 3.1L8.5 18.6l-4 .9z" />
      <path d="M13.6 6.8l3.1 3.1" />
    </svg>
  );
}

export function CommerceIcon() {
  return (
    <svg {...iconProps}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}
