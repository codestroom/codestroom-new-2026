import Hero from '../components/Hero';
import FunkyMarquee from '../components/home/FunkyMarquee';
import FunkyBentoServices from '../components/home/FunkyBentoServices';
import FunkyProjectLab from '../components/home/FunkyProjectLab';
import FunkyVsBoring from '../components/home/FunkyVsBoring';
import FunkyShowcase from '../components/home/FunkyShowcase';
import FunkyTestimonials from '../components/home/FunkyTestimonials';
import FunkyFAQ from '../components/home/FunkyFAQ';
import FunkyCTA from '../components/home/FunkyCTA';
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
      {/* Hero Section preserved intact as requested */}
      <Hero />
      
      {/* Stylish & Funky Neo-Digital Sections */}
      <FunkyMarquee />
      <FunkyBentoServices />
      <FunkyProjectLab />
      <FunkyVsBoring />
      <FunkyShowcase />
      <FunkyTestimonials />
      <FunkyFAQ />
      <FunkyCTA />
    </>
  );
}
