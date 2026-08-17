import Reach from '../components/Reach';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';

export default function GlobalReachPage() {
  return (
    <>
      <SEOHead
        title="Global Reach & International Engineering Delivery | Codestroom"
        description="Codestroom delivers world-class engineering, custom software, and digital marketing across India, Canada, USA, and Europe with 24/7 client collaboration."
        canonicalPath="/global-reach"
        keywords="global IT services, software development India Canada USA Europe, offshore engineering hub, international marketing agency"
      />
      <Reach />
      <CTA />
    </>
  );
}
