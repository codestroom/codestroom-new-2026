import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Highlights from '../components/Highlights';
import BlendLab from '../components/BlendLab';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';

const homeWebSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://codestroom.com/#website',
  url: 'https://codestroom.com',
  name: 'Codestroom',
  description: 'AI Services, IT Solutions, Full-Stack Web Development, Mobile Apps & Performance Marketing',
  publisher: {
    '@id': 'https://codestroom.com/#organization'
  }
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Codestroom — AI Services, IT Solutions, Web & Mobile App Development"
        description="Codestroom delivers enterprise AI systems, full-stack web development (React, Angular, Next.js, WordPress), mobile apps (Flutter, React Native, iOS, Android), custom software, backend cloud APIs (FastAPI, Node, Spring Boot), and performance digital marketing."
        canonicalPath="/"
        keywords="AI services, web development React, Angular, WordPress, mobile app Flutter, React Native, custom software, backend FastAPI, Node.js, Spring Boot, ecommerce, digital marketing, IT company"
        schemas={[homeWebSiteSchema]}
      />
      <Hero />
      <Marquee />
      <Highlights />
      <BlendLab />
      <CTA />
    </>
  );
}
