import { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutMarquee from '../components/about/AboutMarquee';
import AboutStats from '../components/about/AboutStats';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutTeam from '../components/about/AboutTeam';
import AboutCulture from '../components/about/AboutCulture';
import AboutFlags from '../components/about/AboutFlags';
import CTA from '../components/CTA';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="about-page">
      <AboutHero />
      <AboutMarquee />
      <AboutStats />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCulture />
      <AboutFlags />
      <CTA />
    </div>
  );
}
