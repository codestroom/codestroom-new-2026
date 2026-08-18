// Portfolio + in-house products.
// Copy here is placeholder-safe: projects are described by industry and scope
// rather than by named client, so nothing has to be redacted before launch.

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'Everything' },
  { id: 'product', label: 'Our Products' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'web', label: 'Web & SaaS' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'commerce', label: 'E-Commerce' },
  { id: 'marketing', label: 'Marketing' },
];

export const PRODUCTS = [
  {
    slug: 'stroomdesk',
    name: 'StroomDesk',
    category: 'product',
    status: 'Live',
    tagline: 'AI helpdesk that answers from your own documentation.',
    description:
      'A retrieval-augmented support desk that plugs into your knowledge base, ticket history and product docs, then drafts grounded replies your agents can approve in one click.',
    tint: 'grad-1',
    tags: ['RAG', 'FastAPI', 'React', 'Postgres', 'pgvector'],
    highlights: [
      'Answer grounding with source citations',
      'Agent approve-or-edit workflow',
      'Self-hosted or VPC deployment',
    ],
  },
  {
    slug: 'ledgerlite',
    name: 'LedgerLite',
    category: 'product',
    status: 'Live',
    tagline: 'Billing and invoicing built for small service businesses.',
    description:
      'GST-ready invoicing, recurring billing, payment reminders and a client portal — everything a 2-to-20 person studio needs without the enterprise price tag.',
    tint: 'grad-2',
    tags: ['Next.js', 'Node', 'Stripe', 'Razorpay', 'Prisma'],
    highlights: ['Recurring plans & proration', 'Automated dunning emails', 'Multi-currency, multi-tax'],
  },
  {
    slug: 'pulseboard',
    name: 'PulseBoard',
    category: 'product',
    status: 'Beta',
    tagline: 'One marketing dashboard for every channel you spend on.',
    description:
      'Pulls Meta, Google Ads, GA4 and Shopify into a single blended-ROAS view, so you stop reconciling five tabs before every Monday standup.',
    tint: 'grad-3',
    tags: ['React', 'Python', 'BigQuery', 'Recharts'],
    highlights: ['Blended ROAS & CAC', 'Channel attribution snapshots', 'Scheduled PDF reports'],
  },
  {
    slug: 'menuloop',
    name: 'MenuLoop',
    category: 'product',
    status: 'Early access',
    tagline: 'QR menus, online ordering and local SEO for restaurants.',
    description:
      'A restaurant growth kit: digital menu, direct-order checkout that skips aggregator commissions, and a Google Business feed that keeps hours, photos and offers fresh.',
    tint: 'grad-1',
    tags: ['Flutter', 'Supabase', 'Local SEO', 'Stripe'],
    highlights: ['Commission-free direct orders', 'Auto-synced Google Business profile', 'Table QR + takeaway flows'],
  },
];

