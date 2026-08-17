import Work from '../components/Work';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';

export default function WorkPage() {
  return (
    <>
      <SEOHead
        title="Client Portfolio & Case Studies | Codestroom"
        description="Explore our proven track record: real client case studies and measurable outcomes across AI systems, SaaS portals, mobile applications, and high-ROAS marketing."
        canonicalPath="/work"
        keywords="case studies, software portfolio, client results, AI projects, web development work, mobile app portfolio"
      />
      <Work />
      <CTA />
    </>
  );
}
