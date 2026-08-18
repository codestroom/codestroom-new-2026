// Case studies. Clients are described by sector rather than named, so these are
// safe to publish before sign-off — swap in real names/logos once approved.

export const CASE_STUDIES = [
  {
    slug: 'clinic-group-ai-intake',
    title: 'Cutting a clinic group’s missed calls to almost nothing',
    client: 'Multi-location clinic group',
    industry: 'Healthcare',
    service: 'AI & Automation',
    year: '2026',
    duration: '14 weeks',
    tint: 'grad-1',
    excerpt:
      'Front desks were losing a third of inbound calls at peak hours. We shipped an AI intake agent that answers, qualifies and books — and hands off cleanly when a human is needed.',
    headline: 'From 3 missed calls in 10 to an intake line that never rings out.',
    stats: [
      { val: '68%', lbl: 'calls resolved without staff' },
      { val: '3.1x', lbl: 'faster booking turnaround' },
      { val: '−31%', lbl: 'no-show rate' },
      { val: '14 wks', lbl: 'discovery to production' },
    ],
    challenge:
      'Six clinics shared one overloaded reception team. Between 9am and noon roughly a third of calls went unanswered, and every missed call was a booking that quietly went to a competitor. Staff also spent hours re-keying appointments between the phone, a shared inbox and the practice management system.',
    approach: [
      {
        title: 'Mapped the real intake conversation',
        detail:
          'We sat with reception for a week and transcribed 400+ calls to find the handful of intents that covered 80% of volume: new booking, reschedule, insurance question, prescription refill.',
      },
      {
        title: 'Built a scoped agent, not a chatbot',
        detail:
          'A LangGraph agent with hard tool boundaries — it can read availability and write a booking, and nothing else. Anything clinical or ambiguous is escalated to a human with the transcript attached.',
      },
      {
        title: 'Wired it into the systems of record',
        detail:
          'Direct integration with the practice management calendar and Twilio voice, so a booking made by the agent is indistinguishable from one made by staff.',
      },
      {
        title: 'Shipped behind a safety rail',
        detail:
          'Two weeks of shadow mode where the agent drafted actions that staff approved, so we could measure accuracy before letting it act on its own.',
      },
    ],
    solution:
      'A voice and web intake agent backed by a retrieval layer over clinic policies, live calendar tooling, and a supervised escalation path into the existing reception queue. Everything runs inside the client’s own cloud tenancy with call recordings and transcripts retained under their existing data policy.',
    results: [
      '68% of inbound calls now complete end-to-end without a staff member joining.',
      'Average time from first ring to a confirmed appointment dropped from 6m 40s to 2m 10s.',
      'Reminder flows built on the same integration cut no-shows by 31%.',
      'Reception headcount was redeployed to in-clinic patient support instead of phone duty.',
    ],
    stack: ['LangGraph', 'FastAPI', 'Twilio', 'Postgres', 'pgvector', 'Docker'],
    quote: {
      text: 'The part we underestimated was the handoff. When the agent does pass a call to us, we already know who it is and what they want. That alone changed our mornings.',
      author: 'Operations lead',
      role: 'Clinic group (name withheld)',
    },
  },
  {
    slug: 'd2c-checkout-rebuild',
    title: 'Rebuilding a D2C checkout that was quietly leaking revenue',
    client: 'D2C personal care brand',
    industry: 'Retail / D2C',
    service: 'E-Commerce & CRO',
    year: '2026',
    duration: '9 weeks',
    tint: 'grad-2',
    excerpt:
      'Traffic was growing, revenue was not. A headless replatform plus a disciplined experiment backlog moved checkout completion 31% without touching ad spend.',
    headline: 'Same traffic, same budget, 31% more completed checkouts.',
    stats: [
      { val: '+31%', lbl: 'checkout completion' },
      { val: '1.9s', lbl: 'mobile LCP (was 5.4s)' },
      { val: '+24%', lbl: 'revenue per session' },
      { val: '11', lbl: 'experiments shipped' },
    ],
    challenge:
      'The brand had doubled paid spend in a year and seen almost no revenue growth. The store was a heavily themed Shopify build carrying eleven apps; product pages took over five seconds to render on mid-range Android, and cart abandonment sat above the category norm.',
    approach: [
      {
        title: 'Measured before touching anything',
        detail:
          'Field data from real users, not lab scores. We instrumented the funnel step by step so we could tell a speed problem from a persuasion problem.',
      },
      {
        title: 'Replatformed to headless',
        detail:
          'A Hydrogen storefront replaced the theme, and six of the eleven apps were rebuilt as native components — most of the page weight was app scripts, not images.',
      },
      {
        title: 'Ran a ranked experiment backlog',
        detail:
          'Eleven tests across PDP, cart and checkout, prioritised by expected impact over effort. Three lost, two were flat, six won and shipped.',
      },
      {
        title: 'Rebuilt lifecycle email on real events',
        detail:
          'Abandonment and post-purchase flows now fire on server-side events rather than client pixels, which recovered a meaningful slice of previously invisible sessions.',
      },
    ],
    solution:
      'A headless Shopify Hydrogen storefront with a component library the brand’s own team can edit, server-side event tracking into GA4 and Klaviyo, and a documented CRO process the in-house marketer now runs without us.',
    results: [
      'Checkout completion up 31%; revenue per session up 24% on flat ad spend.',
      'Mobile LCP fell from 5.4s to 1.9s, and organic non-brand traffic rose as a side effect.',
      'Third-party script weight reduced by 62%.',
      'The client’s team has shipped four further experiments on their own since handover.',
    ],
    stack: ['Shopify Hydrogen', 'React', 'Klaviyo', 'GA4', 'Vercel'],
    quote: {
      text: 'We assumed we needed more traffic. It turned out we needed to stop losing the traffic we already paid for.',
      author: 'Founder',
      role: 'D2C personal care brand',
    },
  },
  {
    slug: 'restaurant-group-local-growth',
    title: 'Filling five restaurants using search, not discounts',
    client: 'Five-outlet restaurant group',
    industry: 'Food & Beverage',
    service: 'Local SEO & Paid Social',
    year: '2026',
    duration: 'Ongoing — 8 months',
    tint: 'grad-3',
    excerpt:
      'Aggregator commissions were eating the margin. We rebuilt local discovery and direct ordering so the cheapest customer — the one who searches and walks in — actually finds them.',
    headline: 'Direction requests up 142%, and the discount habit finally broken.',
    stats: [
      { val: '+142%', lbl: 'direction requests' },
      { val: '4.1x', lbl: 'blended ROAS' },
      { val: '+38%', lbl: 'direct online orders' },
      { val: '−18%', lbl: 'aggregator dependency' },
    ],
    challenge:
      'Five outlets, five inconsistent Google Business profiles, and a social feed that only ever posted discounts. Roughly 70% of online orders came through aggregators taking a heavy commission cut, and the group had no way to reach a customer twice.',
    approach: [
      {
        title: 'Fixed the fundamentals first',
        detail:
          'Every outlet’s hours, categories, service attributes, menu and photo set was corrected and put on a refresh cadence. Unglamorous, and the single highest-return work of the engagement.',
      },
      {
        title: 'Built a reels-first content calendar',
        detail:
          'Food and kitchen footage shot monthly at the outlets, edited into a steady weekly cadence — cravings, not coupons.',
      },
      {
        title: 'Ran radius-tight paid campaigns',
        detail:
          'Tight geo-fenced ads per outlet with offers that drive a first direct order rather than a blanket discount.',
      },
      {
        title: 'Made direct ordering the easy path',
        detail:
          'A commission-free ordering flow with saved details, so a repeat customer has no reason to open an aggregator app.',
      },
    ],
    solution:
      'An always-on local growth engine: maintained Google Business profiles, a monthly content shoot, per-outlet paid campaigns, and a direct ordering flow — all reported in one blended dashboard the owners actually read.',
    results: [
      'Direction requests across the five profiles up 142% year on year.',
      'Blended ROAS of 4.1x across paid social and search.',
      'Direct online orders up 38%, cutting aggregator share of orders by 18 points.',
      'Discount-led posts dropped from ~80% of the calendar to under 20%.',
    ],
    stack: ['Google Business', 'Meta Ads', 'Google Ads', 'PulseBoard', 'WhatsApp API'],
    quote: {
      text: 'For the first time we know which outlet a customer came from and what it cost to get them there.',
      author: 'Managing partner',
      role: 'Restaurant group',
    },
  },
  {
    slug: 'logistics-control-tower',
    title: 'Replacing a decade of spreadsheets with a live control tower',
    client: 'Regional freight operator',
    industry: 'Logistics',
    service: 'Custom Software & SaaS',
    year: '2025',
    duration: '20 weeks',
    tint: 'grad-1',
    excerpt:
      'Forty thousand shipments a month were being tracked in shared spreadsheets and phone calls. We built the multi-tenant portal that finally replaced both.',
    headline: '40,000 shipments a month, one screen, no spreadsheets.',
    stats: [
      { val: '40k+', lbl: 'shipments / month' },
      { val: '<200ms', lbl: 'live event latency' },
      { val: '−72%', lbl: '“where is my order?” calls' },
      { val: '99.95%', lbl: 'uptime since launch' },
    ],
    challenge:
      'Operations ran on a set of shared spreadsheets that only one person fully understood. Customers had no visibility, so every status question became a phone call, and exceptions were usually discovered a day late — after the customer had already noticed.',
    approach: [
      {
        title: 'Modelled the domain properly',
        detail:
          'Two weeks of workshops to get shipment, leg, exception and settlement modelled once, correctly — the spreadsheets had four contradictory definitions of "delivered".',
      },
      {
        title: 'Designed for the dispatcher, not the demo',
        detail:
          'A dense operations view built around keyboard use and bulk actions, because dispatchers live in it for eight hours a day.',
      },
      {
        title: 'Made exceptions loud',
        detail:
          'Rules-based alerting that surfaces a delayed or stuck leg the moment it deviates, rather than at the next manual review.',
      },
      {
        title: 'Migrated without a big-bang cutover',
        detail:
          'The portal ran alongside the spreadsheets for six weeks with a two-way sync, so no one had to bet the operation on a single switchover day.',
      },
    ],
    solution:
      'A multi-tenant control tower with live map tracking, rules-based exception alerting, customer-facing status pages, and a role model that lets each customer see exactly their own freight and nothing else.',
    results: [
      'Inbound status calls fell 72% within two months of launching customer status pages.',
      'Exceptions are now surfaced in under 200ms instead of at next-day review.',
      '99.95% uptime across the first year in production.',
      'The original spreadsheets were retired entirely eight weeks after launch.',
    ],
    stack: ['Next.js', 'Node', 'WebSockets', 'Mapbox', 'Redis', 'Postgres'],
    quote: {
      text: 'The migration is the part I tell other operators about. We never had a day where the business stopped to switch systems.',
      author: 'Head of operations',
      role: 'Regional freight operator',
    },
  },
];

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
