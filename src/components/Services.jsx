import Reveal from './Reveal';
import { AdsIcon, BrandIcon, CommerceIcon, LocalIcon, SocialIcon, WebIcon } from './ServiceIcons';

const SERVICES = [
  {
    title: 'Social Media Marketing',
    desc: 'Content, community management and ad campaigns across Instagram, Facebook and beyond — because nobody trusts a business with a blank grid and three followers.',
    tag: 'Instagram · Facebook · Content',
    icon: SocialIcon,
    tint: 'grad-1',
  },
  {
    title: 'Paid Advertising',
    desc: 'Google and Meta ad campaigns tuned to your real goal — reservations, orders, donations or sales. No mystery metrics, no "trust the process."',
    tag: 'Google Ads · Meta Ads',
    icon: AdsIcon,
    tint: 'grad-2',
  },
  {
    title: 'Local SEO & Google Business',
    desc: "Get found by the people searching nearby — the difference between showing up on Maps and being invisible. Invisible doesn't pay the bills.",
    tag: 'Maps · Local search',
    icon: LocalIcon,
    tint: 'grad-3',
  },
  {
    title: 'Website & Landing Pages',
    desc: 'Fast, mobile-first websites and landing pages so your business or organization looks credible the moment someone searches for you. First impressions happen in milliseconds — no pressure.',
    tag: 'Web design · Landing pages',
    icon: WebIcon,
    tint: 'grad-1',
  },
  {
    title: 'Branding & Content Creation',
    desc: 'Visual identity, photography and content that builds trust — for a restaurant menu, a place of worship or a public profile.',
    tag: 'Identity · Photography · Content',
    icon: BrandIcon,
    tint: 'grad-2',
  },
  {
    title: 'E-commerce Marketing',
    desc: 'Product listings, marketplace ads and conversion-focused funnels for online stores — built to turn window shoppers into actual shoppers.',
    tag: 'Shopify · Marketplaces · Funnels',
    icon: CommerceIcon,
    tint: 'grad-3',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">What we do</span>
          <h2>One team, every channel your business needs.</h2>
          <p>
            From a neighborhood restaurant to a growing e-commerce brand, we run the full
            digital marketing stack — so you don't have to piece together five different
            vendors.
          </p>
        </Reveal>
        <div className="service-grid">
          {SERVICES.map((service) => (
            <Reveal as="div" key={service.title} className="service-card">
              <div className={`service-icon ${service.tint}`}>
                <service.icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="tag">{service.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
