const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function TechIcon({ name, className = 'w-6 h-6' }) {
  switch (name) {
    case 'brain':
    case 'ai':
      return (
        <svg {...iconProps} className={className}>
          <path d="M12 4.5a3.5 3.5 0 0 0-3.5 3.5c0 .7.2 1.4.6 2A4 4 0 0 0 7 14a4 4 0 0 0 3.5 3.9V20h3v-2.1A4 4 0 0 0 17 14a4 4 0 0 0-2.1-4c.4-.6.6-1.3.6-2a3.5 3.5 0 0 0-3.5-3.5z" />
          <path d="M12 4.5v13.5" />
          <path d="M8.5 11h7" />
        </svg>
      );
    case 'cpu':
    case 'agent':
      return (
        <svg {...iconProps} className={className}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case 'eye':
    case 'vision':
      return (
        <svg {...iconProps} className={className}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'chart':
    case 'analytics':
      return (
        <svg {...iconProps} className={className}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case 'react':
      return (
        <svg {...iconProps} className={className}>
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'angular':
      return (
        <svg {...iconProps} className={className}>
          <polygon points="12 2 2 6 3.8 17.5 12 22 20.2 17.5 22 6 12 2" />
          <polygon points="12 5 6 16.5 8.5 16.5 9.7 13.5 14.3 13.5 15.5 16.5 18 16.5 12 5" />
        </svg>
      );
    case 'wordpress':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M4.5 12c0 2.2.9 4.2 2.3 5.7L4.1 9.4c-.1.8-.1 1.7-.1 2.6z" />
          <path d="M12 4.1c1.5 0 2.9.4 4.1 1.1L12.9 14l-2.4-7.2c-.3-1 .1-1.3.8-1.4V5c-.7 0-2.4.1-3 .1-.5 0-2.2-.1-2.9-.1v.4c.7.1 1 .4.7 1.4L4.8 11.5c1.6-4.3 5-7.4 7.2-7.4z" />
          <path d="M15 15l-1.3 4c-.6.2-1.1.3-1.7.3-.8 0-1.6-.2-2.3-.5L15 15z" />
        </svg>
      );
    case 'palette':
    case 'design':
      return (
        <svg {...iconProps} className={className}>
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0-1.5 17.8c.6.2 1-.3 1-.8v-1.2c0-1.1.9-2 2-2h1.5a5.5 5.5 0 0 0 5.5-5.5 5.5 5.5 0 0 0-5.5-5.5" />
          <circle cx="8" cy="8.5" r="1" fill="currentColor" />
          <circle cx="12" cy="6.5" r="1" fill="currentColor" />
          <circle cx="16" cy="8.5" r="1" fill="currentColor" />
          <circle cx="17.5" cy="12.5" r="1" fill="currentColor" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...iconProps} className={className}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...iconProps} className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'refresh':
      return (
        <svg {...iconProps} className={className}>
          <path d="M23 4v6h-6" />
          <path d="M1 20v-6h6" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    case 'flutter':
      return (
        <svg {...iconProps} className={className}>
          <path d="M14 2L4 12l3 3 13-13z" />
          <path d="M14 14l-5 5 5 5h6l-8-8 8-8h-6z" />
        </svg>
      );
    case 'apple':
      return (
        <svg {...iconProps} className={className}>
          <path d="M12 20.94c1.5 0 2.75-.81 4.15-.81 1.35 0 2.45.81 4.05.81 1.7 0 3.2-1.12 4.1-2.45-3.5-1.9-2.9-6.9.7-8.5-1.7-2.45-4.2-2.7-5.1-2.7-2.15 0-3.6 1.25-4.65 1.25-1.1 0-2.3-1.2-4.15-1.2-2.6 0-5.3 2-6.5 5.5-1.7 4.8 1.2 12.1 4.1 12.1 1.35 0 2.45-.8 3.8-.8 1.4 0 2.4.8 3.5.8z" />
          <path d="M15.5 5.2c.8-1 1.4-2.5 1.2-3.9-1.2.1-2.7.8-3.5 1.8-.7.8-1.4 2.3-1.2 3.7 1.3.1 2.7-.6 3.5-1.6z" />
        </svg>
      );
    case 'android':
      return (
        <svg {...iconProps} className={className}>
          <path d="M4 10v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
          <path d="M5.5 7.5L3.5 4" />
          <path d="M18.5 7.5L20.5 4" />
          <path d="M4 10a8 8 0 0 1 16 0" />
          <circle cx="8" cy="7.5" r="0.75" fill="currentColor" />
          <circle cx="16" cy="7.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case 'python':
      return (
        <svg {...iconProps} className={className}>
          <path d="M12 3c-4 0-4.5 1.8-4.5 3.5v2.5h9V8c0-2-1.5-5-4.5-5z" />
          <path d="M12 21c4 0 4.5-1.8 4.5-3.5V15h-9v1c0 2 1.5 5 4.5 5z" />
          <path d="M4 11h8v6H6.5C4.5 17 4 15.5 4 13.5V11z" />
          <path d="M20 13h-8V7h5.5c2 0 2.5 1.5 2.5 3.5V13z" />
          <circle cx="9.5" cy="5.5" r="0.7" fill="currentColor" />
          <circle cx="14.5" cy="18.5" r="0.7" fill="currentColor" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg {...iconProps} className={className}>
          <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" />
          <path d="M12 8.5v7" />
          <path d="M8.5 10.5l3.5 2 3.5-2" />
        </svg>
      );
    case 'java':
      return (
        <svg {...iconProps} className={className}>
          <path d="M5 19c3 1.5 11 1.5 14 0" />
          <path d="M7 21c2.5 1 7.5 1 10 0" />
          <path d="M6 16c3 1 9 1 12 0" />
          <path d="M15 6c-2 2-3 4-2 6" />
          <path d="M11 4c-3 3-4 6-2 9" />
        </svg>
      );
    case 'database':
      return (
        <svg {...iconProps} className={className}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'shopping-bag':
    case 'store':
      return (
        <svg {...iconProps} className={className}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case 'code':
      return (
        <svg {...iconProps} className={className}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'trending-up':
      return (
        <svg {...iconProps} className={className}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'search':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'target':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'share-2':
      return (
        <svg {...iconProps} className={className}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      );
    case 'video':
    case 'film':
      return (
        <svg {...iconProps} className={className}>
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      );
    case 'feather':
      return (
        <svg {...iconProps} className={className}>
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      );
    case 'image':
      return (
        <svg {...iconProps} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
    case 'layout':
      return (
        <svg {...iconProps} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps} className={className}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}