export const PROJECTS = [
  {
    slug: 'clinic-intake-agent',
    title: 'AI intake agent for a multi-location clinic group',
    category: 'ai',
    industry: 'Healthcare',
    year: '2026',
    summary:
      'A voice-and-chat intake agent that qualifies patients, checks slot availability and books appointments straight into the practice management system.',
    scope: ['LLM agent design', 'Calendar & EMR integration', 'Compliance-aware hosting'],
    stack: ['LangGraph', 'FastAPI', 'Twilio', 'Postgres'],
    metrics: [
      { val: '68%', lbl: 'calls handled end-to-end' },
      { val: '3.1x', lbl: 'faster booking turnaround' },
    ],
  },
  {
    slug: 'logistics-control-tower',
    title: 'Logistics control tower SaaS portal',
    category: 'web',
    industry: 'Logistics',
    year: '2025',
    summary:
      'A multi-tenant shipment tracking portal with live map views, exception alerts and customer-facing status pages replacing a decade of spreadsheets.',
    scope: ['Product design', 'Multi-tenant architecture', 'Realtime events'],
    stack: ['Next.js', 'Node', 'WebSockets', 'Mapbox', 'Redis'],
    metrics: [
      { val: '40k+', lbl: 'shipments tracked / month' },
      { val: '<200ms', lbl: 'live event latency' },
    ],
  },
  {
    slug: 'fitness-app-relaunch',
    title: 'Cross-platform fitness app relaunch',
    category: 'mobile',
    industry: 'Health & Fitness',
    year: '2025',
    summary:
      'Rebuilt a struggling native app as a single Flutter codebase with offline workouts, wearable sync and a subscription paywall that finally converts.',
    scope: ['Flutter rewrite', 'Offline-first sync', 'Subscription funnel'],
    stack: ['Flutter', 'Firebase', 'RevenueCat', 'HealthKit'],
    metrics: [
      { val: '4.7★', lbl: 'post-relaunch store rating' },
      { val: '2.4x', lbl: 'trial-to-paid conversion' },
    ],
  },
  {
    slug: 'd2c-store-replatform',
    title: 'D2C store replatform and CRO programme',
    category: 'commerce',
    industry: 'Retail / D2C',
    year: '2026',
    summary:
      'Moved a fast-growing D2C brand onto a headless Shopify build, then ran a structured experiment backlog across PDP, cart and checkout.',
    scope: ['Headless Shopify', 'Speed engineering', 'CRO experiments'],
    stack: ['Shopify Hydrogen', 'React', 'Klaviyo', 'GA4'],
    metrics: [
      { val: '1.9s', lbl: 'LCP on mobile' },
      { val: '+31%', lbl: 'checkout completion' },
    ],
  },
  {
    slug: 'restaurant-local-growth',
    title: 'Local growth engine for a restaurant group',
    category: 'marketing',
    industry: 'Food & Beverage',
    year: '2026',
    summary:
      'Google Business optimisation, always-on local ads and a reels-first content calendar across five outlets — measured on covers, not impressions.',
    scope: ['Local SEO', 'Paid social', 'Content production'],
    stack: ['Google Business', 'Meta Ads', 'Google Ads', 'PulseBoard'],
    metrics: [
      { val: '+142%', lbl: 'direction requests' },
      { val: '4.1x', lbl: 'blended ROAS' },
    ],
  },
  {
    slug: 'document-ocr-pipeline',
    title: 'Document OCR & classification pipeline',
    category: 'ai',
    industry: 'Financial Services',
    year: '2025',
    summary:
      'An ingestion pipeline that reads scanned statements and KYC packets, extracts structured fields and routes exceptions to a human review queue.',
    scope: ['Computer vision', 'Human-in-the-loop review', 'Batch pipeline'],
    stack: ['PaddleOCR', 'PyTorch', 'Celery', 'S3'],
    metrics: [
      { val: '96.4%', lbl: 'field-level accuracy' },
      { val: '11k/day', lbl: 'documents processed' },
    ],
  },
  {
    slug: 'public-office-presence',
    title: 'Digital presence for a public representative',
    category: 'marketing',
    industry: 'Public & Community',
    year: '2025',
    summary:
      'A bilingual site, grievance intake form and steady outreach calendar built around credibility and response time rather than viral stunts.',
    scope: ['Site build', 'Grievance workflow', 'Outreach calendar'],
    stack: ['React', 'WordPress', 'Meta', 'WhatsApp API'],
    metrics: [
      { val: '<6h', lbl: 'median response time' },
      { val: '3x', lbl: 'inbound constituent reach' },
    ],
  },
  {
    slug: 'field-service-mobile',
    title: 'Offline-first field service mobile app',
    category: 'mobile',
    industry: 'Field Services',
    year: '2026',
    summary:
      'Technicians capture jobs, photos and signatures with no signal; everything reconciles automatically the moment they are back on a network.',
    scope: ['Offline sync engine', 'Job scheduling', 'Photo evidence'],
    stack: ['React Native', 'SQLite', 'Node', 'AWS'],
    metrics: [
      { val: '100%', lbl: 'jobs logged offline' },
      { val: '-45%', lbl: 'paperwork per tech' },
    ],
  },
  {
    slug: 'b2b-saas-marketing-site',
    title: 'B2B SaaS marketing site & content engine',
    category: 'web',
    industry: 'B2B SaaS',
    year: '2026',
    summary:
      'A fast, editable marketing site with a programmatic comparison-page system and a technical content pipeline aimed at high-intent search.',
    scope: ['Design system', 'Programmatic SEO', 'Content ops'],
    stack: ['Next.js', 'Sanity', 'Vercel', 'Search Console'],
    metrics: [
      { val: '+215%', lbl: 'organic sessions' },
      { val: '98', lbl: 'Lighthouse performance' },
    ],
  },
];
